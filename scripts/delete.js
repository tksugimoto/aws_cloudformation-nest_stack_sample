const { env, exec } = require("./util");

const commands = [
	"aws", "cloudformation", "delete-stack",
	"--stack-name", env.cloudformation_stack_name,
];

const command = commands.join(" ");

exec(command);
