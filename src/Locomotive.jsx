import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const LocomotiveScrollComponent = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      
    </div>
  );
};

export default LocomotiveScrollComponent;
