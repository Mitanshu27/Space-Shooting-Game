function Asteroid()
{
    this.pos = createVector(Math.round(random(width)), Math.round(random(height)));
    this.vel = p5.Vector.random2D();
    this.r = Math.round(random(15, 50));
    this.total = Math.round(random(5, 15));
    this.offset = [];
    for(var i = 0; i < this.total; i++)
    {
        this.offset[i] = Math.round(random(-5, 5));
    }
    this.update = function(){
        this.pos.add(this.vel);
    }
    this.render = function(){
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);
        //ellipse(0, 0, this.r * 2);
        beginShape();
        for(var i = 0; i < this.total; i++)
        {
            var angle = map(i, 0, this.total, 0, Math.TWO_PI);
            var x = (this.r + this.offset[i]) * cos(angle);
            var y = (this.r + this.offset[i]) * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
        /*beginShape();
        for(var i =0; i < 10; i++)
        {
            var angle = map(i, 0, 10, 0, TWO_PI);
            var x = this.r*cos(angle);
            var y = this.r*sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);*/
        pop();
    }
}