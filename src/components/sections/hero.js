import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import Slider from '../Slider/Slider';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: #ffcc00;
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    color: #faf5e9;
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    color: #ffcc00;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = (
    <h2 className="big-heading" style={{ fontSize: 75 }}>
      Aditya Roy.
    </h2>
  );
  // const three = <h3 className="big-heading">I build things for the web.</h3>;
  const three = <Slider />;
  const four = (
    <>
      <p style={{ fontSize: 16 }}>
        {'"'}Full-stack developer passionate about solving real business problems with clean,
        efficient code. I have worked hands-on with Microservices and API backends, delivering
        high-scale applications handling 10K+ users. Debugged code with industry grade softwares
        like Grafana. My expertise ( Golang, Node, Express, React ), with a focus on performance
        optimization and automation that directly impacts business metrics. From building dedicated
        microservices to implementing caching strategies, I build solutions that scale while
        maintaining excellent user experience.{'"'}
        {/* {'"'}Passionate software developer with over a year of hands-on experience in React, 
        blending creativity with robust system design to craft seamless digital experiences 
        My expertise extends beyond code, I bring a deep understanding of software and web development, 
        coupled with a keen eye for system design to elevate expectation of users to new heights.{'"'} */}
        {/* <a href="https://upstatement.com/" target="_blank" rel="noreferrer">
          Upstatement
        </a> */}
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://www.linkedin.com/in/adityaroy101/"
      target="_blank"
      rel="noreferrer">
      Contact Me.
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
