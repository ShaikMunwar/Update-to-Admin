
const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    const phone = (inputs.elements["phone"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
        alert("All fields are mandatory")
        return
    }
    Email.send({
         Host: "smtp.gmail.com",
        Username:"shaikmohammad9097@gmail.com",
        Password:"qvsfofrfvkxzrxxp",
        To: "shaikmohammad9097@gmail.com",
        From: email,
        Subject: "Have A Look on this Details",
        Body:"Name: "+ name + "<br>"+ "Email: "+ email + "<br>" +"Phone: "+ phone + "<br>" +"Message: "+ msg 
    }).then(msg => alert("The email successfully sent"))
    })
