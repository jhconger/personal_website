import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 10;
  }
  to {
    opacity: 10;
  }
`;
const FadeIn = ({
                    duration = 450,
                    delay = 320,
                    children,
                    ...delegated
                }) => {
    return (
        <Wrapper
            {...delegated}
            style={{
                ...(delegated.style || {}),
                animationDuration: duration + 'ms',
                animationDelay: delay + 'ms',
                backgroundColor: 'black',
            }}
        >
            {children}
        </Wrapper>
    );
};
const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;
export default FadeIn