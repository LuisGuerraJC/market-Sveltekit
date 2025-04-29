<script>
	import Heard from 'lucide-svelte/icons/heart';

	let { nuevo, agotado, descuento, precio, nombre, antes, porcentaje, imagen } = $props();
</script>

<div class="w-fit cursor-pointer hover:ring-1 hover:ring-black">
	<div class="relative">
		<img src={imagen} alt="Polo" class="h-auto w-48 md:w-80" />
		<div class="absolute right-5 top-5">
			<Heard class="hover:fill-secondary " />
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
