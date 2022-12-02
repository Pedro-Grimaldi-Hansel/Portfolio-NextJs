import Link from "next/link";
import React from "react";
import styles from "./VoltarAoInicio.module.scss";

const VoltarAoInicio = () => {
  return (
    <section className={styles.VoltarAoInicio}>
        <div className={styles.meio}>
            <p><a href="curriculo.php">Voltar ao início da página</a></p>
        </div>
    </section>
  );
};

export default VoltarAoInicio;