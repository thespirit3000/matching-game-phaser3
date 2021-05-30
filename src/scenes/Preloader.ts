import Phaser, { Scene } from "phaser";
import SceneKeys from "../constants/SceneKeys";
import TextureKeys from "../constants/TextureKeys";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Preloader);
  }
  preload() {
    this.load.image(TextureKeys.Background, "public/bg.png");
    this.load.image(TextureKeys.Tile, "public/GameTileBG.png");
  }
  create() {
    this.scene.start(SceneKeys.Game);
  }
}
