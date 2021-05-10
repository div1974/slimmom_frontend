import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import validation from '../Validation/Validation';

export default function AuthPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  function restetForm() {
    setEmail('');
    setPassword('');
  }

  const isValidData = () => {
    try {
      const a = validation.validate({ name, email, password });
      if (a?.error) {
        toast.error(a.error.message);

        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmitLog = e => {
    e.preventDefault();

    if (!isValidData()) {
      restetForm();
      return;
    }
    dispatch(authOperations.logIn({ name, email, password }));
  };

  const handleSubmitReg = async e => {
    e.preventDefault();

    if (!isValidData()) {
      restetForm();
      return;
    }

    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <section className="section__auth">
      <h2>регистрация</h2>
          <form className="form" onSubmit={handleSubmitLog}>
            <input
                name="name"
                type="name"
                placeholder="Имя *"
                value={name}
                onChange={e => setName(e.target.value)}
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
                onClick={e => handleSubmitLog(e)}
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
  );
}
