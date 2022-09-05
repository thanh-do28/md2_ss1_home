//  Câu 1

// hoisting là cơ chế của JavaScript cho phép các khai báo biến hoặc hàm 
// được dời lên trên đầu phạm vi của chúng trước khi thực thi đoạn code.
// nghĩa là bất kể hàm và biến được khai báo ở đâu,
//  chúng đều được chuyển lên đầu phạm vi của chúng, bất kể là toàn cục hay cục bộ.


// Câu 2

// một file javascript khi chạy trải qua 2 giai đoạn
// giai đoạn 1
// creation phase (giai đoạn khởi tạo)
    // setup variable environment (khởi tạo bộ nhớ để lưu trữ các biến)
    // định nghĩa scope chain (định nghĩa phạm vi hoạt động của biến)


// giai đoạn 2 
// execution phase (giai đoạn thực thi)
    // Global Execution Context (ngữ cảnh thực thi của chương trình chính)
    // Execution Context (ngữ cảnh thực thi của chương trình con)


// Câu 3

// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }

// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }
            // ko thấy console.log

// Câu 4

// console.log(`1. ${age}`); // undefined biến age chưa dk khia báo;
// var age = 20;
// console.log(`2. ${age}`); // 20 biến age dk khai báo

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// console.log(`3. ${calAge(yearOfBirth)}`) // 27 hàm calAge chạy Execution Context
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) // 27

// console.log(`5. ${getFullName(firstName, lastName)}`); // báo lỗi : vì hàm getFullName dk khai báo vào 1 var 
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;
// }
// console.log(`6. ${getFullName(firstName, lastName)}`); //Peter Parker


// Câu 5

// console.log(age);  // báo lỗi biến age vì let ko có hoisting

// let age = 27;

// console.log(age) // cmt log trên lại thì kết quả ra 17

// {
// console.log(firstName);  // báo lỗi biến age vì let ko có hoisting
// console.log(age);   // báo lỗi biến age vì let ko có hoisting
// console.log(age);   // báo lỗi biến age vì let ko có hoisting

// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";

// console.log(firstName);     // cmt log trên lại thì kết quả ra Peter
// console.log(lastName);      // cmt log trên lại thì kết quả ra Parker
// console.log(job);       // cmt log trên lại thì kết quả ra Spider man
// }


// Câu 6

// a = 2;
// var a;
// console.log( a );       // 2 vì var sẽ đưa biến lên đầu .


// Câu 7
// console.log( a ); // undefined
// var a = 2;

// // áp dụng hoisting
// var a;
// console.log(a);
// a = "Lập trình JavaScript căn bản";
//  nên kết quả ra undefined


// Câu 8

// var a = 10;
// function foo() {
//     var a;
//     console.log( a ); // undefined
//     a = 2;
// }
// foo();

// Câu 9

// foo();
// var foo;
// function foo() {
// console.log(1); // ra 1
// }
// foo = function() {
// console.log(2); // ko in
// }


// Câu 10

// var foo;
// function foo() {
// console.log(1); // ko in
// }
// foo = function() {
// console.log(2); // ra 2
// }
// foo();

// Câu 11

// function removeEnd(arr, n) {
//     var len = arr.length - n;
//     arr.splice(len, n);
//     console.log(arr);
// }

// var arr = [1,2,3,4,5,6,7,8,9];
// // var len = arr.length - 3;
// // arr.splice(len, 3);
// removeEnd(arr, 4);


// Câu 12

// arr = [1, 2, 3, 4, 5, 6, 7];
// function first(arr, n) {
//   var arr1 = [];
//   for (i = 0; i < arr.length; i++) {
//     if (i < n) {
//       arr1.push(arr[i]);
//     }
//   }
//   return arr1;
// }
// console.log(first(arr,5));

// Câu 13

// const users = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ];

// let users1 = users.map(function(user){
//     return `<h1> ${user.name} </h1>
//             <h2> ${user.age} </h2>`;
// });
// console.log(users1);

// // Câu 14

// let users2 = users.map(function(user){
//     return user.name;           
// });
// console.log(users2);


// Câu 15
// let tripleNum = [1,2,3,4,55];
// let n = prompt('NHap:');
// function triple(number){  
//     return number*3;
// }
// console.log(triple());
// let tripleNumber = tripleNum.map((trip)=>{
//     return (trip*3)*triple(n);
// })
// console.log(tripleNumber);




//  Câu 16

// let array = [1,2,3,4,5,6,7,8,9,0,10,11,21];
// let filterArray = array.filter(function(arr){
//    return arr > 5;
// })
// console.log(filterArray);




