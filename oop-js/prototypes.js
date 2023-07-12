//exercise questions
//stopwatch
function StopWatch(){
    this.duration = 0;
    this.running = false;
}

//adding methods to the prototype
StopWatch.prototype.start = function(){
    if(this.running) {
        console.error("already started");
        return;
    }
    this.duration = new Date()/1000;
    this.running = true;
    console.log(this.running);
}

StopWatch.prototype.stop = function(){
    if(!this.running) {
        console.error("already stopped");
        return;
    }
    this.duration = (new Date()/1000 - this.duration);
    this.running = false;
}

StopWatch.prototype.reset = function(){
    this.duration = 0;
    this.running = false;
}
//here adding these functions to the prototype can lead to problems as we are exposing duration and running,
//which can be modified and can result in irregularity in the state of the object
// example
// let sw = new StopWatch();
// sw.duration = 1; should not be possible
