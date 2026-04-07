class Calculator {
    //currently displaying in the panel
    protected panel: string = "";
    pressButton(b: string): void {
        if (b === "C") {
            this.panel = "0";
        } else if (b === "=") {
            try {
                // eval() calculates string (for example 5+5 ) as an mathematical answer
                this.panel = eval(this.panel).toString();
            } catch (e) {
                // if it catches an error displays an text "error"
                this.panel = "Error";
            }
        } else {
            // if panel displays only "0", replace it with a new number
            if (this.panel === "0") {
                this.panel = b;
            } else {
                this.panel += b;
            }
        }
    }

    getPanelContent(): string {
        return this.panel;
    }
}

export { Calculator }