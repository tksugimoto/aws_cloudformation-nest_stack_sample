const dotenv = require("dotenv");
const { spawn: childProcessSpawn } = require("child_process");

const { parsed: env } = dotenv.load({
	path: ".env",
});

function spawn(command, args = []) {
	const childProcess = childProcessSpawn(command, args);

	childProcess.stdout.pipe(process.stdout);
	childProcess.stderr.pipe(process.stderr);

	childProcess.on('close', (code) => {
		console.log(`\nComplete! (code: ${code})`);
	});
}


module.exports.env = env;
module.exports.spawn = spawn;
