/* globals describe it expect*/
const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");

describe("Itinerary", () => {
  it("can be instantiated", () => {
    const ports = ["Dover", "Calais"];
    const itinerary = new Itinerary(ports);

    expect(itinerary).toBeInstanceOf(Object);
  });
});

it("can have ports", () => {
  let portDummy = jest.fn();
  const dover = new Port(portDummy);
  const calais = new Port(portDummy);

  const itinerary = new Itinerary([dover, calais]);

  expect(itinerary.ports).toEqual([dover, calais]);
});
