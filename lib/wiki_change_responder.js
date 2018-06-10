// AWS Lambda function to trigger a CI run on a Travis project on a commit to a branch of another GitHub repository
const http = require('https');
const crypto = require('crypto');

// TODO: read these from process.env
const sourceRepo = '';
const sourceRepoBranch = '';
const travisAPIKey = '';
const travisProject = '';
const travisProjectBranch = '';
const webhookSecret = '';

const travisStartCIRequestParams = {
  'method': 'POST',
  'host': 'api.travis-ci.org',
  'path': `/repo/${travisProject}/requests`,
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': `token ${travisAPIKey}`,
    'Travis-API-Version': '3'
  }
};

const triggerTravisCI = function () {
  const request = http.request(travisStartCIRequestParams);
  request.write(JSON.stringify({ request: { branch: travisProjectBranch } }));
  request.end();
};

const validateWebhookPayload = function (signature, payload, secret) {
  const computedSignature = `sha1=${crypto.createHmac('sha1', secret).update(payload).digest('hex')}`;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(computedSignature));
};

exports.handler = function index(event, context, callback) {
  const isValidAction = event.headers['X-GitHub-Event'] === 'push';

  if (isValidAction) {
    const data = JSON.parse(event.body);
    const isValidRepo = data.ref === `refs/heads/${sourceRepoBranch}` && data.repository.full_name === sourceRepo;
    const isValidPayload = validateWebhookPayload(event.headers['X-Hub-Signature'], event.body, webhookSecret);

    if (isValidRepo && isValidPayload) {
      console.log('Triggering CI');
      triggerTravisCI();
    } else {
      console.log('Skipping CI');
    }
  }

  callback(null, { statusCode: 200 });
};
