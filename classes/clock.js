/*jshint esversion: 6 */
// Class implementation of Clock
class Clock {
    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
    
        console.log(output);
    }

    start() {
        console.log("clock started");
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() {
        console.log("clock stopped");
        clearInterval(this.timer);
    }
}

window.onload = function() {
    let clock = new Clock({template: 'h:m:s'});
    document.getElementById("stop-btn").onclick = () => clock.stop();
    document.getElementById("start-btn").onclick = () => clock.start();

    let extendedClock = new ExtendedClock({
        template: 'h:m:s',
        precision: 10000
    });
    document.getElementById("start-extended-btn").onclick = () => extendedClock.start();
    document.getElementById("stop-extended-btn").onclick = () => extendedClock.stop();
}