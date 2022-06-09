//換裝
// let img = document.getElementsByName("mall_npc")[0];
// let imgArr = [
//   "./images/home_mall_npc_1.png",
//   "./images/home_mall_npc_2.png",
//   "./images/home_mall_npc_3.png",
//   "./images/home_mall_npc_4.png",
// ];
// let npc = 0;

//太陽眨眼
let sun_img = document.getElementsByName("sun_pic")[0];
let sun_imgArr = ["./images/sun.png", "./images/sun_close.png"];
let sun = 0;

//開註冊燈箱
let loginRegister = document.getElementById("login_register");
let show_sign_up = document.getElementById("sign_up");

//換裝+太陽眨眼function
function change() {
  //npc--;
  sun--;
  //   if (npc < 0) {
  //     npc = imgArr.length - 1;
  //     }
  if (sun < 0) {
    sun = sun_imgArr.length - 1;
  }
  //img.src = imgArr[npc];
  sun_img.src = sun_imgArr[sun];
}

function init() {
  setInterval("change()", 1000);
}
window.addEventListener("load", init, false);

//開燈箱function
// show_sign_up.addEventListener("click", function () {
//   loginRegister.style.display = "flex";
// });
//船
let animation;

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.set("#motionSVG", { scale: 0.5, autoAlpha: 2 });
gsap.set("#motionSVG", { transformOrigin: "50% 50%" });

animation = gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#star-path",
    end: "+=3250",
    scrub: 1,
    markers: false,
  },
  delay: 0.5,
  duration: 500,
  ease: "power1.inOut",
  immediateRender: true,
  motionPath: {
    path: "#star-path",
    align: "#star-path",
    alignOrigin: [0.5, 0.5],
    autoRotate: 270,
  },
});
