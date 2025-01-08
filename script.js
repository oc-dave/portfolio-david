// Add event listener to the form
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    // Display loading message (optional)
    document.getElementById('form-response').textContent = 'Submitting...';
    
    // Optionally, you can handle form submission with JavaScript if needed
    // For now, the form directly sends data to Getform.io
    
    // If you want to clear the form and show a success message:
    setTimeout(() => {
        document.getElementById('form-response').textContent = 'Your message has been sent successfully!';
        document.querySelector('form').reset();
    }, 2000);
});
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});
