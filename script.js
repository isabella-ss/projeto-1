const username = "isabella-ss"; // meu github
const repoContainer = document.getElementById("repos");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    data.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Sem descrição"}</p>
        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
      `;

      repoContainer.appendChild(card);
    });
  })
  .catch(err => console.log(err));
