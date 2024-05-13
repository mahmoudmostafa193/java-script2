var btn = document.getElementById("btn");
btn.onclick = getrandom;
function getrandom() {
  var arr = [
    '"The best revenge massive success."',
    '"You miss 100% of the shots you do not take."',
    '"Resentment is like drinking poison and waiting for your enemies to die."',
    ' "Do not take life too seriously. You will not get out alive."',
  ];
  var arr2 = [
    "--Frank Sinatra",
    "--Wayne Gretzy",
    "--Nelson Mandela",
    "--Elbert Hubbard",
  ];

  var num = Math.floor(Math.random() * 4);
  var box = ``;
  box += ` 
<div id="items">
<div class="item">
  <p>${arr[num]}</p>
  <p>${arr2[num]}</p>
</div>
</div>
`;
  document.getElementById("items").innerHTML = box;
}
