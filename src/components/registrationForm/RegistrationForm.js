import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validation from '../Validation/ValidationReg';
import { ToastContainer, toast } from 'react-toastify';
import authOperations from '../../redux/auth/authOperations';

import '../../styles/components/authPage.scss';

export default function AuthPage() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  function restetForm() {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  const isValidData = () => {
    try {
      const a = validation.validate({ username, email, password });
      if (a?.error) {
        toast.error(a.error.message);

        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };
  const history = useHistory();

  const handleSubmitReg = e => {
    e.preventDefault();

    if (!isValidData()) {
      restetForm();
      return;
    }

    dispatch(authOperations.registration({ username, email, password }));
  };

  return (
    <div className="auth_container">
    <div className="auth"></div>
    <section className="section__auth">
        <h2>регистрация</h2>
          <form className="form">
            <input
                name="name"
                type="name"
                placeholder="Имя *"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="name"
              />
              <input
                name="email"
                type="email"
                placeholder="E-mail *"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="email"
              />
              <input
                name="password"
                type="password"
                value={password}
                placeholder="Пароль *"
                onChange={e => setPassword(e.target.value)}
                className="pass"
              />
            <div className="btn">
              <button
                type="submit"
                className="btn__sign-in sign__hover"
                onClick={()=> history.push("/login")}
              >
                Вход
              </button>
              <button
                type="button"
                className="btn__sign-up sign__hover"
                onClick={e => handleSubmitReg(e)}
              >
                Регистрация
              </button>
            </div>
          </form>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
    </div>
  );
}