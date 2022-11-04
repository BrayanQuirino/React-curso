
import PropTypes from 'prop-types';

export const App = ({name,subtitle,title}) => {
    return (
        <>
            <h1>Hi I'm {name}</h1>
            <h2>This is a {title}</h2>
            <p>{subtitle}</p>
        </>
    );
    
}

/**
 * We should to add PropTypes 
 * in our design to have all control 
 * about the app.
 *  */ 

App.propTypes ={
    name: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

App.defaultProps ={
    name: 'Brayan Quirino',
    title:'titulo'
}


/*export const App = () => <h1>Hola Mundo</h1>;*/