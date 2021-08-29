import Image from "next/image";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <div>
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div></div>

      <div></div>
    </header>
  );
}

export default Header;
