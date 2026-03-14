import { RepeatWrapping } from "three";
import {
  grassImg,
} from "./images";

//Three es la biblioteca de js puro
import { TextureLoader } from "three";
import { NearestFilter } from "three";

const groundTexture = new TextureLoader().load(grassImg)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter

export { groundTexture }
