const { env, spawn } = require("./util");

spawn("aws", [
	"s3",
	"mb", `s3://${env.s3_bucket_name}`,
]);
