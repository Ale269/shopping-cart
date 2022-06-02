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
}

const posterArray: posterObj[] = [
  { name: "Lego brick poster", src: brick },
  { name: "Mountain travel poster", src: car },
  { name: "City view poster", src: city },
  { name: "Happy dog poster", src: dog },
  { name: "Flower poster", src: flower },
  { name: "Green leaves poster", src: green },
  { name: "Light house poster", src: lightHouse },
  { name: "Patterns poster", src: pattern },
  { name: "Sandy beach poster", src: sand },
  { name: "Sea poster", src: sea },
];

export default posterArray;
