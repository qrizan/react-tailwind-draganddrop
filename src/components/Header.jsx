import ButtonAddBoard from "./ButtonAddBoard";

const Header = (props) => {
  const { setFormBoard } = props 
  return (
    <header className="bg-gray-900">
        <nav
            className="mx-auto flex items-center justify-between p-6"
            aria-label="Global"
        >
            <a href="#" className="flex -m-1.5 p-1.5  items-center">
            <svg
                className="h-10 w-10 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
            </svg>
            <h1 className="ml-4 xl:text-xl lg:text-xl md:text-xl sm:text-md xs:text-md text-gray-300 font-bold">Kanban Board</h1>
            </a>
            <ButtonAddBoard setFormBoard={setFormBoard}/>
        </nav>
    </header>
  );
};

export default Header;
