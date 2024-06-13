const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");

// Iterate over each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent the default link behavior (scrolling to the href)
    event.preventDefault();

    // Extract the target section ID from the href attribute
    const targetId = link.getAttribute("href").substring(1);

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Get the height of the fixed navbar
      const offset = navbar.offsetHeight;

      // Get the position of the target section relative to the viewport
      const elementPosition = targetElement.getBoundingClientRect().top;

      // Calculate the offset position for smooth scrolling
      const offsetPosition = elementPosition + window.scrollY - offset;

      // Scroll the page to the calculated offset position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling behavior
      });

      // Close the offcanvas menu (if using Bootstrap offcanvas)
      const offcanvas = bootstrap.Offcanvas.getInstance(
        document.getElementById("offcanvasNavbar")
      );
      if (offcanvas) {
        offcanvas.hide();
      }
    }
  });
});

const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
