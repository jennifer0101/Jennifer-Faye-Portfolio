(function() {

  $(document).ready(function () {

    // Just a little JS magic to add a "scrolling" class to the body, this gives us some cool options for styling
    window.addEventListener('scroll', e => {
      document.body.classList.toggle('scrolling', window.scrollY > 0)
    })

    // Scroll to top on page load (optional)
    $(this).scrollTop(0); // Remove this line if you prefer the page to load at the current scroll position

    // Materialize CSS Initializations
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.pushpin').pushpin();
    $('.materialboxed').materialbox();

    // Side Navigation Configuration
    $('.sidenav').sidenav({
      menuWidth: 300,
      closeOnClick: true,
      draggable: true
    });

    // Carousel Initialization
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

    // (Optional) Manual Testimonial Rotation (if not using Materialize CSS)
    const testimonials = $('.testimonial'); // Use jQuery selector for testimonials
    let currentIndex = 0;

    function changeTestimonial(n) {
      testimonials.eq(currentIndex).hide();
      currentIndex = (currentIndex + n + testimonials.length) % testimonials.length;
      testimonials.eq(currentIndex).show();
    }

    // Call changeTestimonial on initial page load (optional)
    changeTestimonial(1);

    // Add event listeners for arrows (replace with YOUR ACTUAL IDs or classes)
    document.querySelectorAll('.prev').forEach(arrow => {
      arrow.addEventListener("click", function() {
        changeTestimonial(-1);
      });
    });

    document.querySelectorAll('.next').forEach(arrow => {
      arrow.addEventListener("click", function() {
        changeTestimonial(1);
      });
    });

  });

})();

