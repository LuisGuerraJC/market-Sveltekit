<!-- <script>
	import Divider from '$lib/components/Divider.svelte';
	import Close from 'lucide-svelte/icons/x';

	let box = $state(true);
	function onChange() {
		box = !box;
	}
</script>

{#if box}
	<div
		class="absolute right-0 top-0 flex h-screen w-1/3 flex-col justify-between bg-white drop-shadow-md"
	>
		<div>
			<div class="bg-primary p-5">
				<h1>New customers save 10% with code <strong>WELCOME10</strong></h1>
			</div>
			<div class="flex justify-between p-5">
				<h1 class="text-xl font-semibold">TU CARRITO</h1>
				<button onclick={onChange}><Close strokeWidth={1.5} /></button>
			</div>
			<Divider />
		</div>
		<div class="flex flex-row justify-between p-5">
			<div class="flex flex-row">
				<img
					src="https://hmperu.vtexassets.com/arquivos/ids/4863243/Casaca-polera-con-cierre-Loose-Fit---Negro---H-M-PE.jpg?v=638685571277200000"
					alt="Polito"
					class="h-[140px] object-cover"
				/>
				<div class="px-3">
					<h1 class="text-base">Izzy Long Sleeve Top</h1>
					<p class="text-sm text-black/50">Oversize Fit</p>
				</div>
			</div>
			<div>
				<h1>S/80</h1>
			</div>
		</div>
		<div>
			<Divider />
			<div class="p-5">
				<div class="flex flex-row justify-between">
					<div>
						<h1 class="text-xl font-semibold">Total Estimado</h1>
					</div>
					<div>
						<h1 class="text-2xl font-bold">S/ 200 PEN</h1>
					</div>
				</div>
				<p class="font-light">Tax included. Shipping and discounts calculated at checkout.</p>
				<div class="flex flex-row py-8">
					<button class="h-14 px-6">Ver Carrito</button>
					<button
						class=" h-14 w-full bg-secondary text-center text-white ring-1 ring-secondary hover:bg-black"
						>Comprar</button
					>
				</div>
			</div>
		</div>
	</div>
{/if} -->
<script>
</script>

<div class=" mx-8 my-[500px]">
	<button class=" border-2 border-solid border-black text-5xl"> pedir token</button>
</div>
