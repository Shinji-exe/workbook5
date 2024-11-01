let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("5-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];

let colorRed = vehicles.filter((colorRed) => colorRed.color === "Red");
console.log(colorRed);

//OR
console.log("------------------------------------");
function getColor(colorRed) {
  return vehicles.filter((colors) => colors.color === colorRed);
}

let getVehiclesColor = getColor("Red");
console.log(getVehiclesColor);

console.log("------------------------------------");



console.log("------------------------------------");

let hold6 = vehicles.filter((sixSeats) => sixSeats.capacity <= 6);
console.log(hold6);

console.log("------------------------------------");

let plates = vehicles.find((carPlate) => carPlate.licenseNo.includes("222"));
console.log(plates);

function findOneLicense(plate) {
  return vehicles.find((licenseNum) => licenseNum.licenseNo.includes(plate));
}

let getThePlate = findOneLicense("222");
console.log(getThePlate);
