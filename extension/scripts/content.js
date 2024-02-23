// 执行一次查询并添加图标到密码输入框的函数
function addIconsToPasswordInputs() {
  var passwordInputs = document.querySelectorAll('input[type="password"]');
  passwordInputs.forEach(function(input) {
    if (!input.previousElementSibling || !input.previousElementSibling.classList.contains('show-password-icon')) {
      var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      icon.setAttribute('viewBox', '0 0 24 24');
      icon.setAttribute('width', '24');
      icon.setAttribute('height', '24');
      icon.style.position = 'absolute'; 
      icon.style.top = '51%'; 
      icon.style.left = '5px';
      icon.style.transform = 'translateY(-50%)';
      icon.style.zIndex = 9999999;

      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'm11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z');
      path.setAttribute('fill-rule', 'nonzero');

      icon.appendChild(path);
      
      icon.title = 'Click to show/hide password';
      icon.addEventListener('click', function() {
        if (input.type === 'password') {
          input.type = 'text';
        } else {
          input.type = 'password';
        }
      });
      input.style.position = 'relative'; 
      input.style.paddingLeft = '30px';
      input.insertAdjacentElement('beforebegin', icon);
    }
  });
}

addIconsToPasswordInputs();

document.addEventListener('mousemove', function() {
  addIconsToPasswordInputs();
});
