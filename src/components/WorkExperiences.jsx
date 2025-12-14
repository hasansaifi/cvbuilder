import { useState } from "react";
import WorkExperience from "./WorkExperience";
import SectionTitle from "./SectionTitle";

function WorkExperiences() {
    const [workExperiences, setWorkExperiences] = useState([
        { id: 1, position: "Full Stack Developer", years: "2000-2000", company: "Company Name", jobDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore." },
        { id: 2, position: "Jr. Developer", years: "2000-2000", company: "Company Name", jobDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore." },
        { id: 3, position: "Sr. Developer", years: "2000-2000", company: "Company Name", jobDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore." }
    ]);


    function addExp() {
        const newExp = {
            id: Date.now(),
            position: "New Experience",
            years: "2000-2000",
            company: "New Compnay",
            jobDescription: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
        };
        setWorkExperiences([...workExperiences, newExp]);
    };

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

    const updateWorkExCompany = (id, newCompany) => {
        setWorkExperiences(workExperiences.map(workExp =>
            workExp.id === id ? { ...workExp, company: newCompany } : workExp
        ))
    }

    const updateWorkExJobDesc = (id, newJobDesc) => {
        setWorkExperiences(workExperiences.map(workExp =>
            workExp.id === id ? { ...workExp, jobDescription: newJobDesc } : workExp
        ))
    }

    // Delete a skill by ID
    const deleteExp = (id) => {
        setWorkExperiences(workExperiences.filter(workExp => workExp.id !== id));
    };

    return (
        <div>
            <SectionTitle title={"Work Experience"} func={addExp} />
            {workExperiences.map((workExp) => (
                <div key={workExp.id} className="workexperience-row"  >
                    <div style={{ flexGrow: 1 }}>
                        <WorkExperience
                            position={workExp.position}
                            setPosition={(val) => updateWorkExPosition(workExp.id, val)}
                            years={workExp.years}
                            setYears={(val) => updateWorkExYears(workExp.id, val)}
                            companyName={workExp.company}
                            setCompanyName={(val) => updateWorkExCompany(workExp.id, val)}
                            jobDescription={workExp.jobDescription}
                            setJobDescription={(val) => updateWorkExJobDesc(workExp.id, val)}
                            onDelete={() => deleteExp(workExp.id)}
                        />

                    </div>
                </div>
            ))}
        </div>
    )

}

export default WorkExperiences