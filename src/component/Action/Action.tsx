import type { FC } from 'react';
import imgCard from '../../img/action.png';
interface ActionProps {}

const Action: FC<ActionProps> = () => {
  return (
    <div className='wrapper-white'>
      <section className='action' id='action-section'>
        <h2 className='action-title'>АКЦИИ</h2>
        <h4 className='action-info'>
          При первом посещении вы получаете карту любимого клиента и памятку по уходу за волосами. <br></br>А так же
          можете приобрести подарочный сертификат на любую сумму.
        </h4>
        <img className='action-img' src={imgCard} alt=''></img>
      </section>
    </div>
  );
};

export default Action;
