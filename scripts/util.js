const dotenv = require("dotenv");
const { spawn: childProcessSpawn } = require("child_process");

const { parsed: env } = dotenv.load({
	path: ".env",
});

function spawn(command, args = []) {
	const childProcess = childProcessSpawn(command, args);

	childProcess.stdout.setEncoding('utf8');
	childProcess.stdout.on('data', (data) => {
		process.stdout.write(data);
	});

	childProcess.stderr.setEncoding('utf8');
	childProcess.stderr.on('data', (data) => {
		process.stderr.write(data);
	});

	childProcess.on('close', (code) => {
		console.log(`\nComplete! (code: ${code})`);
	});
}


module.exports.env = env;
module.exports.spawn = spawn;
