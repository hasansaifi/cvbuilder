import SingleLineEdit from "./SingleLineEdit";

function Skill({ name, setName, level, setLevel }) {
    const handleSliderChange = (e) => {
        setLevel(e.target.value);
    };

    const sliderStyle = {
        background: `linear-gradient(to right, var(--main-color) ${level / 10}%, #e0e0e0 ${level / 10}%)`
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
                value={level}
                onChange={handleSliderChange}
                className="skill-range-input"
                style={sliderStyle}
            />
        </div>
    );
}

export default Skill;