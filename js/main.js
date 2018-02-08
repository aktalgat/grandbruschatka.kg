(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


    $('.mag-inst').magnificPopup({
        items: [
            {src: 'img/product/1-small.jpg'},
            {src: 'img/product/2-small.jpg'},
            {src: 'img/product/3-small.jpg'},
            {src: 'img/product/4-small.jpg'},
            {src: 'img/product/5-small.jpg'},
            {src: 'img/product/6-small.jpg'},
            {src: 'img/product/7-small.jpg'},
            {src: 'img/product/8-small.jpg'}
        ],
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 6]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.gallery-item').on('click', function(event) {
        var num = $(this).attr('data-number');
        event.preventDefault();
        $('.mag-inst').magnificPopup('open', num);
    });

})(jQuery); // End of use strict

var mymap = L.map('map').setView([42.86319, 74.53535], 15);
var marker = L.marker([42.86319, 74.53535]).addTo(mymap);
marker.bindPopup("<b>Grandbruschatka</b><br>ул. Воровского 1<br>пер. Л. Толстого/Т. Фрунзе").openPopup();
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
