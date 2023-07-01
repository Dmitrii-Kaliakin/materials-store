import React from "react";
import "./styles.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section">
        <div className="footer__contact">
          <h2 className="footer__title">Контакты</h2>
          <p className="footer__text">Телефон: +79128564800</p>
          <p className="footer__text">Email: gserg1@ya.ru</p>
        </div>
        <div className="footer__messenger">
          <p className="footer__subtitle">Написать в мессенджер:</p>
          <div className="footer__icon-container">
            <a
              className="footer__icon-link"
              href="https://api.whatsapp.com/send?phone=79128564800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="footer__icon footer__icon--whatsapp" />
            </a>
            <a
              className="footer__icon-link"
              href="https://t.me/Fiservic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="footer__icon footer__icon--telegram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Все права защищены. Строительный
          магазин
        </p>
      </div>
    </footer>
  );
}
