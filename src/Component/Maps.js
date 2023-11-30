import React from 'react'

function Maps() {
    const numbers=[2,4,6,8,10];
     var newNumbers=[];
     numbers.forEach(function(num){
        if(num > 4){
            newNumbers.push(num)
        }
     })
     console.log(newNumbers);

     const fitsNumbers=numbers.filter((num) => num > 4);
     console.log(fitsNumbers);


     const reduceNumbers=numbers.reduce((accumulator,currentNumber)=>accumulator +currentNumber);
     console.log(reduceNumbers);

     const southmenu=["dosa","idly","vada","pongal"];
     const Northmenu=["panipuri","roti","pavbaji"];

     const menuItems=[...southmenu,{name:"dishes"},...Northmenu];
     console.log(menuItems);
     
     const name="yesh";
     const subject="React js";

     console.log(`my name is ${name} and iam going to take ${subject}`)
  return (
    <div>Maps</div>
  )
}

export default Maps