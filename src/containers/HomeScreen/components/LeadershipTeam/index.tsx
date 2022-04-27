import LeaderCard from "../../../../components/LeaderCard";
import "./LeadershipTeam.css"

const LeadershipTeam = () => {
    const leaders = [
        {
            name: 'Misty Cotton',
            about: 'As former educators in the private and public schools in Minnesota, Jeremy and Misty found the transition into childcare an easy one. In 2007 they packed up their family from the Twin Cities area and headed to South Dakota to help serve the Sioux falls community’s need for Childcare. In 2010 they opened their first center, Truks-N-Trykes 2. After meeting some amazing people along the way, they decided to invite them into join the TNT family.'
        },
        {
            name: 'Bri McCarty',
            about: 'Bri fell into childcare in a round about way. After taking a break from the corporate world, she took an assistant director position with TNT2 and she fell in love with helping raise amazing children. With a Master’s in business, she was searching for a way to grow her career while staying part of the Truks-N-Trykes Brand. That is when NurseryCare was born. After planning and completing the concept, she knew that she needed help to grow the center into the perfect option for families and that is when her husband, Drew, joined the team.'
        },
        {
            name: 'Melissa Anderson',
            about: 'It’s hard to articulate how much Melissa loves her job, but luckily her dedication and passion for early childhood education speaks for itself. From the very start, Melissa knew this was what she wanted to do. After graduating from Augustana University, Melissa accrued over ten years of experience in early childhood education, and in early 2020, she bought PlayCare. Melissa, her husband Barry, and their son, Mason, live in the Sioux Falls community and can’t imagine life anywhere else!!'
        }
    ]
    return (
        <div className='LeadershipTeam-container'>
            <div className='LeadershipTeam-title'>
                Leadership Team
            </div>
            {leaders.map(leader => <LeaderCard leader={leader} />)}
        </div>
    )
}



export default LeadershipTeam
