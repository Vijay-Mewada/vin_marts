import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <div>
         <Carousel infiniteLoop={true} autoPlay={true} autoFocus={true} showThumbs={false}>
                <div>
                    <img src="/images/BeautyCare_Banner.jpg" />
                    <p className="legend">Beauty Care</p>
                </div>
                <div>
                <img src="/images/Wellness_Banner.jpg" />
                    <p className="legend">Wellness</p>
                </div>
                <div>
                <img src="/images/HealthCare_Banner.jpg" />
                    <p className="legend">Health Care</p>
                </div>

                <div>
                <img src="/images/PersonalCare_Banner.jpg" />
                    <p className="legend">Personal Care</p>
                </div>

                <div>
                <img src="/images/Clasical_Banner.jpg" />
                    <p className="legend">Clasical</p>
                </div>
            </Carousel>
    </div>
  )
}

export default Slider