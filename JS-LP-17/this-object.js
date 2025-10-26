// const userObj = {
//   firstName: "Tanish",
//   lastName: "Chaurasia",
//   getFullName: function () {
//     console.log("Outer Normal Function", this);
//     (() => {
//       console.log("Inside Arrow Function", this);
//     })();
//   },
//   getName: () => {
//     console.log("Inside GetName", this);
//   },
// };

// //In js we have "this" Keyword. it gets the bounded to context at runtime.
// console.log(this);
// userObj.getFullName();
// userObj.getName();

// const abc = () => {
//   let a = 10;
//   let b = 20;
//   const xyz = () => {
//     let x = 10;
//     console.log("indside func", this);
//   };

//   xyz();
// };

// abc();

// const fgh = () => {
//   console.log(this);
// };

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    console.log(this);
    this.students.forEach((student) => {
      console.log(this.title);
    });
  },
};

group.showList();
