var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var commonman = {
    id: 1,
    name: "abc",
};
// admin.id = 1; will cause an error since id is readonly
//abstract class
var Phone = /** @class */ (function () {
    function Phone(battery, processor, sim) {
        this.battery = battery;
        this.processor = processor;
        this.sim = sim;
    }
    Phone.prototype.toStringg = function () {
        console.log(this);
    };
    Phone.prototype.charging = function () {
        this.battery++;
    };
    return Phone;
}());
//class
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(contactnumber, battery, processor, sim) {
        var _this = _super.call(this, battery, processor, sim) || this;
        _this.contactnumber = contactnumber;
        return _this;
    }
    ;
    SmartPhone.prototype.changeSim = function (nsp) {
        this.sim = nsp;
        return this.sim;
    };
    Object.defineProperty(SmartPhone.prototype, "getContactNumber", {
        get: function () {
            return this.contactnumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SmartPhone.prototype, "setContactNumber", {
        set: function (num) {
            this.contactnumber = num;
        },
        enumerable: false,
        configurable: true
    });
    return SmartPhone;
}(Phone));
var sp = new SmartPhone(1, 1, "some", "abc");
sp.toStringg();
