import React from 'react';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrainingSection from '../components/Training'

const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading="Lessons" text="PADI Open Water Certification" />
            <TrainingSection />
            <Footer />
        </div>
    )

}

export default Training