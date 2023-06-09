export let database = [
  {
    country: "Uzbekistan",
    region: "Kashkadarya",
    city: "Karshi",
    zipcode: 70,
    rooms: 3,
    size: 78,
    sort: "flat",
    min_price: 150,
    max_price: 300,
  },
  {
    country: "Uzbekistan",
    region: "Surkhandarya",
    city: "Termiz",
    zipcode: 90,
    rooms: 3,
    size: 100,
    sort: "flat",
    min_price: 250,
    max_price: 300,
  },
  {
    country: "Uzbekistan",
    region: "Tashkent",
    city: "Tashkent",
    zipcode: 10,
    rooms: 5,
    size: 85,
    sort: "flat",
    min_price: 200,
    max_price: 350,
  },
  {
    country: "Korea",
    region: "Seoul",
    city: "Seoul",
    zipcode: 82,
    rooms: 2,
    size: 60,
    sort: "flat",
    min_price: 400,
    max_price: 600,
  },
  {
    country: "Korea",
    region: "Pusan",
    city: "Pusan",
    zipcode: 80,
    rooms: 4,
    size: 70,
    sort: "house",
    min_price: 800,
    max_price: 1000,
  },
  {
    country: "Russia",
    region: "Moscow",
    city: "Moscow",
    zipcode: 7,
    rooms: 3,
    size: 75,
    sort: "flat",
    min_price: 500,
    max_price: 700,
  },
  {
    country: "China",
    region: "Beijing",
    city: "Beijing",
    zipcode: 50,
    rooms: 1,
    size: 40,
    sort: "flat",
    min_price: 400,
    max_price: 600,
  },
];

export const databaseKeys = Object.keys(database[0]);
