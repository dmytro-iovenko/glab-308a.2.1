const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

adventurer.inventory.forEach((item) => {
  console.log(`${adventurer.name} has ${item} in his inventory.`);
});

// Test roll method by calling it a few times
adventurer.roll();
adventurer.roll();
adventurer.roll();

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
