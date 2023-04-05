import { Player } from "./Player.js";
import { Time } from "./Time.js";

const player1 = new Player ("Samuel", 25, "M");

const time = new Time(3);

player1.status;

time.dayAfter();

console.log(time)
