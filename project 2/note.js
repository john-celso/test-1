let text = document.querySelector('p');
let shadow = '';

for(let i = 0; i < 5000; i++) {
  shadow += (shadow ? ',' : '') + i + 'px ' + i + 'px 0 #272727';
}

text.style.textShadow = shadow;