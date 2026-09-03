let playlist = [
    "Enter Sandman",
    "Bohemian Rhapsody",
    "Sweet Child O' Mine",
    "Back In Black",
    "Smells Like Teen Spirit",
    "Highway to Hell",
    "Hotel California",
    "Livin' on a Prayer"
];

console.log(playlist.includes("Enter Sandman"));
console.log(playlist.indexOf("Enter Sandman"));
let selecao = playlist.slice(0, 4);
console.log(selecao);
playlist.splice(2, 1);
playlist.sort();
playlist.reverse();
console.log(playlist.join(" - "));
