import React from 'react';
import { EmojiFrown } from 'react-bootstrap-icons';


function NotFound() {
    return ( 
        <h3 
        className='text-danger text-opacity-75 m-5'
        >The page Not Found <EmojiFrown/>
        </h3>
     );
}

export default NotFound;