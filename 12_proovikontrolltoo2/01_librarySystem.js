"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.Dvd = exports.Book = exports.LibraryItem = void 0;
//Base class
var LibraryItem = /** @class */ (function () {
    function LibraryItem(inputId, inputTitle, inputAuthor, inputYear) {
        if (inputId.trim() === "")
            throw new Error("Id cannot be empty");
        this.id = inputId;
        this.title = inputTitle;
        this.author = inputAuthor;
        this.year = inputYear;
    }
    LibraryItem.prototype.getId = function () { return this.id; };
    LibraryItem.prototype.getTitle = function () { return this.title; };
    LibraryItem.prototype.getAuthor = function () { return this.author; };
    LibraryItem.prototype.getYear = function () { return this.year; };
    LibraryItem.prototype.getSummary = function () { return "[Item] ".concat(this.title); };
    return LibraryItem;
}());
exports.LibraryItem = LibraryItem;
var Dvd = /** @class */ (function (_super) {
    __extends(Dvd, _super);
    function Dvd(inputId, inputTitle, inputAuthor, inputYear, inputDuration) {
        var _this = _super.call(this, inputId, inputTitle, inputAuthor, inputYear) || this;
        if (inputDuration <= 0)
            throw new Error("Duration must be positive");
        _this.duration = inputDuration;
        return _this;
    }
    Dvd.prototype.getDvdSummary = function () {
        return "[DVD] ".concat(this.title, " (").concat(this.year, ") - ").concat(this.author);
    };
    Dvd.prototype.toFillLine = function () {
        return "[DVD]|".concat(this.id, "|").concat(this.title, "|").concat(this.author, "|").concat(this.year, "|").concat(this.duration);
    };
    return Dvd;
}(LibraryItem));
exports.Dvd = Dvd;
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(inputId, inputTitle, inputAuthor, inputYear, inputPages, inputISBN) {
        var _this = _super.call(this, inputId, inputTitle, inputAuthor, inputYear) || this;
        if (inputPages <= 0)
            throw new Error("Pages must be positive");
        _this.pages = inputPages;
        _this.ISBN = inputISBN;
        return _this;
    }
    Book.prototype.getBookSummary = function () {
        return "[Book] ".concat(this.title, " (").concat(this.year, ")");
    };
    Book.prototype.toFillLine = function () {
        return "[Book]|".concat(this.id, "|").concat(this.title, "|").concat(this.author, "|").concat(this.year, "|").concat(this.pages, "|").concat(this.ISBN);
    };
    return Book;
}(LibraryItem));
exports.Book = Book;
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    Library.prototype.addItem = function (newItem) {
        this.items.push(newItem);
    };
    Library.prototype.getAllItems = function () {
        return this.items;
    };
    Library.prototype.toText = function () {
        return this.items.map(function (i) { return i.toFillLine(); }).join("\n");
    };
    Library.prototype.loadFromText = function (text) {
        var lines = text.split("\n");
        var errors = [];
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            try {
                var parts = line.split("|");
                if (parts[0] === "BOOK") {
                    this.addItem(new Book(parts[1], parts[2], parts[3], Number(parts[4]), Number(parts[5]), parts[6]));
                }
                else if (parts[0] === "DVD") {
                    this.addItem(new Dvd(parts[1], parts[2], parts[3], Number(parts[4]), Number(parts[5])));
                }
            }
            catch (e) {
                errors.push("Error" + line);
            }
        }
        return errors;
    };
    return Library;
}());
exports.Library = Library;
var item1 = new LibraryItem("1", "Generic Item", "unknown", 2020);
console.log(item1);
var book1 = new Book("2B", "Harry Potter", "J. K. Rowling", 1990, 300, "AA334455");
console.log(book1);
