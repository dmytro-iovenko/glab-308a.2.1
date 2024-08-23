// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     companion: {
//       name: "Frank",
//       type: "Flea",
//       inventory: ["small hat", "sunglasses"],
//     },
//   },
//   roll(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`);
//   },
// };

// adventurer.inventory.forEach((item) => {
//   console.log(`${adventurer.name} has ${item} in his inventory.`);
// });

// Test roll method by calling it a few times
// adventurer.roll();
// adventurer.roll();
// adventurer.roll();

// Character class, which defines generic character entities
class Character {
  constructor(name) {
    this.name = name;
    // character's health is standardized to a maximum of 100
    this.health = 100;
    // generic character starts with an empty inventory.
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

// Adventurer class with properties and methods specific to adventurers
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

// Companion class with properties and methods specific to the companions
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

// re-create Robin using the Character class
const robin = new Adventurer("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Character("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.inventory.forEach((item) => {
  console.log(`${robin.name} has ${item} in his inventory.`);
});

robin.roll();
robin.companion.roll();
robin.companion.companion.roll();
