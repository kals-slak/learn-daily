//stopwatch
function StopWatch(){
    duration = 0;
    running = false;
    this.start = function(){
        if(running) {
            console.error("already started");
            return;
        }
        duration = new Date()/1000;
        running = true;
    }
    this.stop = function(){
        if(!running) {
            console.error("already stopped");
            return;
        }
        duration = (new Date()/1000 - duration);
        running = false;
    }
    this.reset = function(){
        duration = 0;
        running = false;
    }
    //exposing duration property as read only
    Object.defineProperty(this, 'duration', {
        get: function(){return duration;}
    })
}