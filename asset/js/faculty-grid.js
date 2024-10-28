document.addEventListener("DOMContentLoaded", function () {
  const facultyGrid = document.getElementById("facultyGrid");

  facultyData.forEach((faculty) => {
    const facultyCard = `
            <div class="col-lg-4 col-md-6 faculty-item" data-department="${
              faculty.shortDepartment
            }">
                <div class="card faculty-card">
                    <a href="faculty-details.html?id=${
                      faculty.id
                    }" class="no-underline">
                        <img src="${faculty.image}" class="faculty-img" alt="${
      faculty.name
    }">
                        <div class="card-body">
                            <h5 class="card-title">${faculty.name}</h5>
                            <p class="card-subtitle mb-2 text-muted">${
                              faculty.title
                            }</p>
                            <div class="mb-3">
                                ${faculty.expertise
                                  .map(
                                    (exp) =>
                                      `<span class="expertise-tag">${exp}</span>`
                                  )
                                  .join("")}    
                            </div>
<p class="card-text">
  ${faculty.education[0].degree}, ${faculty.education[0].institution}
</p>
                            <div class="social-links">
                                ${
                                  faculty.socialLinks.whatsapp
                                    ? `<a href="${faculty.socialLinks.whatsapp}"><i class="fab fa-whatsapp"></i></a>`
                                    : ""
                                }
                                ${
                                  faculty.socialLinks.linkedin
                                    ? `<a href="${faculty.socialLinks.linkedin}"><i class="fab fa-linkedin"></i></a>`
                                    : ""
                                }
                                ${
                                  faculty.socialLinks.google
                                    ? `<a href="${faculty.socialLinks.google}"><i class="fab fa-google"></i></a>`
                                    : ""
                                }
                                ${
                                  faculty.socialLinks.twitter
                                    ? `<a href="${faculty.socialLinks.twitter}"><i class="fab fa-twitter"></i></a>`
                                    : ""
                                }
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    facultyGrid.insertAdjacentHTML("beforeend", facultyCard);
  });
});
