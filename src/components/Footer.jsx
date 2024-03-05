function Footer() {
  return (
    <footer className="bg-[#2a1b3d] h-2/5 flex flex-col justify-evenly item-center text-[#cc80ff]">
      <div className="w-10/12 m-auto flex justify-between items-center ">
        <div>
          <h1 className="text-2xl font-bold">Boundless Books</h1>
          <p>Explore, Imagine, Escape.</p>
        </div>
        <div className="w-8/12 m-auto flex justify-evenly items-start ">
          <div>
            <h1 className="text-xl">Information</h1>
            <ul>
              <li>About us</li>
              <li>More Search</li>
              <li>Testimonial</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl">Helpfull Links</h1>
            <ul>
              <li>Services</li>
              <li>Supports</li>
              <li>Terms & Condition</li>
              <li>Privecy Policy</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl">Our Services</h1>
            <ul>
              <li>Order</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-xl">Contact Us</h1>
          <ul>
            <li>+91 88932-45639</li>
            <li>singhchetan123@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className=" m-auto ">
        {new Date().getFullYear()} &copy; Chetan Singh
      </div>
    </footer>
  );
}

export default Footer;
