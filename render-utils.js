export function renderGameCard(game) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('game-card');

    p.textContent = game.name;
    img.src = `./assets/${game.id}.jpg`;
    a.href = `./detail/?id=${game.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderGameDetail(game) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const yearAndGenreEl = document.createElement('div');

    div.classList.add('game-detail');

    nameEl.textContent = game.name;
    nameEl.classList.add('name');

    yearEl.textContent = `Release Date: ${game.year}`;
    yearEl.classList.add('year');

    genreEl.textContent = `${game.game_genre.genre}`;
    genreEl.classList.add('genre');

    yearAndGenreEl.classList.add('year-and-genre');

    yearAndGenreEl.append(yearEl, genreEl);

    img.src = `../assets/${game.id}.jpg`;

    div.append(nameEl, img, yearAndGenreEl);

    return div;
}
