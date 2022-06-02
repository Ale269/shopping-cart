import brick from "../img/brick.jpg";
import car from "../img/car.jpg";
import city from "../img/city.jpg";
import dog from "../img/dog.jpg";
import flower from "../img/flower.jpg";
import green from "../img/green.jpg";
import lightHouse from "../img/light-house.jpg";
import pattern from "../img/pattern.jpg";
import sand from "../img/sand.jpg";
import sea from "../img/sea.jpg";

interface posterObj {
  name: string;
  src: any;
  price: number;
}

const posterArray: posterObj[] = [
  { name: "Lego brick poster", src: brick, price: 8.77 },
  { name: "Mountain travel poster", src: car, price: 8.77 },
  { name: "City view poster", src: city, price: 11.45 },
  { name: "Happy dog poster", src: dog, price: 9.82 },
  { name: "Flower poster", src: flower, price: 7.99 },
  { name: "Green leaves poster", src: green, price: 11.77 },
  { name: "Light house poster", src: lightHouse, price: 10.74 },
  { name: "Patterns poster", src: pattern, price: 11.22 },
  { name: "Sandy beach poster", src: sand, price: 8.99 },
  { name: "Sea poster", src: sea, price: 9.99 },
];

export default posterArray;
