import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

Tilt.defaultProps = {
  options: {
    scale: 1,
    speed: 1000,
    max: 1.5
  }
};

export default Tilt;