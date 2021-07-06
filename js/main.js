$('.header').height($(window).height());

$('.navbar a').click(function () {
  $('html').animate(
    {
      scrollTop: $('.' + this.dataset.value).offset().top,
    },
    1000
  );
});

// When 'see more' button is clicked, move to the about me section.
$('#see-more-btn').click(() => {
  let scrollTo = $('.about').prop('scrollHeight');
  $('html').animate({ scrollTop: scrollTo }, 1000);
});
