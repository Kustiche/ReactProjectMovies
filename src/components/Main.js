import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Modal from "./Modal";

function Main() {
  const [registrationStatus, setRegistrationStatus] = useState(false);

  function closeModal() {
    window.registrationModal.close();
  }

  function registration(e) {
    const isModal = e.target.className === "modal";
    const isClose = e.target.className === "modal__close-btn btn-reset";

    if (isModal || isClose) {
      closeModal();
    } else {
      const form = e.target.closest(".form");
      const login = form.querySelector(".form__login");
      const email = form.querySelector(".form__email");
      const password = form.querySelector(".form__password");
      const button = form.querySelector(".form__button");
      const isLogin = login.value !== "";
      const isEmail = email === null ? email !== null : email.value !== "";
      const isPassword = password.value !== "";
      const isButton = e.target === button;

      if (registrationStatus === false && isEmail && isLogin && isPassword && isButton) {
        e.preventDefault();
        alert("Thanks for registering");

        setRegistrationStatus(true);
        window.registrationModal.close();
      } else if (isButton) {
        e.preventDefault();
        alert("You are logged in");

        window.registrationModal.close();
      }
    }
  }
  return (
    <>
      <Header />
      <Hero />
      <dialog className="modal" id="registrationModal" onClick={registration}>
        <button className="modal__close-btn btn-reset" type="button"></button>
        {<Modal registrationStatus={registrationStatus} />}
      </dialog>
    </>
  );
}

export default Main;
