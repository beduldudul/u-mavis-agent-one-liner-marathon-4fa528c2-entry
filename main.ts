import { writeFileSync, mkdirSync } from "node:fs";

// One-line comedy joke, any subject: a grandmother who treats her inbox
// like paper mail — and the filing cabinet where her spam goes to feel important.
const line =
  "My grandmother still prints her emails, which means somewhere there's a filing cabinet full of spam she thinks is very important correspondence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
