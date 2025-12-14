import { useState } from "react";
import WorkExperience from "./WorkExperience";

function WorkExperiences() {
    const [workExperiences, setWorkExperiences] = useState([
        { id: 1, position: "Full Stack Developer", years: "2000-2000", company: "Company Name", jobDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore." },
        { id: 2, position: "Jr. Developer", years: "2000-2000", company: "Company Name", jobDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore." },
        { id: 3, position: "Sr. Developer", years: "2000-2000", company: "Company Name", jobDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore." }
    ]);

    const updateWorkExPosition = (id, newPos) => {
        setWorkExperiences(workExperiences.map(workExp =>
            workExp.id === id ? { ...workExp, position: newPos } : workExp
        ));
    }

    const updateWorkExYears = (id, newYears) => {
        setWorkExperiences(workExperiences.map(workExp =>
            workExp.id === id ? { ...workExp, years: newYears } : workExp
        ))
    }

    const updateWorkExJobDesc = (id, newJobDesc) => {
        setWorkExperiences(workExperiences.map(workExp =>
            workExp.id === id ? { ...workExp, jobDescription: newJobDesc } : workExp
        ))
    }

    return (
        <div>
            <h3>Work Experience</h3>
            {workExperiences.map((workExp) => (
                <div key={workExp.id} className="workexperience-row"  >
                    <div style={{ flexGrow: 1 }}>

                        <WorkExperience
                            position={workExp.position}
                            setPosition={(val) => updateWorkExPosition(workExp.id, val)}
                            years={workExp.years}
                            setYears={(val) => updateWorkExYears(workExp.id, val)}
                            jobDescription={workExp.jobDescription}
                            setJobDescription={(val) => updateWorkExJobDesc(workExp.id, val)}
                        />

                    </div>
                </div>
            ))}
        </div>
    )

}

export default WorkExperiences