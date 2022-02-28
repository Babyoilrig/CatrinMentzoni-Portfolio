import css from "./Header.module.css";
import Link from "next/link";


export default function Navbar() {
  return (
    
    <nav>
    <div className={css.navSection}>
      <img src="/images/mary-quant-flower-removebg-preview.png" width="60px"/>
      <div className={css.navLinks}>
      <Link href="/about"><span>About</span></Link>
    <Link href="#projects-section"><span>Projects</span></Link>
      </div>
      </div>
    </nav>
    
    
  );
}
