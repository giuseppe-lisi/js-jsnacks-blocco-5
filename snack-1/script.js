const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// with for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// with forEach method
names.forEach(name => console.log(name));

// with for of loop
for (const name of names) {
    console.log(name);
}
