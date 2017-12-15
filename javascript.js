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
