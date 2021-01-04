const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector('input'),
      toDoList = document.querySelector('.js-toDoList')

const TODOS_LS = 'toDos'      

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if (loadedToDos) {
        /* toDos가 null이어도 form은 항상 showing이어야 하니
        아무것도 하지 않는다 == Python에서는 pass지만 JS는 아무것도 안 넣으면 됨 */
        // console.log(loadedToDos);
        // 아까 stringfy해서 저장했으므로 결과물은 문자열 => 다시 바꾸자
        const parsedToDos = JSON.parse(loadedToDos)
        // console.log(parsedToDos);

        /* 할 일:
        parsedToDos array에서 각 객체를 뽑아오는 것 
        forEach(함수)는 마치 map 함수처럼 각 원소마다 적용됨*/
        parsedToDos.forEach( (toDo) => createToDo(toDo.text) )
    }
}

/* toDo들을 저장해야 합니다. array에 저장하겠습니다.
toDo가 생성될 때 마다 array에 push 함 
=> text와 id를 가진 toDoOBj를 집어넣는다.*/
let toDos = [];

/* toDo 저장하기 */
function saveToDos() {
    // localStorage.setItem(TODOS_LS ,toDos)
    /* 위 처럼 object로는 localStorage에 저장할 수 없다. string만 가능함 
    예를 들어 'Hello':true 를 주려고 해도 직접 입력하면 boolean이 아닌
    string true가 나온다. */
    /* 그래서 JSON.stringfy(object)로 string으로 만든 후 저장해야함 */
    localStorage.setItem(TODOS_LS ,JSON.stringify(toDos))
}

function createToDo(text) {
    /* 쿼리셀렉터는 HTML에서 요소를 가져오는 것이었다. 만약
    HTML 요소를 새로 만들고 싶다면? */

    const delBtn = document.createElement('button')    
    
    const li = document.createElement("li")
    /* value: 버튼 안에 들어갈 글자 */
    delBtn.innerHTML = "❌"
    // 지움(delete)을 위해 이벤트리스너 추가
    delBtn.addEventListener('click', deleteToDo)
    
    const span = document.createElement("span")
    
    /* innerHTML과 innerText의 차이
    
    innerHTML = "<h1>수박</h1>"
    HTML의 태그로 인식해서 h1의 글자 크기가 인식되고 "수박"만 나옴
    <button><h1>수박</h1></button>
    innerText = "<h1>수박</h1>"
    그냥 text로 읽어옴. <h1>수박</h1> 그대로 나옴
    그니까 그냥 string를 쓸 거면 사실상 둘의 차이는 없다.
    */
   
   span.innerText = text
   /* appendChild: 부모 태그 안에 값을 집어넣는다. 
   즉 <li><span></span></li> 이런 식으로*/
   li.appendChild(span)
   li.appendChild(delBtn)
   toDoList.appendChild(li)
   
   const toDoObj = {
       text : text,
       // 요소가 하나씩 더 들어올 때마다 id를 증가시킬 수 있는 좋은 로직
       id : toDos.length + 1
    }
    /* 지울 때 어떤 li를 지워야 할 지도 알아야 하니까
    li에도 id를 줘야 한다. */
    li.id = toDos.length + 1;

    toDos.push(toDoObj);
    saveToDos();

}

/* Delete Todo 
2가지 스텝, LocalStorage에서 지우고, HTML에서도 지워야 함*/
function deleteToDo(event) {
    /* 어떤 요소가 제거됐는지 알아야 함 => event.target(일어난 이벤트의 타겟 요소)
    button 요소가 타겟인 건 알겠는데 어떤 button인지도 모름
    여기서는 부모 li가 id를 가지고 있음 */
    // 부모 태그를 자세하게 알아보기 위해  
    // console.dir(event.target)
    /* parentnode를 보면 됨 */
    // console.log(event.target.parentNode)


    /* HTML 태그(노드) 지우기 */
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li)

    /* 파이썬의 filter와 같다. map함수와 같은데 조건에 맞는 애들만 거름  */
    const deletedTodos = toDos.filter( toDo => {
        /* 지운 놈 제외하고 남아있는 놈의 id와 다르면 가져와라
        == 방금 지운 놈만 가져와라
        toDo의 id는 int, li의 id는 string */
        return toDo.id !== parseInt(li.id)
    })
    // console.log('삭제된 toDos',deletedTodos);    
    /* 삭제된 놈을 toDos로 갱신한다 */
    toDos = deletedTodos
    /* 삭제하고 저장해야 됨. 안그럼 그 전께 계속 살아나서 계속 4개만 남음 
    localStorage에서도 사라졌네. 이거 어디서 했지? */
    saveToDos()
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    createToDo(currentValue)
    /* 새로운 todo가 입력되면 input창 새로고침 */
    toDoInput.value = ""
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit',handleSubmit)
}
init();