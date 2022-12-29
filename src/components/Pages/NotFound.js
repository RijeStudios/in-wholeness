import { Link } from "react-router-dom";
import './NotFound.scss';
import { FiArrowRight} from 'react-icons/fi';
import NotFoundImage from '../../assets/images/404-image.svg'

function NotFound() {
  return (
    <section className='notfound' >
      <h1 className='notfound__title' >Oh no, what are you doing here?</h1>
      <p className='notfound__text' >
        Good nutrition exists! 
        You can find it at our home base.
      </p>
      <article className='notfound__image-box' >
        <img src={NotFoundImage} alt='not found' className='notfound__image' />
      </article>
        <article>
          <Link to='/' className='notfound__link' > 
            Go back home <FiArrowRight/>
          </Link>
        </article>
    </section>
  );
}

export default NotFound;