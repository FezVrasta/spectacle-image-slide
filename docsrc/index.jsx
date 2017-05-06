import React from 'react';
import ReactDOM from 'react-dom';
import { Deck } from 'spectacle';
import ImageSlide from '../src/index.js';
import demo from './demo.gif';

class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} progress="bar">
        <ImageSlide transition={[]} image={demo} title="ImageSlide demo!" />
      </Deck>
    );
  }
}

ReactDOM.render(<Presentation />, document.querySelector('#root'));
