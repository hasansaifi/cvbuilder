import { useState } from "react";
import SingleLineEdit from "./SingleLineEdit";

function SkillSlider({ name, setName, value, setValue }) {
    const [skill, setSkill] = useState("Front End Development");

    const handleSliderChange = (e) => {
        setValue(e.target.value);
    };

    const sliderStyle = {
        background: `linear-gradient(to right, #333 ${value / 10}%, #e0e0e0 ${value / 10}%)`
    };

    return (
        <div className="skill-slider-container">
            <div className="skill-label">
                <SingleLineEdit className="skill" value={name} setValue={setName} />

            </div>

            <input
                type="range"
                min="0"
                max="1000"
                value={value}
                onChange={handleSliderChange}
                className="skill-range-input"
                style={sliderStyle}
            />
        </div>
    );
}

export default SkillSlider;