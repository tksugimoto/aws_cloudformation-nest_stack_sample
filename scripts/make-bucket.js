const { env, exec } = require("./util");

const commands = [
	"aws", "s3",
	"mb", `s3://${env.s3_bucket_name}`,
];

const command = commands.join(" ");

exec(command);
