var Resistor1 = /** @class */ (function () {
    function Resistor1(r, g, 
    //x position where the resistor is going to begin
    startX, 
    //x position where the resistor is going to end
    endX, 
    //how far down the screen it goes y increases diagram/resistor goes down
    y) {
        this.r = r;
        this.g = g;
        this.startX = startX;
        this.endX = endX;
        this.y = y;
        this.height = 30;
        this.width = this.endX - this.startX;
        this.draw();
    }
    Resistor1.prototype.draw = function () {
        // drawing the left wire
        this.g.beginPath();
        this.g.moveTo(this.startX, this.y);
        this.g.lineTo(this.startX + this.width / 4, this.y);
        this.g.stroke();
        //drawing the rectangle
        //x, y, width, heigth
        this.g.beginPath();
        var bodyX = this.startX + this.width / 4;
        var bodyY = this.y - this.height / 2;
        var bodyW = this.width / 2;
        var bodyH = this.height;
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();
        // drawing the right wire
        this.g.beginPath();
        this.g.moveTo(this.startX + this.width * 3 / 4, this.y);
        this.g.lineTo(this.endX, this.y);
        this.g.stroke();
        this.g.fillText(this.r + " Ω", bodyX + 8, this.y + 5);
    };
    ;
    return Resistor1;
}());
;
