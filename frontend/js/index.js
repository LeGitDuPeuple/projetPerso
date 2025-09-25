// Animation section 2
ScrollReveal().reveal('.h2-section2',{ delay: 500 });
ScrollReveal().reveal('.p-section2', { delay: 1000 });
ScrollReveal().reveal('.btn-section2', { delay: 1500 });

// Animation section 3
ScrollReveal().reveal(".h3-section3", {delay: 500});

// Variables
const url = "http://localhost:3000/users";
const div = document.getElementById("users");

// Section 3
async function getUsers() {
    try {
        const res = await fetch(url);
        const data = await res.json();

        data.forEach(user => {
            let html = `
            <article class="users-id">
                <img src="${user.img}" alt="image du Post">
                <h3 class="h3-user">${user.user}</h3>
                <p>${user.poste}</p>
                <div class="social-icons">
                    <span><i class="fa-brands fa-instagram"></i></span>
                    <span><i class="fa-brands fa-twitter"></i></span>
                    <span><i class="fa-brands fa-facebook"></i></span>
                </div>
            </article>`;
            div.innerHTML += html;
        });

        // Animation des cartes après insertion
        ScrollReveal().reveal('.users-id', {
            delay: 200,
            interval: 200,
            distance: '50px',
            origin: 'bottom',
            opacity: 0
        });

    } catch (error) {
        console.error("Erreur lors de la récupération des users :", error);
    }
}

getUsers();
