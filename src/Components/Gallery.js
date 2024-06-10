// import { Grid, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import React from "react";

// function Gallery() {
//   return (
//     <Box mt={5}>
//       <Typography
//         textAlign={"center"}
//         fontWeight={800}
//         fontSize={"2vw"}
//         color={"#100854"}
//         mb={3}
//       >
//         Gallery
//       </Typography>
//       <Box
//         width={"100%"}
//         display={"flex"}
//         justifyContent={"center"}
//         alignItems={"center"}
//       >
//         <Grid container sx={{ width: "70%" }}>
//           <Grid
//             item
//             md={3}
//             px={1}
//             py={3}
//             display={"flex"}
//             justifyContent={"center"}
//             // alignItems={"center"}
//           >
//             <img
//               style={{ height: "221px", width: "100%" }}
//               src="https://s3-alpha-sig.figma.com/img/288a/30db/32b0aa2060404a1926084522255fc726?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOTFo-0BtOHTblSp8RGndL-Vw2W57bwlkzRKlWD8OMnEVIXu5iXc46FXsSS3HQaHRpKcJTgQ404290YfrTytQgBGnt3pClYXjHxkCRFWU6n7LGLtIABLtvSJqT8pyxhbk80hedpGviF0DQSotEkprp2KFVKut0kADsxST4xX3JSmgXKwfcYMmFgYfq-afpYQX~c4mG2BCS2kOC4e5R39GRxKWF9sPKHFQavDBDycnuJZcH9w21vnOtu7oPUPNYTWc9P5ewDR2l2quSOJClheClqB1dizXf-MLAcBeBoLwYEmgfqlZ5Fcuu-ZWwa1sPzTbbr-d8yVfcMk0BllPBN5uA__"
//             />
//           </Grid>
//           <Grid item container md={9}>
//             <Grid item md={3} px={1}>
//               <img
//                 style={{ height: "132px", width: "100%" }}
//                 src="https://s3-alpha-sig.figma.com/img/0e99/f073/d7b08529fc399553cfbe2fb09ec675b0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSrQQ8U-2Ql19s8M0dMIelqF4TAoAoA7yTppGZuRL4To1zfi85intw89azhJOMSxW1pNVgqXselD8ZmM5FnVQGw~eI6MREjkisBk3z7jJZhVbn1~AXKuuwgRn3SL76XIF2EpVOr7d5IIl5zPeUJHh7scShK79Y1pPn3kuFmU6MajUf8Rrwy78SNLy425Y24bEJdiuqOcn3UvH6lKcyLWJgatRBlE~aCQaAWEF7FoiSXcmHRQyWhlN52njmgbkuEjUZbQuNF3jqtDYxOdagp43dCtUa2FBhXrzg5epxA0PDsn~LZdmfCnVtrcyEfNjXazKgtukzYJxbSuG14u3aKZNg__"
//               />
//             </Grid>
//             <Grid item md={2} px={1}>
//               <img
//                 style={{ height: "132px", width: "100%" }}
//                 src="https://s3-alpha-sig.figma.com/img/0e99/f073/d7b08529fc399553cfbe2fb09ec675b0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSrQQ8U-2Ql19s8M0dMIelqF4TAoAoA7yTppGZuRL4To1zfi85intw89azhJOMSxW1pNVgqXselD8ZmM5FnVQGw~eI6MREjkisBk3z7jJZhVbn1~AXKuuwgRn3SL76XIF2EpVOr7d5IIl5zPeUJHh7scShK79Y1pPn3kuFmU6MajUf8Rrwy78SNLy425Y24bEJdiuqOcn3UvH6lKcyLWJgatRBlE~aCQaAWEF7FoiSXcmHRQyWhlN52njmgbkuEjUZbQuNF3jqtDYxOdagp43dCtUa2FBhXrzg5epxA0PDsn~LZdmfCnVtrcyEfNjXazKgtukzYJxbSuG14u3aKZNg__"
//               />
//             </Grid>
//             <Grid item md={4} px={1}>
//               <img
//                 style={{ height: "132px", width: "100%" }}
//                 src="https://s3-alpha-sig.figma.com/img/0e99/f073/d7b08529fc399553cfbe2fb09ec675b0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSrQQ8U-2Ql19s8M0dMIelqF4TAoAoA7yTppGZuRL4To1zfi85intw89azhJOMSxW1pNVgqXselD8ZmM5FnVQGw~eI6MREjkisBk3z7jJZhVbn1~AXKuuwgRn3SL76XIF2EpVOr7d5IIl5zPeUJHh7scShK79Y1pPn3kuFmU6MajUf8Rrwy78SNLy425Y24bEJdiuqOcn3UvH6lKcyLWJgatRBlE~aCQaAWEF7FoiSXcmHRQyWhlN52njmgbkuEjUZbQuNF3jqtDYxOdagp43dCtUa2FBhXrzg5epxA0PDsn~LZdmfCnVtrcyEfNjXazKgtukzYJxbSuG14u3aKZNg__"
//               />
//             </Grid>
//             <Grid item md={3} px={1}>
//               <img
//                 style={{ height: "132px", width: "100%" }}
//                 src="https://s3-alpha-sig.figma.com/img/0e99/f073/d7b08529fc399553cfbe2fb09ec675b0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSrQQ8U-2Ql19s8M0dMIelqF4TAoAoA7yTppGZuRL4To1zfi85intw89azhJOMSxW1pNVgqXselD8ZmM5FnVQGw~eI6MREjkisBk3z7jJZhVbn1~AXKuuwgRn3SL76XIF2EpVOr7d5IIl5zPeUJHh7scShK79Y1pPn3kuFmU6MajUf8Rrwy78SNLy425Y24bEJdiuqOcn3UvH6lKcyLWJgatRBlE~aCQaAWEF7FoiSXcmHRQyWhlN52njmgbkuEjUZbQuNF3jqtDYxOdagp43dCtUa2FBhXrzg5epxA0PDsn~LZdmfCnVtrcyEfNjXazKgtukzYJxbSuG14u3aKZNg__"
//               />
//             </Grid>
//             <Grid item md={4} px={1} py={1}>
//               <img
//                 style={{ height: "132px", width: "100%" }}
//                 src="https://s3-alpha-sig.figma.com/img/0e99/f073/d7b08529fc399553cfbe2fb09ec675b0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSrQQ8U-2Ql19s8M0dMIelqF4TAoAoA7yTppGZuRL4To1zfi85intw89azhJOMSxW1pNVgqXselD8ZmM5FnVQGw~eI6MREjkisBk3z7jJZhVbn1~AXKuuwgRn3SL76XIF2EpVOr7d5IIl5zPeUJHh7scShK79Y1pPn3kuFmU6MajUf8Rrwy78SNLy425Y24bEJdiuqOcn3UvH6lKcyLWJgatRBlE~aCQaAWEF7FoiSXcmHRQyWhlN52njmgbkuEjUZbQuNF3jqtDYxOdagp43dCtUa2FBhXrzg5epxA0PDsn~LZdmfCnVtrcyEfNjXazKgtukzYJxbSuG14u3aKZNg__"
//               />
//             </Grid>
//             <Grid item md={4} px={1} py={1}>
//               <img
//                 style={{ height: "152px", width: "100%" }}
//                 src="https://s3-alpha-sig.figma.com/img/0e99/f073/d7b08529fc399553cfbe2fb09ec675b0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSrQQ8U-2Ql19s8M0dMIelqF4TAoAoA7yTppGZuRL4To1zfi85intw89azhJOMSxW1pNVgqXselD8ZmM5FnVQGw~eI6MREjkisBk3z7jJZhVbn1~AXKuuwgRn3SL76XIF2EpVOr7d5IIl5zPeUJHh7scShK79Y1pPn3kuFmU6MajUf8Rrwy78SNLy425Y24bEJdiuqOcn3UvH6lKcyLWJgatRBlE~aCQaAWEF7FoiSXcmHRQyWhlN52njmgbkuEjUZbQuNF3jqtDYxOdagp43dCtUa2FBhXrzg5epxA0PDsn~LZdmfCnVtrcyEfNjXazKgtukzYJxbSuG14u3aKZNg__"
//               />
//             </Grid>
//             <Grid item md={3} px={1} py={1}>
//               <img
//                 style={{ height: "180px", width: "100%" }}
//                 src="https://s3-alpha-sig.figma.com/img/288a/30db/32b0aa2060404a1926084522255fc726?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOTFo-0BtOHTblSp8RGndL-Vw2W57bwlkzRKlWD8OMnEVIXu5iXc46FXsSS3HQaHRpKcJTgQ404290YfrTytQgBGnt3pClYXjHxkCRFWU6n7LGLtIABLtvSJqT8pyxhbk80hedpGviF0DQSotEkprp2KFVKut0kADsxST4xX3JSmgXKwfcYMmFgYfq-afpYQX~c4mG2BCS2kOC4e5R39GRxKWF9sPKHFQavDBDycnuJZcH9w21vnOtu7oPUPNYTWc9P5ewDR2l2quSOJClheClqB1dizXf-MLAcBeBoLwYEmgfqlZ5Fcuu-ZWwa1sPzTbbr-d8yVfcMk0BllPBN5uA__"
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// export default Gallery;

