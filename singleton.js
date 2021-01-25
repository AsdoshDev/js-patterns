const Singleton = (function(){
  
  let pManager;
  
  function ProcessManager(){
    this.numProcess = 0;
  }
  
  const createProcessingManager =  () => {
    pManager = new ProcessManager();
    return pManager;
  }
  
  return {
    getProcessManager : () => {
      if(!pManager)
        pManager =  createProcessingManager();
      return pManager
    }
  }
  
})();

const instance1 =  Singleton.getProcessManager()
const instance2 =  Singleton.getProcessManager()

console.log(instance1 === instance2)
