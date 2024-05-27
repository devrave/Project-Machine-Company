
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
    

    //button function
    // we use json server as a localhost
    
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();
    
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
           
    
            const user = {
                name: name,
                email: email,
                message: message
               
            };
    
            fetch('http://localhost:3000/users_course', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                document.getElementById('registrationForm').reset();   
                alert('Usuario registrado con éxito')            
            })        
            .catch((error) => {
                console.error('Error:', error);
                alert('Error al registrar el usuario');
            });
        });
    });    