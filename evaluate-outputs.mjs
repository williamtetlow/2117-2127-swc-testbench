import { spawn } from "child_process";
import { readdir } from "fs/promises";
import { join } from "path";

const outputs = await readdir("./out");

const results = {};

for (const output of outputs) {
  const pathTo2117 = join("./out", output, "2117.js");
  const pathTo2127 = join("./out", output, "2127.js");

  const output2117 = await runCmd(`node ${pathTo2117}`);
  const output2127 = await runCmd(`node ${pathTo2127}`);

  results[output] = { 2117: output2117, 2127: output2127 };
}

console.table(results);

async function runCmd(cmd, args = []) {
  const child = spawn(
    cmd,
    args.filter((arg) => arg != null),
    {
      shell: true,
      stdio: ["inherit", "pipe", "inherit"],
    }
  );

  const stdoutChunks = [];

  if (child.stdout) {
    for await (const chunk of child.stdout) {
      stdoutChunks.push(chunk);
    }
  }

  const exitCode = await new Promise((resolve, reject) => {
    child.on("exit", (code) => {
      child.on("close", () => {
        if (code > 0) return reject(code);

        const stdOutStr = stdoutChunks.length
          ? Buffer.concat(stdoutChunks).toString("utf-8").replace(/\n/g, "")
          : "";

        return resolve(stdOutStr);
      });
    });
  });

  return exitCode;
}
