import React from 'react';
import axios from 'axios'

class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.filterText = "";
    this.state.products = [];
  }

  componentDidMount() {
    const apiUrl = 'https://my-json-server.typicode.com/kartikshirke/Restaurant-Management-App/Users';
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
      name: "",
      username: "",
      password: "",
      admin: Boolean,
      burgerAdmin: Boolean
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
    //  console.log(this.state.products);
  };
  render() {

    return (
      <div className="format">
        <h1>Users List!</h1>
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

        <input type="text" placeholder="Search by Username..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange} />

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
      if (product.username.indexOf(filterText) === -1) {
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
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Password</th>
              <th>Admin</th>
              <th>Burger Admin</th>

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
          "type": "id",
          value: this.props.product.id,
          id: this.props.product.id
        }} />
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "name",
          value: this.props.product.name,
          id: this.props.product.id
        }} />
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "username",
          value: this.props.product.username,
          id: this.props.product.id
        }} />
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "password",
          value: this.props.product.password,
          id: this.props.product.id
        }} />
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "admin",
          value: this.props.product.admin,
          id: this.props.product.id
        }} />
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "burgerAdmin",
          value: this.props.product.burgerAdmin,
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

export default Users;