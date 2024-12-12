// gsap.registerPlugin(ScrollTrigger)

$(function () {
  const spBreakPoint = window.matchMedia("(min-width: 768px)").matches;

  // // ヘッダーの高さ分main下げる
  // var headerHeight = $("#header").outerHeight();
  // $("main").css("margin-top", headerHeight);

  // リロード時フェードイン
  gsap.to("body", {
    duration: 1.5,
    opacity: 1,
  });

  /*__ scroll ______________________________________*/

  // 慣性スクロール
  const lenis = new Lenis({
    lerp: 0.1,
    duration: 1,
    smoothTouch: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // スムーススクロール
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHeight + 2;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  /*__ modal ______________________________________*/
});
