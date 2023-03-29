// Beggine - Union type

let total: string | number = 200;
total = "4000";

function toNumber(value: number | string): number {
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string") {
    return Math.random();
  } else {
    throw new Error("The value must be a number or a string");
  }
}

const button = document.querySelector("button");
button?.click();

// Finish - Union type
