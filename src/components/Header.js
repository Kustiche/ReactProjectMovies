import sprite from "../sprite.svg";

export default function Header({ onClick }) {
  return (
    <section className="header">
      <div className="container">
        <div className="header__wrap">
          <a className="header__logo" href="#/">
            <svg className="header__logo-icon">
              <use href={sprite + "#logo"}></use>
            </svg>
          </a>
          <button className="header__button btn-reset" onClick={() => window.registrationModal.showModal()}>
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
