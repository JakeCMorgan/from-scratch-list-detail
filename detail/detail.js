import { getGame } from '../fetch-utils.js';
import { renderGameDetail } from '../render-utils.js';

const gameDetailContainer = document.getElementById('game-detail-container');

window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');
    const game = await getGame(id);
    const gameDetailEl = renderGameDetail(game);

    gameDetailContainer.append(gameDetailEl);
});
