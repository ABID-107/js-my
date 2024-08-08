const names = ['abid', 'sabid', 'abid', 'saif', 'nafiz', 'saif', 'jahid', 'jabbar', 'jahid', 'sabid']

function dublicets(names) {
    const dub = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (dub.includes(name) === false) {
            dub.push(name)
        }
    }
    return dub;
}

const dupl = dublicets(names);
console.log(dupl);