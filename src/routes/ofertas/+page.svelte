<script lang="ts">
	import Filter from 'lucide-svelte/icons/sliders-horizontal';
	import Card from '$lib/components/Card.svelte';
	import type { PageData } from '../$types';

	let { data }: { data: PageData } = $props();
</script>

<section class="container mx-auto py-10">
	<div class="flex justify-between px-3">
		<div>
			<!-- <p class="py-3">Inicio > Poleras > Hombre > Urbano</p> -->
			<h1 class="text-2xl font-bold md:text-3xl">POLOS OVERSIZE</h1>
		</div>
		<div class="flex items-end">
			<button class="inline-flex px-3 py-3 font-semibold ring-1 ring-black">
				<h1 class="hidden md:flex">FILTRAR Y ORDENAR</h1>
				<Filter class="mx-3" />
			</button>
		</div>
	</div>
	<div class="my-10 w-full ring-[1px] ring-black/5"></div>
	<div class="flex justify-center py-10">
		<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
			{#each data.products as product}
				<!-- {#if product.is_sold_out} -->
				<Card
					collectionId={product.collectionId}
					collectionName={product.collectionName}
					productId={product.id}
					productField={product.field}
					nombre={product.name}
					precio={product.price_current}
					porcentaje={product.discount_percentage}
					antes={product.price_previous}
					nuevo={product.is_new}
					agotado={product.is_sold_out}
					descuento={product.is_discounted}
				/>
				<!-- {/if} -->
			{/each}
		</div>
	</div>
</section>
