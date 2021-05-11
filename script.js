function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("preview");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      var acc_content;
      acc_content = document.getElementsByClassName("acc_content");
      for (i = 0; i < acc_content.length; i++) {
        acc_content[i].style.display = "none";
      }
      panel.style.display = "block";
    }
    this.classList.toggle("active");
  });
}

var select_arr = new Array();
var order_arr = new Array();
const cost_A = 39800;
const cost_B = 49800;
const cost_C = 59800;

function mySelect() {
  var select = document.getElementById("mySelect");
  // select element에서 선택된 option의 value가 저장된다.
  var selectValue = select.options[select.selectedIndex].value;
  // select element에서 선택된 option의 text가 저장된다.
  var selectText = select.options[select.selectedIndex].text;

  if (select_arr.includes(selectText)) {
    alert("이미 선택된 항목입니다.");
    select.selectedIndex = 0;
    return;
  } else {
    select_arr.push(selectText);
  }

  var ul = document.getElementById("tentUL");
  var li = document.createElement("li");

  if (selectValue === "select_A") {
    li.setAttribute("id", "li_A");
    var content = document.createTextNode(selectText);
    li.appendChild(content);
    ul.appendChild(li);

    li = document.getElementById("li_A");
    var input = document.createElement("input");
    input.setAttribute("id", "input_A");
    input.setAttribute("value", "1");
    input.setAttribute("style", "width:50px;");
    li.appendChild(input);

    var btn_add = document.createElement("button");
    btn_add.setAttribute("class", "add");
    var btn_content = document.createTextNode("+");
    btn_add.appendChild(btn_content);
    li.appendChild(btn_add);

    var btn_sub = document.createElement("button");
    btn_sub.setAttribute("class", "subtract");
    btn_content = document.createTextNode("-");
    btn_sub.appendChild(btn_content);
    li.appendChild(btn_sub);

    var btn_remove = document.createElement("button");
    btn_remove.setAttribute("class", "remove");
    btn_content = document.createTextNode("x");
    btn_remove.appendChild(btn_content);
    li.appendChild(btn_remove);

    var span = document.createElement("span");
    span.setAttribute("id", "price");
    content = document.createTextNode(cost_A);
    span.appendChild(content);
    li.appendChild(span);
    var span = document.createElement("span");
    span.setAttribute("id", "won");
    content = document.createTextNode("원");
    span.appendChild(content);
    li.appendChild(span);
  } else if (selectValue === "select_B") {
    li.setAttribute("id", "li_B");
    var content = document.createTextNode(selectText);
    li.appendChild(content);
    ul.appendChild(li);

    li = document.getElementById("li_B");
    var input = document.createElement("input");
    input.setAttribute("id", "input_B");
    input.setAttribute("value", "1");
    input.setAttribute("style", "width:50px;");
    li.appendChild(input);

    var btn_add = document.createElement("button");
    btn_add.setAttribute("class", "add");
    var btn_content = document.createTextNode("+");
    btn_add.appendChild(btn_content);
    li.appendChild(btn_add);

    var btn_sub = document.createElement("button");
    btn_sub.setAttribute("class", "subtract");
    btn_content = document.createTextNode("-");
    btn_sub.appendChild(btn_content);
    li.appendChild(btn_sub);

    var btn_remove = document.createElement("button");
    btn_remove.setAttribute("class", "remove");
    btn_content = document.createTextNode("x");
    btn_remove.appendChild(btn_content);
    li.appendChild(btn_remove);

    var span = document.createElement("span");
    span.setAttribute("id", "price");
    content = document.createTextNode(cost_B);
    span.appendChild(content);
    li.appendChild(span);

    var span = document.createElement("span");
    span.setAttribute("id", "won");
    content = document.createTextNode("원");
    span.appendChild(content);
    li.appendChild(span);
  } else {
    li.setAttribute("id", "li_C");
    var content = document.createTextNode(selectText);
    li.appendChild(content);
    ul.appendChild(li);

    li = document.getElementById("li_C");
    var input = document.createElement("input");
    input.setAttribute("id", "input_C");
    input.setAttribute("value", "1");
    input.setAttribute("style", "width:50px;");
    li.appendChild(input);

    var btn_add = document.createElement("button");
    btn_add.setAttribute("class", "add");
    var btn_content = document.createTextNode("+");
    btn_add.appendChild(btn_content);
    li.appendChild(btn_add);

    var btn_sub = document.createElement("button");
    btn_sub.setAttribute("class", "subtract");
    btn_content = document.createTextNode("-");
    btn_sub.appendChild(btn_content);
    li.appendChild(btn_sub);

    var btn_remove = document.createElement("button");
    btn_remove.setAttribute("class", "remove");
    btn_content = document.createTextNode("x");
    btn_remove.appendChild(btn_content);
    li.appendChild(btn_remove);

    var span = document.createElement("span");
    span.setAttribute("id", "price");
    content = document.createTextNode(cost_C);
    span.appendChild(content);
    li.appendChild(span);

    var span = document.createElement("span");
    span.setAttribute("id", "won");
    content = document.createTextNode("원");
    span.appendChild(content);
    li.appendChild(span);
  }
  finalPrice();
}

let ul = document.getElementById("tentUL");
ul.onclick = function (evt) {
  let target = evt.target;
  if (target.className === "add") {
    click_add(target);
  } else if (target.className === "subtract") {
    click_sub(target);
  } else if (target.className === "remove") {
    click_remove(target);
  } else {
    return;
  }
};

function click_add(target) {
  var count = target.parentElement.children[0].value;
  let li_id = target.parentElement.id;
  let val = Number(count);
  val += 1;
  var object = document.getElementById(li_id);
  if (li_id === "li_A") {
    var total = cost_A * val;
  } else if (li_id === "li_B") {
    var total = cost_B * val;
  } else if (li_id === "li_C") {
    var total = cost_C * val;
  } else {
    return;
  }
  object.children[0].value = val;
  object.children[4].textContent = total;
  finalPrice();
}

function click_sub(target) {
  var count = target.parentElement.children[0].value;
  let li_id = target.parentElement.id;
  let val = Number(count);
  val -= 1;
  if (val < 1) {
    alert("최소 수량은 1개입니다.");
    return;
  }
  var object = document.getElementById(li_id);

  if (li_id === "li_A") {
    var total = cost_A * val;
  } else if (li_id === "li_B") {
    var total = cost_B * val;
  } else if (li_id === "li_C") {
    var total = cost_C * val;
  } else {
    return;
  }
  object.children[0].value = val;
  object.children[4].textContent = total;
  finalPrice();
}

function click_remove(target) {
  var li_id = target.parentElement.id;
  var select = document.getElementById("mySelect");
  var object = document.getElementById(li_id);

  var price = object.children[4].textContent;

  if (li_id === "li_A") {
    li_A.remove();
  } else if (li_id === "li_B") {
    li_B.remove();
  } else if (li_id === "li_C") {
    li_C.remove();
  } else {
    return;
  }

  for (i = 0; i < select_arr.length; i++) {
    if (object.textContent.includes(select_arr[i])) {
      select_arr.splice(i, 1);
      i--;
    }
  }
  select.selectedIndex = 0;
  finalPrice();
}

function finalPrice() {
  let totalPrice = 0;
  var li = document.getElementsByTagName('li');
  console.log(totalPrice);
  for(i =0; i<li.length;i++){
    totalPrice += li[i].children[4].textContent * 1;
  }  
  document.getElementById("finalPrice").textContent = totalPrice;
}
