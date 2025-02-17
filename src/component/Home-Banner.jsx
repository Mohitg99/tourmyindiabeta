import '../assets/style.css'

function HomeBanner() {

  const backImage ={
    backgroundImage: 'url(/public/images/jungleresorts-banner.webp)',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

    return (
      <>
        <section id='home-banner' style={backImage}>
            <div class="srn-container">
                <div class="row">
                    <div class="banner-cont">
                        <div class="bnr-heading">Tour My India</div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default HomeBanner