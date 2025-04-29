<script lang="ts">
	import House from 'lucide-svelte/icons/house';
	import Package from 'lucide-svelte/icons/package-check';
	import Price from 'lucide-svelte/icons/badge-percent';
	import Time from 'lucide-svelte/icons/history';
	import ArrowR from 'lucide-svelte/icons/circle-arrow-right';
	import ArrowL from 'lucide-svelte/icons/circle-arrow-left';
	import Card from '$lib/components/Card.svelte';
	import CardOff from '$lib/components/CardOff.svelte';
	import CardType from '$lib/components/CardType.svelte';
	import type { PageData } from './$types';
	import { getFavoriteContext } from '$lib/context/favorites.svelte';
	let { data }: { data: PageData } = $props();
	let datos = getFavoriteContext();
</script>

<div>
	{datos.cartItems}
</div>
<section>
	<img class="md:h-[ min-h-[30rem] w-screen object-cover" src="/banner.jpg" alt="" />
</section>

<section class="container mx-auto hidden justify-center md:flex">
	<div class="inline-flex gap-4 py-8">
		<div class="inline-flex items-center">
			<House strokeWidth={1} size="50px" />
			<p class="px-3 text-sm">Envios hasta tu casa</p>
		</div>
		<div class="inline-flex items-center">
			<Package strokeWidth={1} size="50px" />
			<p class="px-3 text-sm">Envío gratis en compras mayores</p>
		</div>
		<div class="inline-flex items-center">
			<Price strokeWidth={1} size="50px" />
			<p class="px-3 text-sm">Precios bajos garantizados</p>
		</div>
		<div class="inline-flex items-center">
			<Time strokeWidth={1} size="50px" />
			<p class="px-3 text-sm">Disponible para ti 24/7</p>
		</div>
	</div>
</section>

<section class="container mx-auto py-10">
	<div class="flex justify-center pb-10">
		<h1 class="text-center text-3xl font-bold italic md:text-4xl">LO MAS VENDIDO</h1>
	</div>
	<div class="flex justify-center">
		<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
			{#each data.products as product}
				{#if product.is_sold_out}
					<!-- <Card
						collectionId={product.collectionId}
						productId={product.id}
						productField={product.field}
						nombre={product.name}
						precio={product.price_current}
						porcentaje={product.discount_percentage}
						antes={product.price_previous}
						nuevo={product.is_new}
						agotado={product.is_sold_out}
						descuento={product.is_discounted}
					/> -->
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
				{/if}
			{/each}
		</div>
	</div>
</section>

<section class="container mx-auto py-10">
	<div class="flex justify-center">
		<div class="flex flex-col gap-2 md:flex-row">
			{#each data.productType as type}
				<CardType
					nombre={type.type}
					collectionId={type.collectionId}
					productId={type.id}
					productField={type.image}
				/>
			{/each}
		</div>
	</div>
</section>

<section class="container mx-auto py-10">
	<div class="flex justify-center pb-10">
		<h1 class="text-center text-3xl font-bold italic md:text-4xl">NUEVOS DROPS</h1>
	</div>
	<div class="flex justify-center">
		<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
			{#each data.products as product}
				{#if product.is_new}
					<!-- <Card
						collectionId={product.collectionId}
						productId={product.id}
						productField={product.field}
						nombre={product.name}
						precio={product.price_current}
						porcentaje={product.discount_percentage}
						antes={product.price_previous}
						nuevo={product.is_new}
						agotado={product.is_sold_out}
						descuento={product.is_discounted}
					/> -->
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
				{/if}
			{/each}
		</div>
	</div>
</section>
<section class="my-10 bg-secondary">
	<div class="container mx-auto flex justify-center">
		<div class=" flex flex-wrap items-center pt-10 align-middle lg:pt-0">
			<div class="text-center text-white lg:mr-10">
				<h1>GRAN DESCUENTO</h1>
				<h1 class="text-6xl font-bold italic md:text-7xl lg:text-8xl">
					DEL 45<b class="mx-3 font-bold italic text-primary">%</b>
				</h1>
				<h1>Rebaja del 45% en todo, usando el codigo <b>PISTOLA01</b> al pagar</h1>
				<h1>OFERTA FINALIZA EN <b>2D 23H 32M</b></h1>
				<div class="mt-3">
					<button><ArrowL class="hover:stroke-primary" strokeWidth={1} size="60px" /></button>
					<button><ArrowR class="hover:stroke-primary" strokeWidth={1} size="60px" /></button>
				</div>
			</div>
			<div class="flex justify-center gap-3 pt-5 md:pt-0">
				{#each data.products as product}
					{#if product.is_discounted && product.discount_percentage > 40}
						<CardOff
							collectionId={product.collectionId}
							productId={product.id}
							productField={product.field[0]}
							porcentaje={product.discount_percentage}
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>
<section class="container mx-auto py-10">
	<div class="flex justify-center pb-10">
		<h1 class="text-center text-3xl font-bold italic md:text-4xl">APROVECHA LAS PROMOCIONES</h1>
	</div>
	<div class="flex justify-center">
		<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
			{#each data.products as product}
				{#if product.is_discounted && product.discount_percentage < 40}
					<!-- <Card
						collectionId={product.collectionId}
						productId={product.id}
						productField={product.field[0]}
						nombre={product.name}
						precio={product.price_current}
						porcentaje={product.discount_percentage}
						antes={product.price_previous}
						nuevo={product.is_new}
						agotado={product.is_sold_out}
						descuento={product.is_discounted}
					/> -->
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
				{/if}
			{/each}
		</div>
	</div>
</section>
<section class="bg-secondary py-10">
	<div class="text-center text-white">
		<h1>POR TU PRIMERA COMPRA</h1>
		<h1>Te regalamos , usando el codigo <b class="text-primary">PISTOLA01</b> al pagar</h1>

		<h1 class="text-8xl font-bold italic">
			<b class="mx-3 text-3xl font-extrabold italic text-primary md:text-4xl">S/</b>30
		</h1>
	</div>
</section>
