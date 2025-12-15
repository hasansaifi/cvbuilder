import SectionTitle from "./SectionTitle"
import SingleLineEdit from "./SingleLineEdit"

function Language({ language, setLanguage, level, setLevel, onDelete }) {

    return (
        <div>
            <SingleLineEdit className={'langName'} value={language} setValue={setLanguage} />
            <SingleLineEdit value={level} setValue={setLevel} />
        </div>
    )
}

export default Language