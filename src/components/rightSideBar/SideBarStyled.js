import styled from 'styled-components';

const Container = styled.div`
  
  
  .title {
    font-weight: bold;
    font-size: 14px;
    line-height: 1.214;
    letter-spacing: 0.04em;
    color: #212121;
    margin-bottom: 32px;
  }

  .listItemText {
    font-weight: normal;
    font-size: 14px;
    line-height: 2.142;
    letter-spacing: 0.04em;
    color: #9b9faa;

    display: flex;
    justify-content: space-between;
  }

  .blockRight {
    margin-top: 20px;
  }

  @media (min-width: 320px) {
  
    background-color: #F0F1F3;
    .rightSideBar {
      width: 290px;
      margin: 0 auto;

      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: baseline;
    }

    .blockLeft {
      width: 290px;
      margin-bottom: 40px;
    }
    .blockRight {
      width: 290px;
      margin-top: 40px;
    }
  }

  @media (min-width: 768px) {
  
    background-color: inherit;
    padding: 70px 0;
    height: 100%;
    .rightSideBar {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding-bottom: 0;
      flex-direction: row;
      width: 594px;
    }

    .blockLeft {
      width: 252px;
      margin-right: 60px;
    }

    .blockRight {
      width: 252px;
      margin-top: 0;
    }
  }

  @media (min-width: 1280px) {
  
    width: 635px;
    padding-top: 10px;
    background-color: inherit;
    .rightSideBar {
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: column;
    }
    .blockLeft {
      width: 300px;
    }
    .blockRight {
      width: 300px;
      margin-top: 60px;
    }
  }

  .scrollbar {
    overflow-y: scroll;
    scroll-behavior: smooth;
    visibility: visible;
    
  }
  
  .scrollbarText {
    max-height: 150px;
    z-index: 1;
    position: relative;
    overscroll-behavior: contain;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 2px;
  }
`;

export default Container;
