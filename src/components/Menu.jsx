// import React from 'react'
// import './css/Menu.css'

// const Menu = () => {
//   return (
//     <div className="Menu">
//         <ul>

//         <li className="Menu-item">
//             <a className="menu-link" href="/">
//                 <i className="menu-icon tf-icons bx bx-home-circle"></i>
//                 <div>🏠  Dashboard</div>
//             </a>
//         </li>

//         <li className="Menu-item">
//             <a className="menu-link" href="/">
//                 <i className="menu-icon tf-icons bx bx-home-circle"></i>
//                 <div>🔍  Search</div>
//             </a>
//         </li>

//         <li className="Menu-item">
//             <a className="menu-link" href="/">
//                 <i className="menu-icon tf-icons bx bx-home-circle"></i>
//                 <div>ℹ️ About</div>
//             </a>
//         </li>

//         </ul>
//     </div>
//   );
// }

// export default Menu;

import React from 'react';
import { Link } from 'react-router-dom';
import './css/Menu.css';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li className="Menu-item">
          <Link className="menu-link" to="/">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div>🏠 Dashboard</div>
          </Link>
        </li>

        <li className="Menu-item">
          <Link className="menu-link" to="/search">
            <i className="menu-icon tf-icons bx bx-search"></i>
            <div>🔍 Search</div>
          </Link>
        </li>

        <li className="Menu-item">
          <Link className="menu-link" to="/about">
            <i className="menu-icon tf-icons bx bx-info-circle"></i>
            <div>ℹ️ About</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
