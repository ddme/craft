import cookieconsent from 'cookieconsent';

window.addEventListener('load', function() {
  window.cookieconsent.initialise({
    'palette': {
      'popup': {
        'background': '#2B333E',
        'text': '#ffffff'
      },
      'button': {
        'background': '#30A9DE',
        'text': '#ffffff'
      }
    },
    'theme': 'block',
    'position': 'bottom-right',
    'content': {
      'dismiss': 'I understand'
    }
  })
});

import hyperform from 'hyperform';

hyperform(window);
