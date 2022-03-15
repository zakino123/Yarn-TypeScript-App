import { addBaz } from './baz'

// window.onload:ページの読み込みが完了したタイミングで処理が実行される
window.onload = function () {
  // HTMLParagraphElement：<p> 要素を操作する為のインタフェース
  const app = document.getElementById("foo") as HTMLParagraphElement;
  
  app.innerHTML ="Hello Typescript World! foo";
  addBaz(app);
};
