import React from 'react';

const SideNavBar = ({ options, activeOption, onSelectOption }) => {
  return (
    <div className="side-nav-bar">
      <ul>
        {options.map((option, index) => (
          <li key={index} className={option === activeOption ? 'active' : ''} onClick={() => onSelectOption(option)}>
            {option === 'Dashboard' && <i className="fas fa-chart-line"></i>}
            {option === 'Orders' && <i className="fas fa-shopping-cart"></i>}
            {option === 'Inventory' && <i className="fas fa-boxes"></i>}
            {option === 'Shipping' && <i className="fas fa-shipping-fast"></i>}
            {option === 'Channel' && <i className="fas fa-sitemap"></i>}
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNavBar;
