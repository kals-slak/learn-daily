//array from range
function arrayFromRange(start, end){
    let res = [];
    for(let i=start;i<=end;i++) res.push(i);
    return res;
}
// console.log(arrayFromRange(1, 5));

//includes
function customIncludes(arr, element){
    for(let i of arr) if(i==element) return true;
    return false;
}

//except
function except(arr, excluded){
    let res = [];
    for(let i in arr){
        if(!excluded.includes(arr[i])) res.push(arr[i]);
    }
    return res;
}

//move element
function move(list, index, offset){
    let arr = [...list];
    let newIndex = index + offset;
    if(newIndex<0 || newIndex>=arr.length){
        console.error("Invalid offset");
        return ;
    }
    let ele = arr.splice(index, 1)[0];
    arr.splice(newIndex, 0, ele);
    return arr;
}
// console.log(move([1,2,3,4], 1, -1));

//occurance
function occuranceCount(arr, ele){
    return arr.reduce( (acc, cur)=> {
        if(cur===ele) return acc+1;
        return acc;
    }, 0);
}

//max
function findMax(arr){
    return arr.reduce( (acc, curr)=> (curr > acc)? curr : acc , -Infinity);
}
// console.log( findMax([-12,-11]));

//movies
const movies = [
    {title:"a", year: 2018, rating: 4.5},
    {title:"b", year: 2018, rating: 4.7},
    {title:"c", year: 2018, rating: 3},
    {title:"d", year: 2017, rating: 4.5},
];

let result = movies.filter( cur => cur.year===2018 && cur.rating > 4).sort((a,b)=> b.rating - a.rating).map(e => e.title);
console.log(result);
