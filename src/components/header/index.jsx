import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#1976d2",
}));

const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const LeftSection = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const RightSection = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export function Header() {
  return (
    <StyledHeader position="fixed">
      <HeaderToolbar>
        <LeftSection>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography variant="h6" component="div">
              Строительные материалы
            </Typography>
          </Link>
        </LeftSection>
        <RightSection>
          <Button color="inherit">
            <Link
              to="/calculator"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Калькулятор
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              О нас
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Контакты
            </Link>
          </Button>
          <Button color="inherit">Войти</Button>
        </RightSection>
      </HeaderToolbar>
    </StyledHeader>
  );
}
