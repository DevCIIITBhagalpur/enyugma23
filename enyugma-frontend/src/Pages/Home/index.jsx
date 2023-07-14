import "./index.scss";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CountdownTimer from "../../Components/CountdownTimer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: theme.spacing(4),
  textAlign: "center",
}));

export default function Home() {
  return (
    <div className="home">
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          columns={{ xs: 6, md: 12 }}
        >
          <Grid item xs={6}>
            <Item>
              <img className="banner" src="./src/assets/banner.webp" />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div className="model">3D model</div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <button className="btn">Explore</button>
              <button className="btn">Explore</button>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <CountdownTimer />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
