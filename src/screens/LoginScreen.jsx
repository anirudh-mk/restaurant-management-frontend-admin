import React from 'react'
import styles from '../styles/loginScreen.module.css'
function LoginScreen() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div>
                    <h1>Hello, Welcome Back!</h1>
                    <div className={styles.inputContainer}>
                        <p>Email</p>
                        <input type="text" />
                        <p>Password</p>
                        <input type="text" />
                        <div className={styles.buttonContainer}>
                            <p>forgot</p>
                            <button><p>Signup</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen