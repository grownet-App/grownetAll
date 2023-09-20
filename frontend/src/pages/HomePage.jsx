import Carousel from 'react-bootstrap/Carousel';
import "../css/prelogin.css"
import { Link } from "react-router-dom"
import carousel_img1 from '../img/carousel_img1.png';
import carousel_img2 from '../img/carousel_img2.png';
import carousel_img3 from '../img/carousel_img3.png';
import carousel_img4 from '../img/carousel_img4.png';
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
    return(
    <section className="prelogin">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel_img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel_img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel_img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel_img4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        <div className="buttons_login">
            <Link className="bttn btn-secundary" to="/register"> {t("home.register")} </Link>
            <Link className="bttn btn-white" to="/login"> {t("home.login")} </Link>
        </div>
        <Link className="t-c"> {t("home.tandc")} </Link>
    </section>
    )
}