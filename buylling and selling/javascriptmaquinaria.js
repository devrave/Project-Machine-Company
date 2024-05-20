// JavaScript to handle the navigation and any additional functionalities
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Función para ajustar el tamaño de las imágenes
    const adjustImageSize = () => {
        const images = document.querySelectorAll('.item img');
        images.forEach(img => {
            img.style.width = '100%';
            img.style.height = '50%';
            img.style.maxWidth = '100%';
        });
    };

    adjustImageSize(); 
});

//función que muestra el menu responsive{
    function responsiveMenu(){
        let x = document.getElementById("nav");
        if(x.className===""){
            x.className = "responsive";
    
            //creamos el elemento que cierra el menu
            let span = document.createElement("span");
            span.innerHTML = "X";
            document.getElementById("nav").appendChild(span);
    
            //quitamos el boton eliminar cuando se hace click sobre este
            span.onclick = function(){
                x.className = "";
                span.remove();
            }
        }else{
            x.className="";
        }
    }
    //Este codigo es para agregar una función a cada links del menu
    //responsive
    //cuando se presione en cualquier de los links del menu debe desaparecer el menu
    const links = document.querySelectorAll("#nav a");
    for(i=0; i < links.length;i++){
        links[i].onclick = function(){
            var x = document.getElementById("nav");
            x.className = "";
    
            //removemos el boton eliminar
            btnEliminar = document.querySelector("#nav span");
            btnEliminar.remove();
        }
    }
// function cargarAnimaciones(){
//     $(function(){
//         $('.chart1').easyPieChart({
//             size:160,
//             barColor:"#ff5b00",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });
//         $('.chart2').easyPieChart({
//             size:160,
//             barColor:"#ff5b00",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });
//         $('.chart3').easyPieChart({
//             size:160,
//             barColor:"#ff5b00",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });
//         $('.chart4').easyPieChart({
//             size:160,
//             barColor:"#ff5b00",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });
//         $('.chart5').easyPieChart({
//             size:160,
//             barColor:"#ff5b00",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });
//         $('.chart6').easyPieChart({
//             size:160,
//             barColor:"#ff5b00",
//             scaleLength:0,
//             lineWidth:15,
//             tackColor:"#525151",
//             lineCap:"circle",
//             animate:2000,
//         });

//     })
