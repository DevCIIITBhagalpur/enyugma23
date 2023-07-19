import "./index.scss";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import CountdownTimer from "../../Components/CountdownTimer";
import GlowBall from "../../Components/cursor/index.jsx";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    padding: theme.spacing(4),
    textAlign: "center",
}));

export default function Home() {
    return (
        <div className="home">
            <GlowBall />
            <Box sx={{ width: "100%" }}>
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    columns={{ xs: 6, md: 12 }}
                >
                    <Grid item xs={6}>
                        <Item className="bannerItem">
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <div className="model">3D model</div>
                        </Item>
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
        </div>
    );
}
