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
  static MAX_HEALTH = 100;
  constructor(name) {
    this.name = name;
    // character's health is standardized to a maximum of 100
    this.health = Character.MAX_HEALTH;
    // generic character starts with an empty inventory.
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
}

// Adventurer class with properties and methods specific to adventurers
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(
        `${role} role should match one of predifined roles: [${Adventurer.ROLES.join(
          ", "
        )}]`
      );
    }
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  //
  duel(adventurer) {
    // create opposing rolls for each adventurer
    do {
      let userRoll = this.roll();
      let enemyRoll = adventurer.roll();
      switch (true) {
        case userRoll < enemyRoll:
          console.log(
            `${adventurer.name} hits ${this.name}. ${this.name} has ${--this
              .health} hp.`
          );
          break;
        case enemyRoll < userRoll:
          console.log(
            `${this.name} hits ${adventurer.name}. ${
              adventurer.name
            } has ${--adventurer.health} hp.`
          );
          break;
      }
    } while (this.health > 50 && adventurer.health > 50);
    // log the winner of the duel: the adventurer still above 50 health.
    console.log(
      `${this.health > adventurer.health ? this.name : adventurer.name} wins.`
    );
  }
}

// Companion class with properties and methods specific to the companions
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

// Factory function to generate adventurers with specific role
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    return newAdventurer;
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

// Create "healer factory"
const healers = new AdventurerFactory("Healer");
// Create Robin's character as a healer
const robin = healers.generate("Robin");
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

// Create "fighter factory"
const fighters = new AdventurerFactory("Fighter");
// Create Bob's character as a fighter
const bob = fighters.generate("Bob");

bob.duel(robin);
