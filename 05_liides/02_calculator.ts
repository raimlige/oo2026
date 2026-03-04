interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class CmToIn implements CalculatingFunction {
    // formula --- in = cm/2.54
    calculate(cm: number): number {
        return cm / 2.54;
    }

    inputUnit(): string {
        return "centimeters"
    }

    outputUnit(): string {
        return "inches"
    }
}