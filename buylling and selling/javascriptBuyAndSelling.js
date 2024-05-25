// JavaScript to handle the navigation and any additional functionalities
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const formsell = document.querySelector('.formsell');
    formsell.addEventListener('click', ()=>{
        window.location.href = 'https://docs.google.com/forms/d/1fqQ_qGK9w5tSR3ZbO9HdiNliseEC88o1yvt0LRXdLGA/edit?pli=1'
    })
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
    const adjustImageSize = () => {
        const images = document.querySelectorAll('.item img');
        images.forEach(img => {
            img.style.width = '100%';
            img.style.height = '70%';
            img.style.maxWidth = '100%';
            img.style.maxHeight = '250px';
        });
    };

    adjustImageSize(); 
});

$('.button').click(function(){
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });

//responsive function
    function responsiveMenu(){
        let x = document.getElementById("nav");
        if(x.className===""){
            x.className = "responsive";
    
            // we create the element that closes the menu
            let span = document.createElement("span");
            span.innerHTML = "X";
            document.getElementById("nav").appendChild(span);
    
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
    
            btnEliminar = document.querySelector("#nav span");
            btnEliminar.remove();
        }
    }
