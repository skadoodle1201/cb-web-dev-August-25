// setTimeout(
//   (str) => {
//     console.log(str);
//   },
//   1000,
//   "Hello"
// );

for (var i = 0; i < 10; i++) {
  setTimeout(
    (v) => {
      console.log(v);
    },
    1000 * i,
    i
  );
}
