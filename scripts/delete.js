const { env, spawn } = require("./util");

spawn("aws", [
	"cloudformation", "delete-stack",
	"--stack-name", env.cloudformation_stack_name,
]);
