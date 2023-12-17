import type { FC } from 'react';
import imgCard from '../../img/123.jpg';
interface ActionProps {}

const Action: FC<ActionProps> = () => {
  return (
    <div className='wrapper-dark'>
      <section className='action' id='action-section'>
        <h2 className='action-title'>АКЦИИ</h2>
        <h4 className='action-info'>
          Действует система скидок, для любимых клиентов 3-я и 6-я процедуры предоставляются со скидками 30% и 50%
        </h4>
        <img className='action-img' src={imgCard} alt=''></img>
      </section>
    </div>
  );
};

export default Action;
