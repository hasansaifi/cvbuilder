import SingleLineEdit from './SingleLineEdit';
import MultiLineEdit from "./MultiLineEdit";
import { TrashIcon } from '@heroicons/react/24/outline';

function WorkExperience(
    { position, setPosition,
        years, setYears,
        companyName,
        setCompanyName,
        jobDescription, setJobDescription, onDelete },) {

    return (
        <div className='workExpSingle'>
            <div className='positionDiv'>

                <SingleLineEdit className="jobPosition" value={position} setValue={setPosition} />
                <button
                    onClick={onDelete}
                    className="delete-btn"
                    style={{
                        border: 'none',
                        background: 'none',
                        width: '30px',
                        cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}
                >
                    <TrashIcon />
                </button>


                <SingleLineEdit className="jobYear" value={years} setValue={setYears} />
                <SingleLineEdit className="jobCompany" value={companyName} setValue={setCompanyName} />
            </div>
            <MultiLineEdit className="jobDesc" value={jobDescription} setValue={setJobDescription} />
        </div>
    )
}

export default WorkExperience