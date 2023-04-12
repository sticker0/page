// scrolla
$(function () {
  $(".animate").scrolla({
    // default
    mobile: true, // disable animation on mobiles
    once: false, // only once animation play on scroll
  });
});

//splitting.js
$(function () {
  Splitting();
});

// bg color change

//  gsap.scrollTrigger 플러그인을 사용 해 배경색 바뀌는 시점을 지정
$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "0% 100%",
        end: "0% 0%",
        scrub: 1,
        // markers: true
      },
    })
    // 배경색을 #fff로 바꾸고 nav 항목을 삭제
    .to("body", { backgroundColor: "#fff", ease: "none", duration: 5 }, 0)
    .to("nav", { display: "none", ease: "none", duration: 1 }, 0);
});

// video safari play
var myVideo = document.getElementById("portVid");

function playPause() {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
}

var myVideo2 = document.getElementById("wave");

function playPause() {
  if (myVideo2.paused) {
    myVideo2.play();
  } else {
    myVideo2.pause();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // 페이지가 로드되기 전까지 스크롤 이벤트를 막습니다.
});
