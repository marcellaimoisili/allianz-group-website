import { work1, work2, work3, work4, work5, work6, work7 } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const Gallery = () => (
  <section className={`${layout.section} justify-center items-center`}>
    <div className="grid grid-rows-2 grid-flow-col gap-2 h-[75%] w-[75%]">
      <div>
        <img src={work1} alt="work" className="rounded-lg" />
      </div>
      <div>
        <img src={work2} alt="work" className="rounded-lg" />
      </div>
      <div>
        <img src={work3} alt="work" className="rounded-lg" />
      </div>
      <div>
        <img src={work4} alt="work" className="rounded-lg" />
      </div>
      <div>
        <img src={work5} alt="work" className="rounded-lg" />
      </div>
      <div>
        <img src={work6} alt="work" className="rounded-lg" />
      </div>
    </div>
  </section>
);

export default Gallery;
