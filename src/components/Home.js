const Home = () =>{
    return(
        <section id="hero" class="hero d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 d-flex flex-column justify-content-center">
                        <h1 date-aos="fade-up">
                            D-Bank is the Best
                        </h1>
                        <br></br>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <div class="text-center text-lg-start">
                                <a 
                                    >
                                        <span>Enjoy Services</span>
                                        <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-lg-6 hero-img"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                        >
                            <img                             
                            src="https://www.kindpng.com/picc/m/153-1531129_bank-high-quality-png-transparent-background-bank-png.png"
                            class="img-fluid"                            
                            alt=""/>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Home;