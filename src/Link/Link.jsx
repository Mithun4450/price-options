import PropTypes from 'prop-types'; 
const Link = ({route}) => {
    const {name, link} = route;
    return (
        <div>
            <li className="mr-10 px-6 hover:bg-yellow-500"><a href={link}>{name}</a></li>
            
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;
