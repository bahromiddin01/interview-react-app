import React from 'react'
import OurClientsLogos from './OurClientsLogos'
import logoPaypal from '../../../assets/images/logoPaypal.svg'
import logoAirbnb from '../../../assets/images/logoAirbnb.svg'
import logoAmazon from '../../../assets/images/logoAmazonColored.svg'
import logoShopify from '../../../assets/images/logoShopify.svg'
import logoStripe from '../../../assets/images/logoStripe.svg'
import logoGoogle from '../../../assets/images/logoGoogleColored.svg'
import logoCoinbase from '../../../assets/images/logoCoinbase.svg'
import logoUber from '../../../assets/images/logoUber.svg'
import logoDiscord from '../../../assets/images/logoDiscord.svg'
import logoWhatsapp from '../../../assets/images/logoWhatsApp.svg'
import logoYoutube from '../../../assets/images/logoYouTube.svg'
import logoNetflix from '../../../assets/images/logoNetflix.svg'
import logoDropbox from '../../../assets/images/logoDropbox.svg'


export default function OurClientsSection() {

    const logosData = [
        { src: logoPaypal },
        { src: logoAirbnb },
        { src: logoAmazon },
        { src: logoShopify },
        { src: logoStripe },
        { src: logoGoogle },
        { src: logoCoinbase },
        { src: logoUber },
        { src: logoDiscord },
        { src: logoWhatsapp },
        { src: logoYoutube },
        { src: logoNetflix },
        { src: logoDropbox },
    ]
    return (
        <div className='mx-auto 4xl:container'>
            <div className='flex flex-col items-center gap-8 md:gap-16 my-20 px-4 sm:px-12'>
                <h2 className='max-w-3xl text-center'>Our clients Have landed jobs from top companies in the world</h2>
                <div className='flex flex-wrap justify-center gap-6 md:gap-12 max-w-5xl'>
                    {logosData.map((img, index) => <OurClientsLogos imgSrc={img.src} key={index} />)}
                </div>
            </div>
        </div>
    )
}
