import styled from 'styled-components';

const User = styled.div`
  display: flex;
  justify-content: space-between;
  background: inherit;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 320px;
    background: #eff1f3;
    margin: 0px auto;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 202px;
    /* margin-left: 174px;
    margin-top: 34px; */
  }
  @media screen and (min-width: 1280px) {
    width: 215px;
    transform: translate(400px, 21px);
    /* margin-right: 50px; */
    /* margin-top: 134px; */
  } ;
`;

const Nic = styled.h3`
  width: max-content;
  height: 12px;
  font-family: Gotham Pro;
  font-size: 14px;
  line-height: 13px;
  text-align: right;
  letter-spacing: 0.04em;
  color: #212121;
  background: inherit;
  margin-top: 10px;
  @media screen and (min-width: 290px) and (max-width: 767px) {
    margin-left: 103px;
    margin-right: 15px;
    margin-top: 13px;
  }
`;

const Logout = styled.button`
  width: 50px;
  height: 12px;
  font-family: Gotham Pro;
  font-weight: bold;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  border: none;
  color: #9b9faa;
  background: inherit;
  margin-top: 10px;
  opacity: 1;
  transition-property: opacity;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus,
  :active {
    cursor: pointer;
    color: #fc842d;
    outline: none;
    opacity: 0.8;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 13px;
  }
`;

const Vector = styled.img`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;

export default { User, Nic, Logout, Vector };
