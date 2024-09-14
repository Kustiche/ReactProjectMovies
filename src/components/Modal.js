export default function Modal({ registrationStatus }) {
  if (registrationStatus) {
    return (
      <form className="form" method="POST">
        <input className="form__login input" name="login" type="text" placeholder="Login" required autoComplete="on" />
        <input
          className="form__password input"
          name="login"
          type="password"
          placeholder="Password"
          required
          autoComplete="on"
        />
        <button className="form__button btn-reset">Send</button>
      </form>
    );
  } else {
    return (
      <form className="form" method="POST">
        <input className="form__login input" name="login" type="text" placeholder="Login" required autoComplete="on" />
        <input className="form__email input" name="login" type="email" placeholder="Email" required autoComplete="on" />
        <input
          className="form__password input"
          name="login"
          type="password"
          placeholder="Password"
          required
          autoComplete="on"
        />
        <button className="form__button btn-reset">Send</button>
      </form>
    );
  }
}
