import Skills from "./Skills"
import WorkExperiences from "./WorkExperiences"
import Educations from "./Educations"

function MainContent() {
    return <div className="mainContainer">
        <div className="leftSide">
            <Skills />
            <Educations />
        </div>
        <div className="rightSide">
            <WorkExperiences />
        </div>
    </div>
}

export default MainContent