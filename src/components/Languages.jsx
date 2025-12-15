import { useState } from "react"
import Language from "./Language"
import Education from "./Education"
import SectionTitle from "./SectionTitle"

function Languages() {
    const [languages, setLanguages] = useState([
        { id: 1, language: "English", level: "Native" },
        { id: 2, language: "French", level: "Fluent" }
    ])

    function addLang() {
        const newLang = {
            id: Date.now(),
            language: "New Language",
            level: "Add level"
        }

        setLanguages([...languages, newLang]);

    }

    function delLang(id) {

    }

    function updateLang() {

    }

    function updateLevel() {

    }

    return (
        <div>
            <SectionTitle title={"Languages"} func={addLang} />
            <div className="langDiv">
                {languages.map((lang) =>
                    <Language
                        key={lang.id}
                        language={lang.language}
                        setLanguage={(val) => updateLang(lang.id, val)}
                        level={lang.level}
                        setLevel={(val) => updateLevel(lang.id, val)}
                        onDelete={() => delLang(Education.id)}
                    />
                )}
            </div>

        </div>
    )

}

export default Languages