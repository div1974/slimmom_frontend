import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import notificationStyles from '../notification/NotAnim.module.css';
import { useWindowSize } from '../../helpers/helpers';
import DiaryProductItem from './diaryProductItem/DiaryProductItem';
import healthOperations from '../../redux/health/healthOperations';
import healthSelectors from '../../redux/health/healthSelectors';
import notifSelector from '../../redux/notif/notificSelectors';
import errorSelector from '../../redux/error/errorSelector';
import Notification from '../notification/Notification';
import '../../styles/components/diaryProductList.scss';

const DiaryProductList = () => {
  const [listHeight, setlistHeight] = useState('');

  const dispatch = useDispatch();
  const eatenProdArray = useSelector(healthSelectors.getEatenProducts);
  const isNotificShown = useSelector(notifSelector.getNotificState);
  const errorMessage = useSelector(errorSelector.getError);
  const prodList = document.querySelector('.prodList');

  const size = useWindowSize();

  useEffect(() => {
    prodList && setlistHeight(prodList.scrollHeight);
  }, [prodList]);

  useEffect(() => {
    prodList && setlistHeight(prodList.scrollHeight);
  }, []);

  const handleDelete = e => {
    const prodID = e.target.dataset.id;
    dispatch(healthOperations.deleteDiaryItem(prodID));
  };

  return (
    <div>
      {eatenProdArray ? (
        <div className="productList">
          {isNotificShown && errorMessage && (
            <CSSTransition
              in={true}
              timeout={250}
              classNames={notificationStyles}
              appear
            >
              <Notification
                text={`Что-то пошло не так. Ошибка: ${errorMessage}`}
                alert={true}
              />
            </CSSTransition>
          )}
          {isNotificShown && !errorMessage && (
            <CSSTransition
              in={true}
              timeout={250}
              classNames={notificationStyles}
              appear
            >
              <Notification text="Продукт был успешно удален" alert={true} />
            </CSSTransition>
          )}

          <ul id="element" className="ul__element" length={eatenProdArray.length} className="prodList">
            {eatenProdArray.length > 0 ? (
              eatenProdArray.map(item => (
                <DiaryProductItem
                  onClick={handleDelete}
                  {...item}
                  key={item.id}
                  screenWidth={size.width}
                />
              ))
            ) : (
              <h2 style={{ textAlign: 'center' }}>Ваш список продуктов пуст</h2>
            )}
          </ul>
          {eatenProdArray.length > 4 && (
            <div className="mask" screenWidth={size.width}></div>
          )}
        </div>
      ) : (
        <p>Пожалуйста, получите информацию по текущему дню</p>
      )}
    </div>
  );
};

export default DiaryProductList;
