/**
 * Generates a JSON data file for Harp that contains the issues resolved for a
 * given milestone. Required variables are the milestone number and output dir.
 */
var GitHub = require('github');
var FileSystem = require('fs');


var milestone  = 2;     // Use the milestone number from github.com/dynjs/dynjs/issues/milestones
var outputDir  = 'v0_2_2'; // The version number. Assumes a prefix of public/releases

var baseDir    = '_harp/public/releases';
var releaseDir = [baseDir, outputDir].join('/');
var dataFile   = [baseDir, outputDir, '_data.json'].join('/');

checkDir();

var github = new GitHub({
  version: "3.0.0",
    debug: true
});

github.issues.repoIssues({
  user: "dynjs",
  repo: "dynjs",
  milestone: milestone,
  state: "closed"
}, function(err, data) {
  if (err) {
    console.log("There was an error fetching the issues");
  } else {
    writeData(data);
  }
});

function writeData(data) {
  FileSystem.writeFile(dataFile, JSON.stringify({issues: data}));
  console.log(data);
}

function checkDir() {
  FileSystem.exists(releaseDir, function(exists) {
    if (!exists) {
      console.log(releaseDir + " does not exist. Creating it.");
      FileSystem.mkdirSync(releaseDir);
    }
  });
}
