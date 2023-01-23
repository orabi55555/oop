//Constructor functions
function personConstructor (fullName, money, sleepMood, healthRate) {
    
    this.fullName = fullName
    this.money = money
    this.sleepMood=sleepMood
    this.healthRate=healthRate
  
    
    this.Sleep = function (hours) {
        
        if(hours==7){
            this.sleepMood="happy"
        }
        else if(hours<7){
            this.sleepMood="tired"
        }
        else if (hours>7) {
            this.sleepMood="lazy"
        } 
            
      console.log(`Hello, I'm ${this.sleepMood}`)
    }
    this.Eat = function (meals) {
        switch(meals){
            case 1: this.healthRate=50;break;
            case 2: this.healthRate=75;break;
            case 3: this.healthRate=100;break;
        }
            
      console.log(`My health rate =  ${this.healthRate}`)
    }
    this.Buy=function(items){
        this.money=this.money-(items*10)
        return this.money
    }
  }
  
  const person1 = new personConstructor('orabi', 100, 'happy', 100)
  console.log(person1)
  person1.Sleep(5)
  person1.Eat(1)
  console.log(`my money dec 20 its become `+ person1.Buy(2))




// Using Classes
class personClass{
    constructor (fullName, money, sleepMood, healthRate) {
        
        this.fullName = fullName
        this.money = money
        this.sleepMood=sleepMood
        this.healthRate=healthRate}
      
        Sleep = function (hours) {
            
            if(hours==7){
                this.sleepMood="happy"
            }
            else if(hours<7){
                this.sleepMood="tired"
            }
            else if (hours>7) {
                this.sleepMood="lazy"
            } 
                
          console.log(`Hello, I'm ${this.sleepMood}`)
        }
        Eat = function (meals) {
            switch(meals){
                case 1: this.healthRate=50;break;
                case 2: this.healthRate=75;break;
                case 3: this.healthRate=100;break;
            }
                
          console.log(`My health rate =  ${this.healthRate}`)
        }
        Buy=function(items){
            this.money=this.money-(items*10)
            return this.money
        }
      
      
}
  const person2 = new personClass('orabi', 100, 'happy', 100)
  console.log(person2)
  person2.Sleep(7)
  person2.Eat(3)
  console.log(`my money dec 10 its become `+ person2.Buy(1))


// Using Objects Linking to Other Objects (OLOO)
const personOLOO={
    init(fullName, money, sleepMood, healthRate) {
    
        this.fullName = fullName
        this.money = money
        this.sleepMood=sleepMood
        this.healthRate=healthRate
      
        
        this.Sleep = function (hours) {
            
            if(hours==7){
                this.sleepMood="happy"
            }
            else if(hours<7){
                this.sleepMood="tired"
            }
            else if (hours>7) {
                this.sleepMood="lazy"
            } 
                
          console.log(`Hello, I'm ${this.sleepMood}`)
        }
        this.Eat = function (meals) {
            switch(meals){
                case 1: this.healthRate=50;break;
                case 2: this.healthRate=75;break;
                case 3: this.healthRate=100;break;
            }
                
          console.log(`My health rate =  ${this.healthRate}`)
        }
        this.Buy=function(items){
            this.money=this.money-(items*10)
            return this.money
        }
        return this
      }

}

const person3 =Object.create(personOLOO).init('orabi', 100, 'happy', 100)
console.log(person3)
person3.Sleep(10)
person3.Eat(2)
console.log(`my money decrees 10 its become `+ person3.Buy(5))


//Factory functions

function personFactoryFunction(fullName, money, sleepMood, healthRate) {

    return{
    fullName,
    money,
    sleepMood,
    healthRate,
  
    
    Sleep (hours) {
        
        if(hours==7){
            this.sleepMood="happy"
        }
        else if(hours<7){
            this.sleepMood="tired"
        }
        else if (hours>7) {
            this.sleepMood="lazy"
        } 
            
      console.log(`Hello, I'm ${this.sleepMood}`)
    },
    Eat (meals) {
        switch(meals){
            case 1: this.healthRate=50;break;
            case 2: this.healthRate=75;break;
            case 3: this.healthRate=100;break;
        }
            
      console.log(`My health rate =  ${this.healthRate}`)
    },
    Buy(items){
        this.money=this.money-(items*10)
        return this.money
    }}
    
  }

  const person4 =personFactoryFunction('orabi', 100, 'happy', 100)
console.log(person4)
person4.Sleep(1)
person4.Eat(1)
console.log(`my money decrees 90 its become `+ person4.Buy(9))