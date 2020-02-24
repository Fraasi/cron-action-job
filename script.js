const core = require('@actions/core');
const github = require('@actions/github');

try {
  const time = (new Date()).toUTCString();
  console.log(`The script.js ran at ${time}`);
  // Get the JSON webhook payload for the event that triggered the workflow
  console.log(`The cron syntax used was '${github.context.payload.schedule}'`);
} catch (error) {
  core.setFailed(error.message);
}
