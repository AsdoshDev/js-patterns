function Developer(name){
  this.name = name;
  this.type = 'Developer';
}

function Tester(name){
  this.name = name;
  this.type = 'Tester';
}

function say(){
  console.log(`Hey I'm ${this.name} and I'm a ${this.type}`)
}


function EmployeeFactory(){
  this.create = function(name,type){
    switch(type){      
    case 1 : 
      return new Developer(name);
      break;
      
    case 2 :
      return new Tester(name);
      break;
  }
  }
}


const empFactory = new EmployeeFactory();

let emp1 = empFactory.create("Shweta",1)

say.call(emp1)
