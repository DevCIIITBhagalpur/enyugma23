import React, { Suspense, useEffect, useLayoutEffect, useState } from "react";
import "./index.scss";
import { useLocation } from "react-router-dom";
import {
    Box,
    Button,
    Divider,
    Tab,
    Tabs,
    Typography,
    createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Navbar from "../../Components/Navbar/index.jsx";
import cultural3 from "../../assets/bgs/cultural3.webp";
import technical2 from "../../assets/bgs/technical2.webp";
import workshop from "../../assets/bgs/workshop1.webp";
import Stars2 from "../../Components/Stars2/index.jsx";
import session from "../../assets/events/speaker-session.webp";
import technicalEvent from "../TechnicalEvent/technicalEvent.js";
import culturalEvent from "../CulturalEvent/list.js";
import EventDetailSponsorCard from "../../Components/EventDetailSponsors/index.jsx";
import workshopevents from "../WorkshopEvent/list.js";
import Preloader from "../../Components/Preloader/Preloader.jsx";

export default function EventDetail() {
    const location = useLocation();
    const [eventBg, setEventBg] = useState("");
    const [eventDetails, setEventDetails] = useState({
        id: "comingsoon",
        name: "Coming Soon",
        eventType: "workshop",
        description: `Coming Soon`,
        phases: [
            {
                name: "Coming Soon",
                desc: `* Coming Soon.`,
                type: "Coming Soon",
            },
        ],
        prizes: {
            pool: "Coming Soon",
            distribution: ["Coming Soon"],
        },
        banner: session,
        generalDetails: {
            type: "Coming Soon",
        },
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
        const eventId = arr[arr.length - 1];
        const eventType = arr[arr.length - 2];
        if (eventType === "technical") {
            setEventBg(technical2);
            const eventdata = technicalEvent.find(
                (event) => event.id === eventId,
            );
            // console.log(eventdata);
            setEventDetails(eventdata);
        } else if (eventType === "workshop") {
            setEventBg(workshop);
            const eventdata = workshopevents.find(
                (event) => event.id === eventId,
            );
            setEventDetails(eventdata);
        } else {
            setEventBg(cultural3);
            const eventdata = culturalEvent.find(
                (event) => event.id === eventId,
            );
            // console.log(eventdata);
            setEventDetails(eventdata);
        }
    }, [arr]);

    useLayoutEffect(() => {
        const eventId = arr[arr.length - 1];
        if (eventId === "bitbybit") {
            console.log("bitbybit");
            const script = document.createElement("script");
            script.src = "https://apply.devfolio.co/v2/sdk.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [arr]);

    return (
        <>
            <Suspense fallback={<Preloader />}>
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
                    <br />
                    <Button variant="contained" className="register-button">
                        Register
                    </Button>
                    {/* {eventDetails.id === "bitbybit" && ( */}
                        <div
                            className="apply-button"
                            data-hackathon-slug="bitbybit-2"
                            data-button-theme="dark"
                            style={{
                                height: "44px",
                                width: "312px",
                            }}
                        ></div>
                    {/* )} */}
                </Box>
            </Suspense>
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
            style={{
                height: "100%",
                minHeight: "350px",
                overflowY: "auto",
                width: "75%",
                borderBottom: "1px solid #ffffff25",
                zIndex: 0,
            }}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{
                        p: 5,
                        width: "100%",
                        // minWidth: "300px",
                        // margin: "auto",
                        borderLeft: "1px solid #ffffff25",
                        borderRight: "1px solid #ffffff25",
                        height: "100%",
                    }}
                >
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
            <Box
                sx={{
                    width: "100%",
                    height: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        align="center"
                        scrollButtons
                        sx={{
                            zIndex: 1,
                        }}
                        // centered
                        variant="scrollable"
                    >
                        <Tab label="Description" {...a11yProps(0)} />
                        {eventDetails.eventType !== "workshop" && (
                            <Tab label="Details" {...a11yProps(1)} />
                        )}
                        {eventDetails.eventType !== "workshop" && (
                            <Tab label="Prize" {...a11yProps(2)} />
                        )}
                        {eventDetails.eventType !== "workshop" && (
                            <Tab label="Phases" {...a11yProps(3)} />
                        )}
                        {eventDetails.eventType === "cultural" && (
                            <Tab label="Rules" {...a11yProps(4)} />
                        )}
                        {eventDetails.eventType === "cultural" && (
                            <Tab label="Judging Criteria" {...a11yProps(5)} />
                        )}
                    </Tabs>
                </Box>
                <Box
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                    }}
                >
                    <img
                        src={eventDetails.banner}
                        alt=""
                        className="event-banner"
                    />
                    <CustomTabPanel value={value} index={0}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <Typography variant="h6">
                                {eventDetails.description.split("*")?.length > 1
                                    ? eventDetails.description
                                          .split("*")
                                          .map((x, i) => {
                                              return (
                                                  <blockquote
                                                      key={i}
                                                      style={{
                                                          borderLeft:
                                                              "5px solid #ffffff25",
                                                          paddingLeft: "10px",
                                                          marginLeft: "10px",
                                                          marginTop: "10px",
                                                          marginBottom: "10px",
                                                      }}
                                                  >
                                                      {x}
                                                  </blockquote>
                                              );
                                          })
                                    : eventDetails.description}
                            </Typography>
                            <div className="sponsors">
                                {eventDetails.sponsors && (
                                    <>
                                        <br />
                                        <br />
                                        <br />
                                        <br />

                                        <br />
                                        <br />
                                        <br />
                                        <div className="sponsorslis">
                                            <div className="sponsors">
                                                <div className="title">
                                                    Gold Sponsors
                                                </div>
                                                <div className="list">
                                                    {eventDetails.sponsors.gold.map(
                                                        (sponsor, i) => (
                                                            <EventDetailSponsorCard
                                                                key={i}
                                                                name={""}
                                                                logo={
                                                                    sponsor.logo
                                                                }
                                                                link={
                                                                    sponsor.link
                                                                }
                                                                alt={sponsor.alt}
                                                            />
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                            <div className="sponsors">
                                                <div className="title">
                                                    Silver Sponsors
                                                </div>
                                                <div className="list">
                                                    {eventDetails.sponsors.silver.map(
                                                        (sponsor, i) => (
                                                            <EventDetailSponsorCard
                                                                name={""}
                                                                logo={
                                                                    sponsor.logo
                                                                }
                                                                link={
                                                                    sponsor.link
                                                                }
                                                                key={i}
                                                            />
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </Box>
                    </CustomTabPanel>
                    {eventDetails.eventType !== "workshop" && (
                        <CustomTabPanel value={value} index={1}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                            >
                                {Object.keys(eventDetails.generalDetails).map(
                                    (key) => (
                                        <Box
                                            key={key}
                                            sx={{
                                                display: "flex",
                                                flexDirection: "row",
                                                whiteSpace: "pre-wrap",
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {key} :{" "}
                                            </Typography>
                                            <Typography variant="h6">
                                                {
                                                    eventDetails.generalDetails[
                                                        key
                                                    ]
                                                }
                                            </Typography>
                                        </Box>
                                    ),
                                )}
                            </Box>
                        </CustomTabPanel>
                    )}
                    {eventDetails.eventType !== "workshop" && (
                        <CustomTabPanel value={value} index={2}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Prize Pool :{" "}
                                </Typography>
                                <Typography variant="h6">
                                    {eventDetails.prizes.pool}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    {eventDetails.prizes.pool !== "N/A"
                                        ? "Prize Distribution"
                                        : "Benefits & Perks"}{" "}
                                    :{" "}
                                </Typography>
                                {eventDetails.prizes.distribution.map(
                                    (prize, i) => (
                                        <Typography variant="h6" key={prize}>
                                            {i + 1}. {prize}
                                        </Typography>
                                    ),
                                )}
                            </Box>
                        </CustomTabPanel>
                    )}
                    {eventDetails.eventType !== "workshop" && (
                        <CustomTabPanel value={value} index={3}>
                            {eventDetails.phases.map((phase, i) => (
                                <Typography variant="h6" key={i}>
                                    <h2>{"Round: " + (i + 1)}</h2>
                                    {Object.entries(phase).map((x) => {
                                        return (
                                            <div key={x[0]}>
                                                <h3>
                                                    {x[0][0].toUpperCase() +
                                                        x[0].slice(1)}
                                                    :
                                                </h3>
                                                <pre
                                                    style={{
                                                        whiteSpace: "pre-wrap",
                                                        wordWrap: "break-word",
                                                    }}
                                                >
                                                    {x[1]
                                                        .split("*")
                                                        .map((x, i) => {
                                                            return (
                                                                <blockquote
                                                                    key={i}
                                                                    style={{
                                                                        borderLeft:
                                                                            "5px solid #ffffff25",
                                                                        paddingLeft:
                                                                            "10px",
                                                                        marginLeft:
                                                                            "10px",
                                                                        marginTop:
                                                                            "10px",
                                                                        marginBottom:
                                                                            "10px",
                                                                    }}
                                                                >
                                                                    {x}
                                                                </blockquote>
                                                            );
                                                        })}
                                                </pre>
                                            </div>
                                        );
                                    })}
                                    <Divider />
                                </Typography>
                            ))}
                        </CustomTabPanel>
                    )}
                    {eventDetails.eventType === "cultural" && (
                        <>
                            <CustomTabPanel value={value} index={4}>
                                {eventDetails.rules.map((criteria, i) => (
                                    <Typography variant="h6" key={criteria}>
                                        <blockquote
                                            style={{
                                                borderLeft:
                                                    "5px solid #ffffff25",
                                                paddingLeft: "10px",
                                                marginLeft: "10px",
                                                marginTop: "10px",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            {criteria}
                                        </blockquote>
                                    </Typography>
                                ))}
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={5}>
                                {eventDetails.judgingCriteria.map(
                                    (criteria, i) => (
                                        <Typography variant="h6" key={criteria}>
                                            <blockquote
                                                style={{
                                                    borderLeft:
                                                        "5px solid #ffffff25",
                                                    paddingLeft: "10px",
                                                    marginLeft: "10px",
                                                    marginTop: "10px",
                                                    marginBottom: "10px",
                                                }}
                                            >
                                                {criteria}
                                            </blockquote>
                                        </Typography>
                                    ),
                                )}
                            </CustomTabPanel>
                        </>
                    )}
                </Box>
            </Box>
        </ThemeProvider>
    );
}
