import Skills from "./Skills"
import WorkExperiences from "./WorkExperiences"
import Educations from "./Educations"
import Languages from "./Languages"

function MainContent() {


    return <div className="mainContainer">
        <div className="leftSide">
            <Skills />
            <Educations />
            <Languages />
        </div>
        <div className="rightSide">
            <WorkExperiences />
        </div>
    </div>
}

export default MainContent