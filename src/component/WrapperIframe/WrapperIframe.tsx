import type { FC } from 'react';
import { useState } from 'react';
import iconYouTube from '../../img/YouTube_23392.png';
interface WrapperIframeProps {
  styleClass: string;
  link: string;
  linkWrapper: string;
}

const WrapperIframe: FC<WrapperIframeProps> = ({ styleClass, link, linkWrapper }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenVideo = () => {
    setIsOpen(true);
  };

  return (
    <div className={styleClass}>
      <div className='wrapper__iframe' onClick={handleOpenVideo}>
        {isOpen ? (
          <iframe className='iframe' src={link} key={link} title='Brilliance-hair' allowFullScreen></iframe>
        ) : (
          <div className='wrapper__video'>
            <img loading='lazy' className='wrapper-img' src={linkWrapper} alt=''></img>
            <img loading='lazy' className='wrapper-icon' src={iconYouTube} alt=''></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default WrapperIframe;
