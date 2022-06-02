/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	interface Platform {
		env: {
			SDOS: { binding: "SDOS", id: "bda7e46611f84c6f8372502a588c3abe" }
		};
		context: {
			waitUntil(promise: Promise<any>): void;
		}
	}

	// interface Session {}
	// interface Stuff {}
}
