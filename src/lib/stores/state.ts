import { writable } from 'svelte/store';

export const counter = writable(1);
// const isBrowser = typeof window !== 'undefined';

// // Inicializa el contador con el valor de localStorage si está en el navegador, o 0 en caso contrario.
// const storedValue = isBrowser ? localStorage.getItem('counter') : null;
// export const counter = writable(storedValue ? parseInt(storedValue, 10) : 0);

// // Suscribirse al store para guardar cambios en localStorage, solo en el cliente.
// if (isBrowser) {
// 	counter.subscribe((value) => {
// 		localStorage.setItem('counter', value);
// 	});

// 	// Escuchar cambios en otras pestañas.
//  	window.addEventListener('storage', (event) => {
// 		if (event.key === 'counter') {
//  			counter.set(parseInt(event.newValue, 10) || 0);
//  		}
//  	});
//  }
