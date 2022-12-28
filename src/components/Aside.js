import React from "react";
import './Aside.css'

function Aside() {
    return (
        <aside>
            <h2>Books by language</h2>
            <img src="https://s3-alpha-sig.figma.com/img/236b/36d3/9dd898a09c25311abfff54dc0f0c34ee?Expires=1672617600&Signature=h3dEx~kOAD0BPbWlQTCy1XeLa1HMSyRXYGb3QE~nQ9NEuNuBVLD3jUcGLLuX-kULr6f22OQUZcOVgDu3R70N0s83mGJ5fWQNZedIqRfMly~xGl-cBq2qT1mCUfw~yWlnWogYmaa6QYUPD04PFKzYDou4A2-qPGlkA0o~uJbQawEoZXMRc7xVvFXIkW5623qj5Ysf8hKhrPaSMZVzh4B--vAdcSiKX1~Snnvrv7FqIjlMtC6R1Hn9bnvca6jz7yomVmz0bf0ymuuOwtMdspF~e6c6NtJNBDArou2DzFhD1oNBu0FK3MW1KYITbj7ZWODrVacC1vL1RAyYPzBGLEb5UQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
            <ul>
                <li>Books in Spanish</li>
                <li>Books in Frenche</li>
                <li>Books in German</li>
                <li>Books in Russian</li>
                <li>More</li>
            </ul>
        </aside>
    )
}

export default Aside;
