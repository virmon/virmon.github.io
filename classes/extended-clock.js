class ExtendedClock extends Clock {
    constructor({ template, precision }) {
        super({ template, precision });
        precision = 1000;
        this.precision = precision;
    }

    start() {
        console.log("extended clock started");
        super.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }

    stop() {
        console.log("extended clock stopped");
        super.stop();
    }
}