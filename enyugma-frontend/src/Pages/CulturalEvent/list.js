import euphony from "../../assets/events/euphony.webp";
import chitraalekh from "../../assets/events/chitraalekh.webp";
import antarman from "../../assets/events/antarman.webp";
import knockout from "../../assets/events/knock-out.webp";
import awakenindia from "../../assets/events/awaken-india.webp";
import stellar from "../../assets/events/stellar.webp";

const events = [
    {
        id: "euphony",
        name: "Euphony",
        eventType: "cultural",
        description: `Euphony is solo singing event where participants will be judged on the basis of their voice quality, rhythm, sur, taal, and overall presentation.`,
        phases: [
            {
                name: "Prelims",
                desc: `* 10 participants will be selected.`,
                type: "offline",
            },
            {
                name: "Finals",
                desc: `* Top 3 participants will be selected.`,
                type: "offline",
            },
        ],
        prizes: {
            pool: 22000,
            distribution: ["1st: 10000", "2nd: 7000", "3rd: 5000"],
        },
        banner: euphony,
        generalDetails: {
            theme: "Solo Singing",
        },
        rules: [
            "The competition is open to all in any language.",
            "Only the submissions by registered participants will be considered.",
            "You may use karaoke, tanpura or any instrument.",
            "Processing of audio and usage of autotune or any other effects such as reverb, etc. is strictly prohibited.",
            "The duration of the performance should be minimum 120 seconds and maximum 180 seconds. Exceeding the time limit is strictly not allowed and if the performance exceeds the stipulated time limit, the corresponding entry will be penalized.",
            " Any kind of vulgarity/indecency is prohibited.",
            " Only one entry per participant is allowed.",
            "The decision of the organizers and judges is final and binding.",
        ],
        judgingCriteria: [
            "Vocal Expression: 25%",
            "Vocal Dynamics: 25%",
            "Vocal Control: 25%",
            "Overall Impact: 25%",
        ],
    },
    {
        id: "chitraalekh",
        name: "Chitraalekh",
        description: `Chitraalekh is a picture comprehension competition where participants will be judged on the basis of their creativity, imagination, and overall presentation.`,
        eventType: "cultural",
        phases: [
            {
                name: "Multi-Round",
                desc: `* Participants  have to write three interconnected stories, based on the pictures provided in three stages as separate entries.
*The third submission should be the interlinking final story referring to the previous two stories and also the third provided picture.`,
                type: "online",
            },
        ],
        prizes: {
            pool: 6000,
            distribution: ["1st: 3000", "2nd: 2000", "3rd: 1000"],
        },
        generalDetails: {
            theme: "Picture Comprehension",
        },
        rules: [
            "Submissions found to be AI-generated, AI-influenced, or containing plagiarized content will result in direct disqualification of the participant.",
            "First two submissions must not exceed 80-100 words. Word limit for third submissions is 200 - 250 words.",
            "Use of abusive and offensive phrases and copying among participants is forbidden, when this occurs, the corresponding entries will be disqualified.",
            "Participants will use their creativity to craft stories for a series of pictures. Each story will be inspired by a corresponding image, and the challenge concludes with creating an interconnected story for the final picture. ",
            "Each participant is only permitted to submit one entry for a certain story, and if    they submit more than one , their entries will be disqualified.",
        ],
        judgingCriteria: [
            "Originality and Creativity.",
            "Interconnectivity between all the submissions and final conclusion.",
            "The influence and expression all together.",
            "Points distribution will be as follows:",
            "20% will be awarded for the first submission.",
            "20% will be awarded for the second submission.",
            "60% will be awarded after the third submission.",
        ],
        banner: chitraalekh,
    },
    {
        id: "antarman",
        name: "Antarman",
        eventType: "cultural",
        description: `Antarman is a solo poetry competition where participants will be judged on the basis of their creativity, imagination, and overall presentation.`,
        phases: [
            {
                name: "Finals",
                desc: `* The participants can choose any topic.
* The poem must be the participant's original work.
* The line limit is 40.
* The poem should have a particular name.
* Each participant is allowed to submit only one entry.
* All the entries will be taken through Unstop.
`,
                type: "offline",
            },
        ],
        prizes: {
            pool: 15000,
            distribution: ["1st: 6000", "2nd: 5000", "3rd: 4000"],
        },
        generalDetails: {
            theme: "Solo Poetry",
        },
        rules: [
            "The participants can choose any topic.",
            "The poem must be the participant's original work.",
            "The line limit is 40.",
            "The poem should have a particular name.",
            "Each participant is allowed to submit only one entry.",
            "All the entries will be taken through Unstop.",
        ],
        judgingCriteria: [
            "Theme relevance.",
            "Originality and Creativity.",
            "Purity of language and vocabulary.",
            "Overall impact and Expression.",
        ],
        banner: antarman,
    },
    {
        id: "knockout",
        name: "Knockout",
        eventType: "cultural",
        description: `Knockout is a debate competition, where participants will be judged on the basis of their content, presentation, and overall performance.`,
        phases: [
            {
                name: "Screening Round",
                desc: `*  Participants will be divided into numerous groups. 
* Six students will be selected for the final Asian Parliamentary round..
`,
                type: "offline",
            },
            {
                name: "Asian Parliamentary Round",
                desc: "* N/A",
                type: "offline",
            },
        ],
        prizes: {
            pool: 15000,
            distribution: ["1st: 6000", "2nd: 5000", "3rd: 4000"],
        },
        generalDetails: {
            theme: "Debate Competition",
        },
        rules: [
            "Round 1:",
            "Participants will be divided into numerous groups where each group would be further divided into two narratives : For and Against the motion.",
            "Each group will be provided with a topic 60 minutes prior to the debate.",
            "During the preparation time, participants are allowed to refer to printed materials as well as electronic devices.",
            "Participants can carry short points on a sheet while debating.",
            "The debate will be in English, if stuck can use Hindi but should revert to English asap.",
            "An individual can ask only 2 POIs in an entire debate round and to whomsoever.",
            "It’s necessary for the speaker to answer at least one POI(if asked).",
            "A POI should not exceed 20 seconds.",
            "The result of screening will be declared at the end of all the debates, 6 students will be selected for the final round",
            "CHANGE OF RULES:",
            "Any or all of the above rules, regulations, and guidelines are subject to change at the discretion of the organizers. The final decision of judges and organizers will be binding for all participants.",
            "Round 2: Standard Rules and Regulations of Asian Parliamentary Debate will be followed.",
        ],
        judgingCriteria: [
            "Clarity on the Topic.",
            "Expression and ability to convey views.",
            "Purity of language and vocabulary.",
            "Overall impact and Expression.",
        ],
        banner: knockout,
    },
    {
        id: "awaken-india",
        name: "Awaken India",
        eventType: "cultural",
        description: `“Real life is messy, and drama is the shaped version of real life”         
~Simon Beaufoy
 Street plays brings you loud and real life, expressed with drama full of drums. It exchanges ideologies right from the street. Breaking the formal barrier, its motive is direct appeal to people to bring real good change in society. So, IIIT Bhagalpur brings in a great opportunity to all participating teams to perform a scintillating street play in our annual fest ENYUGMA.
`,
        phases: [
            {
                name: "Main Round",
                desc: `*  Participants will be divided into numerous groups.
*  The time limit is 8-20 minutes.
* Theme: Teams can choose any theme for their performance.`,
                type: "offline",
            },
        ],
        prizes: {
            pool: 50000,
            distribution: ["1st: 20000", "2nd: 16000", "3rd: 14000"],
        },
        generalDetails: {
            theme: "Teams can choose any theme for their performance.",
        },
        rules: [
            "Theme: Teams can choose any theme for their performance.",
            "Team should comprise of minimum 8 and maximum 20 members.",
            "Time limit: Teams should restrict their performance to 30 minutes. They will be given a bell in the 20th minute and the final bell in the 25th minute. There will be negative marking for exceeding time.",
            "It will be conducted in open ground, hence no microphone, speakers will be allowed/available. No electrical musical instrument will be allowed. Instruments like dafli/daphli/drum-set/etc can be used. Teams can sing/dance to create necessary sound/music as well.",
            "Teams using props/costume/dafli/dressing must bring all their requirements and must be ready well in time as per instructions of organizers. No props/costumes will be arranged by the host college.",
            "No time for rehearsals/stage practice/final rehearsals will be given during fest. Hence,rehearse plenty well in advance.",
            "Decision of judges will be final and binding.",
        ],
        judgingCriteria: [
            "Creativity: 20%",
            "Humor: 20%",
            "Clarity of message: 30%",
            "Costume: 10%",
            "Teamwork: 20%",
        ],
        banner: awakenindia,
    },
    {
        id: "stellar",
        name: "Stellar",
        eventType: "cultural",
        description: `Stellar is an animation competition where participants will be judged on the basis of their creativity, imagination, and overall presentation.`,
        phases: [
            {
                name: "Finals",
                desc: `
* Platform: Unstop
* Theme: Animate/Design a 3D Sci-fi Interstellar Environment for ENYUGMA (Annual TECHNO-CULTURAL FEST IIITBH).
* An Animation should be added in the Model. Steps to be performed will be informed once the fest starts.
* There will be 24 hrs time.
* N number of participants will be allowed to participate.
* Top 3 participants will be the winner.`,
                type: "online",
            },
        ],
        prizes: {
            pool: 22000,
            distribution: ["1st: 10000", "2nd: 7000", "3rd: 5000"],
        },
        generalDetails: {
            theme: "Animate/Design a 3D Sci-fi Interstellar Environment for ENYUGMA ",
        },
        rules: [
            "Only the submissions by registered participants will be considered.",
            " You may use Blender or any software that makes 3D models.",
            " Outsourcing of Models or any other illegal  activities is strictly prohibited.",
            "The duration of the event should be  maximum 24hrs. Exceeding the time limit is strictly not allowed and if it exceeds the stipulated time limit, the corresponding entry will be penalized.",
            " Any kind of cheating is prohibited.",
            " Only one entry per participant is allowed.",
            "The decision of the organizers and judges is final.",
        ],
        judgingCriteria: [
            "Creativity of Idea: 20%",
            "Modeling & Sculpting: 20%",
            "Texturing: 20%",
            "Environment Setup: 10%",
            "Animation Creation: 20%",
            "Attention to Details & Theme: 10%",
        ],
        banner: stellar,
    },
];

export default events;
