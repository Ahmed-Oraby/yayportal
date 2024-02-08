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

$('#privacy-btn').click(() => {
  $('#privacy').fadeIn(500);
  window.location.hash = '#privacy';
});
$('#close-privacy').click(() => $('#privacy').fadeOut(500));

$('#terms-btn').click(() => {
  $('#terms').fadeIn(500);
  // window.location.hash = '#terms';
});
$('#close-terms').click(() => $('#terms').fadeOut(500));

$('#legal-btn').click(() => {
  $('#legal').fadeIn(500);
  // window.location.hash = '#legal';
});
$('#close-legal').click(() => $('#legal').fadeOut(500));

$('#about-btn').click(() => {
  $('#about').fadeIn(500);
  // window.location.hash = '#about';
});
$('#close-about').click(() => $('#about').fadeOut(500));

$('#contact-btn').click(() => {
  $('#contact').fadeIn(500);
  // window.location.hash = '#contact';
});
$('#close-contact').click(() => $('#contact').fadeOut(500));

// window.addEventListener('hashchange', function () {
//   setModalUrl();
// });

// function setModalUrl() {
//   if (window.location.hash === '#privacy') {
//     $('#privacy').fadeIn(500);
//   } else if (window.location.hash === '#terms') {
//     $('#terms').fadeIn(500);
//   } else if (window.location.hash === '#legal') {
//     $('#legal').fadeIn(500);
//   } else if (window.location.hash === '#about') {
//     $('#about').fadeIn(500);
//   } else if (window.location.hash === '#contact') {
//     $('#contact').fadeIn(500);
//   }
// }

// setModalUrl();

document
  .querySelectorAll('.btn-link')
  .forEach((item) => (item.textContent = item.textContent.trim()));

const link = window.location.href;
if (link.endsWith('/privacy')) {
  $('#privacy').fadeIn(500);
} else if (link.endsWith('/terms')) {
  $('#terms').fadeIn(500);
} else if (link.endsWith('/legal')) {
  $('#legal').fadeIn(500);
} else if (link.endsWith('/about')) {
  $('#about').fadeIn(500);
} else if (link.endsWith('/contact')) {
  $('#contact').fadeIn(500);
}

function scrollFct() {
  if ($(window).scrollTop() >= $('#trigger_parralex1').offset().top +
    $('#trigger_parralex1').outerHeight() - window.innerHeight) {
      console.log("1");
    $("#about-us").css("display","none");
    $("#why-choose").css("display","block");
  } else {
    console.log("2");
    $("#about-us").css("display","block");
    $("#why-choose").css("display","none");
  }
}
$(window).on('scroll', function () {
  scrollFct();
});
scrollFct();