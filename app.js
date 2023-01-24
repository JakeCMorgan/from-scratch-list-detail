/* Imports */

import { getGames } from './fetch-utils.js';
import { renderGameCard } from './render-utils.js';

/* Get DOM Elements */
const gameListContainer = document.getElementById('game-list-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const games = await getGames();
    for (let game of games) {
        const gameEl = renderGameCard(game);

        gameListContainer.append(gameEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
