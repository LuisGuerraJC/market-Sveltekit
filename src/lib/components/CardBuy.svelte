<script>
	import ArrowB from 'lucide-svelte/icons/chevron-down';
	import Divider from '$lib/components/Divider.svelte';
	import ArrowR from 'lucide-svelte/icons/circle-arrow-right';
	import CardT from '$lib/components/CardT.svelte';
	let cantidad = $state(1);
	const restar = () => {
		if (cantidad > 1) {
			cantidad--;
		}
	};
	const sumar = () => {
		cantidad++;
	};
	const { imagen, nombre, precio, antes } = $state({
		imagen:
			'https://hmperu.vtexassets.com/arquivos/ids/4863243/Casaca-polera-con-cierre-Loose-Fit---Negro---H-M-PE.jpg?v=638685571277200000',
		nombre: 'POLERA CON CAPUCHA',
		tipo: '',
		precio: 'S/69',
		antes: 'S/99',
		descuento: false,
		porcentaje: '16%',
		agotado: false,
		nuevo: false
	});

	const data = $state([
		{
			imagen:
				'https://hmperu.vtexassets.com/arquivos/ids/4863243/Casaca-polera-con-cierre-Loose-Fit---Negro---H-M-PE.jpg?v=638685571277200000',
			nombre: 'POLERA CON CAPUCHA',
			tipo: '',
			precio: 'S/69',
			antes: 'S/99',
			descuento: false,
			porcentaje: '16%',
			agotado: false,
			nuevo: false
		},
		{
			imagen:
				'https://hmperu.vtexassets.com/arquivos/ids/4844740/Polo-camisero-Slim-Fit---Beige---H-M-PE.jpg?v=638679567092870000',
			nombre: 'CASACA POLERA',
			tipo: '',
			precio: 'S/89',
			antes: 'S/109',
			descuento: false,
			porcentaje: '16%',
			agotado: false,
			nuevo: false
		},
		{
			imagen:
				'https://hmperu.vtexassets.com/arquivos/ids/4863091/Polera-con-capucha-Loose-Fit---Gris-claro-jaspeado---H-M-PE.jpg?v=638685569621330000',
			nombre: 'POLERA CON CAPUCHA',
			tipo: '',
			precio: 'S/89',
			antes: 'S/139',
			descuento: false,
			porcentaje: '16%',
			agotado: false,
			nuevo: false
		},
		{
			imagen:
				'https://hmperu.vtexassets.com/arquivos/ids/4172552/Polera-con-capucha-Relaxed-Fit---Morado-X-Men---H-M-PE.jpg?v=638384030591000000',
			nombre: 'POLERA CON CAPUCHA',
			tipo: '',
			precio: 'S/69',
			antes: 'S/99',
			descuento: false,
			porcentaje: '16%',
			agotado: false,
			nuevo: false
		}
	]);
</script>

<section class="container mx-auto py-5">
	<div class="flex justify-between px-5">
		<div class="text-sm text-black/70">Casaca / Oversized Fit / Naruto Edition</div>
	</div>

	<div class="grid grid-cols-1 px-5 pt-5 md:grid-cols-2">
		<div class="flex flex-col justify-center gap-2 md:flex-row-reverse">
			<div><img src={imagen} alt="Polo" class="h-[500px] w-full object-cover md:h-[750px]" /></div>
			<div class="flex flex-row gap-2 md:flex-col">
				<img src={imagen} alt="Polo" class="h-[120px]" />
				<img src={imagen} alt="Polo" class="h-[120px]" />
				<img src={imagen} alt="Polo" class="h-[120px]" />
			</div>
		</div>
		<div class="flex flex-col gap-3 py-6 md:w-2/3">
			<p class=" text-sm">OVERSIZED FIT</p>
			<h1 class=" text-2xl">POLERA DE NARUTO</h1>

			<h1 class="text-base font-medium text-secondary/50 line-through">S/. 80.00</h1>
			<div class="flex">
				<h2 class="text-2xl font-bold">S/. 59.90</h2>
				<p class="mx-3 w-fit bg-primary px-2 py-1 text-xs text-secondary">DESCUENTO</p>
			</div>
			<h1 class="">SKU: L43UDJL</h1>
			<p>Tallas</p>
			<div class="flex gap-2">
				<button
					class="flex size-8 items-center justify-center bg-secondary text-white hover:bg-primary hover:text-secondary"
					>S</button
				>
				<button
					class="flex size-8 items-center justify-center bg-secondary text-white hover:bg-primary hover:text-secondary"
					>M</button
				>
				<button
					class="flex size-8 items-center justify-center bg-secondary text-white hover:bg-primary hover:text-secondary"
					>L</button
				>
				<button
					class="flex size-8 items-center justify-center bg-secondary text-white hover:bg-primary hover:text-secondary"
					>XL</button
				>
			</div>
			<div class=" flex flex-col gap-3">
				<div class=" flex h-14 flex-row gap-3">
					<div class="flex w-fit items-center px-3 ring-1 ring-secondary">
						<button onclick={restar} class="px-4">-</button>{cantidad}<button
							onclick={sumar}
							class="px-4">+</button
						>
					</div>
					<button class="h-14 w-full ring-1 ring-secondary hover:bg-secondary hover:text-white"
						>Agregar al carrito</button
					>
				</div>

				<button
					class=" h-14 w-full bg-secondary text-center text-white ring-1 ring-secondary hover:bg-black"
					>Comprar Ahora</button
				>
				<p class="py-4 text-sm">
					Aprovecha envíos gratis en compras mayores a S/ 120. En caso de querer devolver productos,
					las devoluciones son sin costo
				</p>
				<Divider />
				<div class="py-2">
					<div class="flex justify-between">
						<p class="font-medium">Descripción</p>
						<button><ArrowB></ArrowB></button>
					</div>

					<p class="text-base font-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, voluptates.
					</p>
				</div>
				<Divider />
				<div class="flex justify-between py-2">
					<p class="font-medium">Materiales</p>
					<button><ArrowB></ArrowB></button>
				</div>
				<Divider />
				<div class="flex justify-between py-2">
					<p class="font-medium">Guia de cuidados</p>
					<button><ArrowB></ArrowB></button>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- <div class="container mx-auto">
	<Divider />
</div> -->
<section class="container mx-auto px-5 py-10">
	<div class="flex justify-between pb-10">
		<h1 class="text-start text-3xl font-bold md:text-4xl">Te puede interesar tambien</h1>
		<div>
			<button><ArrowR strokeWidth={1} size="50px" /></button>
		</div>
	</div>
	<div class="flex justify-center">
		<div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
			{#each data as item}
				<CardT
					imagen={item.imagen}
					nombre={item.nombre}
					precio={item.precio}
					porcentaje={item.porcentaje}
					antes={item.antes}
				/>
			{/each}
		</div>
	</div>
</section>
