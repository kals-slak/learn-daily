//type aliases
type user = {
    name: string;
    readonly id: number;
    nickname?:string;     //optional field
}

type credentials = {
    email: string;
    password: string;
}

type admin = user & credentials;     //intersection

const commonman: user = {
    id: 1,
    name: "abc",
}
// admin.id = 1; will cause an error since id is readonly


//abstract class
abstract class Phone{
    constructor(private battery:number, private processor: string, public sim: string){
    }
    toStringg(){
        console.log(this);
    }
    abstract changeSim(nsp:string):string;
    
    charging(){
        this.battery++;
    }
}

//class
class SmartPhone extends Phone{
;    constructor(public contactnumber: number, battery:number,processor: string,sim: string){ 
        super(battery, processor, sim);
     }
  
    changeSim(nsp: string): string {
        this.sim = nsp;
        return this.sim;
    }
     
    get getContactNumber() : number{
        return this.contactnumber;
    }
    set setContactNumber(num: number){     //setter function should not have any return type
        this.contactnumber = num;
    }
} 
let sp = new SmartPhone(1, 1, "some", "abc");
sp.toStringg();


//generics
function sayHola<T>(name:T):string{     //can accept any type of data
    return `vanakkam ${name}`;
}
// in case of array
function sayHolas<T>(name:T[]):string{     //can accept any type of data
    return `vanakkam ${name}`;
}
console.log(sayHolas([1,2,"hehe"]));