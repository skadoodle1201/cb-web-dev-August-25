type UserType = {
  name: String;
  age: Number;
  address: String;
};

const createUser = (name: String, age: Number): UserType => {
  return {
    name: name,
    age: age,
    address: "Delhi",
  };
};

const newUser: UserType = createUser("Tanish", 25);

console.log(newUser.address);
