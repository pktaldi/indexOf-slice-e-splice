let alunos = [
    "Ana",
    "Bruno",
    "Carlos",
    "Daniel",
    "Eduardo",
    "Fernanda",
    "Gabriel",
    "Helena",
    "Isabela",
    "João"
];

console.log(alunos.includes("Carlos"));
console.log(alunos.indexOf("Carlos"));
let parte = alunos.slice(0, 5);
console.log(parte);
alunos.splice(2, 1);
alunos.splice(2, 0, "Marcos");
alunos.sort();
alunos.reverse();
console.log(alunos.join(", "));
