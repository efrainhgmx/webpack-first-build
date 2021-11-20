export const saludar = ( nombre ) => {
    console.log("Creando el saludo");

    const h1 =  document.createElement('h1');

    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);
}