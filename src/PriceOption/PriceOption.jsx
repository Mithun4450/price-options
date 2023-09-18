import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {price, name, features} = option;
    return (
        <div className='bg-blue-500 rounded-md text-center text-white p-5 flex flex-col'>
            <h2>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-8'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature ={feature}></Feature>)
                }
            </div>
            <button className='bg-red-300 hover:bg-red-700 rounded-lg text-white py-2 w-full mt-4'>Buy Now</button>
            
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
    
}

export default PriceOption;