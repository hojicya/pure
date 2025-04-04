import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

$(function () {
  var headerHeight = $("#header").outerHeight();

  // // ヘッダーの高さ分main下げる
  // $("main").css("margin-top", headerHeight);
  // $(".mv").css("height", `calc(100svh - ${headerHeight}px)`);

  // リロード時フェードイン
  gsap.to("body", {
    duration: 1.5,
    opacity: 1,
  });

  /*__ scroll ______________________________________*/

  // コンテンツフェードイン
  const contents = gsap.utils.toArray(".js-fadeIn");
  contents.forEach((content) => {
    gsap.from(content, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: content,
        start: "top 70%",
        // markers: true,
      },
    });
  });

  // スムーススクロール
  $('a.anc[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHeight + 2;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  /*__ modal ______________________________________*/
  const modalLinks = document.querySelectorAll(".js-modal");
  modalLinks.forEach((link) => {
    $(link).modaal({
      content_source: link.getAttribute("href"),
      custom_class: "modal__default",
    });
  });

  $(".js-modal-movie").modaal({
    type: "video",
  });
});
