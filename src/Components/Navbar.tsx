import { Bars3Icon } from "@heroicons/react/20/solid";

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="fixed top-4 left-4 right-4 mx-auto max-w-[1400px] rounded-2xl h-[90px] bg-myBlue py-4 bg-opacity-90 bg-clip-padding backdrop-blur-sm ">
      <div className="flex items-center justify-between w-[85%] h-full mx-auto">
        <div className="flex-0.6 cursor-pointer text-[25px] text-myDarkLightBlue font-bold">
          <h1>
            MILTON <span className="text-myDarkBlue">SAVANDER</span>
          </h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="nav-link">HEM</div>
          <div className="nav-link">OM MIG</div>
          <div className="nav-link">PROJEKT</div>
          <div className="nav-link">KONTAKTA</div>
          <div
            className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-myDarkBlue"
            onClick={openNav}
          >
            <Bars3Icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
