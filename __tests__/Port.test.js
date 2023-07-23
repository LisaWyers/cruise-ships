/* globals describe it expect*/
const Port = require("../src/Port.js");

describe("Port", () => {
    let port;
    let ship;
    let titanic;
    let queenMary; 

    beforeEach (() => {
        port = new Port("Dover");
        ship = {};
        titanic = {};
        queenMary = {};
    });

    test("can be instantiated", () => {
        expect(port).toBeInstanceOf(Object);
    });

    test("has a name property", () => {
        expect(port.currentName).toBe("Dover");
    });
test("it can add a ship", () => {
    port.addShip(ship);

    expect(port.ships).toContain(ship);
});

test("it can remove a ship", () => {
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
});
});




  