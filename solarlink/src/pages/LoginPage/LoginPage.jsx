import React from 'react';

function LoginPage(props) {
    const url = "http://localhost:7200"
    return (
        <div className={"h-100vh"}>
            <iframe className={"h-100vh w-100"} src={url} >

            </iframe>


        </div>
    );
}

export default LoginPage;
