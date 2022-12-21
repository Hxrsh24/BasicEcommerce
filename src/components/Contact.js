import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Contact extends Component {
  render() {
    return (
      <NavWrapper className="navbar  px-sm-5">
        <p className="p1">Əlaqə məlumatları</p>
        <ul className="ul">
          <li className="nav-item ml-5">
            {/*ml-5 yazıyı sağa sola sürüşdürür */}
            <a
              href="https://instagram.com/_gamidov_.m_?igshid=YmMyMTA2M2Y="
              to="/"
              className="nav-a"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" />
            </a>
          </li>

          <li className="nav-item ml-5">
            <a href="https://wa.me/qr/HZ2PH3DLGCJ6K1" to="/" className="nav-a">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" />
            </a>
          </li>

          <li className="nav-item ml-5">
            <a
              href="https://www.facebook.com/profile.php?id=100054890599415"
              to="/"
              className="nav-a"
            >
              <img src="https://www.facebook.com/images/fb_icon_325x325.png" />
            </a>
          </li>

          <li className="nav-item ml-5">
            <a href="https://t.me/+MGePv1VjDJk5YTFi" to="/" className="nav-a">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png" />
            </a>
          </li>

          <li className="nav-item ml-5">
            <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" />
          </li>
          <li className="nav-item ml-5">
            <a href='https://azerbaijanstateoilacade-my.sharepoint.com/:p:/g/personal/b068872020_asoiu_edu_az/EXkEYB4ji8pImFyDdm2YSBcBs57jzjzEzd1al5QODn3lcw'>Teqdimat</a>
          </li>
        </ul>
        <Link className="link"></Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: blue;
  height: 150px;
  .link {
    position: absolute;
    margin-top: 900px;
  }
  .nav-link {
    color: white !important;
    font-size: 2rem;
    text-transform: capitalize;
  }
  .p1 {
    position: absolute;
    margin-top: -90px;
    left: 50px;
    color: white;
    font-size: 30px;
  }
  .ul {
    position: absolute;
    margin-top: 50px;
    display: flex;
    list-style: none;
  }
  li {
    margin-right: 145px;
  }
  img {
    width: 60px;
    height: 60px;
  }
`;
