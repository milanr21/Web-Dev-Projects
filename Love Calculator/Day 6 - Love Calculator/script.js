function love() {
  let txt1 = document.getElementById('txt1').value;
  let txt2 = document.getElementById('txt2').value;
  if (txt1 && txt2) {
    let total = Math.floor(Math.random() * 100);

    str = (txt1 + txt2).replace(/\s/g, '');
    str = str.toLowerCase();

    if (localStorage.getItem(str)) {
      total = localStorage.getItem(str);
    } else {
      localStorage.setItem(str, total);
    }
    document.getElementById('result').innerText = total;
  } else {
    alert('Please enter the name');
  }
}
