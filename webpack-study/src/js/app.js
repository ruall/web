import {sub, sum} from "./module1";
import {data as d, message} from "./module2";
import module3 from "./module3";
import data from "../json/test.json"
import "../css/test.css"
import "../css/test1.less"

console.log(data);
sub(1, 2)
sum(1, 2)
console.log(d);
console.log(message);
console.log(module3);