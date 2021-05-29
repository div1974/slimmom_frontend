import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import authOperations from '../../redux/auth/authOperations';
import validation from '../Validation/ValidationLog';
import '../../styles/components/authPage.scss';

export default function LogInPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  function restetForm() {
    setEmail('');
    setPassword('');
  }

  const isValidData = () => {
    try {
      const a = validation.validate({ email, password });
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
    dispatch(authOperations.logIn({ email, password }));
  };


  return (
      <div className="auth_container">
      <div className="auth"></div>
      <section className="section__auth_login">
          <h2>вход</h2>
            <form className="form">
             
                <input
                  name="email"
                  type="email"
                  placeholder="Email *"
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
                  onClick={()=> history.push("/register")}
                >
                  Регистрация
                </button>
              </div>
            </form>
        <ToastContainer
          className="ToastContainer"
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