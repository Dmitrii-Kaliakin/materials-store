import React, { useEffect } from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { Route, Routes, useLocation } from "react-router-dom";
import { styled } from "@mui/material";
import { NotFoundPage } from "../../pages/not-found-page";
import { HomePage } from "../../pages/home-page";
import { CalculatorPage } from "../../pages/calculator-page";
import { ContactPage } from "../../pages/contact-page";
import { AboutPage } from "../../pages/about-page";

const StyledAppContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

const StyledMainContainer = styled("main")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexGrow: 1,
  marginTop: "65px",
}));

export function App() {
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const initialPath = location.state?.initialPath;

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  }, []);

  return (
    <StyledAppContainer>
      <Header />
      <StyledMainContainer>
        <Routes
          location={
            (backgroundLocation && {
              ...backgroundLocation,
              pathname: initialPath,
            }) ||
            location
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </StyledMainContainer>
      <Footer />
    </StyledAppContainer>
  );
}
