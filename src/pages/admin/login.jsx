//Admin Login page
"use client";

import React, {useState} from "react";
import { useRouter } from "next/router";
import styles from "../../styles/AdminLogin.module.css"
// import axios from "axios";

const AdminLogin = () => {
  

const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);
const [error, setError] = useState(false);
const router = useRouter();

  const handleClick = async () => {
    // try {
    //   await axios.post("http://localhost:3000/api/login", {
    //     username,
    //     password,
    //   });
    //   router.push("/admin");
    // } catch (err) {
    //   setError(true);
    // }
  };

    return(

        <div className={styles.login_wrapper}>
            <div className="container-fluid">
                <div className="row">
                    <div className={styles.login_form}>
                        
                            <h3>Admin Dashboard</h3>
                            <input
                                placeholder="username"
                                className={styles.input}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            <input
                            placeholder="password"
                            type="password"
                            className={styles.input}
                            onChange={(e) => setPassword(e.target.value)}
                            />

                        <button onClick={handleClick} className={styles.login_btn}>
                        Sign In
                        </button>
                        {error && <span className={styles.error}>Wrong Credentials!</span>}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;