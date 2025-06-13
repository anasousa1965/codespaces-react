import styles from "./Header.css";
import styles from "./MyGrid.module.css";

export function header() {
  return (
    <div className={styles.container}>
      <header className={styles.header1} />
      <header className={styles.header2} />
      <aside className={styles.aside} />
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2>My text 0</h2>
            <p>This is the first text.</p>
          </div>
          <div className={styles.text}>
            <h2>My text 1</h2>
            <p>This is the second text.</p>
            <img src="https://picsum.photos/200/300?random=1"></img>
          </div>
          <div className={styles.text}>
            <img src="https://picsum.photos/200/300?random=2"></img>
            <h2>My text 2</h2>
            <p>This is the third text.</p>
          </div>
          <div className={styles.text}>
            <h2>My text 3</h2>
            <p>This is the fourth text.</p>
          </div>
          <div className={styles.text}>
            <h2>My text 4</h2>
            <p>This is the fifth text.</p>
          </div>
             </div>
        </div>
      </main>
      <footer className={styles.footer} />
    </div>
  );
}

          
