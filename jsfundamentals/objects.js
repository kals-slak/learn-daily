//address objects
function showAddress(obj){
    for(let i in obj) console.log(i+": "+obj[i]);
}
let address = {street:"sannathi street",city:"Nanguneri",pincode:"627108"};
// showAddress(address);


//factory and constructor function
//factory
function createAddress(street,city,pincode){
    return {
        street,
        city,
        pincode,
    }
}
let address1= createAddress("sannathi street","nanguneri","627108");
//constructor
function Address(street,city,pincode){
   this.street=street;
   this.city=city;
   this.pincode=pincode;
}
let address2= new Address("sannathi street","nanguneri","627108");


//equality of objects
function areEqual(obj1,obj2){
    for(let i in obj1){
        if(obj1[i]!=obj2[i]) return false;
    }
    return true;
}

function areSame(obj1,obj2){
    return obj1===obj2;
}
let address3 = address1;
// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address3));


//blog post object
let blogpost = {
    title:"a",
    body:"data tata",
    author:"someoneelse",
    views:"10",
    comments:[
        {author:"someone",body:"data"},
        {author:"someone",body:"data"},
    ],
    isLive:false,
}

//constructor function for post
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

//price range
let priceRange = [];
priceRange.push({
    lower:10,
    upper:100,
    category:"inexpensive",
    label:"$",
});
priceRange.push({
    lower:101,
    upper:1000,
    category:"medium",
    label:"$$",
});
priceRange.push({
    lower:1001,
    upper:10000,
    category:"expensive",
    label:"$$$",
});
console.log(priceRange);