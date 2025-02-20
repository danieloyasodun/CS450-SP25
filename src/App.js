import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo:{
        name: "Zh Rimel",
        occupation: "Data Scientist"
      },
      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      profile: {
        title: "Personal Profile",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      workExperience: {
        title: "Work Experience",
        job1: "Job Title at Company (August 2022 – December 2023)",
        job1Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        job2: "Job Title 2 at Company 2 (August 2020 – December 2021)",
        job2Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      keySkills: {
        title: "Key Skills",
        content1: "A Key skill"
      },
      education: {
        title: "Education",
        bsInstitution: "New Jersey Institute of Technology",
        bsDegree: "BS in Computer Science",
        bsDates: "2018 - 2022",
        bsGpa: "3.9",
        msInstitution: "New Jersey Institute of Technology",
        msDegree: "MS in Data Science",
        msDates: "2022 - 2023",
        msGpa: "4.0"
      }
    }
  }
  render() {
    return (
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <div style={{ backgroundColor: "#FFC000", padding: "2px" }}></div>
        <div class="resume_content">
          <PersonalProfile profile={this.state.profile}></PersonalProfile>
          <WorkExperience workExperience={this.state.workExperience}></WorkExperience>
          <Skills keySkills={this.state.keySkills}></Skills>
          <Education education={this.state.education}></Education>
        </div>
      </div>
    );
  }
}
export default App;
