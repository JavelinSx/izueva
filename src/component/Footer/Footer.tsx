import type { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className='footer padding-common'>
      <span className='footer-text'></span>
    </footer>
  );
};

export default Footer;
