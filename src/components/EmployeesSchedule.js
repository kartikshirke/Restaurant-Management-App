import React from 'react';
import axios from 'axios'

class EmployeesSchedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.filterText = "";
    this.state.products = [];
  }

  componentDidMount() {
    const apiUrl = 'https://my-json-server.typicode.com/kartikshirke/Restaurant-Management-App/EmployeesSchedules';
    axios
      .get(apiUrl)
      .then(response => {
        this.setState({
          products: response.data
        })
      })
  }

  handleUserInput = (filterText) => {
    this.setState({ filterText: filterText });
  };
  handleRowDel = (product) => {
    let index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent = (evt) => {

    let product = {
      id: "",
      day: "",
      userIds: Array,
      burgerId: Boolean,
    }
    this.state.products.push(product);
    this.setState(this.state.products);

  }

  handleProductTable = (evt) => {
    let item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    let products = this.state.products.slice();
    let newProducts = products.map((product) => {

      for (let key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;

        }
      }
      return product;
    });
    this.setState({ products: newProducts });
  };
  render() {

    return (
      <div className="format">
        <h1>Employees Schedule List!</h1>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <ProductTable onProductTableUpdate={this.handleProductTable} onRowAdd={this.handleAddEvent} onRowDel={this.handleRowDel} products={this.state.products} filterText={this.state.filterText} />
      </div>
    );

  }

}
class SearchBar extends React.Component {
  handleChange = () => {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>

        <input type="text" placeholder="Search by Day..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />

      </div>

    );
  }

}

class ProductTable extends React.Component {

  render() {
    let onProductTableUpdate = this.props.onProductTableUpdate;
    let rowDel = this.props.onRowDel;
    let filterText = this.props.filterText;
    let product = this.props.products.map((product) => {
      if (product.day.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel} key={product.id} />)
    });
    return (
      <div>
        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Day</th>
              <th>User Ids</th>
              <th>Burger Id</th>
            </tr>
          </thead>

          <tbody>
            {product}

          </tbody>

        </table>
      </div>
    );

  }

}

class ProductRow extends React.Component {
  onDelEvent = () => {
    this.props.onDelEvent(this.props.product);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "day",
          value: this.props.product.day,
          id: this.props.product.id
        }} />
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "userIds",
          value: this.props.product.userIds,
          id: this.props.product.id
        }} />
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "burgerId",
          value: this.props.product.burgerId,
          id: this.props.product.id
        }} />
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent} value="Delete" className="del-btn" />
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate} />
      </td>
    );

  }

}

export default EmployeesSchedule;