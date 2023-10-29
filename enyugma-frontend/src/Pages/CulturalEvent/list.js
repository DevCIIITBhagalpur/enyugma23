import euphony from "../../assets/events/euphony.webp";
import chitraalekh from "../../assets/events/chitraalekh.webp";
import antarman from "../../assets/events/antarman.webp";
import knockout from "../../assets/events/knock-out.webp";
import awakenindia from "../../assets/events/awaken-india.webp";
import stellar from "../../assets/events/stellar.webp";
import cinesnap from "../../assets/events/cinesnap.webp";
import groove from "../../assets/events/groove.webp";
import comiczone from "../../assets/events/comic-zone.webp";
import sketchhour from "../../assets/events/sketch-hour.webp";
import spotshot from "../../assets/events/spot-shot.webp";
import makeamoment from "../../assets/events/make-a-moment.webp";

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
        description: `Step into the realms of imagination and creativity at our college's poetry competition. Your words, your world. Express, connect, and inspire through your own verses. Join fellow peers, ignite your imagination, and craft your masterpiece, and win big! Let your voice be heard. Come, and be part of this poetic journey that celebrates creativity, imagination, and expression.`,
        phases: [
            {
                name: "Online Submission Round ( Platform -  Unstop )",
                desc: `This is an online round in which participants have to submit their work via unstop. Work should follow the below guidelines:-

* The participants can choose any topic.
* The poem must be the participant's original work.
* The line limit is 40.
* The poem should have a particular name.
* Each participant is allowed to submit only one entry.
* All the entries will be taken through Unstop.
* Under no circumstances can alterations be made to poems once submitted.
* The poet’s name must be mentioned in the poem itself.
* The judges will read all the poems and their decision will be final.`,
                type: "online",
            },
            {
                name: "Finals",
                desc: `This is an Offline round in which participants have to recite their poem on stage at IIIT Bhagalpur Campus . Guidelines for this round are as follows:-

* The participants can choose any topic.
* The poem must be the participant's original work.
* The line limit is 40.
* The poem should have a particular name.
* The judges will evaluate your poem as per the judging criteria mentioned and their decision will be final.
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
            "Under no circumstances can alterations be made to poems once submitted.",
            "The poet’s name must be mentioned in the poem itself.",
            "The judges will read all the poems and their decision will be final.",
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
                desc: "* Top three candidates of this round will be rewarded with First, Second and Third postion.",
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
    {
        id: "cinesnap",
        name: "Cine Snap",
        eventType: "cultural",
        description: `The CINESNAP is an online Short Film competition that invites aspiring filmmakers to unleash their creativity and filmmaking skills. Participants will have the opportunity to craft a short film that can span any genre, from drama and comedy to documentary and experimental, with a maximum duration of 10 minutes.`,
        phases: [
            {
                name: "Finals",
                desc: `Participants can chose any genre and make a short-film of duration 3 to 10 minutes. Participants have to submit the short-film on  23rd november 2023.
 Each participant is allowed to submit only one entry.
 All the entries will be taken through Unstop.`,
                type: "online",
            },
        ],
        prizes: {
            pool: 18000,
            distribution: ["1st: 8000", "2nd: 6000", "3rd: 4000"],
        },
        generalDetails: {
            Eligibility:
                "The competition is open to amateur and professional filmmakers of all ages. Participants can enter individually or as a team. ",

            "Film Duration":
                "Films must be no longer than [specific duration, e.g., 5 minutes] including credits. A 10-second grace period will be allowed, but films exceeding this time limit will be disqualified. ",

            Theme: "There is no specific theme for the competition; participants are encouraged to be creative and original in their storytelling. ",

            "Content Guidelines":
                "Films must not contain explicit, offensive, or inappropriate content. All content, including visuals, music, and dialogues, must adhere to copyright laws. Plagiarized content will lead to disqualification. ",
            Language:
                "Films can be in any language, but English subtitles are required if the film is not in English. ",

            Submission:
                "All submissions must be in digital format (preferred formats: MP4, MOV). Films can be submitted via [submission platform or email address]. The submission deadline is [specific date and time]",

            Originality:
                "Films must be original works created specifically for this competition. Previously published works are not allowed. ",

            Credits:
                "Opening or closing credits should be limited to 20 seconds. A list of credits, including all participants' names and roles, should be included in the submission. ",

            Judging:
                " 2 Films will be judged on creativity, storytelling, cinematography, acting, sound design, and overall production value. The judging panel's decision is final. ",

            Awards: "Awards will be given for categories such as Best Film, Best Direction, Best Cinematography, Best Editing, and Audience Choice. - Prizes may include [list of prizes, e.g., cash, certificates]. ",

            Ownership:
                " Filmmakers retain full rights to their films. However, by entering the competition, participants grant the organizing committee the right to screen and promote their films for non-commercial purposes.",

            Disqualification:
                "Films that violate the rules, contain inappropriate content, or are submitted after the deadline will be disqualified.",

            Notifications:
                "Participants will be notified of their film's acceptance or disqualification by [specific date]. ",

            "Screening and Awards Ceremony":
                "3 - Selected films will be screened at the awards ceremony on [specific date]. - Award winners will be announced and honored during the ceremony. ",
        },
        rules: [
            `Eligibility:

The competition is open to all engineering undergraduate students from across India.
Participants can either work individually or in teams of up to 5 members.`,

            `Film Duration:

The short film's duration should be a minimum of 3 minutes and a maximum of 10 minutes, including credits.
Films exceeding this time limit will be disqualified.`,

            `Theme and Genre:

There is no specific theme. Participants are encouraged to explore any genre or subject matter.
Content should be appropriate and follow college guidelines.`,

            `Originality:

All content, including the story, script, characters, and music, must be original, or proper permissions for the use of copyrighted materials must be obtained.
Participants must upload raw footages along with the short film to ensure originality.`,

            `Equipment:

Participants can use any recording equipment, including smartphones, cameras, or other devices.
Editing software of choice is allowed.`,

            `Submission:

Films should be submitted on or before the deadline, which is 23.11.23.
The film file should be in a mp4 format and have a clear title and credits.`,

            `Screening and Awards Ceremony:

The selected short films will be screened during the Enyugma fest.
An awards ceremony will follow the screening, where the winners will be announced and rewarded.`,

            `Rights:

IIITBH retains the right to use the submitted films for promotional purposes.
Judges decision will be final decision.`,
        ],
        judgingCriteria: [
            "  Creativity & Innovation: 30% ",
            "Editing, Cinematography, Sound design: 30% ",
            "Social media likes & engagement:  20% ",
            "Overall movie presentation & judge's decision: 20% ",
        ],
        banner: cinesnap,
    },
    {
        id: "groove",
        name: "Groove",
        eventType: "cultural",
        description: `Groove is a solo dance competition where participants will be judged on the basis of their creativity, imagination, and overall presentation.`,
        phases: [
            {
                name: "First Round",
                desc: "*  Top 5 participants will be selected for the final round.",
                type: "offline",
            },
            {
                name: "Final Round",
                desc: `*The winner will be announced on the last day of the event. 
*Finals will be held on the last day of the event. `,
                type: "offline",
            },
        ],
        prizes: {
            pool: 18000,
            distribution: ["1st: 8000", "2nd: 6000", "3rd: 4000"],
        },
        generalDetails: {
            theme: "Solo Dance",
            type: "Audition",
            mode: "Offline",
            Platform: "IIIT Bhagalpur Campus + Instagram",
            Rounds: "2",
        },
        rules: [
            "Any dance form and usage of props are accepted. ",

            "The time slots of the two rounds are mentioned. ",

            "Any kind of vulgarity or indecency is prohibited, be it through dance gestures or song lyrics.",

            "All participants must be studying at Indian colleges. ",

            "Only one entry per participant is allowed. ",

            "Any unnecessary act will not be entertained and will lead to direct disqualification. ",
        ],
        judgingCriteria: [
            "Choreography: 25%",
            "Usage any Property: 25% ",
            "Expression: 25% ",
            "Costume: 25%",
        ],
        banner: groove,
    },
    {
        id: "comiczone",
        name: "Comic Zone",
        eventType: "cultural",
        description: `Comic Zone is a comic strip competition where participants will be judged on the basis of their creativity, imagination, and overall presentation.`,
        phases: [
            {
                name: "Finals",
                desc: `* Design a comic character (fictional only) with a small entertaining and enticing scene / story around it. 

* The format of the story should be strictly a comic/manga. 

* Number of blocks (dialogue with drawn images) per panel at least 3. 

* Maximum 10 panel (page) comic 

* Minimum 4 panel (page) comic 

* Topic: College Life`,
                type: "online",
            },
        ],
        prizes: {
            pool: 10000,
            distribution: ["1st: 5000", "2nd: 3000", "3rd: 2000"],
        },
        generalDetails: {
            theme: "Comic Strip",
            platform: "Instagram + mysteve_iiitbh",
            topic: "College Life",
        },
        rules: [
            "This is an individual event. ",
            "Any regular drawing sheet could be used. ",
            "Pictures should be clear. ",
            "No plagiarism will be tolerated ",
            "Scheme: can be colorful or black and white in scheme ",
            "Submission: Online ",
            "The decision of the organizing committee will be final. ",
        ],
        judgingCriteria: [
            "Creativity/ design/ Art style /storyline: 60% (15% each) ",
            "Judge: 30% ",
            "Instagram likes/overall engagement: 10% ",
        ],
        banner: comiczone,
    },
    {
        id: "sketchhour",
        name: "Sketch Hour",
        eventType: "cultural",
        description: `Sketch Hour is a sketching competition where participants will be judged on the basis of their creativity, imagination, and overall presentation.`,
        phases: [
            {
                name: "Finals",
                desc: `* This is an individual event.
* Participants have to draw on the topic: 'memories you would cherish forever.'
`,
                type: "offline",
            },
        ],
        prizes: {
            pool: 15000,
            distribution: ["1st: 6000", "2nd: 5000", "3rd: 4000"],
        },
        generalDetails: {
            theme: "Sketching",
            topic: "Memories you would cherish forever",
            venue: "IIIT Bhagalpur Campus",
            "canvas size": "A4 size sheet",
        },
        rules: [
            "This is an individual event. ",

            "Any regular drawing sheet could be used. ",

            "Art should be clear and made on the venue ",

            "Submission: It should be your own. Plagiarism is not allowed. ",

            "The participants must submit 2 passport sized photos. ",

            "The decision of the organizing committee will be final.",
        ],
        judgingCriteria: [
            "Creativity/ Clarity/ Finishing: 60% ",

            "Judge: 30% ",

            "Instagram likes: 10% ",
        ],
        banner: sketchhour,
    },
    {
        id: "spotshot",
        name: "Spot Shot",
        eventType: "cultural",
        description: `Spot Shot is a photography competition where participants will be judged on the basis of their creativity, imagination, and overall presentation.`,
        phases: [
            {
                name: "Finals",
                desc: `* This is an individual event.
* Maximum 2 entries per participant.
* You will be given some time interval to click photographs regarding the theme. 
* Mobile and DSLR both can be undertaken. `,
                type: "offline",
            },
        ],
        prizes: {
            pool: 15000,
            distribution: ["1st: 6000", "2nd: 5000", "3rd: 4000"],
        },
        generalDetails: {
            theme: "on-spot Photography",
            topic: "Monochrome Photography, Vintage Photography, Street Photography (Bihar culture preferred)",
            venue: "IIIT Bhagalpur Campus",
            "devices allowed": "Mobile and DSLR",
        },
        rules: [
            "Maximum of 2 entries ",

            "You will be given some time interval to click photographs regarding the theme. ",

            "Mobile and DSLR both can be undertaken. ",

            "No watermark should be there, and the picture should be less than 10MB. ",

            "Basic editing, including color enhancement, the use of filters, and cropping of the photo(s) is acceptable, provided any such editing does not affect the authenticity and/or genuineness of the photo(s). ",

            "Advanced editing used to create illusions, deceptions, and/or manipulations, and the adding and removing of significant elements within the frame is prohibited. ",

            "Every image uploaded is subject to a moderation process before it becomes visible in the contest. ",

            "You are required to provide a unique title and description for each image submitted. ",

            "Photos that portray or otherwise include inappropriate and/or offensive content, including provocative nudity, violence, human rights and/or environmental violation, and/or any other contents deemed to be contrary to the law, religious, cultural & moral traditions and practices of India, are strictly prohibited and will be immediately discarded. ",
            "A participant who submits any such photos may be permanently banned. ",

            "You are required to provide a unique title and description for each image submitted.",

            "The decision of judges will be final and binding. ",
        ],
        judgingCriteria: [
            "Theme: 25% ",

            "Creativity: 25% ",

            "Clarity: 10% ",

            "Editing: 10% ",

            "Field of Depth: 25% ",

            "Title and Description: 5% ",
        ],
        banner: spotshot,
    },
    {
        id: "makeamoment",
        name: "Make a Moment",
        eventType: "cultural",
        description: `Make a Moment is a Conceptual Photography competition where participants will be judged on the basis of their creativity, imagination, and overall presentation.`,
        phases: [
            {
                name: "Finals",
                desc: `* This is an individual event.
* Maximum 2 entries per participant.
* Photography Themes: Conceptual Photography, Travel Photography (Landscapes preferred), Street Photography (Indian culture preferred) - Every artist has a central story to tell, and the difficulty, the impossible task, is trying to present that story in pictures. 
`,
                type: "online",
            },
        ],
        prizes: {
            pool: 7000,
            distribution: ["1st: 4000", "2nd: 2000", "3rd: 1000"],
        },
        generalDetails: {
            theme: "Conceptual Photography, Travel Photography (Landscapes preferred), Street Photography (Indian culture preferred)",
            venue: "Unstop",
            "devices allowed": "Mobile and DSLR",
            "file size limit": "10MB",
        },
        rules: [
            "Maximum of 2 entries allowed. ",

            "File size must be less than 10MB. ",
            "Basic editing, including color enhancement, the use of filters, and cropping of the photo(s) is acceptable, provided any such editing does not affect the authenticity and/or genuineness of the photo(s). ",

            "Advanced editing used to create illusions, deceptions, and/or manipulations, and the adding and removing of significant elements within the frame are prohibited. ",

            "Every uploaded image is subject to a moderation process before it becomes visible in the contest. ",

            "You are required to provide a unique title and description for each image submitted. ",

            "Photos that portray or otherwise include inappropriate and/or offensive content, including provocative nudity, violence, human rights and/or environmental violation, and/or any other content deemed to be contrary to the law, religious, cultural & moral traditions and practices of India, are strictly prohibited and will be immediately discarded. ",

            "A participant who submits any such photos may be permanently banned. ",

            "You are required to provide a unique title and description for each image submitted. ",

            "The decision of judges will be final and binding. ",
        ],
        judgingCriteria: [
            "Theme: 25% ",

            "Creativity: 25% ",

            "Clarity: 10% ",
            "Editing: 10% ",

            "Field of Depth: 25% ",

            "Title and Description: 5% ",
        ],
        banner: makeamoment,
    },
];

export default events;
