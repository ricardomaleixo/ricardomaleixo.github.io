import React from 'react';
import './Section.css';

// import cmoImage from '../../images/image-jeremy-large@2x.webp';
// import cmoImageSmall from '../../images/image-jeremy-large.webp';

// import cmoImageMobile from '../../images/image-jeremy-small@2x.webp';
// import patternBlur from '../../images/pattern-blur.svg';
// import smallLine from '../../images/pattern-curved-line-2.svg';

const Testimonial: React.FC = () => {
  return (
    <section >
      <div >
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

        {/* <img className='testimonial__pattern' src={patternBlur} alt='' /> */}
      </div>
      <div>
        {/* <img src={smallLine} alt='' className='testimonial__curvedLine' /> */}
      </div>
      <div>
        <h2>
          <span>it just </span>
          test.
        </h2>
        <figure>
          <blockquote>
            Doing something .”
          </blockquote>
          <figcaption>
            I'ts me
            <span>:D</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
