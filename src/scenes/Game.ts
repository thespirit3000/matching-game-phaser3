import Phaser from 'phaser';
import SceneKeys from '../constants/SceneKeys';
import TextureKeys from '../constants/TextureKeys';

const gameOptions = {
  padding: 30,
  cellCount: 6,
  gemTypes: 5,
};

interface TGem {
  gemType: string;
  gem: Phaser.GameObjects.Sprite;
  isEmpty: boolean;
}
export default class Game extends Phaser.Scene {
  private background!: Phaser.GameObjects.TileSprite;

  private grid!: Phaser.GameObjects.Grid;

  private gameArray: Array<Array<TGem>>;

  constructor() {
    super('game');
    this.gameArray = [];
  }

  create() {
    const { width } = this.scale;
    const { height } = this.scale;
    const pastriesFrames = this.textures.get(TextureKeys.Gems).getFrameNames();

    this.background = this.add
      .tileSprite(0, 0, width, height, TextureKeys.Background)
      .setOrigin(0, 0);

    const gridWidth = width - gameOptions.padding * 2;
    const cellSize = gridWidth / gameOptions.cellCount;
    const someGrid = this.add
      .grid(
        gameOptions.padding,
        300,
        gridWidth,
        gridWidth,
        cellSize,
        cellSize,
        0xc3dfff,
        0.7,
      )
      .setOrigin(0, 0);
    this.drawField(gameOptions.cellCount, gameOptions.gemTypes);
  }

  private drawField(fieldSize, typesCount) {
    console.log('writin')
  }

  update() {}
}
