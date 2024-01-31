import {entradas} from "./entradas_hero.js"
import {hero_slider} from "./hero-slider.js"
window.addEventListener("load", function () {
    let container = document.getElementById('noticias');
    
    container.innerHTML = ``
    let entrada = ``
    entradas.forEach(element =>{
        entrada += `<div class="noticia">
        <img src="${element.image}" alt="${element["desc-img"]}">
        <div class="hero-news-body">
            <h3>${element.title}</h3>
            <p>${element.body}</p>
        </div>
        <div class="hero-news-info">
            <p>${element.fecha}</p>
            <a href="${element.url}">LEER MÁS</a>
        </div>
    </div>`
    })

    container.innerHTML = entrada

    hero_slider()
})