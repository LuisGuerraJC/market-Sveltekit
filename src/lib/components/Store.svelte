<script lang="ts">
	import Filter from 'lucide-svelte/icons/sliders-horizontal';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	let { totalPages, basePath, items, title, component } = $props();
	let showFilter = $state(false);

	let nuevo = $state(false);
	let oferta = $state(false);

	let queryString = $derived.by(() => {
		let queryString = new URLSearchParams();
		if (nuevo) queryString.set('nuevo', String(nuevo));
		if (oferta) queryString.set('oferta', String(oferta));
		return '?' + queryString.toString();
	});

	const redirectQuery = () => {
		goto(`/store/${basePath}/1${queryString.toString()}`, {
			replaceState: true,
			invalidateAll: true
		});
	};
</script>

<section class="container mx-auto py-10">
	<div class="flex justify-between px-3">
		<div>
			<!-- <p class="py-3">Inicio > Poleras > Hombre > Urbano</p> -->
			<h1 class="text-2xl font-bold md:text-3xl">{@render title()}</h1>
		</div>
		<div class="flex items-end">
			<button
				class="inline-flex px-3 py-3 font-semibold ring-1 ring-black"
				onclick={() => {
					showFilter = !showFilter;
				}}
			>
				<h1 class="hidden md:flex">FILTRAR Y ORDENAR</h1>
				<Filter class="mx-3" />
			</button>
		</div>
		{#if showFilter}
			<form class=" flex flex-col border-solid border-black border-2">
				<label>
					<input
						type="checkbox"
						placeholder="nuevo"
						bind:checked={nuevo}
						onchange={redirectQuery}
					/>
					Nuevo
				</label>
				<label>
					<input
						type="checkbox"
						placeholder="oferta"
						bind:checked={oferta}
						onchange={redirectQuery}
					/>
					Oferta
				</label>
			</form>
		{/if}
	</div>
	<div class="my-10 w-full ring-[1px] ring-black/5"></div>
	<div class="flex justify-center py-10">
		<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
			{#each items as product}
				{@render component(product)}
			{/each}
		</div>
	</div>

	<div class=" space-x-2 text-center font-black">
		{#each Array(totalPages) as _, index}
			<a
				href="/store/{basePath}/{index + 1}{queryString}"
				class={[
					{ ' text-5xl text-primary': page.url.pathname.endsWith(String(index + 1)) },
					'text-4xl'
				]}
			>
				{index + 1}
			</a>
		{/each}
	</div>
</section>
