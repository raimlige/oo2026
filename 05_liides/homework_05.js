var Fish = /** @class */ (function () {
    function Fish(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = Math.random() * 2 + 1;
        this.size = Math.random() * 20 + 20;
    }
    Fish.prototype.update = function (canvasWidth, canvasHeight) {
        // fish swim only left->right
        this.x += this.speed;
        // if the fish swims out of screen, it shall appear again on the left
        if (this.x > canvasWidth + this.size) {
            this.x = -this.size;
        }
    };
    Fish.prototype.draw = function (g) {
        g.fillStyle = this.color;
        g.beginPath();
        // draw the fih body
        g.ellipse(this.x, this.y, this.size, this.size / 2, 0, 0, Math.PI * 2);
        g.fill();
        // draw the fih tail
        g.beginPath();
        g.moveTo(this.x - this.size, this.y);
        g.lineTo(this.x - this.size - (this.size / 2), this.y - (this.size / 2));
        g.lineTo(this.x - this.size - (this.size / 2), this.y + (this.size / 2));
        g.closePath();
        g.fill();
        // draw the fih eye
        g.fillStyle = "white";
        g.beginPath();
        g.arc(this.x + this.size / 2, this.y - this.size / 4, this.size / 5, 0, Math.PI * 2);
        g.fill();
    };
    return Fish;
}());
var Bubble = /** @class */ (function () {
    function Bubble(x, y) {
        this.color = "rgba(255, 255, 255, 0.5)";
        this.x = x;
        this.y = y;
        this.speed = Math.random() * 1 + 0.5;
        this.radius = Math.random() * 5 + 2;
    }
    Bubble.prototype.update = function (canvasWidth, canvasHeight) {
        //bubbles only rise
        this.y -= this.speed;
        if (this.y < -this.radius) {
            this.y = canvasHeight + this.radius;
            this.x = Math.random() * canvasWidth;
        }
    };
    Bubble.prototype.draw = function (g) {
        g.fillStyle = this.color;
        g.strokeStyle = "white";
        g.lineWidth = 1;
        g.beginPath();
        g.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        g.fill();
        g.stroke();
    };
    return Bubble;
}());
var canvas = document.getElementById("aquariumCanvas");
var g = canvas.getContext("2d");
var allObjects = [];
var fishColors = ["orange", "red", "yellow", "silver"];
for (var i = 0; i < 8; i++) {
    var randomColor = fishColors[Math.floor(Math.random() * fishColors.length)];
    allObjects.push(new Fish(Math.random() * canvas.width, Math.random() * canvas.height, randomColor));
}
for (var i = 0; i < 20; i++) {
    allObjects.push(new Bubble(Math.random() * canvas.width, Math.random() * canvas.height));
}
function animate() {
    g.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < allObjects.length; i++) {
        var obj = allObjects[i];
        obj.update(canvas.width, canvas.height);
        obj.draw(g);
    }
    requestAnimationFrame(animate);
}
animate();
