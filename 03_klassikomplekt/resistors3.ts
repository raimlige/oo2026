class Resistor2 {
    protected width: number;
    protected height: number = 30;

    constructor(
        protected r: number,
        protected g: CanvasRenderingContext2D,
        //x position where the resistor is going to begin
        protected startX: number,
        //x position where the resistor is going to end
        protected endX: number,
        //how far down the screen it goes y increases diagram/resistor goes down
        protected y: number
    ) {
        this.width = this.endX - this.startX
        this.draw();
    }

    draw() {

        this.g.clearRect(this.startX, this.y-this.height/2, this.width, this.height);
        // drawing the left wire
        this.g.beginPath();
        this.g.moveTo(this.startX, this.y);
        this.g.lineTo(this.startX + this.width / 4, this.y);
        this.g.stroke();

        //drawing the rectangle
        //x, y, width, heigth
        this.g.beginPath();
        const bodyX = this.startX + this.width / 4
        const bodyY = this.y - this.height / 2;
        const bodyW = this.width / 2
        const bodyH = this.height
        this.g.beginPath();
        this.g.rect(bodyX, bodyY, bodyW, bodyH);
        this.g.stroke();

        // drawing the right wire
        this.g.beginPath();
        this.g.moveTo(this.startX + this.width * 3 / 4, this.y);
        this.g.lineTo(this.endX, this.y);
        this.g.stroke();

        this.g.fillText(this.r+" Ω", bodyX+8, this.y+5);
    };
    //change the resistance values and redraw it
    setR(r:number){
        this.r = r;
        this.draw();
    }
    getR(r:number){
        return this.r
    }
};