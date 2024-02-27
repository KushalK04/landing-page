import Spline from "@splinetool/react-spline";
import styles from '../styles/home.module.css'
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <div className={styles.idek2}>
          <Spline scene="https://prod.spline.design/wtO7xrdWbzrGKShf/scene.splinecode" />

        </div>
        <div>
          <Spline scene="https://prod.spline.design/Kyzx6ZqHBq-8H8bS/scene.splinecode" />
        </div>
        <div className={styles.sub}>
          <h2>Subscribe to Emails</h2>
          <form className={styles.idkigiveup}>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
