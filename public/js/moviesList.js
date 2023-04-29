window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let imagen = document.querySelector('img');

    /* let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    } */

    imagen.addEventListener('mouseover', function(){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    });

    moviesListTitulo.addEventListener('mouseover', function(){
        let colores = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"]; // Lista de colores
        let colorAleatorio = colores[Math.floor(Math.random() * colores.length)]; // Genera un color aleatorio
        moviesListTitulo.style.color = colorAleatorio;
    });



    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}