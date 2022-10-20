import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.NavBar}>

        <div className={styles.linkHome}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.links}>
          <Link href="/Portfolio">Portfolio</Link>
          <Link href="/Curriculo">Curriculo</Link>
          <Link href="/Contato">Contato</Link>
          <Link href="/Login">Login</Link>
        </div>


        <div className={styles.linksResponsivos}>
            <Link href="/">Home</Link>
            <Link href="/Portfolio">Portfolio</Link>
            <Link href="/Curriculo">Curriculo</Link>
            <Link href="/Contato">Contato</Link>
            <Link href="/Login">Login</Link>
        </div>
    </header>
  );
};

export default Navbar;