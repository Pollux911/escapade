import React, { useState } from "react";
import Layout from "../../components/Layout";

export default function AddPost() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (password) {
            try {
                let response = await fetch("http://localhost:3000/api/addPost", {
                    method: "POST",
                    body: JSON.stringify({
                        password
                    }),
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                    },
                });
                response = await response.json();
                console.log(response)
                setPassword("");
                setError("");
                setMessage("Post added successfully");
            } catch (errorMessage: any) {
                setError(errorMessage);
            }
        } else {
            return setError("All fields are required");
        }
    };
    return (
        <Layout>
            <form onSubmit={handleSubmit} className="form">
                {error ? <div className="alert-error">{error}</div> : null}
                {message ? <div className="alert-message">{message}</div> : null}
                <div className="form-group">
                    <label>password</label>
                    <input
                        type= "text"
                        placeholder= "*******"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="submit_btn">
                        Add Password
                    </button>
                </div>
            </form>
            <style jsx>
                {`
        .form {
          width: 400px;
          margin: 10px auto;
        }
        .form-group {
          width: 100%;
          margin-bottom: 10px;
          display: block;
        }
        .form-group label {
          display: block;
          margin-bottom: 10px;
        }
        .form-group input[type="text"] {
          padding: 10px;
          width: 100%;
        }
        .form-group textarea {
          padding: 10px;
          width: 100%;
        }
        .alert-error {
          width: 100%;
          color: red;
          margin-bottom: 10px;
        }
        .alert-message {
          width: 100%;
          color: green;
          margin-bottom: 10px;
        }
      `}
            </style>
        </Layout>
    );
}

/*export default function AddCounter() {
    const [counter, setCounter] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (counter) {
            try {
                let response = await fetch("http://localhost:3000/api/addCounter", {
                    method: "POST",
                    body: JSON.stringify({
                        counter
                    }),
                    headers: {
                        Accept: "application/json, text/plain, *!/!*",
                        "Content-Type": "application/json",
                    },
                });
                response = await response.json();
                setCounter("");
                setError("");
                setMessage("Counter added successfully");
            } catch (errorMessage: any) {
                setError(errorMessage);
            }
        } else {
            return setError("All fields are required");
        }
    };
    return (
        <Layout>
            <form onSubmit={handleSubmit} className="form">
                {error ? <div className="alert-error">{error}</div> : null}
                {message ? <div className="alert-message">{message}</div> : null}
                <div className="form-group">
                    <label>password</label>
                    <input
                        type= "number"
                        placeholder= "0"
                        onChange={(e) => setCounter(e.target.value)}
                        value={counter}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="submit_btn">
                        Add Counter
                    </button>
                </div>
            </form>
            <style jsx>
                {`
        .form {
          width: 400px;
          margin: 10px auto;
        }
        .form-group {
          width: 100%;
          margin-bottom: 10px;
          display: block;
        }
        .form-group label {
          display: block;
          margin-bottom: 10px;
        }
        .form-group input[type="text"] {
          padding: 10px;
          width: 100%;
        }
        .form-group textarea {
          padding: 10px;
          width: 100%;
        }
        .alert-error {
          width: 100%;
          color: red;
          margin-bottom: 10px;
        }
        .alert-message {
          width: 100%;
          color: green;
          margin-bottom: 10px;
        }
      `}
            </style>
        </Layout>
    );
}*/
