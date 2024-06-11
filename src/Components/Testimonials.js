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
    name: "School Event",
    image:
      "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
  },
  {
    name: "School Event",
    image:
      "https://s3-alpha-sig.figma.com/img/2172/54a8/d8fe46ece70e41ff2ca794620ed8c853?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7qsyTuZb4bKuHprW2SkEfyt2d9kxtkuVQSQjbNREjlA~HDxeGi8JLTarqkYW6GyNo8VOYD~HXuL41B8Qy6YIf9VCvD0aj6~bGeIBGLAPovjPWCKczR7zfpTesYUGGIcHfK43zhhzRjSvI-yAzHf1yJm6zTtCpahdr-0nXu5LI8gsITYgSS6~3Oi~L2WfjO7Bw5yRh4hqHoa1nB03cFlPIyM3z6eaaY2EobgbeltrrOSFEp9YJcAQuvuxVNqBIzmfPGJpxeN8DiTOBqFaxoOYYzmsai4vyDxUazyRNQH2hCxryDarJj4KYy98SKyG1vJZ1a5EM5V1RpI0OR78IdzKA__",
  },
  {
    name: "School Event",
    image:
      "https://s3-alpha-sig.figma.com/img/288a/30db/32b0aa2060404a1926084522255fc726?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOTFo-0BtOHTblSp8RGndL-Vw2W57bwlkzRKlWD8OMnEVIXu5iXc46FXsSS3HQaHRpKcJTgQ404290YfrTytQgBGnt3pClYXjHxkCRFWU6n7LGLtIABLtvSJqT8pyxhbk80hedpGviF0DQSotEkprp2KFVKut0kADsxST4xX3JSmgXKwfcYMmFgYfq-afpYQX~c4mG2BCS2kOC4e5R39GRxKWF9sPKHFQavDBDycnuJZcH9w21vnOtu7oPUPNYTWc9P5ewDR2l2quSOJClheClqB1dizXf-MLAcBeBoLwYEmgfqlZ5Fcuu-ZWwa1sPzTbbr-d8yVfcMk0BllPBN5uA__",
  },
  {
    name: "School Event",
    image:
      "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
  },
  {
    name: "School Event",
    image:
      "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
  },
  {
    name: "School Event",
    image:
      "https://s3-alpha-sig.figma.com/img/2172/54a8/d8fe46ece70e41ff2ca794620ed8c853?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7qsyTuZb4bKuHprW2SkEfyt2d9kxtkuVQSQjbNREjlA~HDxeGi8JLTarqkYW6GyNo8VOYD~HXuL41B8Qy6YIf9VCvD0aj6~bGeIBGLAPovjPWCKczR7zfpTesYUGGIcHfK43zhhzRjSvI-yAzHf1yJm6zTtCpahdr-0nXu5LI8gsITYgSS6~3Oi~L2WfjO7Bw5yRh4hqHoa1nB03cFlPIyM3z6eaaY2EobgbeltrrOSFEp9YJcAQuvuxVNqBIzmfPGJpxeN8DiTOBqFaxoOYYzmsai4vyDxUazyRNQH2hCxryDarJj4KYy98SKyG1vJZ1a5EM5V1RpI0OR78IdzKA__",
  },
  {
    name: "School Event",
    image:
      "https://s3-alpha-sig.figma.com/img/288a/30db/32b0aa2060404a1926084522255fc726?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOTFo-0BtOHTblSp8RGndL-Vw2W57bwlkzRKlWD8OMnEVIXu5iXc46FXsSS3HQaHRpKcJTgQ404290YfrTytQgBGnt3pClYXjHxkCRFWU6n7LGLtIABLtvSJqT8pyxhbk80hedpGviF0DQSotEkprp2KFVKut0kADsxST4xX3JSmgXKwfcYMmFgYfq-afpYQX~c4mG2BCS2kOC4e5R39GRxKWF9sPKHFQavDBDycnuJZcH9w21vnOtu7oPUPNYTWc9P5ewDR2l2quSOJClheClqB1dizXf-MLAcBeBoLwYEmgfqlZ5Fcuu-ZWwa1sPzTbbr-d8yVfcMk0BllPBN5uA__",
  },
  {
    name: "School Event",
    image:
      "https://s3-alpha-sig.figma.com/img/7a24/ebc8/d55ac8f594539fa041632fb6a3ae0441?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtxbA3trlTeK~cLlGOS5sTo9l3kd3wpjy77~ljTwzC1RdbJQayb14SWCDLBNjPVJZMALpYlluXKVPayk5lcy2qrn8tNu-Wm1fY76Wei4BDo5trx0w8v2hEUdgZUNWS~QfFDQ995Ke2EMn-1hRjIir62k9jIkTJj0PJL5tdVh~La-8ZXnxASu~-NtHRS2ydCJg4IT-FXnj0PT5FIv3C6t6KCPSwNqgFZnBIXH4hdJRc0gQnnzdhmVKO-u2lKT3TIyy-rxfuR2iarM3yWs8cDidSvfmq3EwsHDZbjAcjANf4KkvSIwkRlOcNAjLnkb0GrpjQNegrzLr~nBCEAZKK24aQ__",
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
                    }}
                    src="/images/about3.jpg"
                  />
                  <Typography fontWeight={700} fontSize={"25px"}>
                    Felbin
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
              zIndex:2,
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
