import { PlusIcon } from "@heroicons/react/24/outline"

function SectionTitle({ title, func }) {
    return (

        <div className="titleSection" style={{
            marginTop: '15px',
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            justifyContent: 'start',
            alignContent: 'center'
        }}>
            <h3>{title}</h3>
            {/* Class 'add-btn-container' added here */}
            <div className="add-btn-container" style={{ marginTop: '21px', display: 'grid', justifyContent: 'center' }}>
                <button
                    onClick={func}
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