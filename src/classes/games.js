const SnakeGame = require("snakecord");
class Games {
    async snake(message) {
        const snakeGame = new SnakeGame({
            title: 'Snake Game',
            color: "RANDOM",
            timestamp: true,
            gameOverTitle: "Game Over 😔"
        });
        return snakeGame.newGame(message);
    }
}
module.exports = Games;