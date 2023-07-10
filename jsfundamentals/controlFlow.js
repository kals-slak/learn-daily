// potrait of landscape
function isLandscape(width, height){
    return (width > height);
}

//Fizz Buzz
function fizzBuzz(input){
    let out="";
    if(input%3==0) out+="fizz";
    if(input%5==0) out+="buzz";
    return out? out : input;
}

//Demerit points
function speedLimit(speed){
    if(speed<75) return "OK";
    let points = Math.floor((speed-70)/5);
    
    return points > 12 ?"License suspended": points+" is your points";
}

//even or odd
function evenOrOdd(limit){
    for(let i=0;i<=limit;i++){
        console.log(i+" "+(i%2==0? "Even" : "Odd"));
    }
}

//count truthy
function countTruthy(lst){
    let c=0;
    for(let i of lst){
        if(i) c++;
    }
    return c;
}

//string properties in object
function showProperties(obj){
    for(let i in obj){
        if(typeof obj[i] == "string"){
            console.log(i+" "+obj[i]);
        }
    }
}

//sum of multiples of 3 and 5 within given limit
function sum(limit){
    let total=0;
    for(let i=0;i<=limit;i++){
        if(i%3==0 || i%5==0) total+= i;
    }
    return total;
}

//calculate grade based on average mark
function calcGrade(marks){
    let avg=0;
    for(let i of marks) avg+=i;
    avg/= marks.length;
    if(avg>=90) return "A";
    else if(avg>=80) return "B";
    else if(avg>=70) return "C";
    else if(avg>=60) return "D";
    else return "F";
}

//show stars
function showStars(row){
    for(let i=0;i<row;i++){
        for(let j=0;j<=i;j++){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
}

//show prime numbers within given limit
function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i==0) return false;
    }
    return true;
}

function showPrime(limit){
    for(let i=2;i<=limit;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
