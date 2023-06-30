import { ReactComponent as NotFoundIcon } from "./img/ic-notfound.svg";
import s from "./styles.module.css";

export function NotFound({ children, title, buttonText = "На главную" }) {
  return (
    <div className={s.notfoundContainer}>
      <NotFoundIcon className={s.notfoundImage} aria-hidden="true" />
      <h1 className={s.notfoundTitle}>{title}</h1>
      {children && children}
    </div>
  );
}