import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { keyframes } from "@emotion/react";
import { galleryService } from "../Services/galleryService";
import { API_URL } from "../Services/url";

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
      "https://s3-alpha-sig.figma.com/img/0e99/f073/d7b08529fc399553cfbe2fb09ec675b0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSrQQ8U-2Ql19s8M0dMIelqF4TAoAoA7yTppGZuRL4To1zfi85intw89azhJOMSxW1pNVgqXselD8ZmM5FnVQGw~eI6MREjkisBk3z7jJZhVbn1~AXKuuwgRn3SL76XIF2EpVOr7d5IIl5zPeUJHh7scShK79Y1pPn3kuFmU6MajUf8Rrwy78SNLy425Y24bEJdiuqOcn3UvH6lKcyLWJgatRBlE~aCQaAWEF7FoiSXcmHRQyWhlN52njmgbkuEjUZbQuNF3jqtDYxOdagp43dCtUa2FBhXrzg5epxA0PDsn~LZdmfCnVtrcyEfNjXazKgtukzYJxbSuG14u3aKZNg__",
  },
  {
    name: "School Event",
    image:
      "https://s3-alpha-sig.figma.com/img/19f2/7b1f/ec397d8e55dfdda9a6560e4d5de55933?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IU~scjTpfYND0GCEyd5QuVHPiwXPZjfDKPyrQJ~tiYlW7oLIQztCWujgGjygLV-~hI2JvNMvc8kE6CtzQYaF5lwEthivYKdWULjWuVBYRHqRFQaHOp5xlJQpQvtF4MpzfCK5mFPQw-DieeJBo5ED52IxYkuJzsplyyTHi75tqfjh4yvzDzNg4anT0S5rutyefB3OeDYUoLqKis3GIrIrfGszMR65GTyLFcDZgqmM9fXZChNt1KaUW36PqTpck8O6rvhSo6YdZ-nmqRqPRKYqzcJzgsGIhhN0qvWL-im7prERwQQeMQ3yF6rkXxsJBs7wKk0ohI-psVOpRb33NVZNlw__",
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
];

