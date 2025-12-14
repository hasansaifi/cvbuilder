import SingleLineEdit from './SingleLineEdit';
import MultiLineEdit from "./MultiLineEdit";

function WorkExperience(
    { position, setPosition,
        years, setYears,
        companyName,
        setCompanyName,
        jobDescription, setJobDescription }) {

    return (
        <div className='workExpSingle'>
            <div className='positionDiv'>
                <SingleLineEdit className="jobPosition" value={position} setValue={setPosition} />
                <SingleLineEdit className="jobYear" value={years} setValue={setYears} />
                <SingleLineEdit className="jobCompany" value={companyName} setValue={setCompanyName} />
            </div>
            <MultiLineEdit className="jobDesc" value={jobDescription} setValue={setJobDescription} />
        </div>
    )
}

export default WorkExperience