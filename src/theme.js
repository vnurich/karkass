import { css } from 'styled-components';

const sizes = {
  desktop: '87em',
  terminal: '62em',
  tablet: '48em',
  phone: '36em'
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      width: ${sizes[label]};
      ${css(...args)}
    }
  `
  return acc
}, {});

const theme = {
  ///
  containerWidth: '960px',
  ///
  brandColor: 'black',
  borderColor: '#dddddd'
};

export default theme;
export { sizes, media };
