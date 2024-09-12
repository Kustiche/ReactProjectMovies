import sprite from "../sprite.svg";

export default function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="header__wrap">
          <a className="header__logo" href="#/">
            <svg className="header__logo-icon">
              <use href={sprite + "#logo"}></use>
            </svg>
          </a>
          <a className="header__link link-reset" href="#/">
            Login
          </a>
        </div>
      </div>
    </section>
  );
}
