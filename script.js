function sendEmail(event) {
    event.preventDefault();

    var to = document.getElementById("to").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:" + encodeURIComponent(to) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);

    window.location.href = mailtoLink;
}
