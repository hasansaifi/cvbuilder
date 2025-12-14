import { useState } from "react";
import Skill from "./Skill";
import { TrashIcon, PlusIcon } from "@heroicons/react/24/outline"
import SectionTitle from "./SectionTitle";

function Skills() {
    const [skills, setSkills] = useState([
        { id: 1, name: "Front End Development", level: 500 },
        { id: 2, name: "Back End Development ", level: 500 },
        { id: 3, name: "Database Management", level: 500 },
        { id: 4, name: "Technical SEO", level: 500 },
    ]);

    // --- ACTIONS ---

    // Add a new skill (creates a unique ID)
    const addSkill = () => {
        const newSkill = {
            id: Date.now(),
            name: "New Skill",
            level: 500
        };
        setSkills([...skills, newSkill]);
    };

    // Delete a skill by ID
    const deleteSkill = (id) => {
        setSkills(skills.filter(skill => skill.id !== id));
    };

    // Update Name
    const updateSkillName = (id, newName) => {
        setSkills(skills.map(skill =>
            skill.id === id ? { ...skill, name: newName } : skill
        ));
    };

    // Update Level
    const updateSkillLevel = (id, newLevel) => {
        setSkills(skills.map(skill =>
            skill.id === id ? { ...skill, level: newLevel } : skill
        ));
    };


    return (
        /* Class added here for the "Add Button" hover scope */
        <div className="skills-section">
            <SectionTitle title={"Skills"} func={addSkill} />
            {skills.map((skill) => (
                /* Class 'skill-row' added here for the "Delete Button" hover scope */
                <div key={skill.id} className="skill-row" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>

                    <div style={{ flexGrow: 1 }}>
                        <Skill
                            name={skill.name}
                            setName={(val) => updateSkillName(skill.id, val)}
                            level={skill.level}
                            setLevel={(val) => updateSkillLevel(skill.id, val)}
                        />
                    </div>

                    {/* Class 'delete-btn' added here */}
                    <button
                        onClick={() => deleteSkill(skill.id)}
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
                </div>
            ))}


        </div>
    );
}

export default Skills;