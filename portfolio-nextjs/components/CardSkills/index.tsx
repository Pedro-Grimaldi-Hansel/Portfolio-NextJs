import image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./CardSkills.module.scss";

interface CardSkillsProps{
    skill: string;
    //icones: string;
    texto: string;
}

const CardSkills = (props:CardSkillsProps) => {
  return (
    <section className={styles.CardSkills}>
      <div className={styles.Card}>  
        <div className={styles.Titulo}>
          <h1>{props.skill}</h1>
        </div>
        <div className={styles.Texto}>
          <p>{props.texto}</p>
        </div>
      </div>
    </section>
  );
};

export default CardSkills;
