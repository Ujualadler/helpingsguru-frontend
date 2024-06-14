// import { Grid, Rating, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import React from "react";

// function Testimonials() {
//   const [value, setValue] = React.useState(5);

//   const testimonialData = [
//     {
//       nname: "Felbin",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesettingindustry",
//       img: "https://s3-alpha-sig.figma.com/img/b220/54ac/3fcf29a0776a645093bbda2fc2666665?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYCOfF1FgjuNv4IH8dvn7muSBSb8GZOLmDA7qE0HFzSimqYj99raLPbbQMF49VJXIoQL8I6L4xiM8U0pQla0QuoyRbO3xPa8EGBxk2YBo9bN9GEotc35pv3BvRq-D~EHU3u5OuqVQ6Ky8eOxlRvrDVRyZMJ1nD~-2XrQi5pjJomXW8K4ynGg-JWc9FCOr5vCD7ztUerUBauQNGxtBH1qts1VJnKDVgtgr6ICLn9khbWqpkQeqS5SDnW6zGTQBCHGrHyuiIgYh3etQegJ6DfCFJpZMpQZv5zaQ3YZ~aB6pjOxmsCOvQqXVlswuj3J5G5mbSQ6uoNbihIkDapxQCs4Rw__",
//     },
//     {
//       nname: "Felbin",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesettingindustry",
//       img: "https://s3-alpha-sig.figma.com/img/b220/54ac/3fcf29a0776a645093bbda2fc2666665?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYCOfF1FgjuNv4IH8dvn7muSBSb8GZOLmDA7qE0HFzSimqYj99raLPbbQMF49VJXIoQL8I6L4xiM8U0pQla0QuoyRbO3xPa8EGBxk2YBo9bN9GEotc35pv3BvRq-D~EHU3u5OuqVQ6Ky8eOxlRvrDVRyZMJ1nD~-2XrQi5pjJomXW8K4ynGg-JWc9FCOr5vCD7ztUerUBauQNGxtBH1qts1VJnKDVgtgr6ICLn9khbWqpkQeqS5SDnW6zGTQBCHGrHyuiIgYh3etQegJ6DfCFJpZMpQZv5zaQ3YZ~aB6pjOxmsCOvQqXVlswuj3J5G5mbSQ6uoNbihIkDapxQCs4Rw__",
//     },
//     {
//       nname: "Felbin",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesettingindustry",
//       img: "https://s3-alpha-sig.figma.com/img/b220/54ac/3fcf29a0776a645093bbda2fc2666665?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYCOfF1FgjuNv4IH8dvn7muSBSb8GZOLmDA7qE0HFzSimqYj99raLPbbQMF49VJXIoQL8I6L4xiM8U0pQla0QuoyRbO3xPa8EGBxk2YBo9bN9GEotc35pv3BvRq-D~EHU3u5OuqVQ6Ky8eOxlRvrDVRyZMJ1nD~-2XrQi5pjJomXW8K4ynGg-JWc9FCOr5vCD7ztUerUBauQNGxtBH1qts1VJnKDVgtgr6ICLn9khbWqpkQeqS5SDnW6zGTQBCHGrHyuiIgYh3etQegJ6DfCFJpZMpQZv5zaQ3YZ~aB6pjOxmsCOvQqXVlswuj3J5G5mbSQ6uoNbihIkDapxQCs4Rw__",
//     },
//     {
//       nname: "Felbin",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesettingindustry",
//       img: "https://s3-alpha-sig.figma.com/img/b220/54ac/3fcf29a0776a645093bbda2fc2666665?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYCOfF1FgjuNv4IH8dvn7muSBSb8GZOLmDA7qE0HFzSimqYj99raLPbbQMF49VJXIoQL8I6L4xiM8U0pQla0QuoyRbO3xPa8EGBxk2YBo9bN9GEotc35pv3BvRq-D~EHU3u5OuqVQ6Ky8eOxlRvrDVRyZMJ1nD~-2XrQi5pjJomXW8K4ynGg-JWc9FCOr5vCD7ztUerUBauQNGxtBH1qts1VJnKDVgtgr6ICLn9khbWqpkQeqS5SDnW6zGTQBCHGrHyuiIgYh3etQegJ6DfCFJpZMpQZv5zaQ3YZ~aB6pjOxmsCOvQqXVlswuj3J5G5mbSQ6uoNbihIkDapxQCs4Rw__",
//     },
//   ];

