function NavBar() {
  return (
    <nav className="flex justify-between items-center h-16 ">
      <Logo />
      <ul className="flex justify-evenly w-3/6">
        <NavItems>Home</NavItems>
        <NavItems>About Us</NavItems>
        <NavItems>Blog</NavItems>
        <NavItems>Contact Us</NavItems>
      </ul>
    </nav>
  );
}

export default NavBar;

function Logo() {
  return <h1 className="w-1/6 text-[#AAABB8] text-2xl">Logo</h1>;
}

function NavItems({ children }) {
  return (
    <li className={"text-white text-2xl hover:text-[#d83f87]"}>{children}</li>
  );
}
