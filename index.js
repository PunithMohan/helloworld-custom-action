// console.log('Hello, world!');
const core = require('@actions/core');
const github = require('@actions/github');
import fetch from 'node-fetch';

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
  
 const url = "https://api.github.com/repos/PunithMohan/helloworld-action/pulls/1/commits";
 console.log(`url ${url}`);
 const options = {
  headers: {
    Authorization: "Bearer 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"
  }
};

async function postData(url = '' , data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
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
