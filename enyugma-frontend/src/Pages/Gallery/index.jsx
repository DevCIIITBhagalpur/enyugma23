import { Box, Skeleton, ThemeProvider, createTheme } from "@mui/material";
import "./index.scss";
import { Masonry } from "@mui/lab";
import { gallery as list } from "../../Components/Gallery/list.js";
import Navbar from "../../Components/Navbar/index.jsx";
import { Suspense,useEffect,useState } from "react";
import Preloader from "../../Components/Preloader/Preloader.jsx";

export default function GalleryPage() {
    const [clm,setClm] = useState(
        window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : window.innerWidth < 1200 ? 3 : 4);

    const handleResize = () => {
        if (window.innerWidth < 600) {
            setClm(1);
        } else if (window.innerWidth < 900) {
            setClm(2);
        } else if (window.innerWidth < 1200) {
            setClm(3);
        } else {
            setClm(4);
        }
    }

   useEffect(() => {
         window.addEventListener("resize", handleResize);
         return () => {
              window.removeEventListener("resize", handleResize);
         }
    }
    , []);

    return (
        <>
            <Navbar />
            <Suspense fallback={<SkeletonComp />}>
                <Box className="gallerybox">
                    <h1>Gallery</h1>
                    <Suspense fallback={<SkeletonComp />}>
                        <Masonry columns={clm} spacing={2}>
                            {list.map((item, index) => (
                                <div key={index}>
                                    <img
                                        src={`${item}`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{
                                            borderBottomLeftRadius: 4,
                                            borderBottomRightRadius: 4,
                                            display: "block",
                                            width: "100%",
                                        }}
                                    />
                                </div>
                            ))}
                        </Masonry>
                    </Suspense>
                </Box>
            </Suspense>
        </>
    );
}

function SkeletonComp() {
    const darkTheme = createTheme({
        palette : {
            mode: "dark"
        }
    });
    return (
        <ThemeProvider theme={darkTheme}>
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                padding: "16px",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgb(6,12,32)",
                gap:"16px"
            }}
        >
            <Skeleton
                variant="rectangular"
                width={400}
                height={400}
                sx={{
                    borderRadius: "16px"
                }}

            />
            <Skeleton
                variant="rectangular"
                width={400}
                height={400}
                sx={{
                    borderRadius: "16px"
                }}
            />
            <Skeleton
                variant="rectangular"
                width={400}
                height={400}
                sx={{
                    borderRadius: "16px"
                }}
            />
            <Skeleton
                variant="rectangular"
                width={400}
                height={400}
                sx={{
                    borderRadius: "16px"
                }}
            />
            <Skeleton
                variant="rectangular"
                width={400}
                height={400}
                sx={{
                    borderRadius: "16px"
                }}
            />
            <Skeleton
                variant="rectangular"
                width={400}
                height={400}
                sx={{
                    borderRadius: "16px"
                }}
            />
            <Skeleton
                variant="rectangular"
                width={400}
                height={400}
                sx={{
                    borderRadius: "16px"
                }}
            />
            <Skeleton
                variant="rectangular"
                width={400}
                height={400}
                sx={{
                    borderRadius: "16px"
                }}
            />
            <Skeleton
                variant="rectangular"
                width={400}
                height={400}
                sx={{
                    borderRadius: "16px"
                }}
            />
            <Skeleton
                variant="rectangular"
                width={400}
                height={400}
                sx={{
                    borderRadius: "16px"
                }}
            />
        </Box>
        </ThemeProvider>
    );
}
