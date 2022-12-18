// import fs from "fs";

import { hi } from "./lib/greeting";

export function hello(name): void {
  console.log("hi", name);
}

console.log(hi);
// const hi = (age: number) => {
//   return `hi ${age}`;
// };
