import React from 'react'
import ReactDOM from "react-dom"
import { URL } from '../../Variables'
const Ejemplo = () => {
    const EnviarDatos = () => {
        var formData = new FormData();
        var fileField = document.querySelector("input[type='file']");

        formData.append('username', 'abc123');
        formData.append('avatar', fileField.files[0]);
        var url = `${URL}Web/Ejemplo4`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response))
    }
    return (
        <>
            <input type="file"
                id="avatar" name="avatar"
                accept="image/png, image/jpeg" />
            <button onClick={EnviarDatos}>hola </button>
        </>
    )
}

export default Ejemplo;
if (document.getElementById("ejemplo")) {
    ReactDOM.render(<Ejemplo />, document.getElementById("ejemplo"));
}