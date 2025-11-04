import snapp from "../../src/snapp";
import { TeamCard } from "../components/Card"
import { SectionTitle } from "../components/Headings";
import Section, { CardHolder } from "../components/Section"


const TeamSection = () => {

fetch("https://api.github.com/orgs/ulisha-limited/members")
    .then(response => {
        // if (!response.ok) {
        //     throw new Error('Failed to fetch team members');
        // }
        return response.json();
    })
    .then(members => {
        snapp.on("DOM", () => {
            const teamDiv = snapp.select("#teamDiv");
            snapp.render(teamDiv, <CardHolder className="grid-cols-[repeat(auto-fit,minmax(150px,250px))]">
                {members.map(member => <TeamCard member={member} />)}
            </CardHolder>);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        snapp.on("DOM", () => {
            const teamDiv = snapp.select("#teamDiv");
            snapp.render(teamDiv, <>
                <div className="text-center mx-auto py-12">
                    <p className="text-red-600 font-semibold text-lg">Couldn't fetch team members</p>
                    <p className="text-gray-500 text-sm mt-2">Please try again later</p>
                </div>
            </>);
        });
    });

    return <Section className="py-6">
        <div className="space-y-6">
            <div className="text-center">
                <SectionTitle>
                    Meet Our Team
                </SectionTitle>
                <p className="text-slate-700 mx-auto text-lg">Talented individuals working together to create something amazing</p>
            </div>
            <div id="teamDiv">
                <div className="text-center mx-auto py-12">
                    <p className="text-blue-600 font-semibold text-lg">Fetching team members</p>
                    <p className="text-gray-500 text-sm mt-2">Please wait...</p>
                </div>
            </div>
        </div>
    </Section>
}

export default TeamSection