import logo from "@/assets/logo.png";
import Link from "next/link";
import classes from "./MainHeader.module.css";
import Image from "next/image";
import MainHeaderBg from "../MainHeaderBg/MainHeaderBg";
import NavLink from "./NavLink";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logo} alt="fruit plate" priority />
          {/* <img src={logo.src} alt="fruit plate" /> */}
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals"> Browse Meals</NavLink>
            </li>

            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
