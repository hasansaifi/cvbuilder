import SingleLineEdit from './SingleLineEdit';
import MultiLineEdit from "./MultiLineEdit";

function WorkExperience(
    { position, setPosition,
        years, setYears,
        companyName,
        setCompanyName,
        jobDescriptoin, setJobDescription }) {

    return (
        <div>
            <SingleLineEdit className="skill" value={position} setValue={setPosition} />
        </div>
    )
}

export default WorkExperience