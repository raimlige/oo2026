var BudgetItem = /** @class */ (function () {
    function BudgetItem(name, cost, g, x, y) {
        this.name = name;
        this.cost = cost;
        this.g = g;
        this.x = x;
        this.y = y;
        this.height = 20;
        this.draw();
    }
    BudgetItem.prototype.draw = function () {
        this.g.clearRect(this.x, this.y - 20, 500, 40);
        this.g.fillStyle = "Black";
        this.g.font = "16px Arial";
        this.g.fillText(this.name + " (" + this.cost + "EUR)", this.x, this.y);
        this.g.fillStyle = "royalblue";
        this.g.fillRect(this.x + 220, this.y - 15, this.cost, this.height);
    };
    BudgetItem.prototype.setCost = function (newCost) {
        this.cost = newCost;
        this.draw();
    };
    BudgetItem.prototype.getCost = function () {
        return this.cost;
    };
    return BudgetItem;
}());
var BudgetTracker = /** @class */ (function () {
    function BudgetTracker(g, maxBudget) {
        this.g = g;
        this.maxBudget = maxBudget;
        this.items = [];
    }
    BudgetTracker.prototype.addItem = function (item) {
        this.items.push(item);
    };
    BudgetTracker.prototype.getTotalCost = function () {
        var total = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.getCost();
        }
        return total;
    };
    BudgetTracker.prototype.drawSummary = function () {
        var total = this.getTotalCost();
        this.g.clearRect(10, 180, 400, 60);
        this.g.font = "18px Arial";
        this.g.fillStyle = "black";
        this.g.fillText("Total sum: " + total + " / " + this.maxBudget + "EUR", 10, 200);
        if (total > this.maxBudget) {
            this.g.fillStyle = "red";
            this.g.fillText("Warning: The budget has been exceeded", 10, 225);
        }
        else {
            this.g.fillStyle = "green";
            this.g.fillText("The budget is in order!", 10, 225);
        }
    };
    BudgetTracker.prototype.updateItemAndSummary = function (index, newCost) {
        if (this.items[index]) {
            this.items[index].setCost(newCost);
            this.drawSummary();
        }
    };
    return BudgetTracker;
}());
