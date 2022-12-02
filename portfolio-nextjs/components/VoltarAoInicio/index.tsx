import Link from "next/link";
import React from "react";
import styles from "./VoltarAoInicio.module.scss";

const VoltarAoInicio = () => {
  return (
    <section className={styles.VoltarAoInicio}>
        <div className={styles.meio}>
            <p><Link href="/Curriculo">Voltar ao inicio da pagina.</Link></p>
        </div>
    </section>
  );
};

export default VoltarAoInicio;