import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import "./styles.css";

export function Header() {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const headerStyles = {
    backgroundColor: "#1976d2",
  };

  const toolbarStyles = {
    display: "flex",
    justifyContent: isMobile ? "center" : "space-between",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row",
  };

  const logoStyles = {
    textDecoration: "none",
    color: "inherit",
    marginBottom: isMobile ? "0.5rem" : 0,
  };

  const buttonStyles = {
    textDecoration: "none",
    color: "inherit",
    marginTop: isMobile ? "0.5rem" : 0,
    marginLeft: isMobile ? 0 : "1rem",
  };

  return (
    <AppBar position="fixed" style={headerStyles}>
      <Toolbar style={toolbarStyles}>
        <div>
          <Link to="/" style={logoStyles}>
            <Typography variant="h6" component="div">
              Строительные материалы
            </Typography>
          </Link>
        </div>
        <div className="buttons-container">
          <Button color="inherit">
            <Link to="/calculator" style={buttonStyles}>
              Калькулятор
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/about" style={buttonStyles}>
              О нас
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="/contact" style={buttonStyles}>
              Контакты
            </Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
