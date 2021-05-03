import styled from 'styled-components';

const StyleHeader = styled.header`
  .menu {
    padding: 30px;
    width: 100%;
    margin: 0 auto;
    background-color: white;
    top: 0px;
  }

  .menu ul {
    list-style-type: none;
    padding-bottom: 15px;
  }

  .deroulant {
    float: left;
    width: 25%;
    text-align: center;
    position: relative;
    font-family: 'Syne Mono', monospace;
  }

  nav p {
    display: block;
    text-decoration: none;
    color: black;
    padding: 10px 0px;
  }

  nav p:hover {
    color: rgb(78, 78, 77);
  }

  .sous {
    display: none;
    box-shadow: 0px 1px 2px #ccc;
    background-color: white;
    width: 100%;
  }

  .deroulant:hover .sous {
    display: block;
    position: absolute;
  }

  .sous li {
    text-align: center;
  }

  .sous p {
    padding: 10px;
  }

  .sous p:hover {
    background-color: rgba(97, 96, 96, 0.1);
  }

  .entete p {
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    color: black;

    .logo {
      height: 200px;
      width: 150px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .titre {
      font-size: 90px;
      text-align: left;
      padding: 70px;
      padding-right: 150px;
      font-family: 'Syne Mono', monospace;
    }

    .titre:hover {
      transform: scale(1.5);
    }
  }
`;

export default StyleHeader;
