import { ArrowUpTrayIcon } from "@heroicons/react/24/solid"
import { useState } from "react";

function ProfilePic() {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    function uploadImage(e) {
        const file = e.target.files[0];
        if (!file) return

        setImageFile(file)

        const previewUrl = URL.createObjectURL(file)
        setImagePreview(previewUrl)

    }


    return (
        <div className="profilePicDiv cursorPointer" style={imagePreview && { backgroundImage: `url(${imagePreview})`, border: 'none' }} >
            
            <label htmlFor="profilePic" className={imagePreview ?  'hidden ' + 'cursorPointer profilePicLabel' : 'cursorPointer' }>
                <ArrowUpTrayIcon width={35} />
                {!imagePreview && <p>Upload image</p>}
            </label>

            <input className="hidden" id="profilePic" type="file" accept="image/png, image/jpeg" onChange={uploadImage}/>

        </div>
    )
}

export default ProfilePic