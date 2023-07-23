/* globals describe it expect*/
const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    const ports = ["Dover", "Calais"]
    const itinerary = new Itinerary(ports);

    expect(itinerary).toBeInstanceOf(Object);
  });
});

it("can have ports", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    const itinerary = new Itinerary ([dover,calais]);

    expect(itinerary.ports).toEqual([dover,calais]);
});
