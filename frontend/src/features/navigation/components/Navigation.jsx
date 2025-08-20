// import { Link } from 'react-router-dom';
// import { routes } from '../../../router';

// export const Navigation = () => {
//   if (!routes || routes.length === 0) {
//     console.log('Routes not loaded yet');
//     return null;
//   }
  
//   return (
//     <nav className="main-nav">
//       <div className='nav-content'>
//         <Link to="/" className="nav-logo">
//           <img src="/favicon.png" alt="Home" className="nav-logo-image" />
//         </Link>
//         <ul className="nav-list">
//           {routes.map((route) => (
//             <li key={route.path} className="nav-item">
//               <Link to={route.path} className="nav-link">
//                 {route.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };



import { Link } from 'react-router-dom';
import { useState } from 'react';
import { routes } from '../../../router';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!routes || routes.length === 0) {
    console.log('Routes not loaded yet');
    return null;
  }
  
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <div className="nav-top">
          <Link to="/" className="nav-logo">
            <img src="/favicon.png" alt="Home" className="nav-logo-image" />
          </Link>
          <button 
            className="hamburger-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
        <ul className={`nav-list ${isMenuOpen ? 'menu-open' : ''}`}>
          {routes.map((route) => (
            <li key={route.path} className="nav-item">
              <Link 
                to={route.path} 
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};