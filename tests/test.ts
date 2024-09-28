import { describe, it } from "node:test";
import assert from "node:assert";

import { greet } from "../src/index";

describe("Tests", () => {
	it("Greet", () => {
		assert.strictEqual(greet("World"), "Hello, World!");
	});
});
