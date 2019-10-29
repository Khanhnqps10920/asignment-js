$(document).ready(function() {
  const z = $('.product-tab li.active');
  console.log(z);
  $('.product-tab li').on('click', function() {
    $('.product-tab li.active').removeClass('active');
    $(this).addClass('active');

    const panelToShow = $(this).attr('rel');

    //hide current panel
    $('.product-panels.active').slideUp(300, function() {
      $(this).removeClass('active');

      $('#' + panelToShow).slideDown(300, function() {
        $(this).addClass('active');
      });
    });
  });
});
