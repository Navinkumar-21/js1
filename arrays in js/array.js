const activities = [ 'eat', 'work', 'sleep'];
console.log("Array : " + activities);
console.log("Find the length of the array : " + activities.length);
activities[0]='swim';
console.log("Change eat to swim by using array method directly  : " + activities); 
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("lemon");
console.log("added lemon array : " + fruits);
fruits.unshift("kiwi");
console.log("add kiwi at starting : " + fruits);
fruits.pop();
console.log("delete last element : " + fruits);
fruits.shift();
console.log("delete first element : " + fruits);



const fruitSplice = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruitSplice Array : " + fruitSplice);

const addFruitSplice = ["Banana", "Orange", "Apple", "Mango"];
addFruitSplice.splice(2,0,"lemon","kiwi")
console.log("added in-between: " + addFruitSplice);
const removeFruitSplice = ["Banana", "Orange", "Apple", "Mango"]
removeFruitSplice.splice(1,2,"lemon","kiwi")
console.log("removed : " + removeFruitSplice);


const fruitSlice = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const outputFruitSlice = fruitSlice.slice(1,5);
console.log("New array : " + outputFruitSlice);

const fruitSlicing = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const FruitSlice = fruitSlice.slice(1,4);
console.log("New array from orange to apple : " + FruitSlice);





const fruitsMethod = ["Banana", "Orange", "Apple", "Mango"];
fruitsMethod.sort();
console.log("Alphapetical order: " + fruitsMethod);
fruitsMethod.reverse();
console.log("reverse : " + fruitsMethod);




const numbers = [5, 4, 9, 6, 5];
const result = numbers.filter(value => {
    return value>18;
}
);
if(result.length==numbers.length)
{
 console.log("true");

}
else
{
    console.log("false");
}


if(result.length!=0)
{
 console.log("true");

}
else
{
    console.log("false")
}

const arrayFruits = ["Apple", "Orange", "Apple", "Mango"];
const index = arrayFruits.indexOf("Orange");
console.log("index of orange : "+index)

const index1 = arrayFruits.lastIndexOf("Apple");
console.log("index of Apple : "  + index1)


const mangoFruits = arrayFruits.filter( value => {
    return value == "Mango";
}
);

if(mangoFruits.length!=0)
{
 console.log("the mango is present in the given array : true");

}
else
{
    console.log("false")
}
