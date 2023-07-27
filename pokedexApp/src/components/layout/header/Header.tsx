import { ReactComponent as PokemonLogo } from "../../../assets/logo-pokemon.svg";
import {
  useToastContext,
  clearLocalStorage,
  getUserInfo,
} from "../../../utils";
import { Button } from "../../button/Button";
import styles from "./Header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const user = getUserInfo();
  let location = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToastContext();

  const renderButton = (path: string, label: string) => {
    return (
      <Link to={path}>
        <Button
          buttonStyle="primary"
          onClick={() => {
            return;
          }}
        >
          {label}
        </Button>
      </Link>
    );
  };

  const renderUserButton = () => {
    if (user && location.pathname === "/") {
      return renderButton("user", "User account");
    } else if (!user && location.pathname === "/") {
      return renderButton("user", "Sign in");
    } else if (user && location.pathname === "/user") {
      return (
        <Button
          buttonStyle="primary"
          onClick={() => {
            clearLocalStorage();
            navigate("/");
            showToast({
              isDisplay: true,
              message: "Log out successful",
              type: "success",
            });
          }}
        >
          Log out
        </Button>
      );
    } else {
      return null;
    }
  };

  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <PokemonLogo />
      </Link>

      {renderUserButton()}
    </header>
  );
};
