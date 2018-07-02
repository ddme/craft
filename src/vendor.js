import $ from 'jquery';
window.$ = $;

import cookies from 'js-cookie';

window.cookies = cookies;

var container = '#cookie_consent';
var dismiss = '#cookie_dismiss';
var consent = cookies.get('cookie_consent');

if (consent == undefined) {
  $(container).fadeIn();
  $(dismiss).on('click', function() {
    cookies.set('cookie_consent', 'active', { expires: 7 });
    $(container).fadeOut();
  });
}

import lazyload from 'lazyload';

new lazyload();

import parsley from 'parsleyjs';

$('form').parsley({
  errorClass: 'has-errors',
  successClass: 'has-success',
  classHandler: function (el) {
    return el.$element.closest('.field-group');
  },
  errorsWrapper: '<div class="field-errors"></div>',
  errorTemplate: '<div class="field-error"></div>',
});

$('#js-burger').on('click', function () {
  $('#js-navigation').toggleClass('hidden');
});

$('input[type="checkbox"]').on('change', function() {
  $(this).parent().toggleClass('checked');
});

$('input[type="radio"]').on('change', function() {
  $('input[type="radio"]:not(:checked)').parent().removeClass('checked');
  $('input[type="radio"]:checked').parent().addClass('checked');
});

import mask from 'jquery-mask-plugin';

$('.input-date').mask('00/00/0000');
$('.input-time').mask('00:00:00');
$('.input-datetime').mask('00/00/0000 00:00:00');
$('.input-phone').mask('00000 000000');
