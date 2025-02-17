import "../assets/style.css";

function HomeDetails(){
    return(
        <>
            <section id="home-details">
                <div className="srn-container">
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <div className="home-dtls-left">
                                <div className="border-btm">
                                    <p>Rising on the banks of the river Yamuna, the city of Agra has been linked with the history of India, since ancient times. This beautiful city is a perfect example of India’s rich culture and heritage. It is mentioned in the epic tale Mahabharata as 'Agrevana,' literally translated as 'border of the forest.' Home to one of the Seven Wonders of the World, the Taj Mahal, Agra is a globetrotter's haven. You can say that the Mughals have left a permanent impression on this city which is evident in the various mausoleums and forts found here. \r\n\r\nBe mesmerized by the sprawling and majestic Agra Fort. Its many palaces, mosques, and mausoleums are a proud testimonial of Mughal architecture. The legends of the Mughal Emperor Akbar and his fabled courtiers are still kept alive at the ruins of Fatehpur Sikri, which is located on the outskirts of Agra. The chowks (marketplaces) and alleyways found in the city are usually the hub of many activities. Years ago, all the artisans and craftsmen who toiled to make the Taj Mahal a reality set up their houses nearby, creating the network of alleyways known as Taj Ganj</p>
                                    <div class="collapse" id="collapseExample">
                                        <div class="card card-body">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi sunt, fugit aspernatur quidem labore officiis dignissimos totam! Pariatur tempore a fugit quod temporibus repellendus cumque vero sit aliquam ut culpa ad asperiores omnis, quia, cum commodi officia consequatur doloribus. Recusandae iste vitae praesentium suscipit? Quod corporis odio atque excepturi in?</p>
                                        </div>
                                    </div>

                                    <a class="toggle-active read-more" href="#collapseExample">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                </div>

                                <h3>Architecture and design</h3>
                                <p>The Taj Mahal incorporates and expands on design traditions of Indo-Islamic and earlier Mughal architecture. Specific inspiration came from successful Timurid and Mughal buildings including the Gur-e Amir (the tomb of Timur, progenitor of the Mughal dynasty, in Samarkand),[14] Humayun's Tomb which inspired the Charbagh gardens and hasht-behesht (architecture) plan of the site, Itmad-Ud-Daulah's Tomb (sometimes called the Baby Taj), and Shah Jahan's own Jama Masjid in Delhi. While earlier Mughal buildings were primarily constructed of red sandstone, Shah Jahan promoted the use of white marble inlaid with semi-precious stones. Buildings under his patronage reached new levels of refinement.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="home-dtls-rgt">
                                <figure>
                                    <img src="/images/demo/tajmahal.png" alt="Taj Mahal" />
                                </figure>

                                <div className="fig-cap-box">
                                    <h4>Best time to visit </h4>
                                    <p>The grounds are open from 06:00 to 19:00 weekdays, except for Friday when the complex is open for prayers at the mosque between 12:00 and 14:00. The complex is open for night viewing </p>
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
    
export default HomeDetails