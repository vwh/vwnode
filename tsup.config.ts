import { defineConfig } from "tsup";

export default defineConfig({
	format: ["cjs", "esm"],
	entry: ["./src/index.ts"],
	outDir: "./dist",
	dts: true,
	shims: true,
	skipNodeModulesBundle: true,
	clean: true,
	minify: true,
	sourcemap: true,
});
