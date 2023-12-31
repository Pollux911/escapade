import React from "react";
import styles from "./styles/Nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navItems}>
                <ul>
                    <li>
                        <a href="/">My Posts</a>
                    </li>
                    <li>
                        <a href="/passwords">Add Passwords</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}