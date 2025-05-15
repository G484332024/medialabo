// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let h = document.querySelector('button#push');
h.addEventListener('click',hantei)

// ボタンを押した後の処理をする関数 hantei() の定義
let finish = 0;
let a;
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let ans = document.querySelector('input[id="num"]');
  let yoso = Math.floor(ans.value);
  
  // 課題3-1: 正解判定する
  let k = document.querySelector('span#kaisu');
  
kaisu = kaisu+1;
let kai = document.querySelector('p#kai');
let b =(kaisu+"回目の予想: "+yoso);
kai.textContent=b;
if(kaisu>=2&&finish === 1) {
    a =("答えは"+kotae+"でした、すでにゲームは終わっています");
}
else if(kaisu>=4) {
    a=("答えは"+kotae+"でした、すでにゲームは終わっています");
 }
else if(kotae===yoso) {
    a=("正解です、おめでとう！");
    finish  = 1;
}
else if(kaisu===3) {
    a=("まちがい、残念でした答えは"+kotae+"です。");
}
else if(kaisu<=2&&yoso<kotae) {
    a=("まちがい、答えはもっと大きいですよ");
}
else if(kaisu<=2&&yoso>kotae) {
    a=("まちがい、答えはもっと小さいですよ");
}
k.textContent = a;
  
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}