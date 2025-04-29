<div class="container mx-auto py-12">
	<div class="flex justify-center px-5 py-12">
		<form class="w-[330px] text-center md:w-[500px]">
			<h1 class="py-8 text-4xl font-bold">REGISTER</h1>

			<div class="flex flex-col gap-5">
				<input
					type="text"
					name="name"
					class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
					placeholder="Nombre"
				/>
				<input
					type="text"
					name="apellido"
					class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
					placeholder="Apellido"
				/>
				<input
					type="number"
					name="dni"
					class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
					placeholder="DNI"
				/>
				<input
					type="email"
					name="email"
					class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
					placeholder="Correo"
				/>
				<input
					type="password"
					name="password"
					class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
					placeholder="Contraseña"
				/>
				<button
					class="h-14 w-full rounded-md bg-secondary px-8 py-4 text-white transition duration-300 hover:bg-black"
					>Registrarse</button
				>
				<p class="text-center text-sm">
					¿Ya eres usuario?
					<a href="/login" class="underline">Inicia sesión aquí </a>
				</p>
			</div>
		</form>
	</div>
</div>
