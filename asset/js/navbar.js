document.addEventListener("DOMContentLoaded", function () {
  function handleNestedDropdowns() {
      // Select all nested dropdown elements
      const nestedDropdowns = document.querySelectorAll(".dropdown-menu .dropdown");

      // Only apply nested dropdown behavior if screen width is less than 992px (mobile view)
      if (window.innerWidth < 992) {
          nestedDropdowns.forEach((dropdown) => {
              const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

              // Check if the click event listener is already added to prevent duplication
              if (!dropdownToggle.classList.contains("click-bound")) {
                  dropdownToggle.classList.add("click-bound");

                  // Add click event listener for toggling submenus
                  dropdownToggle.addEventListener("click", function (e) {
                      e.preventDefault(); // Prevent default link behavior
                      e.stopPropagation(); // Stop event from bubbling up

                      const submenu = this.nextElementSibling;

                      // Toggle visibility for the selected submenu
                      submenu.classList.toggle("show");

                      // Hide other submenus within the same parent dropdown
                      dropdown.parentElement.querySelectorAll(".dropdown-menu").forEach((otherSubmenu) => {
                          if (otherSubmenu !== submenu) {
                              otherSubmenu.classList.remove("show");
                          }
                      });
                  });
              }
          });
      } else {
          // In desktop view, remove the "show" class to reset dropdown state
          nestedDropdowns.forEach((dropdown) => {
              const submenu = dropdown.querySelector(".dropdown-menu");
              submenu.classList.remove("show");

              // Remove "click-bound" class to reset for potential future mobile view
              const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
              dropdownToggle.classList.remove("click-bound");
          });
      }
  }

  // Initial call to handleNestedDropdowns
  handleNestedDropdowns();

  // Re-apply nested dropdown handling on window resize
  let resizeTimer;
  window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleNestedDropdowns, 250);
  });
});