function Gallery() {
  const scrollRef = useRef(null);
  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.querySelector("[data-card]").offsetWidth; // Assuming each card has a data-card attribute
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    const getGallery = async () => {
      try {
        const result = await galleryService.getGallery();
        console.log(result.data);
        if (result.data.success === true) {
          console.log(result.data.data);
          setGalleryData(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getGallery();
  }, []);

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
        fontSize={{xs:"1.5rem",md:'2rem'}}
        color={"#100854"}
        mb={3}
      >
        Gallery
      </Typography>
      <Grid container>
        {/* <Title title={"Experiential Learning"} /> */}

        <Box
          position="relative"
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          // alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={{xs: "start", sm:"center"}}
            overflow={"auto"}
            width={{
              xs: "90%",
              md: "80%",
            }}
            sx={{ scrollbarWidth: "none" }}
            ref={scrollRef}
          >
            {galleryData.length>0 && galleryData.map((data, index) => (
              <Box
                key={index}
                data-card
                sx={{
                  flex: "0 0 auto",
                  justifyContent: "center",
                  display: "flex",
                  width: { xs: "100%", sm: "50%", md: "25%" },
                  animation: `${fadeInAnimation} ease 0.8s`,
                }}
                className="fade-in"
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  width={"80%"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Box width={"100%"} position={"relative"} overflow={"hidden"}>
                    <img
                      src={`${API_URL}api/v1/image/${data}`}
                      style={{
                        width: "100%",
                        height: "35vh",
                        filter: "brightness(80%)",
                      }}
                    />
                  </Box>
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

export default Gallery;
