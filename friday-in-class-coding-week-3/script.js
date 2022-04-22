/**1) Create 3 arrays, One with all String data types, one with all Numbers data types,
 *  and one with Boolean data types.  You will need to add sample data to each array (don't over think this).
 *  Each array should have at least 5 elements.. 

2) Next create a function that can take any of these arrays as a parameter and add an additional String, 
Number, or Boolean depending on which array was passed in. 

Hint: You will need an array method to add new items to the end of the array. You will also need 
conditionals set up to check the item at index 0 so you know what array was passed into the function.  
You can use the typeof method to determine what type of data is in the array.  

 */

let firstArray = ["John", "Jack", "Jill", "Ben", "Henry"];

let secondArray = [10, 12, 29, 34, 209];

let thirdArray = [true, false, true, true, false];

//Function checks the first index of array to determine content type, then add the
//corresponding item
function addItem(arr) {
    if (typeof arr[0] === "string") {
        arr.push("James");
    } else if (typeof arr[0] === "number"){
        arr.push(38);
    } else if (typeof arr[0] === "boolean") {
        arr.push(false);
    } else {
        console.log("enter valid array");
    };

    return arr;
}

//console.log(addItem(firstArray));
//console.log(addItem(secondArray));
//console.log(addItem(thirdArray));

