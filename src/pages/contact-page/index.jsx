import qrCodeImage from "./img/QR.png";
import "./styles.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import { CustomButton } from "../../components/сustom-button";
import { Box } from "@mui/material";
import { MapComponent } from "../../components/map";

export function ContactPage() {
  return (
    <div className="contact-page">
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
        <div className="contact-page__button-container">
          <CustomButton
            to="/"
            text="На главную"
            color="primary"
            className="contact-page__home-button"
          />
        </div>
      </Box>
      <div className="contact-page__container">
        <div className="contact-page__header-container">
          <h1 className="contact-page__title">Контакты</h1>
        </div>
        <div className="contact-page__content-container">
          <div className="contact-page__details">
            <div>
              <h2>Телефон</h2>
              <p>+79128564800</p>
            </div>
            <div>
              <h2>Электронная почта</h2>
              <p>gserg1@ya.ru</p>
            </div>
            <div>
              <h2>Адрес</h2>
              <p>
                Советская, 111-3 этаж, 2 филиала, Центр, Октябрьский район,
                Ижевск, 426008
              </p>
            </div>
            <div className="contact-page__messenger-icons">
              <a
                href="https://api.whatsapp.com/send?phone=79128564800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="contact-page__whatsapp-icon" />
              </a>
              <a
                href="https://t.me/Fiservic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon className="contact-page__telegram-icon" />
              </a>
            </div>
          </div>
          <div className="contact-page__qr-code-container">
            <img
              className="contact-page__qr-code-image"
              src={qrCodeImage}
              alt="QR Code"
            />
          </div>
        </div>
        <div className="contact-page__map-container">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
