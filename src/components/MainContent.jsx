import Skills from "./Skills"
import WorkExperiences from "./WorkExperiences"

function MainContent() {
    return <div className="mainContainer">
        <div className="leftSide">
            <Skills />
        </div>
        <div className="rightSide">
            <WorkExperiences />
        </div>
    </div>
}

export default MainContent