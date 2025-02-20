import React, { Component } from "react";

class WorkExperience extends Component {
    render() {
        return (
            <section class="work_experience">
                <div class="title">{this.props.workExperience.title}</div>
                <div class="work_detail">
                    <div>
                        <h1>{this.props.workExperience.job1}</h1>
                        <p>{this.props.workExperience.job1Content}</p>
                    </div>
                    <div>
                        <h1>{this.props.workExperience.job2}</h1>
                        <p>{this.props.workExperience.job2Content}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkExperience;