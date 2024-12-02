// Javascript

$(document).ready(function () {

   $('#wrap').fullpage({
      autoScrolling: true, // 섹션 스크롤을 자동으로 처리
      fitToSection: true, // 각 섹션을 화면 높이에 맞춤
      paddingTop: 0, // 섹션 상단 패딩
      paddingBottom: 0, // 섹션 하단 패딩
      sectionsColor: ['transparent', '#eee', 'cadetblue', '#ccc'], // 각 섹션의 배경색 지정
      navigation: true, // 페이지 네비게이션 활성화
      navigationTooltips: ['Welcome', 'Discography', 'Updates', 'Band Info'], // 네비게이션 툴팁
      showActiveTooltip: true, // 활성화된 툴팁 표시
      slidesNavigation: true, // 슬라이드 네비게이션 활성화
      loopHorizontal: false, // 슬라이드가 반복되지 않도록 설정
      menu: '#menu', // GNB 메뉴와 연동

      // 섹션을 떠날 때 호출되는 이벤트
      onLeave: function (origin, destination, direction) {
         if (origin.index == 0) {
            // 첫 번째 섹션을 떠날 때 배경색 변경
            $('.s1').css({backgroundColor: 'yellow'});
         }
      },

      // 섹션이 로드된 후 호출되는 이벤트
      afterLoad: function (origin, destination, direction) {
         if (destination.index == 0) {
            // 첫 번째 섹션으로 돌아왔을 때 배경색 변경
            $('.s1').css({backgroundColor: 'orange'});
         }
      },

      // 다른 섹션을 떠날 때 실행
      onLeave: function (origin, destination, direction) {
         if (origin.index == 2) {
            // 세 번째 섹션을 떠날 때 텍스트 애니메이션
            $('.s3 p').animate({ opacity: 0, left: -100 }, 1000);
         }
      },

      // 다른 섹션에 로드된 후 실행
      afterLoad: function (origin, destination, direction) {
         if (destination.index == 2) {
            // 세 번째 섹션에 도착했을 때 텍스트 애니메이션
            $('.s3 p').animate({ opacity: 1, left: '50%' }, 500);
         }
      },
   });

   // 1번 섹션 - 배경 비디오 재생/정지
   var vid = $('video').get(0);
   vid.load(); // 비디오 로드

   // 마우스가 섹션 위에 올라가면 비디오 재생
   $('.s1').mouseenter(function() {
      vid.play();
   });

   // 마우스가 섹션을 떠나면 비디오 정지
   $('.s1').mouseleave(function() {
      vid.pause();
   });

   // 2번 섹션 - 탭 메뉴 동작
   $('#tab>ul>li').click(function () {
      var i = $(this).index(); // 클릭한 탭의 인덱스 가져오기

      // 모든 탭 내용 숨기고 선택된 탭만 표시
      $('#tab div').css({ display: 'none' });
      $('#tab div').eq(i).css({ display: 'block' });

      // 선택된 탭 스타일 변경
      $('#tab>ul>li').css({ backgroundColor: '#1c1c1c', zIndex: 0, color: '#fff' });
      $(this).css({ backgroundColor: '#fff', zIndex: 1, color: '#1c1c1c' });
   });

   // 4번 섹션 - 슬라이더 설정
   var mySlider = $('.bxslider').bxSlider({
      slideWidth: 400, // 슬라이드 폭
      maxSlides: 3, // 한 화면에 보여질 슬라이드 개수
      moveSlides: 1, // 이동할 슬라이드 개수
      slideMargin: 10, // 슬라이드 간 간격
      captions: true, // 캡션 활성화
      auto: true, // 자동 슬라이드
      autoHover: true, // 슬라이드에 마우스 올릴 때 정지
      controls: false, // 이전/다음 버튼 비활성화
      pager: false, // 하단 페이지 버튼 비활성화
      onSlideBefore: function () { autoPager(); } // 슬라이드 전환 전 호출
   });

   // 이전 버튼 클릭 시 슬라이드 이동
   $('.pBtn').click(function () {
      mySlider.goToPrevSlide();
      autoPager();
      return false;
   });

   // 다음 버튼 클릭 시 슬라이드 이동
   $('.nBtn').click(function () {
      mySlider.goToNextSlide();
      autoPager();
      return false;
   });

   // 하단 페이지 버튼 클릭 시 슬라이드 이동
   $('#mainImg .pager li').click(function () {
      var num = $(this).index(); // 클릭한 페이지 버튼의 인덱스 가져오기
      mySlider.goToSlide(num); // 해당 슬라이드로 이동
      return false;
   });

   // 현재 슬라이드에 맞게 페이지 버튼 업데이트
   function autoPager() {
      $('#mainImg .pager li').removeClass('active');
      var current = mySlider.getCurrentSlide(); // 현재 슬라이드 가져오기
      $('#mainImg .pager li').eq(current).addClass('active'); // 활성화 클래스 추가
   }

});
