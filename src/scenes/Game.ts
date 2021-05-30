import Phaser from "phaser";
import SceneKeys from "../constants/SceneKeys";
import TextureKeys from "../constants/TextureKeys";

export default class Game extends Phaser.Scene {
  private background!: Phaser.GameObjects.TileSprite;
  private grid!: Phaser.GameObjects.Grid;

  constructor() {
    super("game");
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;
    const PADDING = 30;

    this.background = this.add
      .tileSprite(0, 0, width, height, TextureKeys.Background)
      .setOrigin(0, 0);

    const gridWidth = width - PADDING * 2;
    const cellSize = gridWidth / 6;
    const someGrid = this.add
      .grid(
        PADDING,
        300,
        gridWidth,
        gridWidth,
        cellSize,
        cellSize,
        0xc3dfff,
        0.7
      )
      .setOrigin(0, 0);
  }

  update() {}
}
