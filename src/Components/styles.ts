import styled from "styled-components";

export const Container = styled.div`
  .st {
    width: 625px;
    margin: 4rem auto 3rem auto;
    text-align: center;
    font-size: 8rem;

    font-family: "Benguiat Bold.ttf";
    animation: popShadow 5s infinite;
    font-weight: 800;
    color: #1c0502;
    letter-spacing: -2px;
  }

  @keyframes popShadow {
    0% {
      text-shadow: 0 0 0 black;
    }
    50% {
      text-shadow: -0.05rem -0.05rem 1px #ed2b12, 0.05rem -0.05rem 1px #ed2b12,
        -0.05rem 0.05rem 1px #ed2b12, 0.05rem 0.05rem 1px #ed2b12,
        0 0 15px #630100, 0 0 20px #450100;
    }
    100% {
      text-shadow: 0 0 0 black;
    }
  }
  .toop .img {
    width: 100%;
    height: auto;
    justify-content: center;
    margin: auto;
    align-items: center;
  }

  .st {
    z-index: 2;
    position: absolute;
    top: 19rem;
    left: 22rem;
    margin: auto;
    justify-content: center;
    align-items: center;
    animation: popShadow 5s infinite;
    width: 750px;
    text-align: center;
    text-transform: uppercase;
    font-size: 8rem;
    font-family: "ITC Benguiat";
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
    text-shadow: -0.05rem -0.05rem 1px #ed2b12, 0.05rem -0.05rem 1px #ed2b12,
      -0.05rem 0.05rem 1px #ed2b12, 0.05rem 0.05rem 1px #ed2b12,
      0 0 15px #630100, 0 0 20px #450100;
    letter-spacing: -2px;
  }

  .st p {
    display: inline-block;
    margin: 0;
  }

  .st-bound {
    box-shadow: -0.05rem -0.05rem 8px #ed2b12, 0.05rem -0.05rem 2px #ed2b12,
      -0.05rem 0.05rem 19px #ed2b12, 0.05rem 0.05rem 20px #ed2b12;
    height: 9px;

    align-items: center;
    margin: auto;
    justify-items: center;
    text-align: center;
  }

  .st-bound-full {
    width: 60rem;
    z-index: 20;
    margin: auto;
    margin-bottom: -2.2rem;
    max-width: 753px;
    margin-left: 5px;
  }

  .st-bound-mini {
    margin-top: 0.5rem;
  }

  .st-bound-left {
    float: left;
    width: 99px;
    position: relative;
    left: 5px;
    background: rgba(0, 0, 0, 0.5);
  }

  .st-bound-right {
    float: right;
    width: 103px;
    left: 0.3rem;
    position: relative;
  }

  .st-bottom {
    clear: both;
    top: -3.75rem;
    position: relative;
    left: 0.6rem;
    letter-spacing: 2px;
  }

  .st-drop {
    line-height: 0;
    position: relative;
    top: 1.55rem;
    z-index: 1;
  }

  .st-stranger-s {
    font-size: 10.5rem;
    letter-spacing: -8px;
  }

  .st-stranger-t {
    letter-spacing: 0;
  }

  .st-stranger-n {
    letter-spacing: -5px;
  }

  .st-stranger-g {
    letter-spacing: 0;
  }

  .st-stranger-r-2 {
    font-size: 10.5rem;
    right: 0.2rem;
    z-index: 2;
  }

  .st-things-t {
    font-size: 104%;
    letter-spacing: 2px;
  }

  .st-things-n {
    letter-spacing: -5px;
  }

  .st-things-g {
    letter-spacing: -3px;
  }

  @keyframes popShadow {
    0% {
      text-shadow: 0 0 0 black;
    }
    50% {
      text-shadow: -0.05rem -0.05rem 1px #ed2b12, 0.05rem -0.05rem 1px #ed2b12,
        -0.05rem 0.05rem 1px #ed2b12, 0.05rem 0.05rem 1px #ed2b12,
        0 0 15px #630100, 0 0 20px #450100;
    }
    100% {
      text-shadow: 0 0 0 black;
    }
  }
`;
