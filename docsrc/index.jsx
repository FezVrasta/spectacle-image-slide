import React from 'react';
import ReactDOM from 'react-dom';
import { Deck, Slide } from 'spectacle';
import ImageSlide from '../src/index.js';
import demo from './demo.gif';

class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} progress="bar">
        <Slide transition={[]}>
          <ImageSlide image={demo} title="ImageSlide demo!" />
        </Slide>
      </Deck>
    );
  }
}

ReactDOM.render(<Presentation />, document.querySelector('#root'));
