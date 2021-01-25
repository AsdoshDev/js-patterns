function Bluedart(){
  this.calculate = package => {
    return 1.23
  }
}

function DHL(){
  this.calculate = package => {
    return 3.44
  }
}

function Fedex(){
  this.calculate = package => {
    return 5.21
  }
}


const bluedart = new Bluedart();
const dhl = new DHL();
const fedex = new Fedex();

let package = {from : "Alabama", to : "Georgia" }

//instead of doing the below  : 

// bluedart.calculate(package);
// dhl.calculate(package);
// fedex.calculate(package);


// we can do this

function Shipping(){
  this.company = '';
  this.setStrategy = (company) => {
      this.company = company;
  }
  this.calculate = package => {
      return this.company.calculate(package)
  }
}

const shipping = new Shipping();

shipping.setStrategy(fedex)
shipping.calculate(package)

