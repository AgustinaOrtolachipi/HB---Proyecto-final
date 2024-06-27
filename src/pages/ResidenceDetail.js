

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../Store/Actions';

const ResidenceDetail = ({ match }) => {
    const dispatch = useDispatch();
    const residenceId = match.params.id;
    // Funcion para obtener los detalles de la residencia usando el ID

    const residence = { id: residenceId, name: 'Residencia de Lujo', description: 'Esta residencia se encuentra ubicada en LA. Cuenta con 2 baños, 4 habitaciones. Sala de estar, comedor y sala de juegos. Tambien cuenta con una oficina en caso de necesitar un espacio tranquilo en el que trabajar. Un jardin de grandes dimensiones con juegos para los niños y parrilla. ' };

    return (
        <div>
            <h2>{residence.name}</h2>
            <p>{residence.description}</p>
            <button onClick={() => dispatch(addToFavorites(residence))}>Add to Favorites</button>
        </div>
    );
};

export default ResidenceDetail;
