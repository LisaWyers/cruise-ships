/* globals describe it expect*/
const Port = require("../src/Port.js");

describe("Port", () => {
  it("can be instantiated", () => {
    const port = new Port("Dover");

    expect(port).toBeInstanceOf(Object);
  });
});

it("has a name property", () => {
    const port = new Port("Dover");

    expect(port.currentName).toBe("Dover");
});