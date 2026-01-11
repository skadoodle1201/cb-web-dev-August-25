const createUser = (name, age) => {
    return {
        name: name,
        age: age,
        address: "Delhi",
    };
};
const newUser = createUser("Tanish", 25);
console.log(newUser.address);
