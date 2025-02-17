import "../assets/style.css";

function HomeHowReach(){
    return(
        <>
            <section id="home-howto-reach">
                <div className="srn-container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="main-heading-02">
                                <h2>Good To Know</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="mini-short-info">
                                <div className="short-info">
                                    <figure>
                                        <img src="/images/demo/message-img.webp" alt="Message"/>
                                    </figure>
                                    <figcaption>
                                        <h5>Language</h5>
                                        <p>Hindi, Engligh etc</p>
                                    </figcaption>
                                </div>
                                <div className="short-info">
                                    <figure>
                                        <img src="/images/demo/plane-heart.webp "alt="" />
                                    </figure>
                                    <figcaption>
                                        <h5>Nearby Airports</h5>
                                        <p>IGI</p>
                                    </figcaption>
                                </div>
                                <div className="short-info">
                                    <figure>
                                        <img src="/images/demo/wallet.webp" alt="" />
                                    </figure>
                                    <figcaption>
                                        <h5>Curency</h5>
                                        <p>Dollar, INR</p>
                                    </figcaption>
                                </div>
                            </div>
                        </div>

                       <div className="col-md-12 col-12">
                            <div class="accordion" id="accordionExample">

                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                           How To Reach Tajmahal
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div className="accordian-text row">
                                                <div className="col-md-2 p-0">
                                                    <figure>
                                                        <img src="/images/demo/acc-tajmahal.webp" alt=""/>
                                                    </figure>
                                                </div>
                                                <div className="col-md-9 p-0">
                                                    <figcaption>
                                                        <p>Rising on the banks of the river Yamuna, the city of Agra has been linked with the history of India, since ancient times. This beautiful city is a perfect example of India’s rich culture and heritage. It is mentioned in the epic tale Mahabharata as ‘Agrevana,' literally translated as ‘border of the forest.' Home to one of the Seven Wonders of the World, the Taj Mahal, Agra is a globetrotter’s haven. You can say that the Mughals have left a permanent impression on this city which is evident in the various mausoleums and forts found here. \r\n\r\nBe mesmerized by the sprawling and majestic Agra Fort. Its many </p>
                                                    </figcaption>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            People of Agra
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div className="accordian-text row">
                                                <div className="col-md-2 p-0">
                                                    <figure>
                                                        <img src="/images/demo/acc-tajmahal.webp" alt=""/>
                                                    </figure>
                                                </div>
                                                <div className="col-md-9 p-0">
                                                    <figcaption>
                                                        <p>Rising on the banks of the river Yamuna, the city of Agra has been linked with the history of India, since ancient times. This beautiful city is a perfect example of India’s rich culture and heritage. It is mentioned in the epic tale Mahabharata as ‘Agrevana,' literally translated as ‘border of the forest.' Home to one of the Seven Wonders of the World, the Taj Mahal, Agra is a globetrotter’s haven. You can say that the Mughals have left a permanent impression on this city which is evident in the various mausoleums and forts found here. \r\n\r\nBe mesmerized by the sprawling and majestic Agra Fort. Its many </p>
                                                    </figcaption>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Language of Agra
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div className="accordian-text row">
                                                <div className="col-md-2 p-0">
                                                    <figure>
                                                        <img src="/images/demo/acc-tajmahal.webp" alt=""/>
                                                    </figure>
                                                </div>
                                                <div className="col-md-9 p-0">
                                                    <figcaption>
                                                        <p>Rising on the banks of the river Yamuna, the city of Agra has been linked with the history of India, since ancient times. This beautiful city is a perfect example of India’s rich culture and heritage. It is mentioned in the epic tale Mahabharata as ‘Agrevana,' literally translated as ‘border of the forest.' Home to one of the Seven Wonders of the World, the Taj Mahal, Agra is a globetrotter’s haven. You can say that the Mughals have left a permanent impression on this city which is evident in the various mausoleums and forts found here. \r\n\r\nBe mesmerized by the sprawling and majestic Agra Fort. Its many </p>
                                                    </figcaption>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="btm-line">
                    <span className="btm-dot"></span>
                </div>
            </section>
        </>
    )
}
    
export default HomeHowReach