export class idCode {
    constructor(protected code: string) { }

    gender() {
        //(this.code[0]) takes the first char
        //parseInt converts it into a nr
        //if the number is even (divisible by 2), return female, if odd return male
        return parseInt(this.code[0]) % 2 === 0 ? "F" : "M";
    }
}