import { Button, Navbar, NavbarToggle, NavbarCollapse, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;

  const navLinkClass = (targetPath: string) =>
    `block py-2 pr-2 pl-2 rounded ${
      path === targetPath
        ? 'text-white bg-cyan-700 md:bg-transparent md:text-cyan-700 dark:text-white'
        : 'text-gray-400 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-cyan-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
    }`;

  return (
    <Navbar fluid rounded className="border-b-2 fixed w-full z-20 top-0 start-0">
      <Link to="/" className="flex items-center space-x-2 font-semibold">
        <span className="px-2 py-1 bg-gradient-to-br from-pink-300 via-orange-500 to-red-500 text-white rounded-lg">
          Daily</span>Context
      </Link>

      <div className="flex md:order-2 gap-2 items-center">
        {/* Search input visible solo en escritorio */}
        <form className="hidden lg:inline">
          <TextInput
            type="text"
            placeholder="Buscar..."
            rightIcon={AiOutlineSearch}
          />
        </form>

        {/* Botón de búsqueda para móviles */}
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>

        <Link to="/sign-in">
          <Button className="text-blue-500 bg-white hover:bg-blue-500" outline pill>Sign In</Button>
        </Link>

        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <Link to="/" className={navLinkClass('/')}>Leer</Link>
        <Link to="/about" className={navLinkClass('/about')}>About</Link>
        <Link to="/projects" className={navLinkClass('/projects')}>Projects</Link>

        {/* Search input visible solo en móviles dentro del menú */}
        <form className="mt-2 lg:hidden">
          <TextInput
            type="text"
            placeholder="Buscar..."
            icon={AiOutlineSearch}
          />
        </form>
      </NavbarCollapse>
    </Navbar>
  );
}