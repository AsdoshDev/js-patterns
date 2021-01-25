 function Iterator(items){
   this.items = items;
   this.index = 0;
 }

Iterator.prototype = {
  hasNext : function(){
    return this.index < this.items.length
  },
  
  next : function(){
  return this.items[this.index++]
  }
}


let arr = [1,2,3,4,5];


let itr = new Iterator(arr);

while(itr.hasNext()){
 console.log(itr.next())
}