//   return (
//     <Box mt={5}>
//       <Typography
//         textAlign={"center"}
//         fontWeight={800}
//         fontSize={{ xs: "1.5rem", md: "2rem" }}
//         color={"#100854"}
//         mb={3}
//       >
//         Testimonials
//       </Typography>
//       <Box
//         display={"flex"}
//         justifyContent={"center"}
//         alignItems={"center"}
//         width={"100%"}
//       >
//         <Grid container width={"70%"}>
//           {testimonialData.map((data, index) => (
//             <Grid item md={3} key={index}>
//               <Box
//                 display={"flex"}
//                 flexDirection={"column"}
//                 alignItems={"center"}
//                 gap={1}
//                 width={"100%"}
//               >
//                 <img
//                   style={{
//                     width: "142px",
//                     height: "220px",
//                     borderRadius: "190px",
//                   }}
//                   src="https://s3-alpha-sig.figma.com/img/b220/54ac/3fcf29a0776a645093bbda2fc2666665?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYCOfF1FgjuNv4IH8dvn7muSBSb8GZOLmDA7qE0HFzSimqYj99raLPbbQMF49VJXIoQL8I6L4xiM8U0pQla0QuoyRbO3xPa8EGBxk2YBo9bN9GEotc35pv3BvRq-D~EHU3u5OuqVQ6Ky8eOxlRvrDVRyZMJ1nD~-2XrQi5pjJomXW8K4ynGg-JWc9FCOr5vCD7ztUerUBauQNGxtBH1qts1VJnKDVgtgr6ICLn9khbWqpkQeqS5SDnW6zGTQBCHGrHyuiIgYh3etQegJ6DfCFJpZMpQZv5zaQ3YZ~aB6pjOxmsCOvQqXVlswuj3J5G5mbSQ6uoNbihIkDapxQCs4Rw__"
//                 />
//                 <Typography fontWeight={700} fontSize={"25px"}>
//                   Felbin
//                 </Typography>
//                 <Typography
//                   textAlign={"center"}
//                   fontWeight={400}
//                   fontSize={"12px"}
//                 >
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry
//                 </Typography>
//                 <Rating
//                   name="simple-controlled"
//                   value={value}
//                   onChange={(event, newValue) => {
//                     setValue(newValue);
//                   }}
//                 />
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default Testimonials;

import {
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { keyframes } from "@emotion/react";

const eventData = [
  {
    name: "Jhon",
    image: "/images/testimonial1.avif",
  },
  {
    name: "Aegon",
    image: "/images/testimonial2.avif",
  },
  {
    name: "Sansa",
    image: "/images/testimonial3.avif",
  },
  {
    name: "Aria",
    image: "/images/testimonial4.jpg",
  },
];

function Testimonials() {
  const [value, setValue] = React.useState(5);
  const scrollRef = useRef(null);
  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector("[data-card]").offsetWidth; // Assuming each card has a data-card attribute
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const fadeInAnimation = keyframes`
  0% {
    transform:scale(1.5)
  }
  100% {
    transform:scale(1)
  }
`;
  return (
    <Box mt={5}>
      <Typography
        textAlign={"center"}
        fontWeight={800}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"#100854"}
        mb={3}
      >
        Testimonials
      </Typography>
      <Grid
        container
        borderRadius={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <Title title={"Experiential Learning"} /> */}

        <Box
          position="relative"
          maxWidth={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ lg: "50%", md: "60%", sm: "75%", xs: "100%" }}
        >
          <Box
            display={"flex"}
            justifyContent={{ xs: "start" }}
            overflow={"auto"}
            width={{
              xs: "90%",
              md: "70%",
            }}
            sx={{ scrollbarWidth: "none" }}
            ref={scrollRef}
          >
            {eventData.map((data, index) => (
              <Box
                key={index}
                data-card
                sx={{
                  flex: "0 0 auto",
                  justifyContent: "center",
                  display: "flex",
                  width: { xs: "100%" },
                  animation: `${fadeInAnimation} ease 0.8s`,
                }}
                className="fade-in"
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  gap={1}
                  width={"100%"}
                >
                  <img
                    style={{
                      width: "142px",
                      height: "220px",
                      borderRadius: "190px",
                      objectFit: "cover",
                      background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                    }}
                    loading="lazy"
                    src={data.image}
                  />
                  <Typography fontWeight={700} fontSize={"25px"}>
                    {data.name}
                  </Typography>
                  <Typography
                    textAlign={"center"}
                    fontWeight={400}
                    fontSize={"12px"}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>

          {/* Navigation buttons overlay */}
          <IconButton
            onClick={() => handleScroll("left")}
            size="small"
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              background: "#FF8126",
              color: "white",
              "&:hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            <ArrowLeftIcon />
          </IconButton>
          <IconButton
            onClick={() => handleScroll("right")}
            size="small"
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              background: "#FF8126",
              color: "white",
              "&:hover": {
                background: "grey",
                color: "white",
              },
            }}
          >
            <ArrowRightIcon />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
}

export default Testimonials;
