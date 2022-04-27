import About from "./components/About";
import React from "react";

type Props = {
    name: string
    address: string
    address1: string
    hours: string
    phone: string
}
const GoldenGateway: React.FC<Props> = ({name, address, address1, hours, phone}) => {
    const goldenGatewayData = {
        name,
        description: 'At Truks-N-Tykes @ Golden Gateway, our hands-on educational method helps children learn through play. We balance structured activities with free play, which helps kids thrive. Our center offers care for a wide range of children — from infants all the way to school-age — through all-day preschool and Pre-K, and Junior-K led by a thoughtful, educated staff. Junior-K is specifically designed to help kids develop skills for success in kindergarten, but it still prioritizes play as the ‘hard work’ of childhood. Students explore letter recognition, phonetics, fine motor activities and math/science each day. Our goal is for each student to enter kindergarten with confidence in both academic and social skills. Once in school, we offer a before/after school (summer) care program that will allow your school-aged child more gym, art, music and outdoor time along with field trips. Truks-N-Trykes @ Golden Gateway is invested in all ages and stages of your child’s development, providing them with resources and skills for success. With a wide range of offerings and a highly trained staff, Truks-N-Tykes @ Golden Gateway is designed to meet all your early childhood education needs.',
        tagLine: 'Child Care Programs for Ages –\n' +
            'Infants to 12 years old',
        address,
        address1,
        hours,
        phone
    }

    return (
        <>
            <About
                name={goldenGatewayData.name}
                description={goldenGatewayData.description}
                tagLine={goldenGatewayData.tagLine}
                address={goldenGatewayData.address}
                address1={goldenGatewayData.address1}
                hours={goldenGatewayData.hours}
                phone={goldenGatewayData.phone}
            />
            <div>
                <button />
                <button />
                <button />
                <button />
            </div>
        </>
    )
}

export default GoldenGateway
