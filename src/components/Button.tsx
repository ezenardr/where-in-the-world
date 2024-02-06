import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="flex gap-3 items-center cursor-pointer"
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
      <p className=" font-semibold">
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </p>
    </button>
  );
};

export default Button;
