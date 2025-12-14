import { useState } from "react"
import SectionTitle from "./SectionTitle"
import Education from "./Education"


function Educations() {
    const [educations, setEducations] = useState([
        { id: 1, major: "Full Stack Developer", years: "2000-2000", uni: "University" },
        { id: 2, major: "Data Manager", years: "2000-2000", uni: "University" },
    ])


    function addEdu() {
        const newEdu = {
            id: Date.now(),
            major: "New Education",
            years: "2000-2002",
            uni: "University"
        }

        setEducations([...educations, newEdu]);
    }

    function delEdu(id) {
        setEducations(educations.filter(edu => edu.id !== id))
    }

    function updateMajor(id, newMajor) {
        setEducations(educations.map(edu =>
            edu.id === id ? { ...edu, major: newMajor } : edu
        ));
    };

    function updateYears(id, newYears) {
        setEducations(educations.map(edu =>
            edu.id === id ? { ...edu, years: new years } : edu
        ))
    }

    function updateUni(id, setUni) {
        setEducations(educations.map(edu =>
            edu.id === id ? { ...edu, uni: newUni } : edu
        ))
    }

    return (
        <div>
            <SectionTitle title={"Education"} func={addEdu} />
            <div className="eduDiv">
                {educations.map((edu) =>
                    <Education
                        key={edu.id}
                        major={edu.major}
                        setMajor={(val) => updateMajor(edu.id, val)}
                        years={edu.years}
                        setYears={(val) => updateYears(edu.id, val)}
                        uni={edu.uni}
                        setUni={(val) => updateUni(edu.id, val)}
                        onDelete={() => delEdu(edu.id)}
                    />
                )}
            </div>

        </div>
    )
}

export default Educations