///Create a class called pokemon with a constructer that takes in a name, type, and attack
///Create a method for this class that console logs that the pokemon used its attack ex: "Pickachu, used Thunderbolt"
///Instantiate 2 new pokemon then use the attack method for both of them.
//You can upload a zip file of this code or push it to a github repo
class pokemon {
  constructor(name, type, attack) {
    (this.name = name), (this.type = type), (this.attack = attack);
  }
}
let attacktype = () => {
  return this.attack;
};
const pickachu = new pokemon("picakchu", " Eletrictype", "thunderbold");
const evee = new pokemon("evee", "normaltype", "tail whip");
console.log(`${this.name}, is going to attact you ${this.attack}`);
