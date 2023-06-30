import { NotFound } from "../../components/not-found";
import { CustomButton } from "../../components/сustom-button";

export function NotFoundPage() {
  return (
    <div>
      <NotFound title="Страница не найдена">
        <CustomButton
          to="/"
          text="На главную"
          color="primary"
          className="notfound-home-button"
        />
      </NotFound>
    </div>
  );
}
