class BudgetItem {
    protected height: number = 20;

    constructor(
        protected name: string,
        protected cost: number,
        protected g: CanvasRenderingContext2D,
        protected x: number,
        protected y: number
    ) {
        this.draw();
    }
    draw() {
        this.g.clearRect(this.x, this.y - 20, 500, 40);
        this.g.fillStyle = "Black";
        this.g.font = "16px Arial";
        this.g.fillText(this.name + " (" + this.cost + "EUR)", this.x, this.y);
        this.g.fillStyle = "royalblue";
        this.g.fillRect(this.x + 220, this.y - 15, this.cost, this.height);
    }

    setCost(newCost: number) {
        this.cost = newCost;
        this.draw();
    }

    getCost(): number {
        return this.cost;
    }
}

class BudgetTracker {
    protected items: BudgetItem[] = [];

    constructor(
        protected g: CanvasRenderingContext2D,
        protected maxBudget: number
    ) { }

    addItem(item: BudgetItem) {
        this.items.push(item);
    }

    getTotalCost(): number {
        let total = 0;
        for (let item of this.items) {
            total += item.getCost();
        }
        return total;
    }

    drawSummary() {
        let total = this.getTotalCost();

        this.g.clearRect(10, 180, 400, 60);
        this.g.font = "18px Arial";
        this.g.fillStyle = "black";
        this.g.fillText("Total sum: " + total + " / " + this.maxBudget + "EUR", 10, 200);
        
        if (total > this.maxBudget) {
            this.g.fillStyle = "red";
            this.g.fillText("Warning: The budget has been exceeded", 10, 225);
        } else {
            this.g.fillStyle = "green";
            this.g.fillText("The budget is in order!", 10, 225);
        }
    }

    updateItemAndSummary(index: number, newCost: number) {
        if (this.items[index]) {
            this.items[index].setCost(newCost);
            this.drawSummary();
        }
    }
}