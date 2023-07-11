//parent
function HtmlElement(){
    this.click = function(){console.log("clicked")}
    this.render = function(){return "Html Html"}
}
HtmlElement.prototype.focus = function(){console.log("in focus")}


//child1
function HtmlSelectElement(items = []){
    this.addItem = function(val){
        items.push(val);
    }
    this.removeItem = function(val){
        items.splice(items.indexOf(val),1);
    }
    this.render = function(){
        let out = "";
        for(let i  in items) out+= `<li>${i}</li>`;
        return "<select>"+out+"</select>";
    }

    Object.defineProperty(this, 'items', {
        get: function(){return items}
    })
}
HtmlSelectElement.prototype = new HtmlElement(); // inheriting from HtmlELement
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

//child2
function HtmlImgELement(src){
        this.render = function(){
            return `<img src=${src} />`;
        }
}
HtmlImgELement.prototype = new HtmlElement();
HtmlImgELement.prototype.constructor = HtmlImgELement;

