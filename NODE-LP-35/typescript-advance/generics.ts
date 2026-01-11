const returnVal = <T>(arg: T): T => {
  return arg;
};

interface Order {
  orderId: String;
  orderAmount: Number;
  items: Array<String>; // String[]
  //   isPremium: <T>(args: T) => T; Example to create a generic function in interface
}

const orderList: Array<Order> = [
  {
    orderId: "orderId",
    orderAmount: 20.3,
    items: ["chips", "cake"],
  },
  {
    orderId: "order2",
    orderAmount: 21.3,
    items: ["tshirt", "mobile"],
  },
  {
    orderId: "order3",
    orderAmount: 23.3,
    items: ["chips", "cake"],
  },
];

const getFirstElement = <T>(arg: T[]): T => {
  return arg[0];
};

const identify = <T>(arg: T): T => {
  return arg;
};

const a = "string";

const str = identify<String>(a);

console.log(getFirstElement<Order>(orderList));

console.log(returnVal<String>("hello"));
console.log(returnVal<Number>(5));
console.log(returnVal<Boolean>(true));
