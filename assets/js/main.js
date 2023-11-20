
const container = document.querySelector('#container');

const baseUrl = 'https://cgtfarmer.github.io';

const main = async () => {
  games.forEach((game) => insertCard(game));
};

const insertCard = (game) => {
  const title = createTitle(game);

  container.insertAdjacentHTML('beforeend', `
    <a href="${baseUrl}/${game}" class="text-decoration-none">
      <div class="card" style="width: 18rem; height: 14rem;">
        <img
          src="assets/image/${game}.png"
          class="card-img-top game-logo"
          style="max-height: 10rem;"
          onerror="this.src = 'assets/image/blank.png';"
        />

        <div class="card-body text-center">
          <h5 class="card-title">${title}</h5>
        </div>
      </div>
    </a>
  `);
}

// const fetchGames = async () => {
//   const response = await fetch('assets/list.json', { method: 'GET' });

//   return await response.json();
// };

const createTitle = (name) => {
  return toTitleCase(name.replaceAll('-', ' '))
}

const toTitleCase = (str) => {
  return str.toLowerCase()
    .split(' ')
    .map((word) => (word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ');
};

main();
