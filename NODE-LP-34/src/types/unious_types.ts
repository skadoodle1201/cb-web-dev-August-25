type Name = "Tanish" | "Rahul";

type UserBasic = {
  name: String;
  age: Number;
};

type UserAdvance = {
  class: String;
  stream: String;
  college: String;
};

//Atleast one type should be satisfied
type MyUserType = UserBasic | UserAdvance;
let person: MyUserType = {
  name: "Tanish",
  age: 25,
};
console.log(person);
