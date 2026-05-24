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
var ProgramStatus;
(function (ProgramStatus) {
    ProgramStatus["DRAFT"] = "DRAFT";
    ProgramStatus["PUBLISHED"] = "PUBLISHED";
    ProgramStatus["ARCHIVED"] = "ARCHIVED";
})(ProgramStatus || (ProgramStatus = {}));
var User = /** @class */ (function () {
    function User(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var CulturalInstitution = /** @class */ (function () {
    function CulturalInstitution(id, name, registryCode) {
        this.id = id;
        this.name = name;
        this.registryCode = registryCode;
        this.programs = [];
    }
    CulturalInstitution.prototype.addProgramToList = function (p) {
        this.programs.push(p);
    };
    CulturalInstitution.prototype.getPrograms = function () {
        return this.programs;
    };
    CulturalInstitution.prototype.findProgram = function (id) {
        return this.programs.find(function (p) { return p.getId() === id; });
    };
    CulturalInstitution.prototype.getName = function () {
        return this.name;
    };
    return CulturalInstitution;
}());
var Curator = /** @class */ (function (_super) {
    __extends(Curator, _super);
    function Curator(id, name, email, password, institution) {
        var _this = _super.call(this, id, name, email, password) || this;
        _this.institution = institution;
        return _this;
    }
    Curator.prototype.addProgram = function (p) {
        this.institution.addProgramToList(p);
    };
    Curator.prototype.editProgram = function (p, title, description, price) {
        p.updateDetails(title, description, price);
    };
    return Curator;
}(User));
var Program = /** @class */ (function () {
    function Program(id, title, description, price, location) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.location = location;
        this.status = ProgramStatus.DRAFT;
    }
    Program.prototype.updateDetails = function (title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
    };
    Program.prototype.getId = function () {
        return this.id;
    };
    Program.prototype.getTitle = function () {
        return this.title;
    };
    Program.prototype.getDescription = function () {
        return this.description;
    };
    Program.prototype.getPrice = function () {
        return this.price;
    };
    Program.prototype.getStatus = function () {
        return this.status;
    };
    Program.prototype.setStatus = function (status) {
        this.status = status;
    };
    Program.prototype.getLocation = function () {
        return this.location;
    };
    return Program;
}());
