// car class
export default class Car {
  Constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.Constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }
}
