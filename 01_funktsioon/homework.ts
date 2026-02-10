//Function - Volatile Spotify royality calculator
//Calculates the pay per stream usually around 0.002-0.005 EUR (depends on the country and plan mostly)
function royalityCalc(streams: number): number {
    const minRate = 0.002;
    const maxRate = 0.005;
    let randomRate = Math.random() * (maxRate - minRate) + minRate;
    let income = streams * randomRate;
    return Math.round(income * 100) / 100
};

//Adaptation - 1 Single song test
let my_hit_song = royalityCalc(100000);
console.log("100000 streams earns (roughly): " + my_hit_song + " EUR.");

//Adaptation - 2 Using array as streams input (Different songs on an album)
let album_streams: number[] = [1500, 24000, 1000000, 5000, 37000];
console.log("--- Streams per different songs ---")
for (let stream of album_streams) {
    console.log(royalityCalc(stream) + " EUR")
};

//Adaptation - 3 Income projection table
let income_table: number[][] = [];
for (let s = 0; s <= 50000; s += 5000) {
    income_table.push([
        s,
        royalityCalc(s)
    ]);
};

console.log("Streaming income projection:")
console.log(income_table)
