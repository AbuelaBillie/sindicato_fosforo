import { noticias } from "./entradas_noticias.js";
document.addEventListener("DOMContentLoaded", function () {
    const noticiasContainer = document.getElementById("ultimas-noticias-container");
    const verMasBtn = document.getElementById("ver-mas-btn");
    const verMenosBtn = document.getElementById("ver-menos-btn");
    let noticiasVisible = 3; // Número inicial de noticias visibles

    // Función para renderizar noticias
    function renderizarNoticias(inicio, fin) {
        for (let i = inicio; i < fin && i < noticias.length; i++) {
            const noticia = noticias[i];
            const noticiaElement = document.createElement("div");
            noticiaElement.innerHTML = `
                    <div class="news">
                        <a href="${noticia.url}">
                            <div class="news-img" id="new${i}">
                                <p>${noticia.tag}</p>
                            </div>
                            <h3>${noticia.title}</h3>
                        </a>    
                    </div>`;
            noticiasContainer.appendChild(noticiaElement);

            const background_img = document.getElementById(`new${i}`)
            background_img.style.backgroundImage = `url('${noticia.image_url}')`;
        }
    }

    // Mostrar las primeras 3 noticias con animación
    renderizarNoticias(0, noticiasVisible);

    // Manejar clic en "Ver más"
    verMasBtn.addEventListener("click", function () {
        // Verificar si hay más noticias para mostrar
        if (noticiasVisible < noticias.length) {
            noticiasVisible += 3; // Aumentar el número de noticias visibles
            // Limpiar el contenedor y renderizar más noticias con animación
            noticiasContainer.innerHTML = "";
            // Renderizar las últimas 3 noticias
            renderizarNoticias(noticiasVisible - 3, noticiasVisible);
            // Mostrar el botón "Ver menos"
            verMenosBtn.style.display = "inline-block";
        } else {
            // Si no hay más noticias, deshabilitar el botón "Ver más"
            verMasBtn.disabled = true;
            // Ocultar el botón "Ver más"
            verMasBtn.style.display = "none";
        }
    });

    // Manejar clic en "Ver menos"
    verMenosBtn.addEventListener("click", function () {
        // Reducir el número de noticias visibles
        noticiasVisible -= 3;
        // Limpiar el contenedor y renderizar noticias actualizadas con animación
        noticiasContainer.innerHTML = "";
        // Renderizar las últimas 3 noticias después de retroceder
        renderizarNoticias(noticiasVisible - 3, noticiasVisible);
        // Mostrar el botón "Ver más" si estamos retrocediendo y hay más noticias para mostrar
        if (noticiasVisible < noticias.length) {
            verMasBtn.style.display = "inline-block";
        } else {
            // Si no hay más noticias, ocultar el botón "Ver más"
            verMasBtn.style.display = "none";
        }
        // Ocultar el botón "Ver menos" si volvemos al estado original
        if (noticiasVisible <= 3) {
            verMenosBtn.style.display = "none";
        }
        // Habilitar el botón "Ver más" si está deshabilitado
        verMasBtn.disabled = false;
    });
});