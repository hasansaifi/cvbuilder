import { TrashIcon } from "@heroicons/react/24/outline"
import SingleLineEdit from "./SingleLineEdit"


function Education({ major, setMajor, years, setYears, uni, setUni, onDelete }) {
    return (
        <div className="singleEduDiv">
            <SingleLineEdit className={"eduMajor"} value={major} setValue={setMajor} />
            <div className="eduYearsDiv">
                <SingleLineEdit className={"eduYears"} value={years} setValue={setYears} />

                <button
                    onClick={onDelete}
                    className="delete-btn"
                    style={{
                        border: 'none',
                        background: 'none',
                        width: '28px',
                        position: 'relative',
                        top: '-4px',
                        right: '22px',
                        cursor: 'pointer'
                    }}
                >
                    <TrashIcon />
                </button>
            </div>
            <SingleLineEdit className={"eduUni"} value={uni} setValue={setUni} />
        </div>
    )
}

export default Education