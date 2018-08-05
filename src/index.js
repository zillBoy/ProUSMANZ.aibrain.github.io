import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FaceRecognition from './FaceRecognition';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<FaceRecognition />, document.getElementById('root'));
registerServiceWorker();
