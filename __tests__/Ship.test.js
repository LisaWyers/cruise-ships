/* globals describe it expect*/
const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  describe("with ports and an itinerary", () => {
    let ship;
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
      dover = new Port("Dover");
      calais = new Port("Calais");
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
    });

    test("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    test("it has a starting port", () => {
      expect(ship.currentPort).toBe(dover);
    });

    test("it can set sail", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
    });

    test("it can dock at a different port", () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toBe(calais);
      expect(calais.ships).toContain(ship);
    });

    test("can/'t sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });

    test("gets added to the port on instantion", () => {
      expect(dover.ships).toContain(ship);
    });
  });
});
