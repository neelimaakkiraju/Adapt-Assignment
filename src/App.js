import React, { Component } from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import Orders from './components/OrdersTable';
import Inventory from './components/Inventory';
import Shipping from './components/Shipping';
import Channel from './components/Channel';
import TopNavBar from './components/TopBar';

class App extends Component {
  state = {
    activeOption: 'Orders', 
  };

  handleSelectOption = (option) => {
    this.setState({ activeOption: option });
  }

  render() {
    const { activeOption } = this.state;
    const sideNavOptions = ['Dashboard', 'Orders', 'Inventory', 'Shipping', 'Channel'];
    const topNavOptions = ["Profile","Notifications","Cart"];

    let content;
    switch (activeOption) {
      case 'Dashboard':
        content = <Dashboard className="icon"/>;
        break;
      case 'Orders':
        content = <Orders />;
        break;
      case 'Inventory':
        content = <Inventory />;
        break;
      case 'Shipping':
        content = <Shipping />;
        break;
      case 'Channel':
        content = <Channel />;
        break;
      default:
        content = <Dashboard />;
    }

    return (
      
        
    
      <div>
        <TopNavBar  options={topNavOptions} activeOption={activeOption} onSelectOption={this.handleSelectOption}/>

        <div className='App'>
      <NavigationBar options={sideNavOptions} activeOption={activeOption} onSelectOption={this.handleSelectOption} />
        <div className="content">
          {content}
        </div>
      </div>
      </div>
      
    );
  }
}

export default App;
