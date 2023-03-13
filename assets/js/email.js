
const button = document.getElementById('form-submit');

function SendMail(){
    var Params = {
        name: document.getElementById('name').value,
         email: document.getElementById('email').value,
         message: document.getElementById('message').value
     };
      
     emailjs.send('service_the1wkv', 'template_wgkna9p', Params)
         .then(function(response) {
            console.log('SUCCESS!' , response.status, response.text);
         }, function(error) {
            console.log('FAILED...' , error);
         });
}


