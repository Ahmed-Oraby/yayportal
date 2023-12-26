let lastScrollArrow = 0;
$(window).on('scroll', () => {
  if (
    $(window).scrollTop() >=
      $('#arrow1').offset().top +
        $('#arrow1').outerHeight() -
        window.innerHeight &&
    document.getElementById('arrow1').getBoundingClientRect().top > 0
  ) {
    console.log('arrow1');
    let width = $('#arrow1 .green-arrow-box').width();
    if (window.scrollY > lastScrollArrow) {
      if (width < 512) {
        $('#arrow1 .green-arrow-box').width(width + 10);
      }
    } else if (window.scrollY < lastScrollArrow) {
      if (width > 0) {
        $('#arrow1 .green-arrow-box').width(width - 10);
      }
    }
  }

  if (
    $(window).scrollTop() >=
      $('#arrow2').offset().top +
        $('#arrow2').outerHeight() -
        window.innerHeight &&
    document.getElementById('arrow2').getBoundingClientRect().top > 0
  ) {
    console.log('arrow2');
    let width = $('#arrow2 .green-arrow-box').width();
    if (window.scrollY > lastScrollArrow) {
      if (width < 512) {
        $('#arrow2 .green-arrow-box').width(width + 10);
      }
    } else if (window.scrollY < lastScrollArrow) {
      if (width > 0) {
        $('#arrow2 .green-arrow-box').width(width - 10);
      }
    }
  }

  if (
    $(window).scrollTop() >=
      $('#arrow3').offset().top +
        $('#arrow3').outerHeight() -
        window.innerHeight &&
    document.getElementById('arrow3').getBoundingClientRect().top > 0
  ) {
    console.log('arrow3');
    let width = $('#arrow3 .green-arrow-box').width();
    if (window.scrollY > lastScrollArrow) {
      if (width < 350) {
        $('#arrow3 .green-arrow-box').width(width + 10);
      }
    } else if (window.scrollY < lastScrollArrow) {
      if (width > 0) {
        $('#arrow3 .green-arrow-box').width(width - 10);
      }
    }
  }

  lastScrollArrow = window.scrollY <= 0 ? 0 : window.scrollY;
});

$('#privacy').click(() => $('#modal-privacy').fadeIn(500));
$('#close-privacy').click(() => $('#modal-privacy').fadeOut(500));
$('#terms').click(() => $('#modal-terms').fadeIn(500));
$('#close-terms').click(() => $('#modal-terms').fadeOut(500));
$('#legal').click(() => $('#modal-legal').fadeIn(500));
$('#close-legal').click(() => $('#modal-legal').fadeOut(500));
$('#about').click(() => $('#modal-about').fadeIn(500));
$('#close-about').click(() => $('#modal-about').fadeOut(500));
$('#contact').click(() => $('#modal-contact').fadeIn(500));
$('#close-contact').click(() => $('#modal-contact').fadeOut(500));
