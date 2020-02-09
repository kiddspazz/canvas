class Color {
  constructor(r, g, b, a) {
    if (!Color.rgbIsValid(r, g, b)) {
      throw new Error('rgb is not an integer');
    }
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = Number.isInteger(a) ? a : 255;
  }

  rgbString() {
    return (`rgb(${this.r},${this.g},${this.b})`);
  }

  static rgbIsValid(r, g, b) {
    return (Number.isInteger(r) && Number.isInteger(g) && Number.isInteger(b));
  }
}

module.exports = Color;
