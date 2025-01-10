import Scene from './scene/scene'
import { Renderer } from '@mowa/renderer'

export default class Core {
  canvas: HTMLCanvasElement
  #scene: Scene
  #renderer: Renderer
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.#renderer = new Renderer(canvas)
    this.#scene = new Scene()
  }
}
