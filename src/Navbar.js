const Navbar = () => {
  return (
    <div class="nav">
      <ul>
        <li className="home">
          <a href="#home">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#best selling" id="home">
            Best selling
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="Ourcollection">Our Collection</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#reviews">Review</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact">Contact </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
