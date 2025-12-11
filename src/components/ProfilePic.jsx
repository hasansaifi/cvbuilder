import { ArrowUpTrayIcon } from "@heroicons/react/24/solid"

function ProfilePic() {

    function uploadImage(e) {
        const file = e.target.files[0];
    }

    return (
        <div className="profilePicDiv cursorPointer">
            <label htmlFor='profilePic' className="cursorPointer">
                <ArrowUpTrayIcon width={35} />
                <p>Upload image</p>
            </label>
            <input className="hidden" id="profilePic" type="file" accept="image/png, image/jpeg"></input>

        </div>
    )
}

export default ProfilePic