import React from 'react';
import './Testimonial.css';

import cmoImage from '../../images/image-jeremy-large@2x.webp';
import cmoImageSmall from '../../images/image-jeremy-large.webp';

import cmoImageMobile from '../../images/image-jeremy-small@2x.webp';
import patternBlur from '../../images/pattern-blur.svg';
import smallLine from '../../images/pattern-curved-line-2.svg';

const Testimonial = () => {
  return (
    <section className='testimonial'>
      <div className='testimonial__image-container'>
        {/* <picture className='testimonial__image'>
          <source srcSet={cmoImageSmall} media='(max-width: 960px)' />
          <img
            className='testimonial__image'
            src={cmoImage}
            alt='jeremy robinson'
          />
        </picture>
        <img
          className='testimonial__image_mobile'
          src={cmoImageMobile}
          alt='jeremy robinson'
        /> */}

        <img className='testimonial__pattern' src={patternBlur} alt='' />
      </div>
      <div className='testimonial__curvedLine-container'>
        <img src={smallLine} alt='' className='testimonial__curvedLine' />
      </div>
      <div className='testimonial__content'>
        <h2 className='testimonial__content-title'>
          <span className='testimonial__content-title_regular'>it just </span>
          test.
        </h2>
        <figure className='testimonial__content-quote-container'>
          <blockquote className='testimonial__content-quote'>
            Doing something .”
          </blockquote>
          <figcaption className='testimonial__content-caption'>
            I'ts me
            <span className='testimonial__content-caption_span'>:D</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
