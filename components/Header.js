import Image from "next/image";
import logo from "../assets/vacafully_logo.svg";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
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
