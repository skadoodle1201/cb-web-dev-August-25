interface UserInterface {
  name: String;
  age: Number;
  address: String;
}

const getUser = (name: String, age: Number): UserInterface => {
  return {
    name: name,
    age: age,
    address: "Delhi",
  };
};

const myUser: UserInterface = getUser("Tanish", 25);

console.log(myUser.address);
