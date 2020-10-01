import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Menu from "./Pages/Menu";
import Add from "./Pages/Add";
// import View from './Pages/View';
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ListingFormPage from "./Pages/ListingFormPage";
import Profile from "./Pages/Profile";

class OrchardContainer extends Component {
  state = {
    currentPage: "Menu",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Menu") {
      return <Menu />;
    } else if (this.state.currentPage === "Add") {
      return <Add />;
    } else if (this.state.currentPage === "New Listing") {
      return <ListingFormPage />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
      // } else if (this.state.currentPage === 'View') {
      //   return <View />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Profile") {
      return <Profile />;
    } else {
      return <Menu />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default OrchardContainer;
