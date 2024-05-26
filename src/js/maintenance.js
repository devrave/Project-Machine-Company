//responsive function
    function responsiveMenu(){
        let x = document.getElementById("nav");
        if(x.className===""){
            x.className = "responsive";
    
             // we create the element that closes the menu
            let span = document.createElement("span");
            span.innerHTML = "X";
            document.getElementById("nav").appendChild(span);
    
             // we remove the delete button when clicking on this
            span.onclick = function(){
                x.className = "";
                span.remove();
            }
        }else{
            x.className="";
        }
    }
  // This code is to add a function to each responsive
//  menu links when you press any of the menu links should the menu disappear
    const links = document.querySelectorAll("#nav a");
    for(i=0; i < links.length;i++){
        links[i].onclick = function(){
            var x = document.getElementById("nav");
            x.className = "";
    
              //remove the delete button
            btnEliminar = document.querySelector("#nav span");
            btnEliminar.remove();
        }
    }

    // send form

    const btn = document.getElementById('button');

     let formulario = document.getElementById('form');
     formulario.addEventListener('submit', function(event) {
       event.preventDefault();   
    

    
       btn.value = 'Enviando mensaje...';
    
       const serviceID = 'default_service';
       const templateID = 'template_kdxxbxr';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Enviar';
          alert('Mensaje enviado');
          formulario.reset()
        }, (err) => {
          btn.value = 'Enviar';
          alert(JSON.stringify(err));
        });
    });