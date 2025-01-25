import { MdBrightnessHigh } from "react-icons/md";
import { useAppContext } from "../../ContextApi/ContextApi";
const ThemeBtn = () => {
  const { theme, setTheme, loggedUser } = useAppContext();
  return (
    <button
      className={` tooltip ${
        loggedUser && "w-full h-full "
      }   flex items-center gap-2`}
      data-tip="Theme"
      onClick={() => {
        setTheme(!theme);
      }}
    >
      <MdBrightnessHigh size={20} />
      <span className="">Theme</span>
    </button>
  );
};

export default ThemeBtn;
