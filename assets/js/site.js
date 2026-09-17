document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.getElementById('modal-contact');

  if (!phoneInput) return;

  function formatPhone(value) {
    let digits = value.replace(/\D/g, '');

    if (digits.startsWith('8')) {
      digits = '7' + digits.slice(1);
    } else if (!digits.startsWith('7')) {
      digits = '7' + digits;
    }

    digits = digits.slice(0, 11);

    const number = digits.slice(1);
    let result = '+7';

    if (number.length > 0) result += ' (' + number.slice(0, 3);
    if (number.length >= 3) result += ')';
    if (number.length > 3) result += ' ' + number.slice(3, 6);
    if (number.length > 6) result += '-' + number.slice(6, 8);
    if (number.length > 8) result += '-' + number.slice(8, 10);

    return result;
  }

  phoneInput.addEventListener('input', function () {
    phoneInput.value = formatPhone(phoneInput.value);
  });

  phoneInput.addEventListener('focus', function () {
    if (!phoneInput.value) {
      phoneInput.value = '+7 (';
    }
  });

  phoneInput.addEventListener('blur', function () {
    if (phoneInput.value === '+7 (') {
      phoneInput.value = '';
    }
  });
});
