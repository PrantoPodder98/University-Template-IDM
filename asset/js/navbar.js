document.addEventListener("DOMContentLoaded", function () {
  // Function to handle nested dropdowns
  function handleDropdowns() {
    const dropdowns = document.querySelectorAll(".dropdown-menu .dropdown");

    if (window.innerWidth < 992) {
      // Mobile view
      dropdowns.forEach((dropdown) => {
        const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
        dropdownToggle.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          const submenu = this.nextElementSibling;
          const isExpanded = submenu.style.display === "block";

          // Close all other open submenus
          dropdowns.forEach((d) => {
            if (d !== dropdown) {
              d.querySelector(".dropdown-menu").style.display = "none";
            }
          });

          // Toggle current submenu
          submenu.style.display = isExpanded ? "none" : "block";
        });
      });
    } else {
      // Desktop view
      dropdowns.forEach((dropdown) => {
        const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
        dropdownToggle.removeEventListener("click", function () {});
      });
    }
  }

  // Initial call
  handleDropdowns();

  // Call on window resize
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleDropdowns, 250);
  });
});
