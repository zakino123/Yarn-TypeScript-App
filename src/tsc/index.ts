import { addBaz } from './baz'

// window.onload:ページの読み込みが完了したタイミングで処理が実行される
window.onload = function () {
  // HTMLParagraphElement：<p> 要素を操作する為のインタフェース
  const app = document.getElementById("foo") as HTMLParagraphElement;
  
  app.innerHTML ="Hello Typescript World! foo";
  addBaz(app);
};

function mix(
  input1: number | string,
  input2: number | string,) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result
}

const mixNumber = mix(10, 20);
console.log(mixNumber);

const mixString = mix("田中", "太郎");
console.log(mixString);
