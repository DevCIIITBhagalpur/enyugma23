import euphony from "../../assets/events/euphony.png";
import chitraalekh from "../../assets/events/chitraalekh.png";
import antarman from "../../assets/events/antarman.png";
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
];

export default events;
