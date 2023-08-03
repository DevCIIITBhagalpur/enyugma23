import "./index.scss";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import CountdownTimer from "../../Components/CountdownTimer";
import banner from "../../assets/banner.webp"
import Stars from "../../Components/Stars/index.jsx";
import Gallery from "../../Components/Gallery/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Wireframe from "../../Components/Logo/index.jsx"
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    padding: theme.spacing(4),
    textAlign: "center",
}));

export default function Home() {
    return (
        <div className="home">
            <HeroSection />
            <Gallery />
        </div>
    );
}

export function HeroSection() {
    return (
        <Box
            sx={{
                width: "100%",
                overflowY: "hidden",
                height: "calc(100vh - 128px)",
            }}
            className="heroSection"
        >
            <Navbar />
            <Stars />
            <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 6, md: 12 }}
                gap={0}
            >
                <Grid item xs={6}>
                    <Item className="bannerItem">
                        <img src={banner} alt="" className="banner" />
                    </Item>
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "500px",
                    }}
                >
                    <Model />
                </Grid>
                <Grid item xs={6}>
                    <Item className="buttons">
                        <Link className="btn" to="/explore">
                            Explore
                        </Link>
                        <Link className="btn" to="/events">
                            Events
                        </Link>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item className="countDownSection">
                        <p className="countDownText">
                            The countdown has begun !
                        </p>
                        <CountdownTimer />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}


function Model() {
    const [isHovering, setIsHovering] = useState(false);

    

    return (
    <Canvas
        camera={{ position: [0, 0, 5] }}
        className="canva"
    >
        <ambientLight intensity={1}  />
        <spotLight position={[10, 10, 10]} angle={0.1} penumbra={0.5} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls 
            rotation={[Math.PI / 2, 0, 0]}
            enableRotate={true}
            enableZoom={true}
            enablePan={false}
            minZoom={1}
        />
       <Wireframe />
    </Canvas>
    );
}