import React from 'react';
import './homepage.scss';

import Directory from '../components/directory/directory'

const Homepage = () => (
        <div className='homepage'>
            <div className='directory-manu'>
                <Directory></Directory>
            </div>
        </div>
)

export  default Homepage;