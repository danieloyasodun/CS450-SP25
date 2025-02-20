import React, { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <section id="key_skills">
                <div class="title">{this.props.keySkills.title}</div>
                <div class="content">
                    <ul class="skill_list">
                        <li>{this.props.keySkills.content1}</li>
                        <li>{this.props.keySkills.content1}</li>
                        <li>{this.props.keySkills.content1}</li>
                    </ul>
                    <ul class="skill_list">
                        <li>{this.props.keySkills.content1}</li>
                        <li>{this.props.keySkills.content1}</li>
                        <li>{this.props.keySkills.content1}</li>
                    </ul>
                    <ul class="skill_list">
                        <li>{this.props.keySkills.content1}</li>
                        <li>{this.props.keySkills.content1}</li>
                        <li>{this.props.keySkills.content1}</li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Skills;