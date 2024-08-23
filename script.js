const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
};


adventurer.inventory.forEach(item => {
    console.log(`${adventurer.name} has ${item} in his inventory.`)
});