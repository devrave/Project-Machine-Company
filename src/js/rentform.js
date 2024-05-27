//code showing data in the email
const btn = document.getElementById('button');

let formulario = document.getElementById('form')
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_i7ofdu8';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'ENVIAR MENSAJE';
        alert('Mensaje enviado correctamente!');
        formulario.reset()
      }, (err) => {
        btn.value = 'ENVIAR MENSAJE';
        alert(JSON.stringify(err));
      });
  });
