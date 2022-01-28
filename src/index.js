/**
 * const letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数を再宣言可能
// var val1 = "vare変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //lete変数は上書き不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //constは上書き不可
// //val3 = "constを上書き";
// const val3 = "constを再宣言";

//プロパティは再定義可能
// const val4 = {
//   name:"aaa",
//   age:28,
// };
// console.log(val4);
// val4.name = "bbb";
// console.log(val4);
// val4.address = "acaca";
// console.log(val4);

//配列のプロパティの再定義可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey")
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "aaa";
// const age = 26;

// //従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた場合
// const message2 = `私の名前は${name}です、年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来
// function func1(str) {
//   return str;
// }

// console.log(func1("aaaa"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("bbb"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(1, 2));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "aaa",
//   age: 26
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//const myProfile = ["aaa", 26];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数
 */

// const sayHello = (name = "aaa") => console.log(`こんにちは！${name}さん！`);
// sayHello("bbbb");

/**
 * スプレット構文
 */
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

//  まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0]=100;
// console.log(arr6);
// console.log(arr4);

// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapl, filterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件？条件が真のとき　：　条件が偽のとき
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲";
// };

// console.log(checkSum(10, 20));

/**
 * 論理演算子
 */
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

//＆＆は左側がtrue奈良右側を返す
// const num2 = 100;
// const fee2 = num2 && "なにか設定されました";
// console.log(fee2);
