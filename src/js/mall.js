// 確認購買--課程
let pay_box = document.getElementById("pay_box");
let show_pay_box = document.getElementById("show_box");
let no_btn = document.getElementById("no_btn");
let yes_btn = document.getElementById("yes_btn");

// 會員等級不足
let lv_box = document.getElementById("level_box");
let show_lv_box = document.querySelectorAll(".item_info_lock");
let ok_btn = document.getElementById("level_btn");

// 確認購買--裝備
let tool_box = document.getElementById("tool_box");
let show_tool_box = document.querySelectorAll(".item_info_tool");
let tool_no_btn = document.getElementById("tool_n_btn");
let tool_yes_btn = document.getElementById("tool_y_btn");

//NPC對話框
// let img = document.getElementsByName("npc_talk")[0];
// let imgArr = ["./images/mall_talk_1.png", "./images/mall_talk_2.png"];
// let talk = 0;

// 確認購買--課程燈箱
function show_box() {
  pay_box.style.display = "block";
}

function no_button() {
  pay_box.style.display = "none";
}

function yes_button() {
  window.location.href = "./payment.html";
}

// 會員等級不足--燈箱
function box() {
  lv_box.style.display = "block";
}

function no() {
  lv_box.style.display = "none";
}

// 確認購買--裝備燈箱
function show_t_box() {
  tool_box.style.display = "block";
}

function tool_n_btn() {
  tool_box.style.display = "none";
}

function tool_y_btn() {
  alert("購買成功");
  tool_box.style.display = "none";
}

function init() {
  show_pay_box.onclick = show_box;
  no_btn.onclick = no_button;
  yes_btn.onclick = yes_button;
  tool_no_btn.onclick = tool_n_btn;
  tool_yes_btn.onclick = tool_y_btn;

  for (i = 0; i < show_lv_box.length; i++) {
    show_lv_box[i].onclick = box;
  }
  for (i = 0; i < show_tool_box.length; i++) {
    show_tool_box[i].onclick = show_t_box;
  }
  ok_btn.onclick = no;
}

window.addEventListener("load", init, false);
