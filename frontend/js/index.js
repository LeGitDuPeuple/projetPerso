// Animation de la section 2
ScrollReveal().reveal('.h2-section2',{ delay: 500 });
ScrollReveal().reveal('.p-section2', { delay: 1000 });
ScrollReveal().reveal('.btn-section2', { delay: 1500 });

// Variables
const url ="http://localhost:3000/users";
const div = document.getElementById("users");

//section 3

async function getUsers(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data); 

    //     // Affiche tout les post
      
       for (let i = 0; i < data.length; i++) {
    let html = `   
        <article class="users-id">
        <img src="${data[i].img}" alt="image du Post">
        <h3 class="h3-user">${data[i].user}</h3>
          <p>${data[i].poste}</p>
          <div class="social-icons">
  <span><i class="fa-brands fa-instagram"></i></span>
  <span><i class="fa-brands fa-twitter"></i></span>
  <span><i class="fa-brands fa-facebook"></i></span>
</div>

        </article>`;
    div.innerHTML += html;
}

    })
    .catch(error => console.error("Erreur lors de la récupération des users :", error));
}
getUsers();