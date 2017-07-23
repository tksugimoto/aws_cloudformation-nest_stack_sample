const dotenv = require("dotenv");
const child_process = require("child_process");

const { parsed: env } = dotenv.load({
	path: ".env",
});

function exec(command) {
	child_process.exec(command, (error, stdout, stderr) => {
		console.log("stdout: " + stdout);
		console.log("stderr: " + stderr);
		if (error !== null) {
			console.log("exec error: " + error);
		}
	});
}


module.exports.env = env;
module.exports.exec = exec;
