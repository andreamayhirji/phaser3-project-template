import 'phaser';
import config from './config';
import GameScene from './Scenes/Game'
import TownhallScene from './Scenes/Townhall'

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Townhall', TownhallScene)
    this.scene.add('Game', GameScene)
    this.scene.start('Game');
  }
}

window.game = new Game();