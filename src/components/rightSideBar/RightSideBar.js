import React, { useEffect } from 'react';
import SideBarStyled from './SideBarStyled';
import { useDispatch, useSelector } from 'react-redux';
import healthSelectors from '../../redux/selectors/healthSelectors';

import dayjs from 'dayjs';
import authSelectors from '../../redux/selectors/authSelectors';
import healthOperations from '../../redux/operations/healthOperations';



const RightSideBar = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(healthSelectors.getDate);
  const daySummary = useSelector(healthSelectors.getDaySummary);
  const notAllowedProducts = useSelector(healthSelectors.getNotAllowedProducts);
  const authDailyRate = useSelector(authSelectors.getAuthDailyRate);
  const healthDailyRate = useSelector(healthSelectors.getDailyRate);
  const eatenProducts = useSelector(healthSelectors.getEatenProducts);
  useEffect(() => {
    (authDailyRate || healthDailyRate) &&
      dispatch(healthOperations.getDayInfoOperation({ date: currentDate }));
  }, [eatenProducts?.length]);
  

  return (
    <>
  
      <SideBarStyled>
        <div className="rightSideBar">
          <div className="blockLeft">
            <h2 className="title">
              Сводка за{' '}
              {daySummary?.date
                ? daySummary.date.split('-').reverse().join('.')
                : dayjs().format('DD.MM.YYYY')}{' '}
            </h2>

              <ul className="list">
                <li className="listItem">
                  <p className="listItemText">
                    <span>Осталось</span>
                    <span className="listItemTextRight">
                      {daySummary && daySummary.kcalLeft
                        ? (daySummary.kcalConsumed > daySummary.dailyRate
                            ? 0
                            : Math.round(daySummary.kcalLeft)) + ' ккал'
                        : '000 ккал'}
                    </span>
                  </p>
                </li>
                <li className="listItem">
                  <p className="listItemText">
                    Употреблено
                    <span className="listItemTextRight">
                      {daySummary && daySummary.kcalConsumed
                        ? Math.round(daySummary.kcalConsumed) + ' ккал'
                        : '000 ккал'}
                    </span>
                  </p>
                </li>
                <li className="listItem">
                  <p className="listItemText">
                    Дневная норма
                    <span className="listItemTextRight">
                      {daySummary && healthDailyRate
                        ? Math.round(healthDailyRate) + ' ккал'
                        : authDailyRate
                        ? Math.round(authDailyRate) + ' ккал'
                        : '000 ккал'}
                    </span>
                  </p>
                </li>
                <li className="listItem">
                  <p className="listItemText">
                    n% от нормы
                    <span className="listItemTextRight">
                      {daySummary && daySummary.percentsOfDailyRate
                        ? Math.round(daySummary.percentsOfDailyRate) + ' %'
                        : '000 %'}
                    </span>
                  </p>
                </li>
              </ul>
            
          </div>
          <div className="blockRight">
            <h2 className="title">Нерекомендуемые продукты</h2>
            {notAllowedProducts ? (
              <ul className="list scrollbar scrollbarText">
                {notAllowedProducts ? (
                  notAllowedProducts.slice(0, 20).map((item, idx) => (
                    <li className="listItem" key={idx}>
                      <p className="listItemText ">{item}, </p>
                    </li>
                  ))
                ) : (
                  <li>
                    <p>Здесь будет отображаться Ваш рацион</p>
                  </li>
                )}
              </ul>
            ) : (
              <ul className="list">
                <li>
                  <p>Здесь будет отображаться Ваш рацион</p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </SideBarStyled>

 </>
  );
};

export default RightSideBar;
