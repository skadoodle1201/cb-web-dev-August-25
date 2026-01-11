"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const returnVal = (arg) => {
    return arg;
};
const orderList = [
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
const getFirstElement = (arg) => {
    return arg[0];
};
const identify = (arg) => {
    return arg;
};
const a = "string";
const str = identify(a);
console.log(getFirstElement(orderList));
console.log(returnVal("hello"));
console.log(returnVal(5));
console.log(returnVal(true));
