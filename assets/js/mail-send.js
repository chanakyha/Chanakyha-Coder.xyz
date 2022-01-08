

function sendEmail() {

	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;





	Email.send({
		Host: "smtp.gmail.com",
		Username: "chanakyha.coder@gmail.com",
		Password: "wmhnyccipclicdxr",
		To: 'chanakyha.coder@gmail.com',
		From: email,
		Subject: "My Resume Response: " + subject,
		Body: "From: " + name + "<br>" + "Email Address: " + email + "<br><br><br>" + message,
	})
	.then(function (message) {
	    document.getElementsByClassName("sent-message").classList.add("d-block");
	});
}




