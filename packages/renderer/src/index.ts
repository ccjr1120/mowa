export class Renderer {
  canvas: HTMLCanvasElement
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
  }

  tickerOn(
    cb: () => {
      name: string
    }
  ) {
    console.log('listen', cb())
  }
}
