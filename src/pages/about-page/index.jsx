import { CustomButton } from "../../components/сustom-button";
import { Box } from "@mui/material";
import "./styles.css";

export function AboutPage() {
  return (
    <div className="about-page">
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
        <div className="about-page__button-container">
          <CustomButton
            to="/"
            text="На главную"
            color="primary"
            className="about-page__home-button"
          />
        </div>
      </Box>
      <div className="about-page__container">
        <div className="about-page__content">
          <h1 className="about-page__title">О нас</h1>
          <p className="about-page__description">
            Мы - компания, специализирующаяся на продаже материалов для ЖБ
            конструкций и заливки бетона. Наша команда имеет богатый опыт в этой
            области и готова предложить вам широкий ассортимент качественных
            продуктов по конкурентным ценам.
          </p>
          <p className="about-page__description">
            Мы предлагаем различные материалы для строительства, включая:
          </p>
          <ul className="about-page__list">
            <li>Доски для опалубки бетона разного размера и конфигурации</li>
            <li>Песок разной фракции для использования в бетонных работах</li>
            <li>Глину для использования в строительных проектах</li>
          </ul>
          <p className="about-page__description">
            Мы гарантируем качество наших продуктов и стремимся обеспечить
            удовлетворение потребностей каждого клиента. С нами вы можете быть
            уверены в надежности и долговечности используемых материалов.
          </p>
        </div>
      </div>
    </div>
  );
}
