
const button = document.getElementById('form-submit');

function SendMail(){
    // alert('hello')
    var Params = {
        name: document.getElementById('name').value,
         email: document.getElementById('email').value,
         message: document.getElementById('message').value
     };
    //  alert(Params.name)
     alert( Params.email)
      
     emailjs.sendForm('service_the1wkv1', 'template_wgkna9p', "#contact-form", "Rig9WDk0WVxg8HpVS")
         .then(function(response) {
            console.log('SUCCESS!' , response.status, response.text);
         }, function(error) {
            console.log('FAILED...' , error);
         });
}


