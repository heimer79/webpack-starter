export const saludar = (nombre) => {
	console.log(`creado etiqueta h1 para ${nombre}`);

	const h1 = document.createElement('h1');

	h1.innerText = `Hola, ${nombre}`;

	document.body.append(h1);
};