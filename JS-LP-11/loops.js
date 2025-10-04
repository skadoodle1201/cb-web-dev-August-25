for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
while (j < 10) {
  console.log("while j = ", j);
  j++;
}

j = 20;

do {
  console.log("DO while loop", j);
  j--;
} while (j > 10);
