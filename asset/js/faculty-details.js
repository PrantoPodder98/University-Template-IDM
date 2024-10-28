document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const facultyId = urlParams.get('id');

    const faculty = facultyData.find(f => f.id === facultyId);

    if (faculty) {
        // Populate basic info
        document.getElementById('faculty-image').src = faculty.image;
        document.getElementById('faculty-image').alt = faculty.name;
        document.getElementById('faculty-name').textContent = faculty.name;
        document.getElementById('faculty-title').textContent = faculty.title;
        document.getElementById('faculty-department').textContent = faculty.department;

        // Populate contact info
        document.getElementById('faculty-email').innerHTML += faculty.email;
        document.getElementById('faculty-phone').innerHTML += faculty.phone;
        document.getElementById('faculty-office').innerHTML += faculty.office;
        document.getElementById('faculty-office-hours').innerHTML += faculty.officeHours;

        // Populate social links
        const socialLinksContainer = document.getElementById('faculty-social-links');
        for (const [platform, url] of Object.entries(faculty.socialLinks)) {
            socialLinksContainer.innerHTML += `<a href="${url}"><i class="fab fa-${platform}"></i></a>`;
        }

        // Populate about section
        document.getElementById('faculty-about').textContent = faculty.about;

        // Populate expertise
        const expertiseContainer = document.getElementById('faculty-expertise');
        faculty.expertise.forEach(exp => {
            expertiseContainer.innerHTML += `<span class="expertise-tag">${exp}</span>`;
        });

        // Populate publications
        const publicationsContainer = document.getElementById('faculty-publications');
        faculty.publications.forEach(pub => {
            publicationsContainer.innerHTML += `
                <div class="publication-item">
                    <h6>${pub.title}</h6>
                    <p class="text-muted">${pub.journal} (${pub.year})</p>
                    <a href="${pub.url}" class="btn btn-sm btn-outline-success">View Publication</a>
                </div>
            `;
        });

        // Populate education
        const educationContainer = document.getElementById('faculty-education');
        faculty.education.forEach(edu => {
            educationContainer.innerHTML += `
                <div class="mb-3">
                    <h6>${edu.degree}</h6>
                    <p class="text-muted">${edu.institution}, ${edu.year}</p>
                </div>
            `;
        });

        // Populate courses
        const coursesContainer = document.getElementById('faculty-courses');
        faculty.courses.forEach(course => {
            coursesContainer.innerHTML += `
                <div class="course-card">
                    <h6>${course.code}: ${course.name}</h6>
                    <p class="text-muted mb-0">${course.semester} - ${course.level} Level</p>
                </div>
            `;
        });

        // Populate awards
        const awardsContainer = document.getElementById('faculty-awards');
        faculty.awards.forEach(award => {
            awardsContainer.innerHTML += `
                <li class="mb-2"><i class="fas fa-award text-success me-2"></i> ${award.name}, ${award.year}</li>
            `;
        });
    } else {
        document.querySelector('.container.profile-section').innerHTML = '<h1>Faculty member not found</h1>';
    }
});