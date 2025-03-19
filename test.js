const original = {
  name: "Duy",
  age: 25,
  address: {
    city: "Ho Chi Minh",
    country: "Vietnam",
  },
};

// Shallow clone
const shallowClone = JSON.parse(JSON.stringify({ ...original }));

// Modify nested object
shallowClone.address.city = "Hanoi";

console.log(original.address.city); // ❌ "Hanoi" (also changed!)
console.log(shallowClone.address.city);
