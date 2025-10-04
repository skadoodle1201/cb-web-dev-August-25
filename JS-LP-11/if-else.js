let a = 10;

if (a == 10) {
  console.log("a is equal to 10");
}

let b = 20;

if (b < 19) {
  console.log("b is smaller than 20");
} else if (a == 10) {
  console.log("b is greater than 20 and a is equal to 10");
} else {
  console.log("b is greater than 20 and a is not equal to 10");
}

let user = 1;

switch (user) {
  case 1: {
    console.log("Case 1");
    return;
  }

  case 2: {
    console.log("Case 2");
    break;
  }

  case 3: {
    console.log("Case 3");
    break;
  }

  default: {
    console.log("Default");
  }
}
