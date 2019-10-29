$(document).ready(function() {
  const modal = $('.modal');
  const imgClick = $('#myImg');
  const modalImg = $('#modalImg');
  const close = $('.close');

  imgClick.on('click', function() {
    modal.css('display', 'flex');
    modalImg.attr('src', this.src);
  });

  close.on('click', () => {
    modal.css('display', 'none');
  });
});
