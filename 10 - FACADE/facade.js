class Buffer extends Array {
  constructor(width = 30, height = 20) {
    super();
    this.width = width;
    this.height = height;
  }
  write(text, pos) {
      // add text to buffer ......
  }
}

class Viewport {
  constructor(buffer = new Buffer()) {
    this.buffer = buffer;
    this.offcet = 0;
  }
  append(text, pos) {
    this.buffer.write(text, pos + this.offcet);
  }

  getChrtAt(index) {
    return this.buffer[this.offcet + index];
  }
}

class Console {
  constructor() {
    this.buffer = new Buffer();
    this.currentViewport = new Viewport(this.buffer);
    this.buffers = [this.buffer];
    this.viewports = [this.viewport];
  }

  write(text) {
    this.currentViewport.buffer.write(text);
  }

  getChrtAt(index) {
    this.currentViewport.getChrtAt(index);
  }
}


// ! implementation ...

let console = new Console();
console.warn("Some text to add.");
// We implement facede design pattern... 
// Console hides complexities of buffers and viewports...
// The interface here is Console