//  Câu 17
// var members = [ 
//     { name: 'Lan', gender: 'female' }, 
//     { name: 'Linh', gender: 'female' }, 
//     { name: 'Trung', gender: 'male' }, 
//     { name: 'Peter', gender: 'gay' } 
// ]; 
// let filterMembers = members.filter(function(member){
//    let ouput = [];
// if(member.gender==='female'){
//    ouput.push(member.gender);
//    return ouput;
// }
// });
// console.log(filterMembers);



// Câu 18

// let arrays = [1,13,3,4,5,6,7,8,9];
// let findArr= arrays.find((array)=>{
//     let newArray = [];
//     if(array%2==0){
//     return newArray.unshift(array);
//     // console.log(newArray); 
//     }else{
//         return undefined;
//     }
// })
// console.log(findArr);




// Câu 19
// let arrays = [1,13,3,44,5,6,7,8,9];
// let n = prompt("nhập số");
// let x = arrays.find(function (array){
//     let newArray = [];
//     if(array%n===0){
//     return newArray.unshift(array);
//     // console.log(newArray); 
//     }else{
//         return undefined;
//     }
// })
// console.log(x);



// Câu 20
// let arr = (['a', 'b', 'c', 'b', 'a']);
// const countedNames = arr.reduce((allArr, name) => {
//     allArr[name] ??= 0;
//     allArr[name]++;
//     return allArr;
//   }, {});
//   console.log(countedNames);



//21 Viết một hàm nhận vào một mảng 2 chiều,

// // sử dụng phương thức reduce và trả về một mảng một chiều chứa toàn bộ
// // những phần tử con trong các mảng con 

// // reduce tra ve 1 gia tri duy nhat

// let  flatternArr = [

//     ['a','b','c'],

//     ['b','a']
// ]

// //array tuong trung cho mang flatt
// // index tuong trung cho cac phan tu trong mang
// let arr = flatternArr.reduce(function(array,index){

//    return array.concat(index);
   

// }, [])
// console.log(arr)



// Câu 22

// let a = Number(prompt("nhập số a"));
// let b = Number(prompt("nhập số b"));
// if (a < b){
//     var sum1 = 0
//     for(let i = a; i <= b; i++){
//         sum1 = sum1 + i;
//     }
//     console.log(sum1);
// }else if (a > b){
//     var sum2 = 0
//     for(let i = a; i >= b; i--){
//         sum2 = sum2 + i;
//     }
//     console.log(sum2);
// }


// Câu 23

// let a1 = [1, 2, 3, 4];
// let a2 = [1, 2, 1];
// function diff(a1, a2) {
//     return a1.concat(a2).filter(function(val, index, arr){
//       return arr.indexOf(val) === arr.lastIndexOf(val);
//     });
// }
// let c = diff(a1, a2)
// console.log(c);


// Câu 24

// let number = prompt('Enter the number of terms: ');
// let n1 = 1, n2 = 1, nextTerm;
// let arr = [];
// console.log('Fibonacci Series:');
// for (let i = 1; i <= number; i++) {
//     arr.push(n1)
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
// console.log(arr);

// let total = 0;
// for (i = 0; i <= arr.length - 1; i = i + 1) {
//         if (arr[i] % 2 == 1) {
//             total = total + arr[i];
//         }
// } console.log((total));


// Câu 25

// function binaryAgent(str) {

//     var newBin = str.split(" ");
//     var binCode = [];
    
//     for (i = 0; i < newBin.length; i++) {
//         binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
//       }
//     return binCode.join("");
//     }
//    alert( binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'));


// Câu 26
//  hàm arguments

// function flatternArr(arr){
//     return arr.reduce(function(pre, cur){
//         return [...pre, ...cur];
//     });
// }

// function uniqueArray(...args){
//     let result = [];
//     for(i=0;i<args.length;i++){
//         result.push(args[i]);
//     }
//     result = flatternArr(result);
//     return result.filter(function ( e, i){
//         return result.indexOf(e) === i;
//     });
    
// }
// let result = uniqueArray([1, 2, 1, 3], [3, 3, 5], [6, 7]);
// console.log(result);










// let arr = ['a','b','c','a','b']
// let hashMap = new Map();
// for(i=0;i<arr.length;i++){
    
//     if(hashMap.has(arr[i])){
        
//         hashMap.set(arr[i],hashMap.get(arr[i])+1);
//     }
//     else{
//         hashMap.set(arr[i],1);
//     }
    
// }
// console.log(hashMap);

