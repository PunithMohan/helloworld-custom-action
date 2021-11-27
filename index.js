// console.log('Hello, world!');
const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('node-fetch');
const Octokit = require('@octokit/core');
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
  
  async function postData(){
  await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
  owner: 'PunithMohan',
  repo: 'helloworld-action',
  pull_number: 1
})
};

var  abc=postData();

  console.log(${abc});
 const url = "https://api.github.com/repos/PunithMohan/helloworld-action/pulls/1/commits";
 console.log(`url ${url}`);
 const options = {
  headers: {
    Authorization: "token ${github_token}"
  }
};


fetch(url, options)
  .then( res => res.json() )
  .then( data => console.log(data) );
  
  async function postData(url = '' , data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: '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', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
  postData('https://api.github.com/repos/PunithMohan/helloworld-action/pulls/1/commits', {})
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
