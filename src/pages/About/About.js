import React, { Component } from "react";
import "./About.css";

class Home extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="section-title">
            <h2>
              Why choose <span>Recipe</span>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="about">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-5 align-items-stretch video-box"
                style={{
                  backgroundImage: ` url("https://i.pinimg.com/originals/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg") `,
                }}
              >
                <a
                  href="https://www.youtube.com/user/NefisYemekTarifleri"
                  target="_blank"
                  className="venobox play-btn mb-4"
                  data-vbtype="video"
                  data-autoplay="true"
                ></a>
              </div>
              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                <div className="content">
                  <h3>
                    Lorem ipsum dolor sit amet{" "}
                    <strong>
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                  <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i class="material-icons">check</i> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i class="material-icons">check</i> Duis aute irure dolor
                      in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i class="material-icons">check</i> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate trideta storacalaperda
                      mastiro dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
