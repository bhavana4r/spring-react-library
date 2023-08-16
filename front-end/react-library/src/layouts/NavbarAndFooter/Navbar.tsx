import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export const Navbar=()=>{
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark  py3'>
        <div className='container-fluid'>
        <span className='navbar-brand'>PraVyuha  </span>
          <button className='navbar-toggler' type='button'
            data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown' 
            aria-expanded='false' aria-label='Toggle Navigation'>
               <span className='navbar-toggler-icon'></span>
          </button>
          
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
            <li className='nav-item'>
            <NavLink className='nav-link' to='/home'><FontAwesomeIcon icon={faHome} />Home</NavLink>
            
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/search'><FontAwesomeIcon icon={faSearch} />Search</NavLink>
              </li>
              
            </ul>
            <ul className='navbar-nav ms-auto'>
              <li className='navi-tem m-1'>
                <a type='button' className='btn btn-outline-light' href='/#'><FontAwesomeIcon icon={faSignIn} />Sign in</a>
              </li>
            </ul>
    
          </div>
        </div>
       </nav>
    );


}