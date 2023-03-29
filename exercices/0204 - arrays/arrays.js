"use strict";
function fetchCursos() {
    fetch("https://api.origamid.dev/json/cursos.json")
        .then((response) => {
        return response.json();
    })
        .then((response) => {
        mostrarCursos(response);
    });
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.map((curso) => {
        document.body.innerHTML += `
    <h1>Nome: ${curso.nome}</h1>
    <p>Horas: ${curso.horas}</p>
    <p>Aulas: ${curso.aulas}</p>
    <p>Gratuito: ${curso.horas ? "Sim" : "Não"}</p>
    <p>Tags: ${curso.tags.map((tag) => ` ${tag}`)}</p>
    <p>Id das aulas: ${curso.idAulas.map((id) => ` ${id}`)}</p>
    <p>Nivel: ${curso.nivel}</p>
  `;
    });
}
