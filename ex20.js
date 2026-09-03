let produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Café",
    "Açúcar"
];

if (produtos.includes("Café")) {
    console.log("O café está disponível!");
} else {
    console.log("O café não está disponível.");
}

console.log(produtos.indexOf("Café"));
console.log(produtos.slice(0, 5));
console.log(produtos.splice(4, 4));
console.log(produtos.join(", "));