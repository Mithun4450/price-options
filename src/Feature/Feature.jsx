import PropTypes from 'prop-types'; 
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div className=' flex items-center  '>
            <AiFillCheckCircle className='text-red-300  my-1'></AiFillCheckCircle>
            <p>{feature}</p>
            
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;

