const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerHTML;
    switch (value) {
      case '=':
        try {
          input.value = eval(input.value);
        } catch (e) {
          input.value = 'Error';
        }
        break;
      case 'AC':
        input.value = '';
        break;
      case 'DEL':
        input.value = input.value.slice(0, -1);
        break;
      default:
        input.value += value;
    }
  });
});