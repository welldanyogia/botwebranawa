const { spawn } = require('child_process');
const expect = require('expect-puppeteer');

const run = spawn('node', ['index.js']);

run.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

run.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

run.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

run.stdin.write('62277623673627\n');
run.stdin.end();
