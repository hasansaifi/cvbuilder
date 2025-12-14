function SectionTitle({ title, func }) {
    return (
        <div className="skills-section">
            <div style={{
                marginTop: '15px',
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                justifyContent: 'start',
                alignContent: 'center'
            }}>
                <h3>Skills</h3>
                {/* Class 'add-btn-container' added here */}
                <div className="add-btn-container" style={{ marginTop: '21px', display: 'grid', justifyContent: 'center' }}>
                    <button
                        onClick={addSkill}
                        style={{
                            background: 'none', color: 'grey', border: 'none',
                            borderRadius: '50%', width: '30px', height: '30px',
                            cursor: 'pointer', fontSize: '20px'
                        }}
                    >
                        <PlusIcon />
                    </button>
                </div>
            </div>
            )
}

            export default SectionTitle