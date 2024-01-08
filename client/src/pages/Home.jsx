import React from 'react';
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className='px-4 py-12 max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>
          Welcome to Raju Yadav Auth App!
        </h1>
      </div>
      <section>
        <div className="home" id="home">
          <div className="home-content">
            <h1>
              Hi, I am <span>RaazVeer</span>
              <span className="helloWorld">
                <img
                  src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                  alt="hello emoji"
                />
              </span>
            </h1>
            <div className="text-animation">
              <h3 data-aos="fade-right" data-aos-duration="1000">
                a Full-Stack Developer
              </h3>
            </div>
            <p data-aos="zoom-in" data-aos-duration="2000">
              A passionate MERN-Stack developer 🚀.<br /> Mastering the art of
              JavaScript to create stunning web interactions & building dynamic
              UIs with React ⚛️ Exploring the backend realm with Node.js
              🌐.<br /><br />Turning ideas into captivating digital experiences!
            </p>

          </div>

          <footer>
            <a href="https://www.facebook.com/loveraju.yadav/" id="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/raazveer30/" id="instagram">
              <i className=" bx bxl-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/raju-yadav-148525283/"
              id="linkedin"
            >
              <i className=" bx bxl-linkedin"></i>
            </a>
            <a href="#" id="email">
              <i className="bx bxl-twitter"></i>
            </a>
          </footer>
        </div>
      </section>
    </>
  );
}
