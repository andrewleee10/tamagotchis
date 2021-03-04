const inquirer = require('inquirer')

class DigitalPal {
  constructor (hungry, sleepy, bored, age, outside, houseCondition) {
    this.hungry = false
    this.sleepy = false
    this.bored = false
    this.age = 0
    this.outside = false
    this.houseCondition = 100
    this.feed = function () {
      if (this.hungry) {
        console.log('That was yummy!')
        this.hungry = false
        this.sleepy = true
      } else if (!(this.hungry)) {
        console.log("No thanks! I'm full.")
      }
    }
    this.sleep = function () {
      if (this.sleepy) {
        console.log("Zzzzzzzz")
        this.sleepy = false
        this.bored = true
        this.increaseAge()
      } else if (!(this.sleepy)) {
        console.log("No way! I'm not tired")
      }
    }
    this.play = function () {
      if (this.bored) {
        console.log("Yay! Let's play!")
        this.bored = false
        this.hungry = true
      } else if (!(this.bored)) {
        console.log("Not right now. Later?")
      }
    }
    this.increaseAge = function () {
      this.age += 1
      if (this.age === 1) {
        console.log(`Happy Birthday to me! I am ${this.age} year old!`)
      } else if (this.age > 1) {
        console.log(`Happy Birthday to me! I am ${this.age} years old!`)
      }
    }
    this.bark = function () {
      console.log("Woof! Woof!")
    }
    this.goOutside = function () {
      if (!(this.outside)) {
        console.log("Yay! I love the outdoors!")
        this.outside = true
        this.bark()
      } else if (this.outside) {
        console.log("We're already outside though...")
      }
    }
    this.goInside = function () {
      if (this.outside) {
        console.log("Do we have to? Fine...")
        this.outside = false
      } else if(!(this.outside)) {
        console.log("I'm already inside...")
      }
    }
    this.meow = function () {
      console.log("Meow! Meow!")
    }
    this.destroyFurniture = function () {
      if (this.houseCondition > 0) {
        this.houseCondition -= 10
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!")
        this.bored = false
        this.sleepy = true
      } else if (this.houseCondition === 0) {
        console.log("There's no more furniture to destroy :(")
      }
    }
    this.buyNewFurniture = function () {
      this.houseCondition += 50
      console.log("Are you sure about that?")
    }
  }
}

let dog = new DigitalPal()
let cat = new DigitalPal()

var userInput = function () {
  inquirer.prompt([
    type: "input"
    name: "command"
    message: "Enter a command"
  ])
    .then(({command}) => {
      console.log()
    })
    .catch (err => console.log(err))
}