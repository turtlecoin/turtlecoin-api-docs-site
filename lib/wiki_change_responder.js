// AWS Lambda function to trigger a Travis CI run on a commit to `turtlecoin-wiki/master`
const http = require('https');
const crypto = require('crypto');

// TODO: read these from process.env
const sourceRepo = '';
const travisAPIKey = '';
const travisProject = '';
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
  request.write(JSON.stringify({ request: { branch: 'master' } }));
  request.end();
};

const validateWebhookPayload = function (signature, payload, secret) {
  const computedSignature = `sha1=${crypto.createHmac('sha1', secret).update(payload).digest('hex')}`;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(computedSignature));
};

exports.handler = function index(event, context, callback) {
  const data = JSON.parse(event.body);

  const isValidRepo = data.ref === 'refs/heads/master' && data.repository.full_name === sourceRepo;
  const isValidAction = event.headers['X-GitHub-Event'] === 'push';
  const isValidPayload = validateWebhookPayload(event.headers['X-Hub-Signature'], event.body, webhookSecret);

  if (isValidRepo && isValidAction && isValidPayload) {
    triggerTravisCI();
  }

  callback(null, { statusCode: 200 });
};
