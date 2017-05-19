import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import './index.css';

import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});


render(
  <Root />,
  document.getElementById('root')
)
