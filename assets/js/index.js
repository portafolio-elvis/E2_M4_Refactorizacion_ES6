const usuario = {
  nombre: 'Ana',
  edad: 24,
  ciudad: 'Barcelona'
};

const crearMensajePresentacion = (user) => {
  const { nombre, edad, ciudad } = user;

  const mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en la ciudad de ${ciudad}.`;

  return mensaje;
}

const mensajeDeBienvenida = crearMensajePresentacion(usuario);
console.log(mensajeDeBienvenida);
