const mainSwiper = new Swiper('.main-swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
});



const cardSwiper = new Swiper('.card-swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
});


new WOW().init();




// mobile-menu処理

jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active'); //ついていたら外す。ついていなかったらつける
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-bg').toggleClass('is-active');

  return false;
});


jQuery('.drawer-bg').on('click', function() {
  jQuery('.drawer-icon').removeClass('is-active'); 
  jQuery('.drawer-content').removeClass('is-active');
  jQuery('.drawer-bg').removeClass('is-active');
});



// totop表示処理

jQuery(window).on('scroll', function(e) {
  e.preventDefault();

  if (jQuery(this).scrollTop() > 700) {
    jQuery('.totop').addClass('is-show');
  } else {
    jQuery('.totop').removeClass('is-show');
  }


  return false;
})


// スムーススクロール処理

jQuery('a[href^="#"]').click(function() {

  let header = jQuery('.header').innerHeight();

  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);

  // 条件式 ? 真の場合の文 : 偽の場合の文 

  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top - header;

  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
   },
    speed
  );


  return false;
}); 


// ページ内リンクでクリックした要素に対して下線を引く

jQuery('.header__nav li a').on('click', function(e) {
  e.preventDefault();
  jQuery('.header__nav li a').removeClass('is-active');

  jQuery(this).addClass('is-active'); // this は今押した要素

  return false;
}) ;


//アコーディオンメニュー実装

jQuery('.qa-box-q').on('click', function() {
  jQuery(this).next().slideToggle(); // nextは対象要素の次の要素。

  jQuery(this).children('.qa-box-icon').toggleClass('is-open');
});

// モーダル実装


jQuery('.js-close-btn').on('click', function(e) {
  e.preventDefault();

  let target = jQuery(this).data('target'); // data-targetの値を取得

  jQuery(target).removeClass('is-open');
  
  return false;
})


jQuery('.js-modal-open').on('click', function(e) {

  e.preventDefault();

  let target = jQuery(this).data('target');

  jQuery(target).addClass('is-open');
  
})



