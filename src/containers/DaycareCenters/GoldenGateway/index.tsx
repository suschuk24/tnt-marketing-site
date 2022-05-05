import About from "./components/About";
import React from "react";
import logo from "../../../assets/centers/tnt-gg-logo.webp";
import './GoldenGateway.css'
import SubHeader from "./components/SubHeader";

const GoldenGateway: React.FC = () => {
    const goldenGatewayData = {
        name: 'Truks-N-Truks Golden Gateway',
        description: 'At Truks-N-Tykes @ Golden Gateway, our hands-on educational method helps children learn through play. We balance structured activities with free play, which helps kids thrive. Our center offers care for a wide range of children — from infants all the way to school-age — through all-day preschool and Pre-K, and Junior-K led by a thoughtful, educated staff. Junior-K is specifically designed to help kids develop skills for success in kindergarten, but it still prioritizes play as the ‘hard work’ of childhood. Students explore letter recognition, phonetics, fine motor activities and math/science each day. Our goal is for each student to enter kindergarten with confidence in both academic and social skills. Once in school, we offer a before/after school (summer) care program that will allow your school-aged child more gym, art, music and outdoor time along with field trips. Truks-N-Trykes @ Golden Gateway is invested in all ages and stages of your child’s development, providing them with resources and skills for success. With a wide range of offerings and a highly trained staff, Truks-N-Tykes @ Golden Gateway is designed to meet all your early childhood education needs.',
        tagLine: 'Child Care Programs for Ages –\n' +
            'Infants to 12 years old',
        address: '5700 E Tahoe Street',
        address1: 'Sioux Falls, SD 57110',
        phoneNumber: '(605) 271-3668',
        emailAddress: 'tntgoldengateway@gmail.com',
        hours: '6:30am-6:00pm M-F',
        phone: '605-271-3668'
    }
    const buttonData = [
        {
            name: 'Call',
            link: 'tel:+1' + goldenGatewayData.phone
        },
        {
            name: 'Email',
            link: 'mailto:' + goldenGatewayData.emailAddress
        },
        {
            name: 'Parent Handbook',
            link: '/locations/golden-gateway/parent-handbook'
        }
    ]

    return (
        <div className='GoldenGateway-container'>
            <SubHeader logo={logo} buttonData={buttonData}/>
            <div className='GoldenGateway-container'>
                {/*<img  className='GoldenGateway-logo' src={logo} alt='logo' />*/}
                <About
                    name={goldenGatewayData.name}
                    description={goldenGatewayData.description}
                    tagLine={goldenGatewayData.tagLine}
                    address={goldenGatewayData.address}
                    address1={goldenGatewayData.address1}
                    hours={goldenGatewayData.hours}
                    phone={goldenGatewayData.phone}
                />

            </div>
        </div>
    )
}

export default GoldenGateway
