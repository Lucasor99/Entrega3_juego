/**
 * Monstruo al que tenemos que destruir
 */
class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) {
        const height = OPPONENT_HEIGHT * game.width / 100,
            width = OPPONENT_WIDTH * game.width / 100,
            x = getRandomNumber(game.width - width / 2),
            y = 0,
            speed = BOSS_SPEED,
            myImageSrc = BOSS_PICTURE,
            myImageDeadSrc = BOSS_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImageSrc, myImageDeadSrc);
        this.direction = "R"; // Dirección hacia la que se mueve el oponente
        this.speed = BOSS_SPEED;
        this.myImageSrc = BOSS_PICTURE;
        this.myImageDeadSrc = BOSS_PICTURE_DEAD;
        setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
    }
      
}