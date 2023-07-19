import React from 'react';
// import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle';
import './FrontPage.css';

const Frontpage = () => {
  return (
    <div className="frontpage">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.indusface.com/wp-content/uploads/2019/08/3-Ways-to-Prevent-Application-Zero-Day-Attacks.png" class="d-block w-100" alt="images" />
          </div>
          <div class="carousel-item">
            <img src="https://www.indusface.com/wp-content/uploads/2019/08/1-3.png" class="d-block w-100" alt="images" />
          </div>
          <div class="carousel-item">
            <img src="https://static.hindawi.com/articles/scn/volume-2021/6610675/figures/6610675.fig.003.jpg" class="d-block w-100" alt="images" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="false"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="false"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Frontpage;
