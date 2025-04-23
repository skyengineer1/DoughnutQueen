let currentTestimonial = 0; // Index of the currently active testimonial
const testimonials = document.querySelectorAll('.testimonial'); // Select all testimonials

// Function to show the testimonial at the given index
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active'); // Remove 'active' class from all testimonials
    if (i === index) {
      testimonial.classList.add('active'); // Add 'active' class to the current testimonial
    }
  });
}

// Function to show the next testimonial
function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length; // Increment index and loop back to 0
  showTestimonial(currentTestimonial);
}

// Function to show the previous testimonial
function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length; // Decrement index and loop back to the last testimonial
  showTestimonial(currentTestimonial);
}

// Initialize the first testimonial
showTestimonial(currentTestimonial);