
$(document).ready(function() {
    // Set current year in the footer
    var currentYear = new Date().getFullYear();
    $("#displayYear").text(currentYear);

    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: true,
        navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true" />', '<i class="fa fa-long-arrow-right" aria-hidden="true" />'],
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            }
        }
    });
});

//    end owl carousel script 