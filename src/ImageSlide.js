import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Heading, Image } from 'spectacle';

const fullScreenStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  top: 'calc(-50vh + 50%)',
  left: 'calc(-50vw + 50%)',
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  padding: '10vh 10vw',
};

const imageStyle = {
  height: '100%',
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
};

export default class ImageSlide extends Component {
  render() {
    const { title, image, titleProps, ...props } = this.props;
    return (
      <div style={fullScreenStyle}  {...props}>
        {!!title &&
          <div style={{ width: 1000 }}>
            <Heading
              size={2}
              caps
              lineHeight={1}
              textColor="secondary"
              style={{ marginBottom: '.5em' }}
              {...titleProps}
            >
              {title}
            </Heading>
          </div>}
        <div style={{ flex: 1, position: 'relative' }}>
          <Image
            style={imageStyle}
            src={image}
          />
        </div>
      </div>
    );
  }
  
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object,
  };
}
