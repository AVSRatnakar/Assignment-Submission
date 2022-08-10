//LetsUpgrade JavaScript Assignment :- 
//1. Write a program to print a array of five names in reverses order.
let names = ["Ratnakar","Raju","Nava Kiran","Amrutha","Sri vidya"];
// To print the array elements in reverse order we can use "reverse()" method 
// console.log(array_1.reverse());
// We can also use for loop :
for(let i=4;i>=0;i--)
{
    console.log(names[i]);
}
/*2. Create a array of country objects having name capital and population as properties.
 Print the countries whose population is less than 2000 */
let countries = [
    {
        name : "India",
        capital : "New Delhi",
        population : 2250
    },
    {
        name : "Nepal",
        capital : "Tibet",
        population : 1154
    },
    {
        name : "Japan",
        capital : "Tokyo",
        population : 1687
    },
    {
        name : "China",
        capital : "Beijing",
        population : 2540
    },
]
 for (let i=0;i<=3;i++){
    if (countries[i].population < 2000){
        console.log(countries[i].name)
    }
 }