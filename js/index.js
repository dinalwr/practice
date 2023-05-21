/* Функция скрытия/показа navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

/* функция открытия меню-бургер */
$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, .header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Банковски карты, функции

document.getElementById('card-number').addEventListener('input', function () {
  // Код для определения логотипа платежной системы
  var cardNumber = this.value.replace(/\D/g, ''); // Убираем все символы, кроме цифр
  var visaRegexp = /^4[0-9]{12}(?:[0-9]{3})?$/;
  var mastercardRegexp = /^5[1-5][0-9]{14}$/;
  var amexRegexp = /^3[47][0-9]{13}$/;
  var discoverRegexp = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  var jcbRegexp = /^(?:2131|1800|35\d{3})\d{11}$/;
  var dinersRegexp = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  var mirRegexp = /^220[0-4][0-9]{12}$/;
  var logo;
  if (visaRegexp.test(cardNumber)) {
    logo = 'images/card/visa-logo.png';
  } else if (mastercardRegexp.test(cardNumber)) {
    logo = 'images/card/mastercard-logo.png';
  } else if (amexRegexp.test(cardNumber)) {
    logo = 'amex-logo.png';
  } else if (discoverRegexp.test(cardNumber)) {
    logo = 'discover-logo.png';
  } else if (jcbRegexp.test(cardNumber)) {
    logo = 'jcb-logo.png';
  } else if (dinersRegexp.test(cardNumber)) {
    logo = 'diners-logo.png';
  } else if (mirRegexp.test(cardNumber)) {
    logo = 'images/card/mir-logo.png';
  } else {
    logo = 'images/card/default-logo.png';
  }

  var logoImg = document.createElement('img');
  logoImg.src = logo;
  document.getElementById('logo-container').innerHTML = '';
  document.getElementById('logo-container').appendChild(logoImg);
});

