const getUser = (name, age) => {
    return {
        name: name,
        age: age,
        address: "Delhi",
    };
};
const myUser = getUser("Tanish", 25);
console.log(myUser.address);
