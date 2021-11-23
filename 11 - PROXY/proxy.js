class Image {
  constructor() {
    if (this.constructor.name === "Image") {
      throw Error("This is abstract class");
    }
  }
  display() {}
}

class RealImage extends Image {
  constructor(fileName) {
    super();
    if (!fileName) throw Error("No filename provided");
    this.fileName = fileName;
  }

  display() {
    console.log("Displaying " + this.fileName);
  }

  laodFromDisk() {
    console.log("Loading ", this.fileName);
  }
}

class ImageProxy extends Image {
  realImage;
  constructor(fileName) {
    super();
    if (!fileName) throw Error("No filename provided");
    this.fileName = fileName;
  }
  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }
}

const Demo = (() => {
  const fileName = "abdou/images/11.png";
  const imageProxy = new ImageProxy(fileName);
  imageProxy.display();
})();
