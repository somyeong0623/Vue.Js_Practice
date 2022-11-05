import { cube,user, foo } from './my-module.js';
import { hello as hi } from './my-module.js';

console.log(cube(3));
hi('gogo');
console.log(foo);
console.log(user.num, user.name, user.address);

// default import 
import dawoon from "./my-module.js"; // default export는 이름을 아무거나 하나 지정할 수 있음 . 단, 한번만 export할 수 있다.
console.log(dawoon.id, dawoon.name);