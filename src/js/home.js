//換裝
let img = document.getElementsByName("mall_npc")[0];
let imgArr = [
  "./images/home_mall_npc2.png",
  "./images/home_mall_npc3.png",
  "./images/home_mall_npc4.png",
  "./images/home_mall_npc5.png",
  "./images/home_mall_npc6.png",
];
let npc = 0;

//太陽眨眼
let sun_img = document.getElementsByName("sun_pic")[0];
let sun_imgArr = ["./images/sun.png", "./images/sun_close.png"];
let sun = 0;

//開註冊燈箱
let loginRegister = document.getElementById("login_register");
let show_sign_up = document.getElementById("sign_up");

//換裝+太陽眨眼function
function change() {
  npc--;
  sun--;
  if (npc < 0) {
    npc = imgArr.length - 1;
  } else if (sun < 0) {
    sun = sun_imgArr.length - 1;
  }
  img.src = imgArr[npc];
  sun_img.src = sun_imgArr[sun];
}

function init() {
  setInterval("change()", 1000);
}
window.addEventListener("load", init, false);

//開燈箱function
show_sign_up.addEventListener("click", function () {
  loginRegister.style.display = "flex";
});
//船
let animation;

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.set("#motionSVG", {
  scale: 0.5,
  autoAlpha: 1,
});
gsap.set("#motionSVG", { transformOrigin: "50% 50%" });

animation = gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#star-path",
    start: "top 40%",
    end: "bottom -80",
    scrub: 1,
    markers: false,
    //回頭
    onUpdate: (self) => {
      gsap.to("#motionSVG", {
        rotation: () => (self.direction === 1 ? 0 : -180),
      });
    },
  },
  duration: 10,
  ease: "none",
  immediateRender: true,
  motionPath: {
    path: "#star-path",
    align: "#star-path",
    alignOrigin: [0.5, 0.5],
    autoRotate: 270,
  },
});
