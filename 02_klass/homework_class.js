//Code for the "Cultural Backpack" project (calculating costs for a class) (doesn't include the financial support by the goverment).
//Class representing a single cultural event (for example Museum visit, theater)
var CulturalEvent = /** @class */ (function () {
    function CulturalEvent(name, ticketPrice, busCost) {
        this.name = name;
        this.ticketPrice = ticketPrice;
        this.busCost = busCost;
    }
    //Method to display event details
    CulturalEvent.prototype.show = function () {
        console.log("Event: " + this.name, " Ticket: ", this.ticketPrice, " Bus rent: ", this.busCost);
    };
    ;
    //Method to only get the name
    CulturalEvent.prototype.getName = function () {
        return this.name;
    };
    ;
    //Method to calculate total cost for a specific number of students (ticket price * number of students) + fixed bus cost
    CulturalEvent.prototype.calculateTotalCost = function (studentCount) {
        return (this.ticketPrice * studentCount) + this.busCost;
    };
    ;
    //Method to combine two existing events into one larger event (Full day trip)
    CulturalEvent.prototype.combineEvents = function (other) {
        var newName = "Combine trip " + this.name + " & " + other.name;
        var totalTicket = this.ticketPrice + other.ticketPrice;
        var totalBus = this.busCost + other.busCost;
        return new CulturalEvent(newName, totalTicket, totalBus);
    };
    ;
    //Method to modify the state of the object (applies a discount to the ticket price)
    CulturalEvent.prototype.applyDiscount = function () {
        this.ticketPrice = this.ticketPrice - 2;
        if (this.ticketPrice < 0) {
            this.ticketPrice = 0;
        }
        console.log("--- Discount applied to ", this.name, "!");
    };
    ;
    return CulturalEvent;
}());
;
//Adaptations
var studentCount = 24;
//Instances
var event1 = new CulturalEvent("Estonian National Museum (ERM)", 7, 150);
var event2 = new CulturalEvent("Vanemuine Theater", 12, 100);
event1.show();
console.log("Total cost for class: ", event1.calculateTotalCost(studentCount), "EUR");
event2.show();
console.log("Total cost for class: ", event2.calculateTotalCost(studentCount), "EUR");
console.log("\n--- APPLYING DISCOUNT ---");
event2.applyDiscount();
event2.show();
console.log("New cost for class ", event2.calculateTotalCost(studentCount), "EUR");
console.log("\n--- COMBINED TRIP ---");
var fullDayTrip = event1.combineEvents(event2);
fullDayTrip.show();
console.log("Full day cost for class: ", fullDayTrip.calculateTotalCost(studentCount), "EUR");
//Year plan calculation (array)
console.log("\nYear plan:");
var yearPlan = [
    new CulturalEvent("Autumn: Art Museum", 5, 80),
    new CulturalEvent("Winter: Science Centre", 9, 175),
    new CulturalEvent("Spring: Zoo Visit", 4, 120),
];
var totalBudgetNeeded = 0;
for (var _i = 0, yearPlan_1 = yearPlan; _i < yearPlan_1.length; _i++) {
    var event_1 = yearPlan_1[_i];
    var cost = event_1.calculateTotalCost(studentCount);
    totalBudgetNeeded += cost;
    console.log(event_1.getName(), " total cost: ", cost, "EUR");
}
console.log("\nTotal yearly budget required: ", totalBudgetNeeded, "EUR");
