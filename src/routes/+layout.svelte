<script lang="ts">
	import '../app.css';
	import Alert from '$lib/components/Alert.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { setFavoriteContext } from '$lib/context/favorites.svelte';

	setFavoriteContext();
	let { children } = $props();
</script>

<div class=" main">
	<div class=" sticky top-0 z-10">
		<Alert />
		<Nav />
	</div>
	{@render children()}
	<Footer />
</div>
