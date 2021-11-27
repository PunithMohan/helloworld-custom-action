// console.log('Hello, world!');
const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');
const  octokit  = require('@octokit/core');
//import fetch from 'node-fetch';
//var token = "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"

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
  var github_token = core.getInput('GITHUB_TOKEN');
  console.log(`github_token ${github_token}`);
  var pr_number = core.getInput('PR_Number');
  console.log(`pr_number ${pr_number}`);
  
  const url = "https://api.github.com/repos/PunithMohan/helloworld-action/pulls/1/commits";
console.log(`url ${url}`);
const options = {
  headers: {
    Authorization: "token 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"
  }
};


fetch(url, options)
  .then(res => res.json())
  .then(data => console.log(data));

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
