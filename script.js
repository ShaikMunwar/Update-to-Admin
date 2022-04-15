
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
        // SecureToken:"eb6deac8-f703-487a-af5a-2141b71d0518",
        To: "shaikmohammad9097@gmail.com",
        From: email,
        Subject: "Contact Us Query By the Customer",
        Body:"Name: "+ name + "<br>"+ "Email: "+ email + "<br>" +"Phone: "+ phone + "<br>" +"Message: "+ msg 
    }).then(msg => alert("The email successfully sent"))
    })