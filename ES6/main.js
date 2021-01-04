/* export했던 파일에서 default로 선정된 놈을 가져와야 함 */
import User from "./user.js"
/* import 할땐 js파일 앞에 상대경로 해 놓아야 함 */
/* import를 인식하지 못하지? 인식하게하려면 html의 script 코드의 type="module" */

const user = new User('Bob',11)
console.log(user);