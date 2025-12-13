import MultiLineEdit from "./MultiLineEdit";
import ProfilePic from "./ProfilePic"
import SingleLineEdit from "./SingleLineEdit"
import { useState } from "react";

function Header() {
    const [name, setName] = useState("Hi, I'm Hasan,");
    const [profession, setProfession] = useState("I'm a Developer.");
    const [intro, setIntro] = useState("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad.");

    return <div className="header">
        <ProfilePic></ProfilePic>
        <SingleLineEdit className="h1-center-bold" style={{ marginTop: "15px" }} value={name} setValue={setName} />
        <SingleLineEdit className="h1-center-bold" style={{ marginTop: "-10px" }} value={profession} setValue={setProfession} />
        <MultiLineEdit className="introText" value={intro} setValue={setIntro} />
    </div>

}

export default Header