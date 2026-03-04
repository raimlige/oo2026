interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class CmToInches implements CalculatingFunction {
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

class InchesToCm implements CalculatingFunction {
    // formula --- cm = in * 2.54
    calculate(inches: number): number {
        return inches * 2.54;
    }

    inputUnit(): string {
        return "inches"
    }

    outputUnit(): string {
        return "centimeters"
    }
}