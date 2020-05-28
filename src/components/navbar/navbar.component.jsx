import React from 'react';
import styles from './styles.module.css';
import CustomNavLink from '../navlink/navlink.component';
import { NavLink as Container } from 'react-router-dom';

const Navbar = (props) => {
    const { content, targetId } = props;
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${styles.customNavbar}`}>
            <Container to="/">
                <h1 className={`${styles.websiteTitle} navbar-brand`}>
                    dynak<span className={styles.dot}>.</span>com
                </h1>
            </Container>
            <button
                className={`${styles.navbarButton} navbar-toggler`}
                type="button"
                data-toggle="collapse"
                data-target={`#${targetId}`}
                aria-controls={targetId}
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id={targetId}>
                {onRenderNavLinks(content, targetId)}
            </div>
        </nav>
    );
};

export function onRenderNavLinks(data, targetId) {
    return (
        <ul className="navbar-nav ml-auto">
            {data.map((item) => {
                const { text, address } = item;
                return (
                    <li id="item-navlink" className="nav-item" key={text}>
                        <CustomNavLink text={text} address={address} target={targetId} />
                    </li>
                );
            })}
        </ul>
    );
}

export default Navbar;
