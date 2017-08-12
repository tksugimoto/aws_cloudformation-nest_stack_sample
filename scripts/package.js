const { env, spawn } = require("./util");

spawn("aws", [
	"cloudformation", "package",
	"--template-file", "./cloudformation/main.yaml",
	"--output-template-file", "./packaged.yaml",
	"--s3-bucket", env.s3_bucket_name,
]);
