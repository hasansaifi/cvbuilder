import { useState } from "react";
import SingleLineEdit from "./SingleLineEdit"

function Skills() {
    const [skill, setSkill] = useState("Front End Development");

    return <div>
        <SingleLineEdit value={skill} setValue={setSkill}></SingleLineEdit>

    </div>

}

export default Skills