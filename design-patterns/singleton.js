var SiteSettings = /** @class */ (function () {
    //making the constructor 
    function SiteSettings() {
        this.theme = "dark";
    }
    SiteSettings.getInstance = function () {
        if (!this.instance) {
            this.instance = new SiteSettings();
        }
        return this.instance;
    };
    return SiteSettings;
}());
var obj1 = SiteSettings.getInstance();
console.log(obj1.theme);
obj1.theme = "white";
var obj2 = SiteSettings.getInstance();
console.log(obj2.theme);
