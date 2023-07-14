class SiteSettings{

    //single instance for the class
    static instance:SiteSettings;
    theme:string = "dark";
    //making the constructor private, hence obj cannot be instantitated
    private constructor(){}

    //can only get obj through getInstance
    static getInstance():SiteSettings{
        if(!this.instance){
            this.instance = new SiteSettings();
        }
        return this.instance;
    }
}
//testing 
const obj1:SiteSettings = SiteSettings.getInstance();
console.log(obj1.theme);
obj1.theme = "white";
const obj2:SiteSettings = SiteSettings.getInstance();
console.log(obj2.theme);
