import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import s from "./styles.module.css";

export function CustomButton({ to, text, color }) {
  return (
    <Link to={to} className={s.customButtonLink}>
      <Button
        variant="contained"
        size="large"
        color={color}
        className={`${s.customButton} ${s.button}`}
      >
        {text}
      </Button>
    </Link>
  );
}
