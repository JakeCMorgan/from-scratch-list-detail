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
