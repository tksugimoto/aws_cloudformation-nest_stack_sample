const { env, spawn } = require("./util");

spawn("aws", [
	"cloudformation", "deploy",
	"--template-file", "./packaged.yaml",
	"--stack-name", env.cloudformation_stack_name,
	"--capabilities", "CAPABILITY_IAM",
	"--parameter-overrides",
	`NamePrefix=${env.name_prefix}`, "Key2=Value2",
]);
