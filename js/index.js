const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 2, stager: 0.25 });
tl.to(".hidden", { y: "0%", duration: 1 }, "-=1.50");
tl.to(".k-love", { x: "0%", duration: 1 }, "-=1.50");
tl.to(".p-love", { x: "0%", duration: 1 }, "-=1.50");


var memBtn = document.querySelector(".member-btn");
var modalBg = document.querySelector(".modal-bg");
var cancel = document.querySelector(".cancel");

memBtn.addEventListener("click", function(){
  modalBg.classList.add("bg-active");
});
cancel.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});