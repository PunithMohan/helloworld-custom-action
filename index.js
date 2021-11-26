// console.log('Hello, world!');
const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const commitCount = core.getInput('commit-count');
  console.log(`Commit Count ${commitCount}`);
  var CommitsCounts = commitCount;
  //core.setOutput("CommitsCounts", CommitsCounts);
  //console.log(`Commits Count ${CommitsCounts}`)
  const labelName = core.getInput('LabelName');
  var labelname = labelName;
  //core.setOutput("labelname", labelname);
  console.log(`Commit Count ${labelname}`);
  var comments = core.getInput('Comments');
  //core.setOutput("comments", comments);
  console.log(`comments ${comments}`);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
