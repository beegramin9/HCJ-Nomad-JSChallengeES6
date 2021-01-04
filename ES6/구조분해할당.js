const developer = {
    firstName: 'Nathan',
    lastName: 'Sebhastian',
    developer: true,
    age: 25,
}
  
//destructure developer object
/* https://violetboralee.medium.com/react%EB%A5%BC-%EB%B0%B0%EC%9A%B0%EA%B8%B0-%EC%A0%84%EC%97%90-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-javascript%EA%B8%B0%EC%B4%88-e0665f8cbee0  */
const { firstName : name} = developer;
/* developer.firstName을 해체해서 다음부턴
firstName만 써도 "Nathan"이 리턴되게 할 건데.
firstName값(="Nathan")을 name이란 변수에 넣어주겠다. */
console.log(name);


const { firstName, lastName } = developer;
/* developer 객체의 firstName과 lastName을 해체하겠다는 뜻
=> 이거 하고 나면 developer.firstName 이런 식으로 쓰지 않고 그냥 
firstName 으로만 써도 "Nathan"이 리턴됨
원래는 위의 name처럼 변수에 넣어줘야 하는데
객체의 키 값과 동일한 변수명을 쓰겠다 하면 생략 가능 */

console.log(firstName); // returns 'Nathan'
console.log(lastName); // returns 'Sebhastian'
console.log(developer); // returns the object


/* 배열(Array)에도 적용 가능 */
const numbers = [1,2,3,4,5];
const [zero, one] = numbers;
/* 인덱스 순서대로 뽑아내겠다.
numbers[0], numbers[1] 이 값들을 zero, one 이라는 변수에 넣겠다 */
console.log(zero);
console.log(one);

/* , 사용해서 중간 인덱스 건너 뛰고 분해 할당 가능 */
const [first, second, , fourth] = numbers
console.log(first);
console.log(second);
console.log(fourth);

/* React에서 state를 해체할당 할 때 자주 쓰인다. */
state = {
    name: 'Wontae',
    email: 'beestron9@gmail.com'
}

reactFunction = () => {
    const {name, email} = state
    /* state 객체를 분해했다.
    name으로만 써도 state.name이 됨
    그런데 변수가 state객체의 key와 같다면
    name : name, email : email 이렇게 쓰지 않고
    그냥 name, email 해도 알아먹음 */
}

props = {
    hello : 'hello'
}
/* 원래같았으면 이렇게 쓰겠지만 */
let HelloWorld = (props) => {
    // return <h1>{props.hello}</h1>
    console.log(`${props.hello}`);
}

HelloWorld(props)
/* 분해하면? */
let SecondWorld = ({hello}) => {
    /* 위 같이 쓰려면 {hello} = props이 맞겠지만
    React에서는 App 부모클래스에서 Food를 줄 때 props를 주는 것이 정해져 있기 때문이다 */
    // return <h1>{hello}, second.</h1>
    console.log(`${hello}, second.`);
}
SecondWorld(props)