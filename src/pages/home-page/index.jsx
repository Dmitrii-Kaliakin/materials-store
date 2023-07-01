import { useEffect, useState } from "react";
import "./styles.css";
import StarIcon from "@mui/icons-material/Star";
import armaturaImage from "./img/armatura.jpg";
import betonImage from "./img/beton.jpg";
import doskaImage from "./img/doska.jpg";
import pesokImage from "./img/pesok.jpg";
import setkaImage from "./img/setka.jpg";
import shebenImage from "./img/sheben.jpg";
import respectImage from "./img/respect.png";

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
        <h2 className="banner__heading">
          Строительные материалы высокого качества
        </h2>
        <p className="banner__text">
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
              src={doskaImage}
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
              src={armaturaImage}
              alt="Арматура"
              className="image-block__image"
            />
            <h4 className="image-block__title">Арматура</h4>
            <p className="image-block__description">
              Надежная арматура для армирования бетонных конструкций.
            </p>
          </div>
          <div className="image-block">
            <img src={betonImage} alt="Бетон" className="image-block__image" />
            <h4 className="image-block__title">Бетон</h4>
            <p className="image-block__description">
              Качественный бетон для создания прочного фундамента.
            </p>
          </div>
        </div>
        <div className="image-row">
          <div className="image-block">
            <img src={pesokImage} alt="Песок" className="image-block__image" />
            <h4 className="image-block__title">Песок</h4>
            <p className="image-block__description">
              Высококачественный песок для строительных работ.
            </p>
          </div>
          <div className="image-block">
            <img
              src={shebenImage}
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
              src={setkaImage}
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
                src={respectImage}
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
