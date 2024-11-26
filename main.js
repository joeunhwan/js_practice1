// const string1 = "Hello"
// const string2 = 'Hello'
// const string3 = `Hello ${string1} ?!`

// console.log(string3);


// const number = -123.1234
// const pi = 0.14
// console.log(typeof(number + undefined));
// console.log(typeof(pi))


// const a = 0.1
// const b = 0.2

// console.log(Number((a+b).toFixed(1))) // 0.3이 나오거나 이진법으로 나타낼때 무한증식 될 때도 있음 오해 ㄴㄴ


//Boolean(불린)
// const a = true
// const b = false

// if(b){
//     console.log('Hello')
// }


// let age = null  //null = 데이터는 일단 존재하지 않거나 값이 비어있다, 혹은 알 수 없다  // 명시적 작성

// console.log(age)

// setTimeout(function(){
//     age = 85
//     console.log(age)
// },1000)


// let age  //undefined = 거의 작성 할 일이 없긴 함 / 값이 할당 되어 있지 않은 상태  // 암시적 작성

// console.log(age)

// setTimeout(function(){
//     age = 85
//     console.log(age)
// },1000)


// const user = {
//     name: 'EUNHWAN',
//     age: 85,
//     email: null
// }
// console.log(user.name)
// console.log(user.age)
// console.log(user.email)
// console.log(user.abc)

//값이 정확하게 존재하지 않는 것을 직접 작성하는 것과 값이 할당 되지 않는 것은 다르다




//////////////////////////////////////////////////////////////////// 
//////////////////////////////////배열 array
// const fruits = ['Apple','Banana','Cherry'] //"리터럴" 방식으로 배열을 만들었다 // 같은 방식 = new Array('Apple','Banana','Cherry') // 배열의 요소 or 아이템 이라고 부른다

//console.log(fruits[1]) // 배열 데이터를 플룻 1번으로 "인덱싱"한다

// console.log(fruits.length)

// console.log(fruits[fruits.length-1]) // 마지막 아이템을 인덱싱 할때




//////////////////////////////////////////////////////////////////// 
//////////////////////////////////객체 object

// 생성자 함수 방식으로 만든 객체 데이터
// const user = new Object()
// user.name = 'EUNHWAN'
// user.age = 85;
// console.log(user)  // 콘솔창에서 보면  age: 85 가 나오는데 age라는 key(속성,프로퍼티)와 85의 밸류(값)을 가지고 있다라고 보면 된다

// 함수 내부에서 this 키워드를 통해 각각의 데이터를 넣어 만드는 객체 데이터
// function User() {
//     this.name = 'EUNHWAN'
//     this.age = 85;
// }

// const user = new User();
// console.log(user);

//리터널 방식으로 만든 객체 데이터
// const user = {
//     name: 'EUNHWAN',
//     age: 85
// }

// console.log(user.name) // 점표기법
// console.log(user['name']) // 대괄호 표기법
// console.log(user.age)
// console.log(user['age'])

// const key = 'age'
// console.log(user[key])
// console.log(user)

// const userA = {
//     name: 'EUNHWAN',
//     age: 85
// }

// const userB = {
//     name: 'EUNHWAN2',
//     age: 22,
//     parent: userA
// }

// // console.log(userB.parent.name)
// console.log(userB['parent']['age'])

// const users = [userA, userB]

// console.log(users[0]['name'])




//////////////////////////////////////////////////////////////////// 
////////////////////////////////// function 함수형

// function Hello(){
//     console.log('Hello!')
// }

// Hello() // call, 호출
// console.log(Hello)

// function getNumber(){
//     return 123
// }

// const getNumber = function(){} // 펑션쪽에는 아무것도 없어서 익명함수
// const getNumber = function(){
//     return 123
// }
// console.log(getNumber())

// const a = function(){
//     console.log('A')
// }
// const b = function(c){
//     console.log(c)
//     c()
// }

// b(a)



//////////////////////////////////////////////////////////////////// 
////////////////////////////////// 형 변환 type conversion

// const a = 1  //number
// const b = '1' //string

// console.log(a === b) //일치 연산자
// console.log(a == b) //동등 연산자


// const a = 0
// const b = false

// console.log(a == b)

// const a = true
// const b = 1

// console.log(a == b)

//두개의 데이터를 비교 할 땐 === 일치 연산자로 하는게 좋다, 동등 연산자는 생각한 것과 값이 다르게 나올 수도 있다




//////////////////////////////////////////////////////////////////// 
////////////////////////////////// 참과 거짓

// if('0'){
//     console.log('참!')
// }

//false, 0, null, undefined, NaN, ''(빈문자), -0, 0n(Bigint) 는 거짓으로 나오거나 값이 나오지 않음 // 7개 정도만 알아도 가능
//NaN 낫 어 넘버 

// const fruits = ['Apple','Banana']

// if(fruits.length){
//     console.log('아이템이 들어있습니다!')
// }else{
//     console.log('아이템이 없습니다!')
// }




//////////////////////////////////////////////////////////////////// 
////////////////////////////////// 데이터타입 확인

// const a = 123

// console.log(typeof a)

console.log(typeof 'hello' === 'string')
console.log(typeof 123 === 'number')
console.log(typeof false === 'boolean')
console.log(typeof undefined === 'undefined')

console.log(typeof function(){} === 'function')


//아래 세개는 오브젝트로 나옴
console.log(typeof null === 'object')
console.log(typeof [] === 'object')
console.log(typeof {} === 'object')

console.log([].constructor === Array)
console.log({}.constructor === Object)
//console.log(null.constructor)

//null은 constructor로 확인 불가로 아래 처럼 확인
console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')

// 1번 typeof 2번 constructor 3번 Object.prototype.toString.call(null).slice(8, -1) === 'Null' 로 데이터 타입 확인

function checkType (data){
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(checkType('hello') === 'String')
console.log(checkType(123))
console.log(checkType(false))
console.log(checkType(undefined))
console.log(checkType(null))
console.log(checkType([]))
console.log(checkType({}))