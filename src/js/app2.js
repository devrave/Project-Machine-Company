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

    // localstorage
    document.addEventListener('DOMContentLoaded', function() {
        ['name', 'email', 'message'].forEach(id => {
            const element = document.getElementById(id);
            element.value = localStorage.getItem(id) || '';
            element.addEventListener('input', () => localStorage.setItem(id, element.value));
        });

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();
            ['name', 'email', 'message'].forEach(id => localStorage.removeItem(id));
            document.getElementById('registrationForm').reset();
            alert('Formulario enviado y datos borrados del local storage.');
        });
    });

