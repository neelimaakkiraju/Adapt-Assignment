import React, { Component } from 'react';
import '../styles/Table.css'; // Import Table.css

class OrdersTab extends Component {
  state = {
    orders: [
      { id: 1, customerName: 'John Doe', shippingAddress: '123 Main St', city: 'New York', orderDate: '2022-02-18', price: '$100', status: 'Pending',OrderNumber: '5563' },
      { id: 2, customerName: 'Jane Smith', shippingAddress: '456 Elm St', city: 'Los Angeles', orderDate: '2022-02-17', price: '$150', status: 'Completed',OrderNumber: '5563' },
      { id: 3, customerName: 'John Doe', shippingAddress: '123 Main St', city: 'New York', orderDate: '2022-02-18', price: '$100', status: 'Pending' ,OrderNumber: '5563'},
      { id: 4, customerName: 'Jane Smith', shippingAddress: '456 Elm St', city: 'Los Angeles', orderDate: '2022-02-17', price: '$150', status: 'Completed',OrderNumber: '5563' },
      { id: 5, customerName: 'Alice Johnson', shippingAddress: '789 Oak St', city: 'Chicago', orderDate: '2022-02-16', price: '$200', status: 'Ready to Ship',OrderNumber: '5563' },
      { id: 6, customerName: 'Bob Williams', shippingAddress: '101 Pine St', city: 'Houston', orderDate: '2022-02-15', price: '$250', status: 'Cancelled',OrderNumber: '5563' },
      { id: 7, customerName: 'Emily Davis', shippingAddress: '202 Maple St', city: 'Miami', orderDate: '2022-02-14', price: '$300', status: 'Pending' ,OrderNumber: '5563'},
    ],
    currentPage: 1,
    ordersPerPage: 5,
    currentStatusFilter: null,
  };

  handleClick = (type) => {
    const { currentPage } = this.state;
    if (type === 'prev') {
      if (currentPage > 1) {
        this.setState({ currentPage: currentPage - 1 });
      }
    } else if (type === 'next') {
      const { orders, ordersPerPage } = this.state;
      if (currentPage < Math.ceil(orders.length / ordersPerPage)) {
        this.setState({ currentPage: currentPage + 1 });
      }
    }
  };

  handleFilter = (status) => {
    this.setState({ currentStatusFilter: status });
  };

  render() {
    const { orders, currentPage, ordersPerPage, currentStatusFilter } = this.state;

    const filteredOrders = currentStatusFilter ? orders.filter(order => order.status === currentStatusFilter) : orders;

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    const statusFilters = ['Pending', 'Completed', 'Ready to Ship', 'Cancelled'];

    return (
      <div className="table-container">
        <div className="horizontal-options">
          {statusFilters.map(status => (
            <button
              key={status}
              className={currentStatusFilter === status ? 'active' : ''}
              onClick={() => this.handleFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Shipping Address</th>
              <th>City</th>
        
              <th>Order Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Order Number</th>
              
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{order.customerName}</td>
                <td>{order.shippingAddress}</td>
                <td>{order.city}</td>
                <td>{order.orderDate}</td>
                <td>{order.price}</td>
                <td>{order.status}</td>
                <td>{order.OrderNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={() => this.handleClick('prev')}>Prev</button>
          <span>Page {currentPage}</span>
          <button onClick={() => this.handleClick('next')}>Next</button>
        </div>
      </div>
    );
  }
}

export default OrdersTab;
