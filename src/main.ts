import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

// eslint-disable-next-line import/no-default-export
export default app;
