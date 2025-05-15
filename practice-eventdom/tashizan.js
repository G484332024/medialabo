let b = document.querySelector('button#calc');
b.addEventListener('click',calculation)

function calculation() {
    let l = document.querySelector('input[name = "left"]');
    let x = Math.floor(l.value);
    let r = document.querySelector('input[name = "right"]');
    let y = Math.floor(r.value);
    let ans = document.querySelector('span#answer');
    let z = x+y;
    ans.textContent = z;
}