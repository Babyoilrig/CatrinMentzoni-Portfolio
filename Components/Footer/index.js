import React from "react";
import css from "./Footer.module.css"
import Link from "next/link";

export default function Footer() {
  return (
      <footer id="contact-section" className={css.contactIconsContainer}>
        <div className={css.linkedInIcon}>
          <Link
            href="https://www.linkedin.com/in/catrin-mentzoni-9387b6224/?trk=people-guest_people_search-card&originalSubdomain=uk"
            passHref
          >
            <img
              className={css.linkedInImage}
              src="/images/linked-in-logo.png"
            ></img>
          </Link>
        </div>
        <div className={css.githubIcon}>
        <Link
            href="https://github.com/Babyoilrig"
            passHref
          ><img className={css.githubImage} src="/images/github-logo.png"></img></Link>
        </div>
    </footer>
  );
}