const axios=require('axios');
const objectstocsv=require("objects-to-csv");
const readline = require("readline");
const ac = new AbortController();
const signal = ac.signal;
const makegetrequest = async () => {
    

  //Ques. 1 ....
    let res=await axios.get('https://random-data-api.com/api/v2/users?size=5')
    let data=res.data;
    console.log(data);
    const users = new objectstocsv(data);
 
  // Save to file:
  await users.toDisk('./users.csv');
 
  

  //Ques. 2 ....
  
  
  data = data.sort((a, b) => {
    if (a.first_name < b.first_name) {
      return -1;
    }
  });

  const usersorted = new objectstocsv(data);
  await usersorted.toDisk('./usersorted.csv');

  //Ques. 3 ....


  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter the id? ", { signal }, (answer) => {
    var answer = data.find(answer=>answer.id ||answer.username==name);
    console.log(answer);
    console.log("Closing the console");
    process.exit();
  });

 
  





 
}
makegetrequest();