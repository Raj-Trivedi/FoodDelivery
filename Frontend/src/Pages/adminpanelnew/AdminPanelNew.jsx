import React, { useState } from 'react';
import AddFoodForm from './AddFoodForm';
import FoodList from './FoodList';
import './AdminPanelNew.css';

const navItems = [
  { label: 'Add Food Items', icon: '📊', key: 'Add Food Items' },
  { label: 'ItemListing', icon: '📝', key: 'itemlisting' },
  { label: 'Order', icon: '💳', key: 'order' },
];

const AdminPanelNew = () => {
  const [active, setActive] = useState('Add Food Items');

  return (
    <div className="adminpanelnew-layout">
      <aside className="adminpanelnew-sidebar">
        <div className="adminpanelnew-brand">
          <span className="adminpanelnew-logo">⚡</span>
          <span className="adminpanelnew-brandname">brand</span>
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li
                key={item.key}
                className={active === item.key ? 'active' : ''}
                onClick={() => setActive(item.key)}
              >
                <span className="adminpanelnew-navicon">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="adminpanelnew-main">
        {active === 'Add Food Items' && (
          <>
            <h1>Admin Add Food Items</h1>
            <AddFoodForm />
            <FoodList />
          </>
        )}
        {active === 'itemlisting' && (
          <>
            <h1>Item Listing</h1>
            <FoodList />
          </>
        )}
        {active === 'order' && (
          <>
            <h1>Order Management</h1>
            <p>Order management coming soon...</p>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminPanelNew; 