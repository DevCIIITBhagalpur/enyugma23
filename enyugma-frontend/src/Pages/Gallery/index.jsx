import { Box, Skeleton, ThemeProvider, createTheme } from "@mui/material";
import "./index.scss";
import { Masonry } from "@mui/lab";
import { gallery as list } from "../../Components/Gallery/list.js";
import Navbar from "../../Components/Navbar/index.jsx";
import { Suspense } from "react";

export default function GalleryPage() {
    return (
        <>
            <Navbar />
            <Box className="gallerybox">
                <h1>Gallery</h1>
                <Suspense fallback={<SkeletonComp />}>
                    <Masonry columns={3} spacing={2}>
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
