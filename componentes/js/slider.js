window.addEventListener('load', function () {

    let images = new Array;
    images.push('img/slider1/1.jpg');
    images.push('img/slider1/2.jpg');
    images.push('img/slider1/3.jpg');
    images.push('img/slider1/4.jpg');

    let titles = new Array;
    titles.push('<h2>Desarrollo Web</h2><p>Desarrollo de Soluciones para tu empresa basados en tecnología web</p><a href="">Más Info</a>');
    titles.push('<h2>Business Intelligence</h2><p>Análisis y reportes del estado de tu empresa en tiempo real</p><a href="">Más Info</a>');
    titles.push('<h2>WordPress Solutions</h2><p>Donde los demás no pueden, sólo complejas soluciones</p><a href="">Más Info</a>');
    titles.push('<h2>Cloud Solutions</h2><p>Despliegue y control de los procesos empresariales 24/7 "anywhere"</p><a href="">Más Info</a>');

    let imagesIdx = 0;
    let titlesIdx = 0;
    let tiempo = 4000;

    document.imag.src = images[imagesIdx];
    document.querySelector('.text').innerHTML=titles[titlesIdx];

    console.log(titles.length);
    console.log(images.length);
    
    function cambiarContenido(){

        if(imagesIdx <images.length && titlesIdx < titles.length){
            document.imag.src = images[imagesIdx];
            document.querySelector('.text').innerHTML=titles[titlesIdx];
            imagesIdx++;
            titlesIdx++;
        }else{
            imagesIdx=0;
            titlesIdx=0;
        }
    }
    setInterval(cambiarContenido, tiempo);

    let btns = new Array;
    btns.push('.sl1');
    btns.push('.sl2');
    btns.push('.sl3');
    btns.push('.sl4');
    console.log(btns);

    document.querySelector(btns[0]).addEventListener('click',function(){
        document.imag.src = images[0];
        document.querySelector('.text').innerHTML=titles[0];
    })
    document.querySelector(btns[1]).addEventListener('click',function(){
        document.imag.src = images[1];
        document.querySelector('.text').innerHTML=titles[1];
    })
    document.querySelector(btns[2]).addEventListener('click',function(){
        document.imag.src = images[2];
        document.querySelector('.text').innerHTML=titles[2];
    })
    document.querySelector(btns[3]).addEventListener('click',function(){
        document.imag.src = images[3];
        document.querySelector('.text').innerHTML=titles[3];
    })

});

