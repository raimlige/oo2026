//Function - Volatile Spotify royality calculator
//Calculates the pay per stream usually around 0.002-0.005 EUR (depends on the country and plan mostly)
function royalityCalc(streams) {
    var minRate = 0.002;
    var maxRate = 0.005;
    var randomRate = Math.random() * (maxRate - minRate) + minRate;
    var income = streams * randomRate;
    return Math.round(income * 100) / 100;
}
;
//Adaptation - 1 Single song test
var my_hit_song = royalityCalc(100000);
console.log("100000 streams earns (roughly): " + my_hit_song + " EUR.");
//Adaptation - 2 Using array as streams input (Different songs on an album)
var album_streams = [1500, 24000, 1000000, 5000, 37000];
console.log("--- Streams per different songs ---");
for (var _i = 0, album_streams_1 = album_streams; _i < album_streams_1.length; _i++) {
    var stream = album_streams_1[_i];
    console.log(royalityCalc(stream) + " EUR");
}
;
//Adaptation - 3 Income projection table
var income_table = [];
for (var s = 0; s <= 50000; s += 5000) {
    income_table.push([
        s,
        royalityCalc(s)
    ]);
}
;
console.log("Streaming income projection:");
console.log(income_table);
