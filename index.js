// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

AMAZON INterview

const tableNames = ['orders', 'customers', ...];
const clearTable = (tableName) => { /* ... assume its provided by a library.. */ };

const processConcurrently = (tableNames) => {
    const clearOperation= []
    tableNames.forEach(tableName=>{
        clearOperation.push(clearTable(tableName))
    })
    
    let operaTionResults = Promise.all(clearOperations)
    
    
    return operaTionResults
    
    // write your code here
}

const processSequentially = async(tableNames) => {
     let operaTionResult;
              
     for(let i = 0; i <= tableNames.length; i++){
         try{
             operaTionResult = await clearTable(tableNames[i])
         }catch(err=>{
            operaTionResult = err
         })
     }
    
    
    return operaTionResult
    
   
    // write your code here
}