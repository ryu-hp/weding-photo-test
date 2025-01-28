// jQuery(function ($) { 
//   // アコーディオンメニューの開閉動作
//   $('.is-AccordionTitle').on('click', function() {
//     var findElm = $(this).next(".accordion-content");
//     $(findElm).toggleClass('open');//アコーディオンの上下動作
//     $(this).toggleClass('active');
//   });

//   let mySwiper = new Swiper ('#works-swiper', {
//     // オプション設定
//     slidesPerView: 'auto',
//     loop: true,
//     centeredSlides: true,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     }, 
//     spaceBetween: 2,
//     navigation: {
//       nextEl: '#works-swiper-button-next', // 「次へ」ボタン要素のクラス
//       prevEl: '#works-swiper-button-prev', // 「前へ」ボタン要素のクラス
//     },
//     //ページネーション表示設定
//     pagination: {
//       el: '#works-swiper_pagination', //ページネーション要素
//       type: 'bullets', //ページネーションの種類
//       clickable: true, //クリックに反応させる
//     },
//   });
//   let flowSwiper = new Swiper ('#flow-swiper', {
//     // オプション設定
//     slidesPerView: 'auto',
//     loop: true,
//     centeredSlides: true, // アクティブなスライドを中央に配置
//     // オートプレイ
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },  
//     //ページネーション表示設定
//     pagination: {
//       el: '#flow-swiper_pagination', //ページネーション要素
//       type: 'bullets', //ページネーションの種類
//       clickable: true, //クリックに反応させる
//     },
//   });

//   let accordionDetails = '.js-details';
//   let accordionSummary = '.js-details-summary';
//   let accordionContent = '.js-details-content';
//   let speed = 300

//   $(accordionSummary).each(function() {
//     $(this).on("click", function(event) {
//       // デフォルトの挙動を無効化
//       event.preventDefault();
//       // summaryにis-activeクラスを切り替え
//       $(this).toggleClass("is-active");

//       if ($(this).parent($(accordionDetails)).attr("open")) {
//         // アコーディオンを閉じるときの処理
//         $(this).nextAll($(accordionContent)).slideUp(speed, function() {
//           // アニメーションの完了後にopen属性を取り除く
//           $(this).parent($(accordionDetails)).removeAttr("open");
//         });
//       } else {
//         // アコーディオンを開くときの処理
//         // open属性を付ける
//         $(this).parent($(accordionDetails)).attr("open", "true");
//         // いったんdisplay:none;してからslideDownで開く
//         $(this).nextAll($(accordionContent)).hide().slideDown(speed);
//       }
//     });
//   });

//   // #js-fixed-bottomのフェードイン処理
//   const mv = document.getElementById('fv');
//   const fixedBottom = document.querySelector('.js-fixed-bottom');

//   function checkPosition() {
//     const mvBottom = mv.getBoundingClientRect().bottom;
//     if (mvBottom < 0) {
//       fixedBottom.classList.add('show');
//     } else {
//       fixedBottom.classList.remove('show');
//     }
//   }

//   window.addEventListener('scroll', checkPosition);
//   window.addEventListener('resize', checkPosition);

//   // 初回チェック
//   checkPosition();

//   // ページ上部に戻る処理
//   function toTop() {
//     const toTopButton = document.querySelector('.js-toTop');
  
//     toTopButton.addEventListener('click', function() {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     });
//   }

//   toTop();


//   // ヘッダー非表示
//   function headerHide() {
//     var headerHeight = $('header').outerHeight(),
//         startPos = 0;
//     $(window).on('scroll', function() {
//       var scrollPos = $(this).scrollTop();
//       if (scrollPos > startPos && scrollPos > headerHeight) {
//         $('header').css('top', '-' + headerHeight + 'px');
//       } else {
//         $('header').css('top', '0');
//       }
//       startPos = scrollPos;
//     });
//   }

//   headerHide();
// });

// $(document).ready(function() {
//   function fadeAnimation1() {
//     $('.js-fadeInUp').each(function() {
//       var elemPos = $(this).offset().top;
//       var windowHeight = $(window).height();
//       var scrollPos = $(window).scrollTop() + windowHeight - 100;

//       if (scrollPos > elemPos) {
//         $(this).addClass('visible');
//       }
//     });
//   }

//   $(window).on('scroll', fadeAnimation1);
//   $(window).on('resize', fadeAnimation1);

//   // 初回チェック
//   fadeAnimation1();

// });
