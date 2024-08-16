import React, { Component } from "react";
import { connect } from "react-redux";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, Cart } from './pages';
import axios from "axios";
import { setPizzas } from "./redux/actions/pizzas";

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3001/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    console.log(this.props)
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={this.props.items} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.pizzas.items,
  filters: state.filters
});

const mapDispatchToProps = {
  setPizzas
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
