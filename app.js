const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: false,
  mousewheel: true,
  slidesPerView: 'auto', // footer 조정

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});

// 링크 이벤트 제거
$('a').click(function(){
  return false;
})