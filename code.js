/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  let nombre = prompt("Introduzca su nombre");
  let edad = 2023 - parseInt(prompt("Ingrese año de nacimiento"));
  let ciudad = prompt("Ingrese su ciudad");
  let interesPorJs = confirm("Te interesa Java Script?");

  datosPersona.ciudad = ciudad;
  datosPersona.nombre = nombre;
  datosPersona.edad = edad;
  datosPersona.interesPorJs = interesPorJs;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.querySelector("#nombre");
  nombre.innerHTML = datosPersona.nombre;
  let ciudad = document.querySelector("#ciudad");
  ciudad.innerHTML = datosPersona.ciudad;
  let edad = document.querySelector("#edad");
  edad.innerHTML = datosPersona.edad;
  let interesPorJs = document.querySelector("#javascript");

  if (datosPersona.interesPorJs) {
    interesPorJs.innerHTML = "si";
  } else {
    interesPorJs.innerHTML = "no";
  }
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  listado.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("caja");

    let img = document.createElement("img");
    img.setAttribute("src", item.imgUrl);
    img.setAttribute("alt", item.lenguajes);

    div.appendChild(img);

    let p = document.createElement("p");
    p.classList.add("lenguajes");
    p.innerHTML = item.lenguajes;

    div.appendChild(p);

    let p1 = document.createElement("p");
    p1.classList.add("bimestres");
    p1.innerHTML = item.bimestre;

    div.appendChild(p1);

    let divPadre = document.getElementById("fila");
    divPadre.appendChild(div);
  });
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  document.getElementById("sitio").classList.toggle("dark");

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let textoOculto = document.getElementById("sobre-mi");

document.addEventListener("keydown", function (e) {
  if (e.key === "f") {
    textoOculto.classList.remove("oculto");
  }else{
    textoOculto.classList.add("oculto"); 
  }
});
