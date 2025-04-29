<script lang="ts">
	import { counter } from '$lib/stores/state';
	import Search from 'lucide-svelte/icons/search';
	import User from 'lucide-svelte/icons/user';
	import { slide } from 'svelte/transition';
	import Bag from 'lucide-svelte/icons/shopping-cart';
	import Menu from 'lucide-svelte/icons/menu';
	import Divider from '$lib/components/Divider.svelte';
	import Close from 'lucide-svelte/icons/x';
	import { page } from '$app/state';
	let box = $state(false);
	function onChange() {
		box = !box;
	}

	let boxTwo = $state(false);
	function onChangeTwo() {
		boxTwo = !boxTwo;
	}
</script>

<header class="  w-full bg-secondary">
	<nav class="container mx-auto grid grid-cols-2 px-4 py-2 lg:grid-cols-3">
		<div class="hidden items-center lg:visible lg:flex">
			<ul class=" gap-4 text-sm font-medium text-white lg:inline-flex">
				<li>
					<a
						href="/store/polos"
						class={{ 'text-primary/50': page.url.pathname.split('/')[2] === 'polos' }}>POLOS</a
					>
				</li>
				<li>
					<a
						href="/store/poleras"
						class={{ 'text-primary/50': page.url.pathname.split('/')[2] === 'poleras' }}>POLERAS</a
					>
				</li>
				<li>
					<a
						href="/store/casacas"
						class={{ 'text-primary/50': page.url.pathname.split('/')[2] === 'casacas' }}>CASACAS</a
					>
				</li>
				<!-- <li>
					<a class="text-white/50" href="/hombre">HOMBRE</a>
				</li>
				<li>
					<a class="text-white/50" href="/mujer">MUJER</a>
				</li> -->
				<li>
					<a href="/seguimiento" class="text-white/50">SEGUIMIENTO</a>
				</li>
				<li>
					<a href="/ofertas" class="text-primary/50">OFERTAS</a>
				</li>
			</ul>
		</div>
		<div class="flex justify-start md:justify-center">
			<a href="/"><img src="/logoV2.svg" alt="Logo" class="h-10 md:h-12" /></a>
		</div>

		<div class="flex items-center justify-end">
			<ul class="inline-flex items-center gap-3">
				<button><Search color="#ffffff" strokeWidth={1.5} /></button>

				<button> <a href="/login"><User color="#ffffff" strokeWidth={1.5} /></a></button>
				<button onclick={onChangeTwo}>
					{#if $counter != 0}
						<span class="absolute h-3 w-3">
							<span
								class="absolute -right-2 -top-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-center"
							>
								<h1 class="text-xs font-bold">{$counter}</h1>
							</span>
						</span>
					{/if}

					<Bag strokeWidth={1.5} color="#ffffff" />
				</button>
				<button class="visible lg:hidden" onclick={onChange}
					><Menu strokeWidth={1.5} color="#ffffff" /></button
				>
			</ul>
		</div>
	</nav>
</header>

{#if box}
	<div class="fixed left-0 top-24 flex h-svh w-full flex-col justify-between bg-white">
		<ul class="font-mediun flex flex-col gap-6 px-5 py-5 text-2xl">
			<li>
				<a href="/polos">POLOS</a>
			</li>
			<Divider />
			<li>
				<a href="/poleras">POLERAS</a>
			</li>
			<Divider />
			<li>
				<a href="/casacas">CASACAS</a>
			</li>
			<Divider />
			<li>
				<a href="/hombre">HOMBRE</a>
			</li>
			<Divider />
			<li>
				<a href="/mujer">MUJER</a>
			</li>
			<Divider />
			<li>
				<a href="/ofertas" class="text-primary">OFERTAS</a>
			</li>
		</ul>
	</div>
{/if}

{#if boxTwo}
	<div
		class=" fixed right-0 top-0 flex h-screen w-1/3 flex-col justify-between text-nowrap bg-white drop-shadow-md"
		transition:slide={{ duration: 300, axis: 'x' }}
	>
		<div class=" ">
			<div class="bg-primary p-5">
				<h1>New customers save 10% with code <strong>WELCOME10</strong></h1>
			</div>
			<div class="flex justify-between p-5">
				<h1 class="text-xl font-semibold">TU CARRITO</h1>
				<button onclick={onChangeTwo}><Close strokeWidth={1.5} /></button>
			</div>
			<Divider />
		</div>
		<div class=" overflow-x-hidden overflow-y-scroll">
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
		</div>
		<div class="overflow-hidden bg-gray-100">
			<!-- <Divider /> -->
			<div class="p-5">
				<div class="flex flex-row justify-between pt-1">
					<div>
						<h1 class="text-lg font-bold">Subtotal</h1>
					</div>
					<div>
						<h1 class="text-xl font-medium">S/ 190.00 PEN</h1>
					</div>
				</div>
				<div class="flex flex-row justify-between pt-1">
					<div>
						<h1 class="text-xl font-bold">Total</h1>
					</div>
					<div>
						<h1 class="text-2xl font-medium">S/ 200.00 PEN</h1>
					</div>
				</div>

				<div class="flex flex-row gap-2 py-3">
					<button
						class=" h-14 w-full rounded-md text-center ring-1 ring-secondary transition duration-300 hover:bg-secondary hover:text-white"
						>Ver Carrito</button
					>
					<!-- cambios al botón para poder redireccionar a /buy -->
					<a
						href="/buy"
						class=" h-14 w-full content-center rounded-md bg-secondary text-center text-white ring-1 ring-secondary transition duration-300 hover:bg-black"
						>Comprar</a
					>
					<!-- cambios al botón para poder redireccionar a /buy -->
				</div>
				<p class="text-center text-sm font-light">
					Impuestos incluidos. <a href="/" class="underline">Envíos</a> y descuentos calculados al finalizar
					la compra.
				</p>
			</div>
		</div>
	</div>
{/if}
