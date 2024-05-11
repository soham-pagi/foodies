"use client";

import { usePathname } from "next/navigation";

import classes from "./nav-link.module.css";
import Link from "next/link";

export default function Navlink({ href, children }) {
  const path = usePathname();

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            href={href}
            className={path.startsWith(href) ? classes.active : undefined}
          >
            {children}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
