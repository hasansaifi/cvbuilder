import React from "react";
import SingleLineEdit from "./SingleLineEdit";
import { useState } from "react";

function Footer() {
    const [website, setWebsite] = useState("www.johndoe.com");
    const [email, setEmail] = useState("john@example.com");
    const [phone, setPhone] = useState("+1 234 567 890");
    const [address, setAddress] = useState("New York, USA");

    return (
        <footer className="cv-footer" >
            <SingleLineEdit className={"footerText"} value={website} setValue={setWebsite} />
            <SingleLineEdit className={"footerText"} value={email} setValue={setEmail} />
            <SingleLineEdit className={"footerText"} value={phone} setValue={setPhone} />
            <SingleLineEdit className={"footerText"} value={address} setValue={setAddress} />
        </footer>
    );
}

export default Footer;