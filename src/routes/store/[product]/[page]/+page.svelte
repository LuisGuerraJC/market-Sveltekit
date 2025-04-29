<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Store from '$lib/components/Store.svelte';
	import type { cardProps } from '$lib/types/CardProps';

	let { data } = $props();
	let productParams = $derived(data.basePath);
</script>

{#snippet component(d: cardProps)}
	<Card
		collectionId={d.collectionId}
		collectionName={d.collectionName}
		productId={d.id}
		productField={d.field}
		nombre={d.name}
		precio={d.price_current}
		porcentaje={d.discount_percentage}
		antes={d.price_previous}
		nuevo={d.is_new}
		agotado={d.is_sold_out}
		descuento={d.is_discounted}
	/>
{/snippet}
{#snippet title()}
	{data.basePath}
{/snippet}
{#key productParams}
	<Store
		totalPages={data.totalPages}
		items={data.items}
		basePath={data.basePath}
		{title}
		{component}
	/>
{/key}
