type RGB = number[];

class CanvasImage {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  constructor(image: HTMLImageElement) {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.width = this.canvas.width = image.width;
    this.height = this.canvas.height = image.height;
    this.context.drawImage(image, 0, 0, this.width, this.height);
  }
  clear(): void {
    this.context.clearRect(0, 0, this.width, this.height);
  }
  update(imageData: ImageData): void {
    this.context.putImageData(imageData, 0, 0);
  }
  getImageData(): ImageData {
    return this.context.getImageData(0, 0, this.width, this.height);
  }
  getPixelCount(): number {
    return this.height * this.width;
  }
  removeCanvas() {
    this.canvas.parentNode.removeChild(this.canvas);
  }
}
class ColorPicker {
  getColor(sourceImage: HTMLImageElement, quality: number) {}
  getPalette(
    sourceImage: HTMLImageElement,
    colorCount: number = 10,
    quality: number = 10
  ) {
    colorCount < 2 || (colorCount > 255 && colorCount === 10);
    quality < 1 && (quality = 10);
    const image = new CanvasImage(sourceImage);
    const imageData = image.getImageData();
    const pixels = imageData.data;
    const pixelCount = image.getPixelCount();
    let pixelArray: RGB[];
    for (let i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {
      offset = i * 4;
      r = pixels[offset + 0];
      g = pixels[offset + 1];
      b = pixels[offset + 2];
      a = pixels[offset + 3];
      // If pixel is mostly opaque and not white
      if (a >= 125) {
        if (!(r > 250 && g > 250 && b > 250)) {
          pixelArray.push([r, g, b]);
        }
      }
    }
  }
}
