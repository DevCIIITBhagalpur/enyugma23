import rcoffroad from "../../assets/events/rec.webp";
import smartgrid from "../../assets/events/smart-grid.webp";
import roboarm from "../../assets/events/robotic-arm.webp";
import qctf from "../../assets/events/ctf.webp";
import codeloop from "../../assets/events/codeloop.webp";
import bitbybit from "../../assets/events/bit-by-bit.webp";
import ideastorm from "../../assets/events/ideastorm.webp";
import devfolio from "../../assets/devfolio.png";
import polygon from "../../assets/polygon.png";
import solona from "../../assets/solana.png";
import filecoin from "../../assets/filecoin.png";
import replit from "../../assets/replit.png";
import nitropulse from "../../assets/events/nitropulse.webp";
import visionsort from "../../assets/events/visionsort.webp";

const technicalEvent = [
    {
        id: "nitropulse",
        link: "https://unstop.com/competitions/nitro-pulse-enyugma-23-indian-institute-of-information-technology-iiit-bhagalpur-797940",
        name: "Nitro Pulse",
        eventType: "technical",
        description: `
Develop customized, high-performance RC off-road
vehicles capable of conquering demanding tracks
with gravel, dirt, jumps, and obstacles. Master the art
of racing these vehicles through intricate terrains,
enhancing skills in control and maneuverability, while
ensuring durability and speed.`,
        phases: [
            {
                name: "Abstract Submission",
                desc: `* Prepare a detailed overview of your vehicle, including specifications, photos, and 3D files. Thorough submissions increase your chances of advancing.`,
                type: "online",
            },
            {
                name: "Video Submission",
                desc: `* Teams must submit an unedited video featuring their RC cars in action, highlighting their performance and agility. Additionally, present clear photographs showcasing the components they used.`,
                type: "online",
            },
            {
                name: "Game round",
                desc: `The culmination of Nitro Pulse unfolds over two action-packed days.
* Day 1
	-- Testing (Optional): Teams have the choice to utilize the first day exclusively for vehicle testing, giving them the opportunity to fine-tune.
	-- Qualification Phase: Individual races determine rankings, grouping participants based on their lap times.
* Day 2
	-- Final Race: A thrilling lap challenge where the 1st vehicle to complete the laps emerges victorious. 
	-- The final race format may be adjusted based on the number of participants, ensuring a fair & competitive showdown.`,
                type: "offline",
            },
        ],
        prizes: {
            pool: 40000,
            distribution: ["1st: 16000", "2nd: 14000", "3rd: 10000"],
        },
        banner: nitropulse,
        generalDetails: {
            "Team Size": `- Team size will be limited to 2-4 members.
- At a minimum, a Driver (for vehicle control) and a Race Marshal (permitted to reset crashed vehicles) are mandatory.
- Substitute drivers and engineers are permitted, but predefined roles for each team member are essential before the event.`,

            "Track Details": `- Embark on a 120m long racing track.
- Bounded by sturdy bricks, defining a clear path.
- Experience diverse landscapes, from grasslands to barrens, featuring elevation changes and surprise obstacles.
- Navigate daring ramps, intricate tunnels & and diverse terrains, putting your skills to the test.
- Prepare for more surprises as we unveil track details soon! Gear up for an electrifying race experience!`,

            "Vehicle Specs and Rules": `- The event exclusively features All-Electric RC cars with a strict power limit of 4S or 15V. Components exceeding this limit are not allowed.
- Teams must design and build their RC cars from scratch. Components, excluding the chassis, can be purchased for integration.
- Pre-assembled or Ready-Made RC cars are strictly prohibited. The focus is on creative vehicle design and hands-on construction.
- The vehicle's dimensions must fit within a box measuring 600mm x 500mm x 400mm (Length x Width x Height).
- Tyres must be rugged enough for off-road tracks, with no mid-race tyre changes allowed. Modifications in tread design are allowed to suit team preferences.
- Teams must be self-sufficient, ensuring an ample supply of spare parts for replacements and repairs.
- Constructed vehicles must adhere to specified dimensions and regulations; any deviation will result in disqualification.
- All vehicles must be fully remote-controlled and operate on a pre-specified frequency.`,
        },
    },
    {
        id: "smartgrid",
        link: "https://enyugma.iiitbh.ac.in/register",
        name: "Smart Grid",
        eventType: "technical",
        description: `Participants will be given a dataset which they will use to evaluate the stability of a smart grid, given some attributes and make optimizations in grid based on different ML/DL techniques and optimization Algorithms.`,
        phases: [
            {
                name: "Challenge",
                desc: `Participants will be given a dataset which they will use to evaluate the stability of a smart grid, given some attributes and make optimizations in grid based on different ML/DL techniques and optimization Algorithms.`,
                type: "online",
            },
        ],
        prizes: {
            pool: 25000,
            distribution: ["1st: 12000", "2nd: 8000", "3rd: 5000"],
        },
        banner: smartgrid,
        generalDetails: {
            type: "idividual",
            platform: "kaggle",
        },
    },
    {
        id: "visionsort",
        link: "https://unstop.com/competitions/vision-sort-enyugma-23-indian-institute-of-information-technology-iiit-bhagalpur-797914",
        name: "Vision Sort",
        eventType: "technical",
        description: `Craft a robotic arm that visually recognizes, lifts, and places objects. Online challenges test your designs, leading to an offline showdown where AI meets action. Get ready for an epic battle of innovation and precision. Are you up for the challenge?`,
        phases: [
            {
                name: "Abstract Submission",
                desc: `* The robotic arm should at least have 2 degrees of
freedom (end effector movement would not be
considered as degree of freedom). The robotic
arm must have one revolute joint.
* To qualify teams would need to submit their
abstract and design.
* Teams can achieve 5 points from this round.`,
                type: "online",
            },
            {
                name: "Video Submission",
                desc: `Teams will have to submit an unedited video showing
the movement of all the joints of their manipulator.

Deliverables for this Round:
* Pictures of your setup
* Uninterrupted & Unedited Video of the system
performing the task-with a timestamp to indicate
start and end-This can be shot with a handheld or
phone camera.
* Uninterrupted & Unedited Video of Live Image
Processing from the cameras with a timestamp to
show how Arena is being analyzed in real-time.
* Teams can achieve 10 points from this round.`,
                type: "online",
            },
            {
                name: "Game Round",
                desc: `* There would be a stand with 3 shelves. Each shelf
would be assigned a letter.
* Letters would be capital and black colored with
white background.
* Each letter would be associated with a particular
color.
* Boxes would be cubes(50mm×50mm×50mm) of
assigned colors.
* The bot should be able to recognize the color of
boxes and letters of shelves using AI and pick &
put the box in the respective shelf based on the
letter assigned to that self.
* The teams would be judged on design, color
detection, letter detection and time taken to do
* There would be reduction of points for each try.
the job.

* Level 1
The robot must be able to detect color of boxes & shelves then able to place it on right shelves.

* Level 2
The robot must detect the letter & color of boxes and shelves and able to pick & place it on the right corresponding shelf.`,
                type: "offline",
            },
        ],
        prizes: {
            pool: 45000,
            distribution: ["1st: 20000", "2nd: 15000", "3rd: 10000"],
        },
        banner: visionsort,
        generalDetails: {
            "Team Size": `- Team size will be limited to 1-6 members.`,

            "Arm Specs": `- Arm should have a minimum of 2 degrees of freedom
(excluding the end effector).
- Arm should contain at least 1 revolute joint.
- Maximum voltage supplied should not exceed 20
volts.
- Arm, if fully autonomous, will be highly appreciated
and will be given preference.
- Arm should contain a button for start/stop and
emergencies.
- The arm will be inspected and if found violating the
standards, the team will be disqualified. This decision
rests solely with the judges and the organizers.`,

            "Workspace Details": `The Robot arm should operates with in the defined
"ROBOT AREA," focusing on efficiently handling the
boxes in the "BOX PICKUP ZONE" and transferring
them to "wooden shelves (510mmx400mmx250mm)
as pictured ."The robot reach confined to a (400mm
x400mm) area. It should be designed to access and
manage these regions effectively
Object to be picked: Cube (50mmx50mmx50mm)`,
        },
    },
    {
        id: "qctf",
        link: "https://unstop.com/o/qRDgo3U?lb=unHpMLw",
        name: "CySecCTF",
        eventType: "technical",
        description: `A quiz based on the basics of cyber security and cryptography followed by a capture the flag event.`,
        phases: [
            {
                name: "Quiz",
                desc: `* A quiz based on the basics of cyber security and cryptography.`,
                type: "online",
            },
            {
                name: "Capture The Flag",
                desc: `* A CTF event where participants will be given a set of challenges to solve.
* The participants will have to solve the challenges and submit the flag.
`,
                type: "online",
            },
        ],
        prizes: {
            pool: 30000,
            distribution: ["1st: 15000", "2nd: 10000", "3rd: 5000"],
        },
        banner: qctf,
        generalDetails: {
            type: "individual",
            platform: "unstop",
        },
    },
    {
        id: "codeloop",
        link: "https://www.codechef.com/COLO2023",
        name: "CodeLoop",
        eventType: "technical",
        description: `A coding competition where participants will be given a set of problems to solve.`,
        phases: [
            {
                name: "First Round",
                desc: `* First round will be online contest from there we choose top 16
participants`,
                type: "online",
            },
            {
                name: "Second Round",
                desc: `* Second round will be onsite contest where top 16 participants will be invited to college for knockout round.`,
                type: "offline",
            },
        ],
        prizes: {
            pool: 58000,
            distribution: [
                "1st: 16000",
                "2nd: 11000",
                "3rd: 6000",
                "4th-8th: 5000",
            ],
        },
        banner: codeloop,
        generalDetails: {
            type: "individual",
            platform: "codechef",
        },
    },
    {
        id: "bitbybit",
        link : "https://unstop.com/p/bit-by-bit-indian-institute-of-information-technology-iiit-bhagalpur-804437",
        name: "Bit By Bit",
        eventType: "technical",
        description: `A 40-hour long hackathon where participants will be given a problem statement to solve.`,
        phases: [
            {
                name: "Idea Submission",
                desc: `* Idea Submission on the Problem Statements given by us.`,
                type: "online",
            },
            {
                name: "Prototype Submission",
                desc: `* The project based on the Idea Submitted must be explained through PPT and Video Submission.`,
                type: "online",
            },
            {
                name: "Final Round",
                desc: `* The selected teams will be called for the 40 Hours Hackathon at the campus of IIIT Bhagalpur.`,
                type: "offline",
            },
        ],
        prizes: {
            pool: 60000,
            distribution: ["1st: 30000", "2nd: 20000", "3rd: 10000"],
        },
        banner: bitbybit,
        generalDetails: {
            type: "team",
            teamSize: "2-3",
        },
        sponsors: {
            gold: [
                {
                    name: "Devfolio",
                    logo: devfolio,
                    link: "https://devfolio.co",
                    alt: "DEVFOLIO LOGO",
                },
                {
                    name: "polygon",
                    logo: polygon,
                    link: "https://polygon.technology/",
                    alt: "POLYGON LOGO",
                },
            ],
            silver: [
                {
                    name: "Solana",
                    logo: solona,
                    link: "https://solana.com/",
                    alt: "SOLANA LOGO",
                },
                {
                    name: "Filecoin",
                    logo: filecoin,
                    link: "https://filecoin.io/",
                    alt: "FILECOIN LOGO",
                },
                {
                    name: "Replit",
                    logo: replit,
                    link: "https://replit.com/",
                    alt: "REPLIT LOGO",
                },
            ],
        },
    },
    {
        id: "ideastorm",
        name: "IdeaStorm",
        eventType: "technical",
        description: `A case-building and pitching competition designed to nurture budding entrepreneurs and transform their innovative ideas into viable business plans. Ideastorm provides a platform for college students to pitch their ideas to a panel of judges and potential investors, gaining exposure, mentorship, and even investment opportunities.`,
        phases: [
            {
                name: "Registration",
                desc: `* Teams of up to 5 members from different colleges can participate.
* Team leaders will apply on behalf of the team and answer two preliminary questions about their idea's utility, real-world problem-solving ability, and competitive advantages.
* Selection based on the merit of the idea and its potential impact.
* Eligibility: Team members must be college or university students.`,
                type: "online",
            },
            {
                name: "Business Model Canvas (BMC) Submission",
                desc: `* Selected teams will prepare a comprehensive BMC for their ideas.
* Resources, guides, and online workshops will be provided to assist teams.
* Qualification Criteria: BMC should align with the provided BMC template.`,
                type: "online",
            },
            {
                name: ": Online Video Pitching",
                desc: `* Shortlisted teams will present their ideas in 5-7 minute slots using pitch decks or BMCs.
* Pitch will be delivered to a panel of judges in a scheduled online meeting`,
                type: "online",
            },
            {
                name: "Final Pitch",
                desc: `* Top teams from previous rounds will pitch their ideas in front of industry leaders and potential investors.
* Opportunity to secure investments, cash prizes, and goodies.`,
                type: "offline",
            },
        ],
        prizes: {
            pool: "N/A",
            distribution: [
                "Funding Chance",
                "Participation certificates for all participants",
                "Exciting goodies for all participants",
                "Networking opportunities with industry experts and investors",
            ],
        },
        banner: ideastorm,
        generalDetails: {
            type: "team",
            teamSize: "2-5",
        },
    },
];

export default technicalEvent;
