import css from "./HeaderPage2.module.css"
import Link from "next/link";


export default function NavbarPage2() {
  return (
    
    <nav>
    <div className={css.navSection}>
      <img src="/images/mary-quant-flower-removebg-preview.png" width="60px"/>
      <div className={css.navLinks}>
      <Link href="/"><span>Home</span></Link>
    <Link href="/#projects-section"><span>Projects</span></Link>
      </div>
      </div>
    </nav>
    
    
  );
}