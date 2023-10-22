"use strict";

// $(function () {
//   $(".slider").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     dots: true,

//     responsive: [
//       {
//         breakpoint: 768, // ブレイクポイントを指定
//         settings: {
//           slidesToShow: 2,
//           speed: 600,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           centerMode: true,
//           centerPadding: "10%",
//         },
//       },
//     ],
//   });
// });

//ページ全体が読み込まれたときに
// document.addEventListener("DOMContentLoaded", function () {});

// const tax = 1.1;
// const applePrice = 120;
//テキスト挿入
// document.getElementById("apple").textContent = applePrice * tax;

// const elements = document.getElementsByClassName("item");
// for (let i = 0; i < elements.length; i++) {
//   elements[i].textContent = "a";
// }

// document.querySelectorAll(".item").forEach(function (element) {
//   element.textContent = "a";
// });

// const testElement = document.getElementById("test");

// document.getElementById("test").addEventListener("mouseover", function () {
//   this.textContent = "ホバーされました";
// });

// const wearher = ["晴れ", "曇り", "雨", "雹", "台風"];
// wearher.push("雷");
// wearher.unshift("雪");
// wearher.pop(); //最後を削除
// wearher.shift(); //最初を削除

// document.getElementById("test").textContent = "今日のてんきは" + wearher[0];

// for (let i = 0; i < wearher.length; i++) {
//   let li = document.createElement("li");
//   li.textContent = wearher[i];
//   document.getElementById("number").appendChild(li);
// }

// document.getElementById("test").addEventListener("click", function () {
//   // this.classList.toggle("test2");
//   const listElements = document.querySelectorAll(".list li");
//   for (let i = 0; i < listElements.length; i++) {
//     listElements[i].classList.toggle("test");
//   }
// });

// const list = document.querySelector(".list li");
// for (let i = 0; i < list.children.length; i++) {
//   console.log(list.children[i]);
// }

// console.log(list.firstElementChild.nextElementSibling);
// console.log(list.lastElementChild.previousElementSibling);

// console.log(list.childNodes);

// const score = Math.floor(Math.random() * 20);
// document.getElementById("score").textContent = score;

// if (score >= 15) {
//   document.querySelector(".list").textContent = "15以上。";
// } else if (score >= 5) {
//   document.querySelector(".list").textContent = "5以上14以下";
// } else {
//   document.querySelector(".list").textContent = "それ以外";
// }

// const a = 2,
//   b = 3;

// const result = a > 1 || (b <= 3 && 1 + 1 === 2);

// if (result) {
//   console.log(result);
// }

// const weathers = ["晴", "曇", "雨", "雪", "なし"];
// const randomNumber = Math.floor(Math.random() * weathers.length);
// const randomWeather = weathers[randomNumber];

// const weatherMessageElement = document.getElementById("weatherMessage");

// // document.getElementById("weather").textContent =
// //   "今日の天気は" + randomWeather + "です";

// function iii(text) {
//   weatherMessageElement.textContent = text;
// }

// switch (randomWeather) {
//   case "晴":
//     iii("はれですよ");
//     break;
//   case "曇":
//     iii("曇りですよ");
//     break;
//   case "雨":
//     iii("雨ですよ");
//     break;
//   case "雪":
//     iii("雪ですよ");
//     break;
//   default:
//     iii("なし");
// }

// let number = 0;

// document.getElementById("button").addEventListener("click", function () {
//   number += 5;
//   document.getElementById("result").textContent = number;
// });

// const number = 1;

// //切り捨て
// console.log(Math.floor(number));
// console.log(Math.trunc(number));

// //切り上げ
// console.log(Math.ceil(number));

// // 四捨五入
// console.log(Math.round(number));

// // 絶対値
// console.log("abs", Math.abs(number));

// //べき乗
// console.log("pow", Math.pow(number, 3));

// while (document.querySelector("#list li")) {
//   document.querySelector("#list li").remove();
// }

// //スネークケースはダメ
// document.getElementById("box").style.opacity = 0.2;
// // 複数プロパティ
// document.getElementById("box").style.cssText = "width: 400px; font-size: 50px";

// //タグ直接cssの取得
// console.log(document.getElementById("box").style.width);

// //タグ間接cssの取得
// console.log(window.getComputedStyle(document.getElementById("box")).alignItems);

// const tax = 1.1;

// function insertText(itemPrice, element) {
//   function calculation(price) {
//     return Math.floor(price * tax);
//   }

//   document.getElementById(element).textContent =
//     itemPrice + "円の商品に税込価格は" + calculation(itemPrice) + "円です";
// }
// insertText(100, "result");
// insertText(200, "result2");
// insertText(250, "result3");

// console.log("css");
// html();
// console.log("php");

// function html() {
//   setTimeout(() => {
//     console.log("html");
//   }, 1000);
// }

// const item = {
//   name: "パソコン",
//   price: 10000,
//   sale: true,
//   parts: ["CPU", "メモリ", "HDD"],
//   a: {
//     b: "テスト",
//   },
// };

// item["c"] = "Cです";

// document.getElementById("test").textContent = "商品名は" + item.name;
// document.getElementById("price").textContent = "値段は" + item["price"] + "円";

// if (item["sale"]) {
//   document.getElementById("sale").textContent = item["name"] + "セール中です。";
// }

// let texts = "";
// for (let i = 0; i < item["parts"].length; i++) {
//   texts += item["parts"][i];
//   console.log("中" + texts);

//   if (i !== item["parts"].length - 1) {
//     texts += "・";
//     console.log("処理後" + texts);
//   }
// }
// console.log("外" + texts);
// document.getElementById("sale").textContent =
//   item["name"] + "パーツは" + texts + "です。";

// document.getElementById("c").textContent = item["a"]["b"];
// document.getElementById("c").textContent = item["c"];

// const array = [1, 2, 4, 8];
// const resultArray = array.map((x) => x * 2);
// console.log(resultArray);

// let input = document.getElementById("input").textContent;
// console.log(typeof input);
// input = Number(input);
// console.log(typeof input);

// document.querySelectorAll("ul li a").forEach((element) => {
//   element.setAttribute("target", "_blank");
//   console.log(element.hasAttribute("href"));
// });

// window.addEventListener("scroll", function () {
//   let scroll = document.documentElement.scrollTop;
//   document.getElementById("scolltest").textContent = scroll;

//   if (scroll > 300) {
//     document.querySelector("main").classList.add("test");
//   }
//   //   else {
//   //     document.querySelector("main").classList.remove("test");
//   //   }
// });

// const tax = function tax(number) {
//   return number * 1.08;
// };

// const tax = (number) => number * 1.08;
// document.getElementById("test").textContent = tax(100);

// const loading = document.querySelector(".loader ");
// window.addEventListener(
//   "load",
//   () => {
//     loading.classList.add("hide");
//   },
//   false
// );

new Vue({
  el: "#app",
});

let test = document.getElementById("test");
document.getElementById("test").addEventListener("click", function () {
  this.textContent = "クリックされました";
  console.log(this);
});
