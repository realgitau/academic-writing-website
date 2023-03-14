
function SendMail(){
     emailjs.sendForm('service_the1wkv1', 'template_wgkna9p', "#contact-form")
         .then(function(response) {
            console.log('SUCCESS!' , response.status, response.text);
         }, function(error) {
            console.log('FAILED...' , error);
         });
}


