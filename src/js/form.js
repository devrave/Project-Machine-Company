
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


function guardarFormulario() {
  var form = document.getElementById("form");
  var formData = new FormData(form);
  
  // Convertir los datos del formulario a un objeto JSON
  var formObject = {};
  formData.forEach(function(value, key){
      formObject[key] = value;
  });
  
  // Guardar el objeto JSON en localStorage
  localStorage.setItem('formularioData', JSON.stringify(formObject));
  
  console.log("Formulario guardado localmente.");  
}

