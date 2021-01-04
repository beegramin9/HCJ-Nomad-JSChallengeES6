export default class User {
    /* constructor는 생성자. __init__이랑 똑같다.
    자동호출됨 */
    constructor(name,age) {
        this.name = name
        this.age = age
    }
    /* 메소드 만들 때는 그냥 function 없애고 sum(){} 이런식으로 */

}
/* Default export, standard export */


export function printName(user) {
    console.log(`User's name is ${user.name}`);
}

export function printAge(user) {
    console.log(`User is ${user.age} years old.`);
}

/* user.js의 default 파일로 export */
// export default User
/* 근데 앗싸리 Class 만들 때 해도 됨
export default class User  
default export는 단 한번만 할 수 있음 */

// export {printName,printAge}

/* 노드JS에서 이걸 되게 하려면 babel을 설치해야한다는데... 무서움 ㅅㅂ */