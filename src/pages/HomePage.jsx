import React from 'react'
import NavbarSection from '../sections/homePageSections/navbarSection/NavbarSection'
import HeaderSection from '../sections/homePageSections/headerSection/HeaderSection'
import HowItWorksSection from '../sections/homePageSections/howItWorksSection/HowItWorksSection'
import UnlockHIgherSalarieSection from '../sections/homePageSections/unlockHigherSalarieSection/UnlockHIgherSalarieSection'
import WhyChooseUsSection from '../sections/homePageSections/whyChooseUsSection/WhyChooseUsSection'
import TestimonialsSection from '../sections/homePageSections/testimonialsSection/TestimonialsSection'
import SimplePlansSection from '../sections/homePageSections/simplePlansSection/SimplePlansSection'
import OurClientsSection from '../sections/homePageSections/ourClientsSection/OurClientsSection'
import FaqSection from '../sections/homePageSections/faqSection/FaqSection'
import ReadyToAceSection from '../sections/homePageSections/readyToAceSection/ReadyToAceSection'
import FooterSection from '../sections/homePageSections/footerSection/FooterSection'

export default function HomePage() {
    return (
        <div>
            <NavbarSection />
            <HeaderSection />
            <HowItWorksSection />
            <UnlockHIgherSalarieSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <SimplePlansSection />
            <OurClientsSection />
            <FaqSection />
            <ReadyToAceSection />
            <FooterSection />
        </div>
    )
}
