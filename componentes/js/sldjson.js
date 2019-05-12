window.addEventListener('load', function(){

    let fotos = new Array;

    let imagesIdx = 0;
    let titlesIdx = 0;
    let tiempo = 4000;
    

    fetch("json/slider.json")
        .then(res => res.json())
        .then(datos =>{
            
            cargardata(datos);
        })
    function cargardata(datos){
        for(let img of datos){
            fotos.push(img.img);
        }
    }
    console.log(fotos);

    function cc(){
        if(imagesIdx < fotos.length){
            document.imgsolo.src = fotos[imagesIdx];
            imagesIdx++;
        }else{
            imagesIdx = 0;
        }
    }
    
    setInterval(cc, tiempo);

});