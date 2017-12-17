window.sr = ScrollReveal({});
sr.reveal('.feature-box', { duration: 2000 });
sr.reveal('.middle-box-wrapper', { duration: 2000 });	
sr.reveal('#header-text', { duration: 1000 });
sr.reveal('.intro-box', { duration: 1000 });	

$("li#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 500);
});

$("li#about").click(function() {
    $('html, body').animate({
        scrollTop: $(".intro-box").offset().top
    }, 500);
});

$("li#features").click(function() {
    $('html, body').animate({
        scrollTop: $(".feature-box").offset().top
    }, 500);
});		


//For the built-in validation check for email
var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mce-EMAIL');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
  // Each time the user types something, we check if the
  // email field is valid.
  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
}, false);
form.addEventListener("submit", function (event) {
  // Each time the user tries to send the data, we check
  // if the email field is valid.
  if (!email.validity.valid) {
    
    // If the field is not valid, we display a custom
    // error message.
    error.innerHTML = "Please enter a valid email.";
    error.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
}, false);

//For page redirection after subscription
var elem = document.getElementById('subscription_message'); 
var urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("status") != "successful_subscription") {
  elem.style.display = "none";    
}