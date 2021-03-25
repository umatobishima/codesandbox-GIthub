// const、letの変数宣言

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能

// val1 = 'var変数を上書き';
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// //letは上書きが可能
// val2 = 'let変数を上書き';
// console.log(val2);

// //letは再宣言不可能
// let val2 = 'let変数を再宣言'；

// const val4 = {
//   name: "おれ",
//   age: 34,
// }

// val4.name = 'わたし';
// val4.address = 'fukuoka'
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5[2] = 'monkey'
// console.log(val5);

//テンプレート文字列

// const name = 'ゆうま';
// const age = 28;

// //私の名前はゆうまです。年齢は28歳です。

// console.log(`私の名前は${name}です。年齢は${age}歳です。`);

/**
 * アロー関数
 */
// const func2 = (str)=> {
//   return str;
// }
// console.log(func2('func2です'));

// const func2 = (str) => str;
// console.log(func2('func3です'));

// const func4 = () => {

// }
// console.log(func4('func4です'));

/**分割代入 */
// const myProfile = {
//   name: 'ゆうま',
//   age: 36,
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ['ゆうま', 36];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
const sayHallo = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
sayHallo();

/**
 * スプレッド構文...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
//影響を受けない
console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "sato", "suzuki"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === 'suzuki') {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件？　条件がtrueの時: 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "１００を超えています" : "許容範囲ないです";
// };
// console.log(checkSum(50, 70));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

//||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || '金額未設定です';
// console.log(fee);

// &&左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
