let items = Symbol(); //creating a identifier as private using symbol
class Stack{
    constructor(){
        this[items] = [];
    }
    pushItem(val){
        this[items].push(val);
    }
    peekItem(){
        if(this[items].length<=0) throw new Error("stack is empty");
        return this[items].slice(-1)[0];
    }
    popItem(){
        if(this[items].length<=0) throw new Error("stack is empty");
        let val = this[items].slice(-1)[0];
        this[items].splice(-1,1);
        return val;
    }
    getCount(){
        return this[items].length;
    }
}