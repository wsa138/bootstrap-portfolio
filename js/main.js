$('.header').height($(window).height());

$('#email-address').click(displayAddress);

function displayAddress() {
  alert('wsaddesso@gmail.com');
}

$('.navbar a').click(function () {
  console.log('#' + this.dataset.value);
  $('body,html').animate(
    {
      scrollTop: $('.' + this.dataset.value).offset().top,
    },
    1000
  );
});

// Todo: When 'see more' button is clicked, move to the about me section.
