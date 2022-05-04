import './About.css'
import BottomLine from "../../../../components/BottomLine";

const About = () => {
    return (
        <section className='About-container'>
            <h3 className='About-title'>
                About Us
            </h3>
            <div className='About-card'>
                <p className='About-details'>
                    Learning through play and exploration is encouraged within our approach to early childhood education. Children are active learners, and are given unlimited opportunities to explore
                    and problem solve in their daily work and play. Curriculum topics and projects emerge from interest of the children. Teachers carefully listen, observe, and document children’s
                    work and growth.
                </p>
            </div>

            <BottomLine type={'secondary'}/>
        </section>
    )
}

export default About
