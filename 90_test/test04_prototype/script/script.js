// Javascript

$(document).ready(function () {

   $('#wrap').fullpage({
      // 媛� �섏씠吏� 諛곌꼍��
      sectionsColor: ['transparent', '#eee', 'cadetblue', '#ccc'],
      // �섏씠吏� �대룞 �대퉬寃뚯씠��
      navigation: true,
      navigationTooltips: ['About Hyundai', 'Model', 'Event', 'Customer Service'],
      showActiveTooltip: true,
      // �щ씪�대뱶 硫붾돱
      slidesNavigation: true,
      loopHorizontal: false,
      // GNB
      menu: '#menu',
      // �꾩옱 �섏씠吏��� �좊궃 �댄썑
      onLeave: function (origin, destination, direction) {
         if (origin.index == 0) {
            // vid.pause();
            $('.s1').css({backgroundColor:'yellow'});
         }
      },
      // �꾩옱 �섏씠吏��� �꾩갑�� �댄썑
      afterLoad: function (origin, destination, direction) {
         if (destination.index == 0) {
            // vid.play();
            $('.s1').css({backgroundColor:'orange'});
         }
      },
      onLeave: function (origin, destination, direction) {
         if (origin.index == 2) {
            $('.s3 p').animate({ opacity: 0, left: -100 }, 1000);
         }
      },
      // �꾩옱 �섏씠吏��� �꾩갑�� �댄썑
      afterLoad: function (origin, destination, direction) {
         if (destination.index == 2) {
            $('.s3 p').animate({ opacity: 1, left: '50%' }, 500);
         }
      },
   });

   // 1 �섏씠吏� - �뚯궗 �뚭컻 鍮꾨뵒�� �ъ깮
   var vid = $('video').get(0);
   vid.load();

   $('.s1').mouseenter(function(){
      vid.play();
   });
   $('.s1').mouseleave(function(){
      vid.pause();
   });


   // 2 �섏씠吏� - �꾩껜紐⑤뜽 �� 硫붾돱 �뺤떇
   $('#tab>ul>li').click(function () {
      // 踰꾪듉 �대━ �� �대떦 踰꾪듉�� �レ옄瑜� i�� ����
      var i = $(this).index();
      // 踰꾪듉 �대┃ �� div(�댁슜)瑜� 紐⑤몢 �④린怨�, �대┃ �� div留� 蹂댁뿬以���.
      $('#tab div').css({ display: 'none' })
      $('#tab div').eq(i).css({ display: 'block' });
      // �쇱씤 泥섎━
      $('#tab>ul>li').css({ backgroundColor:'#444', zIndex:0,color:'#fff' });
      $(this).css({ backgroundColor: '#fff', zIndex: 1, color:'#444' });
   });

   // �� 硫붾돱 �댁슜�� �대┃ ��
   $('#tab div:eq(0) li').click(function () {
      var num = $(this).index();
      // �� 李쎌쑝濡� 留곹겕
      if (num == 0) {
         window.open('about:blank').location.href = "http://widesign.dothome.co.kr";
      } else if (num == 1) {
         window.open('about:blank').location.href = "http://hurom.dothome.co.kr";
      } else if (num == 2) {
         window.open('about:blank').location.href = "http://monami3.dothome.co.kr";
      } else {
         window.open('about:blank').location.href = "http://ikea.dothome.co.kr";
      }
   });
   $('#tab div:eq(1) li').click(function () {
      var num = $(this).index();
      // �� 李쎌쑝濡� 留곹겕
      if (num == 0) {
         window.open('about:blank').location.href = "http://widesign.dothome.co.kr";
      } else if (num == 1) {
         window.open('about:blank').location.href = "http://hurom.dothome.co.kr";
      } else if (num == 2) {
         window.open('about:blank').location.href = "http://monami3.dothome.co.kr";
      } else {
         window.open('about:blank').location.href = "http://ikea.dothome.co.kr";
      }
   });

   // 4 �섏씠吏� - 怨좉컼�쒕퉬��
   var mySlider = $('.bxslider').bxSlider({
      // �щ씪�대뱶 �ш린
      slideWidth: 400,
      maxSlides: 3,
      moveSlides: 1,
      slideMargin: 10,
      captions: true,
      // �먮룞 �щ씪�대뱶
      auto: true,
      // �대�吏��� 留덉슦�� �몃쾭 �� �щ씪�대뱶 �뺤�
      autoHover: true,
      // 醫뚯슦 踰꾪듉
      controls: false,
      // �섎떒 以묒븰 �섏씠�� 踰꾪듉
      pager: false,
      // �щ씪�대뵫 �섍린 �꾩뿉 autoPager �⑥닔 �몄텧
      onSlideBefore: function () { autoPager(); }
   });

   // 醫뚯슦 踰꾪듉
   $('.pBtn').click(function () {
      mySlider.goToPrevSlide();
      autoPager();
      return false;
   });
   $('.nBtn').click(function () {
      mySlider.goToNextSlide();
      autoPager();
      return false;
   });

   // �섏씠�� 踰꾪듉
   $('#mainImg .pager li').click(function () {
      var num = $(this).index();
      mySlider.goToSlide(num);
      return false;
   });

   // �섏씠�� �� 蹂�寃�
   function autoPager() {
      $('#mainImg .pager li').removeClass('active');
      var current = mySlider.getCurrentSlide();
      $('#mainImg .pager li').eq(current).addClass('active');
   }

});