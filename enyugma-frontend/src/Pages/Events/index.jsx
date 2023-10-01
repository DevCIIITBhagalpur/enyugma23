import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./index.scss";
import technicalEvent from "../TechnicalEvent/technicalEvent.js";
import culturalEvent from "../CulturalEvent/list.js";
import Navbar from "../../Components/Navbar/index.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function Events() {
    return (
        <>
            <Navbar />
            <Box className="events">
                <BasicTabs />
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

function BasicTabs() {
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
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        align="center"
                        centered
                    >
                        <Tab label="Technical" {...a11yProps(0)} />
                        <Tab label="Cultural" {...a11yProps(1)} />
                        <Tab label="WorkShop" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Slider list={technicalEvent} type={"technical"} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Slider list={culturalEvent} type={"cultural"} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
            </Box>
        </ThemeProvider>
    );
}

function Slider({ list, type }) {
    const wheelRef = React.useRef(null);

    React.useEffect(() => {
        const element = wheelRef.current;

        if (element) {
            element.addEventListener("wheel", (e) => {
                if (e.deltaY > 0) {
                    element.scrollLeft += 50;
                    // prevent windows scroll
                    e.preventDefault();
                } else {
                    element.scrollLeft -= 100;
                    // prevent windows scroll
                    e.preventDefault();
                }
            });
        }

        return () => {
            if (element) {
                element.removeEventListener("wheel", (e) => {
                    if (e.deltaY > 0) {
                        element.scrollLeft += 100;
                        // prevent windows scroll
                        e.preventDefault();
                    } else {
                        element.scrollLeft -= 100;
                        // prevent windows scroll
                        e.preventDefault();
                    }
                });
            }
        };
    }, []);

    return (
        <Box
            sx={{
                width: "auto",
                height: "75vh",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: 0,
                overflowX: "scroll",
                overflowY: "hidden",
                borderRadius: "16px",
                transition: "all 0.5s ease",
            }}
            ref={wheelRef}
        >
            {list.map((item) => {
                return <GenC key={item.id} item={item} type={type} />;
            })}
            <Box
                sx={{
                    flexShrink: 0,
                    width: 500,
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(6,12,32,1)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    transition: "all 0.5s ease",
                }}
            >
                <Typography
                    variant="h2"
                    component="div"
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 1,
                        transition: "all 0.5s ease",
                    }}
                >
                    <Link
                        to={"/events/" + type}
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        View All
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}

function GenC({ item,type }) {
    const hoverRef = React.useRef(null);

    React.useEffect(() => {
        const hovered = hoverRef.current;
        hovered.addEventListener("mouseover", () => {
            hovered.style.opacity = 1;
            hovered.style.backgroundColor = "rgba(0,0,0,0.8)";
        });

        hovered.addEventListener("mouseout", () => {
            hovered.style.opacity = 0;
            hovered.style.backgroundColor = "rgba(0,0,0,0.5)";
        });

        return () => {
            hovered.removeEventListener("mouseover", () => {
                hovered.style.opacity = 1;
                hovered.style.backgroundColor = "rgba(0,0,0,0.8)";
            });

            hovered.removeEventListener("mouseout", () => {
                hovered.style.opacity = 0;
                hovered.style.backgroundColor = "rgba(0,0,0,0.5)";
            });
        };
    }, []);
    console.log(item);
    return (
        <Box
            sx={{
                flexShrink: 0,
                width: 600,
                height: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url(${item.banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                transition: "all 0.5s ease",
            }}
        >
            <Typography
                variant="h2"
                component="div"
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "all 0.5s ease",
                }}
                ref={hoverRef}
            >
                <Link to={`${type}/${item.id.toLowerCase()}`} >
                {item.name}
                </Link>
            </Typography>
        </Box>
    );
}
