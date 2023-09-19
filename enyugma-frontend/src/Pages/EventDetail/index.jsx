import React, { useEffect, useState } from "react";
import "./index.scss";
import { useLocation } from "react-router-dom";
import { Box, Button, Tab, Tabs, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Navbar from "../../Components/Navbar/index.jsx";
import cultural3 from "../../assets/bgs/cultural3.png";
import technical2 from "../../assets/bgs/technical2.png";
import Stars2 from "../../Components/Stars2/index.jsx";


export default function EventDetail() {
    const location = useLocation();
    const [eventBg, setEventBg] = useState("");
    const [eventDetails, setEventDetails] = useState({
        name: "CodeLoop",
        type: "technical",
        description: "CodeLoop is a coding event",
        generalDetails: {
            Platform: "Codechef",
            Date: "12/10/2021",
            Time: "12:00 PM",
            Duration: "2 hours",
            Registration: "Free",
        },
        prizes: {
            pool: 70000,
            distribution: [
                "15000 + goodies + certificate",
                "10000 + goodies + certificate",
                "5000 + goodies + certificate",
                "4000 + certificate",
                "5th-8th : 1000 + certificate",
            ],
        },
        rules: [
            "This is a team event. Each team can have a maximum of 3 members.",
            "The event will be conducted on Codechef.",
            "The event will be of 2 hours.",
        ],
        judgingCriteria: [
            "The team with the highest score will be declared as the winner.",
            "In case of a tie, the team with the least penalty will be declared as the winner.",
            "If the tie still persists, the team which submitted the last correct solution will be declared as the winner.",
        ],
    });

    const fetchEventData = async (eventName) => {
        const response = await fetch(
            `http://localhost:5000/events/${eventName}`,
        );
        const data = await response.json();
        console.log(data);
    };

    const arr = location.pathname.split("/");

    useEffect(() => {
        const eventName = arr[arr.length - 1];
        const eventType = arr[arr.length - 2];
        if(eventType === "technical") {
            setEventBg(technical2);
        }
        else {
            setEventBg(cultural3);
        }
    }, [arr]);

    return (
        <>
            <Box
                className="event-detail"
                sx={{
                    backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.7) 20%,rgba(6,12,32,1) 70%), url(${eventBg})`,
                    overflow: "hidden",
                }}
            >
                <Navbar />
                <div className="abs">
                <Stars2 />
                </div>
                <Typography variant="h2" className="event-name">
                    {eventDetails.name}
                </Typography>
                <BasicTabs eventDetails={eventDetails} />
                <Button variant="contained" className="register-button">
                    Register
                </Button>
            </Box>
        </>
    );
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function BasicTabs({ eventDetails }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const darktheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    return (
        <ThemeProvider theme={darktheme}>
            <Box sx={{ width: "100%",height:"50%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        align="center"
                        centered
                    >
                        <Tab label="Description" {...a11yProps(0)} />
                        <Tab label="Details" {...a11yProps(1)} />
                        <Tab label="Prize" {...a11yProps(2)} />
                        <Tab label="Rules" {...a11yProps(3)} />
                        <Tab label="Judging Criteria" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <Typography variant="h6">
                            {eventDetails.description}
                        </Typography>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {Object.keys(eventDetails.generalDetails).map((key) => (
                            <Box
                                key={key}
                                sx={{ display: "flex", flexDirection: "row" }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    {key} :{" "}
                                </Typography>
                                <Typography variant="h6">
                                    {eventDetails.generalDetails[key]}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Prize Pool :{" "}
                        </Typography>
                        <Typography variant="h6">
                            {eventDetails.prizes.pool}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Prize Distribution :{" "}
                        </Typography>
                        {eventDetails.prizes.distribution.map((prize, i) => (
                            <Typography variant="h6" key={prize}>
                                {i + 1}. {prize}
                            </Typography>
                        ))}
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    {eventDetails.rules.map((rule, i) => (
                        <Typography variant="h6" key={rule}>
                            {i + 1}. {rule}
                        </Typography>
                    ))}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    {eventDetails.judgingCriteria.map((criteria, i) => (
                        <Typography variant="h6" key={criteria}>
                            {i + 1}. {criteria}
                        </Typography>
                    ))}
                </CustomTabPanel>
            </Box>
        </ThemeProvider>
    );
}
