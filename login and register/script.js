/* Basic reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: black;
    color: white;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
}

.particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: transparent;
    z-index: -1;
}

.title-container {
    margin-bottom: 40px;
    text-align: center;
}

.title {
    font-size: 48px;
    font-weight: bold;
}

.description {
    font-size: 18px;
}

.auth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.auth-container input {
    width: 300px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    outline: none;
}

.submit-button, .google-button {
    width: 320px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-button {
    background-color: #28a745;
    color: white;
}

.submit-button:hover {
    background-color: #218838;
}

.google-button {
    background-color: #db4437;
    color: white;
}

.google-button:hover {
    background-color: #c23321;
}

#toggleAuth, #toggleToLogin {
    margin-top: 20px;
    cursor: pointer;
    color: #007bff;
}

#toggleAuth:hover, #toggleToLogin:hover {
    text-decoration: underline;
}
