import React, { useEffect, useState } from "react";
import "./styles.css";
import StarIcon from "@mui/icons-material/Star";

export function HomePage() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const targetValue = 5000;
    const incrementStep = 500;
    let currentCounter = 0;

    const handleScroll = () => {
      const element = document.getElementById("counter");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          const interval = setInterval(() => {
            currentCounter += incrementStep;
            if (currentCounter >= targetValue) {
              currentCounter = targetValue;
              clearInterval(interval);
            }
            setCounter(currentCounter);
          }, 100);

          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-page-container">
      <div className="banner">
        <h2 className="banner-heading">
          Строительные материалы высокого качества
        </h2>
        <p className="banner-text">
          Создайте надежный фундамент для вашего дома с нашими материалами
        </p>
      </div>

      <div className="shop-section">
        <h3 className="shop-section__heading">
          Добро пожаловать в наш магазин
        </h3>
        <p className="shop-section__description">
          Мы предлагаем широкий выбор строительных материалов, от ведущих
          производителей. У нас вы найдете все необходимое для успешного
          строительства и ремонта. Наши материалы отличаются прочностью,
          долговечностью и высокой надежностью.
        </p>
        <p className="shop-section__description">
          Наша команда экспертов с радостью поможет вам выбрать оптимальные
          решения и ответит на все ваши вопросы. Мы гарантируем индивидуальный
          подход к каждому клиенту и оперативную доставку товаров.
        </p>
      </div>

      <div className="image-container">
        <div className="image-row">
          <div className="image-block">
            <img
              src="https://proton-zavod.ru/wp-content/uploads/2020/05/db77379b1528e4dd5a222d1fbecbc0f6-459x240.jpg"
              alt="Доска для опалубки"
              className="image-block__image"
            />
            <h4 className="image-block__title">Доска для опалубки</h4>
            <p className="image-block__description">
              Качественная доска для создания прочной опалубки.
            </p>
          </div>
          <div className="image-block">
            <img
              src="https://city-met.ru/images/%D1%81%D1%82%D0%B0%D1%82%D1%8C%D0%B8/metalprfilarm.jpg"
              alt="Арматура"
              className="image-block__image"
            />
            <h4 className="image-block__title">Арматура</h4>
            <p className="image-block__description">
              Надежная арматура для армирования бетонных конструкций.
            </p>
          </div>
          <div className="image-block">
            <img
              src="https://гарант-бетон.рф/image/cache/catalog/blog/beton-v-podolske-6-556x421.jpg"
              alt="Бетон"
              className="image-block__image"
            />
            <h4 className="image-block__title">Бетон</h4>
            <p className="image-block__description">
              Качественный бетон для создания прочного фундамента.
            </p>
          </div>
        </div>
        <div className="image-row">
          <div className="image-block">
            <img
              src="https://www.stroyportal.ru/media/cache/companies/94321/products/689013491/15104881_image_large.jpg"
              alt="Песок"
              className="image-block__image"
            />
            <h4 className="image-block__title">Песок</h4>
            <p className="image-block__description">
              Высококачественный песок для строительных работ.
            </p>
          </div>
          <div className="image-block">
            <img
              src="https://b-online.ru/wp-content/uploads/2020/09/121-2.jpg"
              alt="Щебень"
              className="image-block__image"
            />
            <h4 className="image-block__title">Щебень</h4>
            <p className="image-block__description">
              Натуральный щебень разных фракций для фундаментных работ.
            </p>
          </div>
          <div className="image-block">
            <img
              src="https://kraftmeleuz.ru/upload/iblock/4f8/08bzeivfkla2bsiztligk9staytfe4ji.jpg"
              alt="Сетка кладочная"
              className="image-block__image"
            />
            <h4 className="image-block__title">Сетка строительная</h4>
            <p className="image-block__description">
              Качественная сетка для кладки и армирования конструкций.
            </p>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="left-block">
          <div className="counter-block" id="counter">
            <div className="stars-overlay">
              <div className="star-container">
                <span className="star-icon">
                  <StarIcon />
                </span>
                <span className="star-icon">
                  <StarIcon />
                </span>
                <span className="star-icon">
                  <StarIcon />
                </span>
                <span className="star-icon">
                  <StarIcon />
                </span>
                <span className="star-icon">
                  <StarIcon />
                </span>
              </div>
            </div>
            <div className="respect-block">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3456/3456469.png"
                alt="respect"
                className="respect-block__image"
              />
            </div>
            <h3 className="counter-block__title">
              Нам доверяют {counter}+<br />
              клиентов!
            </h3>
          </div>
        </div>

        <div className="right-block"></div>
      </div>
    </div>
  );
}
