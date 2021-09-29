import React, { Component } from 'react';
import picture from './picture.jpg';
import portfolio1 from './portfolio1.jpg';
import portfolio2 from './portfolio2.jpg';
import portfolio3 from './portfolio3.jpg';
import portfolio4 from './portfolio4.jpg';
import portfolio5 from './portfolio5.jpg';

function App() {
  return (
  <div className="body">
    <div className="back" style={{ backgroundImage:`url(${picture})`}}>
      <div className="simp">Simple and Elegant</div>
       <button className="button"><div className="let">Lavish</div></button>
        <div className="dunt">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt<br/> ut laoreet. Dolore magna aliquam erat volutpat.</div>  
         <button className="btn"><div className="get">Get started</div></button>
    </div>
   
     {/* section B */}
      
      <div className="body1">
      <div className="what">WHAT I DO</div>
    <div className="big-cover">
          {/* section B1 */}
      <div className="cover">
         <div className="laptop"><i className='fa fa-laptop' style={{fontSize: '30px'}}></i></div>
        <div className="rep">
         <div className="res">Responsive Mobile</div>
         <div className='res-a'>Lavish CSS Template is designed by<br/>templatemo. Download, edit and<br/>use this layout.</div>
        </div>
      </div>

      <div className="cover">
            <div className="laptop"><i className="fa fa-link" style={{fontSize: '30px'}}></i></div>
          <div className="rep">
            <div className="res">CSS Template</div>
            <div className='res-a'>We provide a wide range of HTML5<br/>templates for free. Please spread a<br/>word about us on social media.</div>
          </div>
        </div>
              {/* section B3 */}
        <div className="cover">
            <div className="laptop"><i className="fa fa-paper-plane" style={{fontSize: '30px'}}></i></div>
          <div className="rep">
            <div className="res">UI & UX Design</div>
            <div className='res-a'>Credits go to <a>Prixaby</a> and <a>Unsplash,</a><br/>for images used in this free CSS<br/>website template.</div>
          </div>
        </div>
      </div>
    </div>


   {/* section C */}
   <div id="about" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-xs-11 wow fadeInLeft" data-wow-delay="0.9s">
					  <div class="desig">
             <h2>ABOUT LAVISH</h2>
						 <h4>DESIGNER & DEVELOPER</h4>
						 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
						 <p>Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
					  </div>
          </div>
					<div class="col-md-6 col-xs-11 wow fadeInRight" data-wow-delay="0.9s">
						<span class="text-top">Web Design <small>95%</small></span>
							<div class="progress">
								<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
							</div>
						<span>Mobile Apps <small>80%</small></span>
							<div class="progress">
								<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
							</div>
						<span>SEO Stuffs <small>70%</small></span>
							<div class="progress">
								<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}></div>
							</div>
						<span>HTLM5 & CSS3 <small>90%</small></span>
							<div class="progress">
								<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
							</div>
					</div>
				</div>
			</div>
		</div>

   {/* section D */}

   <div id="portfolio" className="section">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2 className="wow bounce">PORTFOLIO</h2>
				</div>
				<div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
					<div className="portfolio-thumb">
						<img src={portfolio1} className="img-responsive" alt="portfolio img"/>
							<div className="portfolio-overlay">
								<h4>Web Design</h4>
								<h5>Author: Cindy</h5>
							</div>
					</div>
				</div>
				<div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
					<div className="portfolio-thumb">
						<img src={portfolio2} className="img-responsive" alt="portfolio img"/>
							<div className="portfolio-overlay">
								<h4>Web App</h4>
								<h5>Author: Linda</h5>
							</div>
					</div>
				</div>
				<div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
					<div className="portfolio-thumb">
						<img src={portfolio3} className="img-responsive" alt="portfolio img"/>
							<div className="portfolio-overlay">
								<h4>Mobile App</h4>
								<h5>Author: Kate</h5>
							</div>
					</div>
				</div>
				<div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
					<div className="portfolio-thumb">
						<img src={portfolio4} className="img-responsive" alt="portfolio img"/>
							<div className="portfolio-overlay">
								<h4>Old Artwork</h4>
								<h5>Author: Catherine</h5>
							</div>
					</div>
				</div>
				 <div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
					<div className="portfolio-thumb">
						<img src={portfolio5} className="img-responsive" alt="portfolio img"/>
							<div className="portfolio-overlay">
								<h4>New Animation</h4>
								<h5>Author: Kathy</h5>
							</div>
					</div>
				</div> 
			</div>
		</div>
	</div>

   
{/* section E */}

<div id="contact" class="section">
			<div class="container">
				<div class="row">
					<div class="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
						<address>
							<p class="contact-title">CONTACT ME</p>
							<p><i class="fa fa-phone"></i> 090-080-0760</p>
							<p><i class="fa fa-envelope-o"></i> info@company.com</p>
							<p><i class="fa fa-map-marker"></i> 120 Old Walking Street, GL 16060</p>
						</address>
					</div>
					<div class="col-lg-6  col-md-6 col-xs-10 wow fadeInUp" data-wow-delay="0.6s">
						<form role="form" method="post" action="#">
							<input name="name" type="text" class="form-control" id="name" placeholder="Your Name"/>
							<input name="email" type="email" class="form-control" id="email" placeholder="Your Email"/>
							<textarea name="message" rows="5" class="form-control" id="message" placeholder="Your Message"></textarea>
							<input name="send" type="submit" class="form-control" id="send" value="SEND ME"/>
						</form>
					</div>
					<div class="col-md-1 col-sm-1"></div>
				</div>
			</div>
		</div>

   {/* section F */}
   <footer>
			<div class="container">
				<div class="row">
					<div class="col-md-12 wow fadeIn" data-wow-delay="0.9s">
						<p>Copyright &copy; 2018 Lavish Personal Profile 
                        
                        . Designed by <a rel="nofollow noopener" href="https://templatemo.com">templatemo</a></p>
						
						<div className="bottom">
             <p><i className="fa fa-facebook"></i></p>
             <p><i className="fa fa-twitter"></i></p>
             <p><i className="fa fa-instagram"></i></p>
            </div>
					</div>
				</div>
			</div>
		</footer>



    </div>
  );
}

export default App;
