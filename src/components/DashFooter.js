import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const DashFooter = () => {

    const { username, status } = useAuth()

    const navigation = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigation("/dash")

    let gohomeButton = null 
    if(pathname !== '/dash'){
        gohomeButton = (
            <button
            className='dash-footer__button icon-button'
            title="Home"
            onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }


    const content = (
        <footer className='dash-footer'>
            {gohomeButton}
            <p>Current User:{username}</p>
            <p>Status:{status}</p>
        </footer>
    )

  return content
}

export default DashFooter