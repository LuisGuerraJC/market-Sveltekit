<script>
	import Heard from 'lucide-svelte/icons/heart';

	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	let buttonState = $state(false);
	let { porcentaje, collectionId, productId, productField } = $props();
</script>

<div class="w-fit cursor-pointer hover:ring-1 hover:ring-black">
	<div class="relative">
		<img
			src={`${PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${productId}/${productField}`}
			alt="Polo"
			class="max-w-48 md:w-80 md:max-w-max"
		/>
		<div class="absolute right-5 top-5">
			<button onclick={() => (buttonState = !buttonState)}
				><Heard
					class={buttonState == true ? 'fill-secondary  ' : 'hover:fill-secondary '}
				/></button
			>
		</div>
		<div class="absolute left-5 top-5 flex-none">
			<p class="w-fit bg-primary px-2 py-1 text-xs font-medium uppercase text-secondary">
				DESCUENTO
			</p>
			<p class="my-1 w-fit bg-secondary px-2 py-1 text-xs font-medium text-white">-{porcentaje}%</p>
		</div>
	</div>
</div>
