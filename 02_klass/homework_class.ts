//Code for the "Cultural Backpack" project (calculating costs for a class) (doesn't include the financial support by the goverment).
//Class representing a single cultural event (for example Museum visit, theater)
class CulturalEvent {
    constructor(
        protected name: string,
        protected ticketPrice: number,
        protected busCost: number
    ) { }


    //Method to display event details
    show(): void {
        console.log("Event: " + this.name, " Ticket: ", this.ticketPrice, " Bus rent: ", this.busCost);
    };

    //Method to only get the name
    getName(): string {
        return this.name
    };

    //Method to calculate total cost for a specific number of students (ticket price * number of students) + fixed bus cost
    calculateTotalCost(studentCount: number): number {
        return (this.ticketPrice * studentCount) + this.busCost
    };

    //Method to combine two existing events into one larger event (Full day trip)
    combineEvents(other: CulturalEvent): CulturalEvent {
        let newName = "Combine trip " + this.name + " & " + other.name;
        let totalTicket = this.ticketPrice + other.ticketPrice;
        let totalBus = this.busCost + other.busCost;
        return new CulturalEvent(newName, totalTicket, totalBus);
    };

    //Method to modify the state of the object (applies a discount to the ticket price)
    applyDiscount(): void {
        this.ticketPrice = this.ticketPrice - 2;
        if (this.ticketPrice < 0) {
            this.ticketPrice = 0;
        }
        console.log("--- Discount applied to ", this.name, "!");
    };
};

//Adaptations
const studentCount = 24;

//Instances
let event1: CulturalEvent = new CulturalEvent("Estonian National Museum (ERM)", 7, 150);
let event2: CulturalEvent = new CulturalEvent("Vanemuine Theater", 12, 100);

event1.show();
console.log("Total cost for class: ", event1.calculateTotalCost(studentCount), "EUR");

event2.show();
console.log("Total cost for class: ", event2.calculateTotalCost(studentCount), "EUR");

console.log("\n--- APPLYING DISCOUNT ---")
event2.applyDiscount();
event2.show();
console.log("New cost for class ", event2.calculateTotalCost(studentCount), "EUR");

console.log("\n--- COMBINED TRIP ---");
let fullDayTrip = event1.combineEvents(event2);
fullDayTrip.show();
console.log("Full day cost for class: ", fullDayTrip.calculateTotalCost(studentCount), "EUR");

//Year plan calculation (array)
console.log("\nYear plan:")
let yearPlan: CulturalEvent[] = [
    new CulturalEvent("Autumn: Art Museum", 5, 80),
    new CulturalEvent("Winter: Science Centre", 9, 175),
    new CulturalEvent("Spring: Zoo Visit", 4, 120),
];

let totalBudgetNeeded = 0;

for (let event of yearPlan) {
    let cost = event.calculateTotalCost(studentCount);
    totalBudgetNeeded += cost;
    console.log(event.getName(), " total cost: ", cost, "EUR");
}

console.log("\nTotal yearly budget required: ", totalBudgetNeeded, "EUR")
