<script>
	import Heard from 'lucide-svelte/icons/heart';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	import { getFavoriteContext } from '$lib/context/favorites.svelte';

	let datos = getFavoriteContext();
	let buttonState = $state(false);
	let imageError = $state(false);
	let {
		imagen = undefined,
		nuevo = undefined,
		agotado = undefined,
		descuento = undefined,
		precio = undefined,
		nombre = undefined,
		antes = undefined,
		porcentaje = undefined,
		collectionId = undefined,
		productId = undefined,
		productField = undefined,
		collectionName
	} = $props();

	const handleError = () => {
		imageError = true;
	};
	const addItem = () => {
		buttonState = !buttonState;
		datos.addItem({ id: productId, name: nombre, price: precio, liked: true });
		console.log(datos.cartItems);
	};
</script>

<div class="z-0 w-fit cursor-pointer hover:ring-1 hover:ring-black">
	<div class="relative">
		{#if !imageError}
			{#if productField && productId}
				<img
					src={`${PUBLIC_POCKETBASE_URL}/api/files/${collectionName}/${productId}/${productField}`}
					alt="Polo"
					class="h-auto w-48 md:w-80"
					onerror={handleError}
				/>
			{:else}
				<img
					src={imagen}
					alt="Polo"
					onerror={handleError}
					class="h-auto max-h-[480px] w-48 md:w-80"
				/>
			{/if}
		{:else}
			<div class="  min-h-[480px] w-48 content-center text-center md:w-80">
				<p class=" text-xl">SIN IMAGEN</p>
			</div>
		{/if}

		<div class="absolute right-5 top-5">
			<button onclick={addItem}>
				<Heard class={buttonState === true ? 'fill-secondary  ' : 'hover:fill-secondary '} />
			</button>
		</div>

		<div class="absolute left-5 top-5 flex-none">
			{#if nuevo}
				<p class="w-fit bg-primary px-2 py-1 text-xs font-medium uppercase text-secondary">NUEVO</p>
			{/if}
			{#if agotado}
				<p class="w-fit bg-primary px-2 py-1 text-xs font-medium uppercase text-secondary">
					AGOTADO
				</p>
			{/if}
			{#if descuento}
				<p class="w-fit bg-primary px-2 py-1 text-xs font-medium uppercase text-secondary">
					DESCUENTO
				</p>
				<p class="my-1 w-fit bg-secondary px-2 py-1 text-xs font-medium text-white">
					-{porcentaje}%
				</p>
			{/if}
		</div>
	</div>

	<div class="px-3 py-3">
		<h1 class="text-sm font-medium md:text-base">{nombre}</h1>
		<div class="flex">
			<h2 class="font-medium">S/ {precio}</h2>
			{#if descuento}
				<h2 class="mx-3 font-medium text-secondary/50 line-through">S/ {antes}</h2>
			{/if}
		</div>
	</div>
</div>
