import os from "node:os";

export function greet(name: string): string {
	return `Hello, ${name}!`;
}

console.log(`${greet(os.hostname())} 👋. Looks like you're on ${os.type()}.`);
