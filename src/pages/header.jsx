import HomeLogo from "../assets/img/real-home-logo.jpg";

export default function Header() {
  return (
    <div>
      <header className="flex flex-col justify-between gap-2 pb-4 pt-2 md:flex-row md:items-center ">
        <div className="flex flex-row">
          <a href="/home">
            <img
              className="h-10 w-10 rounded-full"
              src={HomeLogo}
              alt="RealHome Logo"
            />
          </a>

          <h1 className="ml-2 mb-0 self-center text-lg text-primary-green-500">
            Real Home
          </h1>
        </div>
        <nav className="flex space-x-4 ">
          <a href="/LogininPage" className="font-medium text-black">
            Sign In
          </a>

          <a href="/SignUppage" className="font-medium text-black">
            Sign Up
          </a>

          <div className="menu-icon">
            <i className="fa fa-bars"></i>
          </div>
        </nav>
      </header>
    </div>
  );
}
