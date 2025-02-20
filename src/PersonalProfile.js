import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
        <section id="personal_profile">
            <div class="title">{this.props.profile.title}</div>
            <p>{this.props.profile.content}</p>
        </section>
    );
    }
}

export default PersonalProfile;