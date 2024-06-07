import React from 'react';
import '../style/style.css'
import prof from '../img/2.jpg'
import fruits from '../img/f.png'
import vege from '../img/vegetables.png'
import dr from '../img/drinks.png'
import p1 from '../img/fp.png'
import p2 from '../img/p2.png'
import p3 from '../img/po.png'
import ab1 from '../img/2.jpg'
import s1 from '../img/sher.png'
import t1 from '../img/tr.jpg'
import a1 from '../img/ana.jpg'
import r1 from '../img/testi1.jpg'
import { Link } from 'react-router-dom';






function Home(){
        

      return (

        <div>


              <header>
                  <a href="#" className="logo"><i className="fas fa-shopping-cart"></i>Delicacy</a>


                  <nav className="navbar">
                      <li><Link to="/Home" className="home-active">Home</Link></li>
                      <li><a href="#categories">Categories</a></li>
                      <li><a href="#products">Menu</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#customers">Customers</a></li>
                  </nav>

                  <div className="icons">
                      <i className="fas fa-bars" id="menu-bars"></i>


                  </div>

                  <div className="profile">
                      <img src={prof} alt=" " />
                      <span>SheTrish</span>
                      <i className='bx bx-caret-down'></i>
                  </div>


              </header>

              <section>

              <div className="swiper-wrapper">
                  <div className="swiper-slide container" />

                  <div className="home-text">
                      <span>We are delicacy</span>
                      <h1> Choose delicacy <br /> the best healthy <br /> chicken salad </h1>
                    </div>
                      <a href="menu.html" className="btn">Shop Now<i className='bx bx-right-arrow-alt'></i></a>
                  </div>

              </section>

          <section className="categories" id="categories">
                  <div className="heading">
                      <h1>Browse our Hottest <br /><span />Categories</h1>
                      <a href="#" className="btn">See All<i className='bx bx-right-arrow-alt'></i></a>
                  </div>


                  <div className="categories-container">
                      <div className="box box1">
                          <img src={fruits} alt="" />
                          <h2>Fruits</h2>
                          <span>22 Items</span>
                          <i className='bx bx-right-arrow-alt'></i>
                      </div>
                  </div>
                  <div className="box box2">
                      <img src={vege} alt="" />
                      <h2>Vegetables</h2>
                      <span>22 Items</span>
                      <i className='bx bx-right-arrow-alt'></i>
                  </div>
                  <div className="box box3">
                      <img src={dr} alt="" />
                      <h2>Drinks</h2>
                      <span>22 Items</span>
                      <i className='bx bx-right-arrow-alt'></i>
                  </div>
              </section>
              <section className="products" id="products">
                  <div className="heading">
                      <h1>Popular Products <br />
                          <span />Products</h1>
                      <a href="menu.html" className="btn">Shop Now<i className='bx bx-right-arrow-alt'></i></a>
                  </div>
                  <div className="products-container">
                      <div className="box">
                          <img src={p1} alt="" />
                          <span>Fresh Items</span>
                          <h2>Farm Fresh Organic <br />Fruits 20g</h2>
                          <h3 className="price">200 <span> /kg</span></h3>
                          <i className='bx bx-cart-alt'></i>
                          <i className='bx bx-heart'></i>
                          <span className="discount">-10%</span>
                      </div>

                      <div className="box">
                          <img src={p2} alt="" />
                          <span>Fresh Items</span>
                          <h2>Farm Fresh Organic <br />Vegetables 20g</h2>
                          <h3 className="price">100 <span> /kg</span></h3>
                          <i className='bx bx-cart-alt'></i>
                          <i className='bx bx-heart'></i>
                          <span className="discount">-10%</span>
                      </div>
                      <div className="box">
                          <img src={p3} alt="" />
                          <span>Fresh Items</span>
                          <h2>Farm Fresh Organic <br />Drinks 20g</h2>
                          <h3 className="price">150<span> /kg</span></h3>
                          <i className='bx bx-cart-alt'></i>
                          <i className='bx bx-heart'></i>
                          <span className="discount">-10%</span>
                      </div>
                  </div>
              </section>
              <section className="about" id="about">
                  <img src={ab1} alt="" />
                  <div className="about.text">
                      <span>About Us</span>
                      <p> Sherish products are all organic and aims to pursue people to continue on living healthy lifestyle.</p>
                      <p>Through this site we are able to reach thousand of people that we could inspire on living such a healthy lifestyle.</p>
                      <a href= "About.jsx" className="btn">Learn More<i className='bx bx-right-arrow-alt'></i></a>
                  </div>
              </section>
              <section className="customers" id="customers">
                  <h2>Why Customer's love us?</h2>
                  <div className="customers-container">
                      <div className="box">
                          <i className='bx bxs-quote-alt-left'></i>
                          <div className="stars">
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star-half'></i>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                          <div className="review-profile">
                              <img src={s1} alt="" />
                              <h3>Sherly Atillo</h3>
                          </div>
                      </div>
                      <div className="box">
                          <i className='bx bxs-quote-alt-left'></i>
                          <div className="stars">
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star-half'></i>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                          <div className="review-profile">
                              <img src={t1} alt="" />
                              <h3>Trisha Boneo</h3>
                          </div>
                      </div>
                      <div className="box">
                          <i className='bx bxs-quote-alt-left'></i>
                          <div className="stars">
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star-half'></i>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                          <div className="review-profile">
                              <img src={a1} alt="" />
                              <h3>Ana Marie</h3>
                          </div>
                      </div>
                      <div className="box">
                          <i className='bx bxs-quote-alt-left'></i>
                          <div className="stars">
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star'></i>
                              <i className='bx bxs-star-half'></i>
                          </div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cupiditate laudantium omnis, perspiciatis sint totam ipsam neque at dicta quae voluptatem sapiente maiores consequatur iste adipisci officiis error autem reprehenderit.</p>
                          <div className="review-profile">
                              <img src={r1} alt="" />
                              <h3>Henry</h3>
                          </div>
                      </div>
                  </div>
              </section><section className="footer" id="footer">
                  <div className="footer-box">
                      <a href="#" className="btn">logo<i className='bx bxs-basket'></i></a>
                      <p>Cagayan, Barangay 25 <br />Bldg 2</p>
                      <div className="social">
                          <a href="https://www.facebook.com/"><i className='bx bxl-facebook'></i></a>
                          <a href="#"><i className='bx bxl-twitter'></i></a>
                          <a href="#"><i className='bx bxl-instagram'></i></a>
                          <a href="https://www.youtube.com/watch?v=r23vdX4R4GU"><i className='bx bxl-youtube'></i></a>
                      </div>
                  </div>
                  <div className="footer-box">
                      <h2>Categories</h2>
                      <a href="#">Fruits & Vegetables</a>
                      <a href="#">Dairy Products</a>
                      <a href="#">Package Food</a>
                      <a href="#">Beverages</a>
                  </div>
                  <div className="footer-box">
                      <h2>Useful Links</h2>
                      <a href="#">Payment & Tax</a>
                      <a href="#">Terms Of Use</a>
                      <a href="#">My Blog</a>
                      <a href="#">Return Policy</a>
                  </div>
                  <div className="footer-box">
                      <h2>News Letter</h2>
                      <p>Get 10% Discount with <br/>Email NewsLetter</p>
                      <form action="">
                          <i className='bx bxs-envelope-open'></i>
                          <input type="email" name="" id="" placeholder="Enter your Email" />
                          <i className='bx bx-arrow-back bx-rotate-180'></i>
                      </form>
                  </div>
              </section>
              <div className="copyright">
                  <p>&#169; SheTrish All Right Reserve</p>
              </div>


        </div>
    )
}
    
 
export default Home;

