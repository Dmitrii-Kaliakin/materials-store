import { Box } from "@mui/material";
import { CustomButton } from "../../components/сustom-button";
import "./styles.css";

export function CalculatorPage() {
  return (
    <div className="calculator-page">
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        p={2}
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
      >
        <div className="calculator-page__button-container">
          <CustomButton
            to="/"
            text="На главную"
            color="primary"
            className="calculator-page__home-button"
          />
        </div>
      </Box>
      <div className="calculator-page__container">
        <iframe
          id="iframe"
          name="iframe"
          src="https://stroy-calc.ru/widj?str=raschet-lentochnogo-fundamenta&bgcol=#fff&tcol=000&elcol=ec7000&dis=none"
          width="100%"
          height="1200vh"
          frameBorder="0"
          title="stroy-calc"
        ></iframe>
      </div>
    </div>
  );
}
