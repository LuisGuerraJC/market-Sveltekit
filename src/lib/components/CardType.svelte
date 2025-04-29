<script>
	import ArrowR from 'lucide-svelte/icons/circle-arrow-right';

	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	let { nombre, collectionId, productId, productField } = $props();
</script>

<div class="w-full cursor-pointer md:w-fit">
	<div class="relative">
		<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
		<img
			src={`${PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${productId}/${productField}`}
			alt="Polo"
			class="h-[20rem] w-screen bg-cover object-cover md:h-[48rem] md:w-[470px]"
		/>
		<div class="absolute bottom-5 left-5">
			<div class="px-3 py-3">
				<h1
					class="text-xl font-medium capitalize text-white md:text-2xl
"
				>
					{nombre}
				</h1>
				<p
					class="mt-1 w-fit bg-primary px-2 py-1 text-xs font-medium uppercase text-secondary md:text-sm"
				>
					COLECCIONES
				</p>
			</div>
		</div>
		<div class="absolute bottom-5 right-5">
			<div class="px-3 py-3">
				<button
					><ArrowR class="stroke-white hover:stroke-primary" strokeWidth={1} size="50px" /></button
				>
			</div>
		</div>
	</div>
</div>
