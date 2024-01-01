import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import Skills from './Skills/Skills';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .yellowStylee {
    color: #FFCC00;
  }

  .inner {
    display: grid;
    grid-template-columns: 2fr 2.8fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }

    // .leftShiftAlign {
    //   display: flexbox;
    // }
  }

  h2 {
    color: #FAF5E9;
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '➤';
        position: absolute;
        left: 0;
        color: #FFCC00;
        font-size: var(--fz-sm);
        line-height: 15px;
      }
    }
  }
`;
const StyledText = styled.div`
  .yellowStyle {
    color: #FFCC00;
  }
  // ul.skills-list {
  //   display: grid;
  //   grid-template-columns: repeat(2, minmax(140px, 200px));
  //   grid-gap: 0 10px;
  //   padding: 0;
  //   margin: 20px 0 0 0;
  //   overflow: hidden;
  //   list-style: none;

  //   li {
  //     position: relative;
  //     margin-bottom: 10px;
  //     padding-left: 20px;
  //     font-family: var(--font-mono);
  //     font-size: var(--fz-xs);

  //     &:before {
  //       content: '▹';
  //       position: absolute;
  //       left: 0;
  //       color: #FFCC00;
  //       font-size: var(--fz-sm);
  //       line-height: 12px;
  //     }
  //   }
  // }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: #FFCC00;

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid #FFCC00;
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'C++', 'Node.js', 'Express.js', 'Redux', 'Context-Api', 'Solana'];

  return (

    <div>
      <StyledAboutSection id="about" ref={revealContainer}>
        <h2 className="numbered-heading" >About Me</h2>

        <div className="inner">

          <StyledPic>
            <div className="wrapper">
              <StaticImage
                className="img"
                src="../../images/Aditya_Roy_Web_Pic.png"
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Headshot"
              />
            </div>
          </StyledPic>

          <StyledText>
            <div>
              <p>
                Hi!👋 I'm Aditya Roy, a creative thinker who is passionate about creating meaningful digital experiences. My journey began in 2018 with Logo Design using Photoshop and Illustrator. Venturing into freelancing a year later, I discovered the power of HTML, CSS, and web development, which led me to explore and master technologies like JavaScript and React. With <span className='yellowStyle'>1.5+ years</span> of experience in <span className='yellowStyle'>React</span>, it has become my go-to language. Currently, I'm designing innovative websites to continue growing as a <span className='yellowStyle'>Developer</span>. Let's build something great together!
                <br /> 
                <br />
                Some Logo Design's i have build: <br />
                <a className="yellowStyle" href="https://us.mullenlowe.com/">Logo Design-1</a>,{' '}
                <a className="yellowStyle" href="https://us.mullenlowe.com/">Logo Design-2</a>,{' '}
              </p>

              <p>
                {/* Fast-forward to today, and I’ve had the privilege of working at{' '}
                <a className="yellowStyle" href="https://us.mullenlowe.com/">an advertising agency</a>,{' '}
                <a className="yellowStyle" href="https://starry.com/">a start-up</a>,{' '}
                <a className="yellowStyle" href="https://www.apple.com/">a huge corporation</a>, and{' '}
                <a className="yellowStyle" href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
                main focus these days is building accessible, inclusive products and digital
                experiences at <a className="yellowStyle" href="https://upstatement.com/">Upstatement</a> for a variety of
                clients. */}

                {/* Currently enrolled in my Btech 4-year Electronics and Telecommunication program at KIIT University. You might be curious about how someone like me ends up in this field after a wild ride of creativity, logo design, and web development.
                Well, it's a story best shared over a cup of coffee. Let's make that happen! ☕️ Get in touch, and let's discuss the exciting transition from logos to circuits. Excited to chat about it! ✨🔧 */}
              </p>

            </div>

          </StyledText>

          
        </div>
        {/* <br /> */}
        {/* <br /> */}
        <p className="leftShiftAlign">
          {/* I also recently{' '}
          <a style={{ color: '#FFCC00' }} href="https://www.newline.co/courses/build-a-spotify-connected-app">
            launched a course
          </a>{' '}
            that covers everything you need to build a web app with the Spotify API using Node
            &amp; React. */}
            Currently enrolled in my Btech 4-year Electronics and Telecommunication program at KIIT University. You might be curious about how someone like me ends up in this field after a wild ride of creativity, logo design, and web development.
            Well, it's a story best shared over a cup of coffee ☕️. Let's make that happen! Get in touch, and let's discuss the exciting transition from <span className='yellowStylee'>Logos to Circuits</span>. Excited to chat about it! ✨🔧
        </p>

        <p className="leftShiftAlign">Here are a few technologies I’ve been working with recently:</p>

        <ul className="skills-list leftShiftAlign" >
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
            
      </StyledAboutSection>
      {/* <Skills /> */}
    </div>
  );
};

export default About;
