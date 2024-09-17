import HomeLogo from "../assets/img/real-home-logo.jpg";

export default function Header() {
  return (
    <div>
      <header className="flex flex-col justify-between gap-2 pb-4 pt-2 md:flex-row md:items-center">
        <div className="flex flex-row">
          <img
            className="h-10 w-10 rounded-full"
            src={HomeLogo}
            alt="RealHome Logo"
          />
          <h1 className="ml-2 mb-0 self-center text-lg text-primary-green-500">
            Real Home
          </h1>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/LogininPage">Sign In</a>
            </li>
            <li>
              <a href="/SignUppage">Sign Up</a>
            </li>
            <li className="menu-icon">
              <i className="fa fa-bars"></i>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
