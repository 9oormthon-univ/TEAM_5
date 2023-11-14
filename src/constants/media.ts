import theme from 'styles/theme';

function mediaQuery(maxWidth: string) {
  return `@media (max-width: ${maxWidth}px)`;
}

const media = {
  pc: mediaQuery(`${theme.device.pc}`),
  tablet: mediaQuery(`${theme.device.tablet}`),
  mobile: mediaQuery(`${theme.device.mobile}`),
};

export default media;
