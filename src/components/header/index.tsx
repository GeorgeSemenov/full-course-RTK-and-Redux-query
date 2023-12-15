import React from "react";
import styles from "./header.module.css";
import useFavorites from "../../hooks/useFavorites";

export default function Header() {
  const favorites = useFavorites();
  return (
    <header className={styles.header}>
      <i>♥</i>
      <div>Всего избранных блюд {favorites.length}</div>
    </header>
  );
}
