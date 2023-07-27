import PropTypes from 'prop-types';

export const Quotes = ({name, types, sprites,id}) => {


    return ( 
            <div className="text-center mt-3">
                <h2>#{id}</h2>
                <h1 className="mb-1 text-capitalize">{name}</h1>
                <h4 className="mt-2 text-success"> <span className='text-dark'>Type:</span> {types[0].type.name} {(types[1]) && '& ' + types[1].type.name } </h4>
                <div className='d-flex gap-3 flex-wrap justify-content-center mb-4 mt-4'>
                    <img className='img-fluid img-thumbnail' src={sprites.front_default} alt={name} />
                    <img className='img-fluid img-thumbnail' src={sprites.back_default} alt={name} />
                    <img className='img-fluid img-thumbnail' src={sprites.front_shiny} alt={name} />
                    <img className='img-fluid img-thumbnail' src={sprites.back_shiny} alt={name} />
                </div>
            </div>
     );
}

Quotes.propTypes = {
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    sprites: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
}


 
