import MultiLineEdit from "./MultiLineEdit";
import ProfilePic from "./ProfilePic"
import SingleLineEdit from "./SingleLineEdit"
import { useState } from "react";

function Header() {
    const [name, setName] = useState("Hi, I'm Hasan,");
    const [profession, setProfession] = useState("I am a Developer.");
    const [intro, setIntro] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu lectus a elit mollis porttitor ultrices non eros. Etiam pharetra id odio sed gravida. Etiam faucibus tellus sit amet turpis ultrices, vel egestas felis maximus. Integer congue feugiat leo nec molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus facilisis in urna eget iaculis. Quisque venenatis, sem pretium aliquam finibus, risus ex efficitur lacus, mattis auctor sem elit ut nulla.");

    return <div className="header">
        <ProfilePic></ProfilePic>
        <SingleLineEdit value={name} setValue={setName} />
        <SingleLineEdit value={profession} setValue={setProfession} />
        <MultiLineEdit value={intro} setValue={setIntro} />
    </div>

}

export default Header