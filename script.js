/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// let nameInput = document.getElementById("nameInput");
// let professionInput = document.getElementById("professionInput");
// let ageInput = document.getElementById("ageInput");


//1. console.log all the employees who have the profession of a developer, 
// Using the map function.
function PrintDeveloperswithMap() {
  arr.map((items)=>{
    if( items.profession=== "developer" ){
      console.log(items);
  }
  })
}
//PrintDeveloperswithMap()         



//2. console.log all the employees who have the profession of a developer,
// Using the for each function. 
function PrintDeveloperbyForEach() {
  arr.forEach((items2)=>{
    if( items2.profession=== "developer" ){
      console.log(items2);
  }
  })
}
//PrintDeveloperbyForEach()          


//3. In this function, make another such employee object and append that to this array given below and then console.log it.
let arrayAdd= [{ 
  id:4,
  name:"susan",
  age:"20",
  profession:"intern"
} ]

function addData(){
//   arrayAdd.forEach((item)=>{
//   let Employee= document.createElement("div");
//   Employee.innerHTML= `${item.id} &nbsp;&nbsp; Name: ${item.name} &nbsp; Age: ${item.age}  &nbsp; Profession: ${item.profession}`;
//   arrayAdd.append(Employee);
//   console.log(addData)
//   })
// addData()


let Employee= { 
                id: 5, 
                name: "cena", 
                age: "15", 
                profession:"intern" 
              }; 
      arrayAdd.push(Employee);
      console.log(arrayAdd);
}
//addData()                           


//4. In this function, remove the object where the profession is admin. console.log the changed array.
function removeAdmin() {
   // Using the filter function
   let changedArr = arr.filter((items)=>{    
   if (items.profession !== "admin"){
    return items;
   }
   })  
   console.log(changedArr)
}
//removeAdmin()                         



//5. concatenate 2 arrays and console.log.
let arr2 = [
  { id: 6, name: "Amar", age: "20", profession: "developer" },
  { id: 7, name: "Akbar", age: "21", profession: "intern" },
  { id: 8, name: "Anthony", age: "22", profession: "admin" },
];

function concatenateArray() {

//   1. one way of Method -
        arrNew1 = arr.concat(arr2);       //Concatenating Two Arrays
        console.log(arrNew1);

//   2. second way of Method -
    //  arrayC = [...arr, ...arr2];       //Spread Operator
    //  console.log(arrayC)
 }
 //concatenateArray()                    