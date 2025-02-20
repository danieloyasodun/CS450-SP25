import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="top">
        <div id="personal_information">
          <p class="bold">{this.props.personInfo.name}</p>
          <p>{this.props.personInfo.occupation}</p>
        </div>
        <div id="contact_information"> 
          <p>Email: <a class="link">{this.props.contactInfo.email}</a></p>
          <p>Web: {this.props.contactInfo.web}</p>
          <p>Mobile: {this.props.contactInfo.mobile}</p>
        </div>
      </header>
    );
  }
}

export default Header;