//Box reveal transition on scroll
window.sr = ScrollReveal({});
sr.reveal('.feature-box', { duration: 2000 });
sr.reveal('.middle-box-wrapper', { duration: 2000 });	
sr.reveal('#header-text', { duration: 1000 });
sr.reveal('.intro-box', { duration: 1000 });	


//Same page anchor
$("li#features").click(function() {
    $('html, body').animate({
        scrollTop: $(".feature-box").offset().top
    }, 500);
});


//For successful subscription message after page redirection from mailchimp
//var elem = document.getElementById('subscription_message'); 
var urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("status") == "successful_subscription") {
  $('#subscription_message').modal('show');
}