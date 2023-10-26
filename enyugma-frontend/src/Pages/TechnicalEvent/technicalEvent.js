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

const technicalEvent = [
    {
        id: "rcoffroad",
        name: "RC Off-Road Rally Race",
        eventType: "technical",
        description: `Build an RC off-road vehicle and race through a challenging track
featuring gravel, dirt, jumps, and more.`,
        phases: [
            {
                name: "Abstract Submission",
                desc: `* First round will be an online round. Participating teams would need  to register on unstop.
* Send a 3-D assembly design file of the model made.
* To qualify teams would have to create a video of their RC car moving in all directions. The video should not be edited in any way. The remote should be visible at all duration of video.`,
                type: "online",
            },
            {
                name: "Game round",
                desc: `* A racetrack would be made featuring gravel, dirt, jumps, and more. Team with maximum points would be the winner.
* No spare parts would be provided.`,
                type: "offline",
            },
        ],
        prizes: {
            pool: 50000,
            distribution: ["1st: 20000", "2nd: 16000", "3rd: 14000"],
        },
        banner: rcoffroad,
        generalDetails: {
            type: "team | individual",
            teamSize: "1-4",
        },
    },
    {
        id: "smartgrid",
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
            pool: 30000,
            distribution: ["1st: 15000", "2nd: 10000", "3rd: 5000"],
        },
        banner: smartgrid,
        generalDetails: {
            type: "idividual",
            platform: "kaggle",
        },
    },
    {
        id: "roboarm",
        name: "Intelligent Robotic Arm",
        eventType: "technical",
        description: `Build aAI-based Intelligent Robotic Arm Fixed robotic arm that can identify colours and letters using computer vision  and can lift and place objects based on visual recognition.`,
        phases: [
            {
                name: "First Round",
                desc: `* First round will be an online round. Participating
teams would need to register on unstop.
* Number of team members would be 4.
* The robotic arm should at least have 2 degrees of freedom (end effector movement would not be considered as degree of freedom). The robotic arm must have one revolute joint.
* To qualify teams would need to submit their abstract and design.
* Teams will have to submit an unedited video showing the movement ofall the joints of their manipulator.`,
                type: "online",
            },
            {
                name: "Second Round",
                desc: `* Qualified teams will be called for an offline event, hosted at Campus of IIIT Bhagalpur.
* This would be an offline event.
*There would be a stand with 3 shelves. Each shelf would be assigned a letter. Dimensions of the stand are: -
* Letters would be capital and black colored with white background.
* Each letter would be associated with a particular color.
* Boxes would be cubes(50mm*50mm*50mm) of assigned colors.
* The bot should be able to recognize the color of boxes and letters of shelves using AI and pick and put the box in the respective shelf based on the letter assigned to that self.
* The teams would be judged on design, color detection, letter detection and time taken to do the job.
* There would be reduction of points for each try.`,
                type: "offline",
            },
        ],
        prizes: {
            pool: 51000,
            distribution: ["1st: 22000", "2nd: 17000", "3rd: 12000"],
        },
        banner: roboarm,
        generalDetails: {
            type: "team",
            teamSize: "2-4",
        },
    },
    {
        id: "qctf",
        name: "Quiz + Capture The Flag",
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
            pool: 32000,
            distribution: ["1st: 15000", "2nd: 10000", "3rd: 7000"],
        },
        banner: qctf,
        generalDetails: {
            type: "individual",
            platform: "unstop + IIIT Bhagalpur Campus",
        },
    },
    {
        id: "codeloop",
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
                },
                {
                    name: "polygon",
                    logo: polygon,
                    link: "https://polygon.technology/",
                },
            ],
            silver: [
                {
                    name: "Solana",
                    logo: solona,
                    link: "https://solana.com/",
                },
                {
                    name: "Filecoin",
                    logo: filecoin,
                    link: "https://filecoin.io/",
                },
                {
                    name: "Replit",
                    logo: replit,
                    link: "https://replit.com/",
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
