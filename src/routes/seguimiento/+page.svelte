<div class="container mx-auto py-12">
	<div class="flex justify-center px-5 py-12">
		<form class="w-[330px] text-center md:w-[500px]">
			<h1 class="py-8 text-4xl font-bold">HAZ EL SEGUIMIENTO DE TU PEDIDO</h1>

			<div class="flex flex-col gap-5">
				<input
					type="number"
					name="dni"
					class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
					placeholder="DNI"
				/>
				<input
					type="number"
					name="codigo"
					class="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
					placeholder="Codigo"
				/>
				<button
					class="h-14 w-full rounded-md bg-secondary text-white transition duration-300 hover:bg-black"
					><a href="/seguimiento/informacion">Ver Pedido</a></button
				>
			</div>
			<p class="py-10">
				Si haz elegido el envio <strong>Express</strong> podras realizar el seguimiento en tiempo real,
				ya que nosotros mismos te lo entregaremos
			</p>
		</form>
	</div>
</div>
