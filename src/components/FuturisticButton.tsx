import styles from "../styles/FuturisticButton.module.css"

export default function FuturisticButton({ label }) {
  return (
    <div className={styles.cardFrameContainer } id="1" onclick="activate(1)">
        <div className={styles.cardFrameBorder}></div>
        <button className={styles.cardFrame}>
    <div className={styles.cardSmallTriangle}></div>
    {label}
    </button>
</div>
  );
}