import React, { Component } from "react";

class Education extends Component {
    render() {
        return (
            <section class="education">
                <div class="title">{this.props.education.title}</div>
                <div class="content">
                    <div class="university-info">
                        <div>
                            <p>{this.props.education.bsInstitution}</p>
                            <p>{this.props.education.bsDegree}</p>
                            <p>{this.props.education.bsDates}</p>
                            <p>{this.props.education.bsGpa}</p>
                        </div>
                        <div>
                            <p>{this.props.education.msInstitution}</p>
                            <p>{this.props.education.msDegree}</p>
                            <p>{this.props.education.msDates}</p>
                            <p>{this.props.education.msGpa}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;