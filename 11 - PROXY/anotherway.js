const person = {
    name: "Aoufi Abderahmane",
    age: 22,
    nationality: "Algeria"
};

const per = new Proxy(person, {
    get: (obj, prop) => {
        console.log("The current name of that person is " + obj[prop])
    },
    set: (obj, prop, value) => {
        console.log("The previous value was " + obj[prop] + " And the new one is " + value);
    }
});

per.name
per.age = 23; 