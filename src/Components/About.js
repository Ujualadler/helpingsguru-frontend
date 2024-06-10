import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const aboutData = [
    {
      img: "https://s3-alpha-sig.figma.com/img/7f92/2319/c291e52f776abb757133bc2d7ffedef0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRZvij3gZfmxm2FON3iimFCEl6p0-vcDDoHmfqRqav~0b5lBuVthgZXdjKWEldvsjFkmcWmAVnJV60MN~SP2TWGEpuw4EF-5Q-7MgMJ7E7afzwDNHrIoJCk241tH-N0YlG~m~0vu1hm2v-ZHVd47ChHxMw7q13ZlHAEzdSQbXJn2v4koblEYMkxekj8efekgj603el2yMx504hSX2fWR2g8QcSDcJzaek-NkkTOdCOlpeq6Ul8ZUPvA4Ql69KIJsB5V-jPLjNk-fD~TDENVsuzaoyP8B0slFW6DkDHcy~L~6JQi3Myysim76OTz3xwKqm3-F02G-MGFTrCFPWX1P-A__",
      name: "Educational Events & Roundtables",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/7f92/2319/c291e52f776abb757133bc2d7ffedef0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRZvij3gZfmxm2FON3iimFCEl6p0-vcDDoHmfqRqav~0b5lBuVthgZXdjKWEldvsjFkmcWmAVnJV60MN~SP2TWGEpuw4EF-5Q-7MgMJ7E7afzwDNHrIoJCk241tH-N0YlG~m~0vu1hm2v-ZHVd47ChHxMw7q13ZlHAEzdSQbXJn2v4koblEYMkxekj8efekgj603el2yMx504hSX2fWR2g8QcSDcJzaek-NkkTOdCOlpeq6Ul8ZUPvA4Ql69KIJsB5V-jPLjNk-fD~TDENVsuzaoyP8B0slFW6DkDHcy~L~6JQi3Myysim76OTz3xwKqm3-F02G-MGFTrCFPWX1P-A__",
      name: "Staff Recruitment Solutions",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/7f92/2319/c291e52f776abb757133bc2d7ffedef0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRZvij3gZfmxm2FON3iimFCEl6p0-vcDDoHmfqRqav~0b5lBuVthgZXdjKWEldvsjFkmcWmAVnJV60MN~SP2TWGEpuw4EF-5Q-7MgMJ7E7afzwDNHrIoJCk241tH-N0YlG~m~0vu1hm2v-ZHVd47ChHxMw7q13ZlHAEzdSQbXJn2v4koblEYMkxekj8efekgj603el2yMx504hSX2fWR2g8QcSDcJzaek-NkkTOdCOlpeq6Ul8ZUPvA4Ql69KIJsB5V-jPLjNk-fD~TDENVsuzaoyP8B0slFW6DkDHcy~L~6JQi3Myysim76OTz3xwKqm3-F02G-MGFTrCFPWX1P-A__",
      name: "Teacher Training Certification Programme",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/7f92/2319/c291e52f776abb757133bc2d7ffedef0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRZvij3gZfmxm2FON3iimFCEl6p0-vcDDoHmfqRqav~0b5lBuVthgZXdjKWEldvsjFkmcWmAVnJV60MN~SP2TWGEpuw4EF-5Q-7MgMJ7E7afzwDNHrIoJCk241tH-N0YlG~m~0vu1hm2v-ZHVd47ChHxMw7q13ZlHAEzdSQbXJn2v4koblEYMkxekj8efekgj603el2yMx504hSX2fWR2g8QcSDcJzaek-NkkTOdCOlpeq6Ul8ZUPvA4Ql69KIJsB5V-jPLjNk-fD~TDENVsuzaoyP8B0slFW6DkDHcy~L~6JQi3Myysim76OTz3xwKqm3-F02G-MGFTrCFPWX1P-A__",
      name: "Educational Magazine Hub",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/7f92/2319/c291e52f776abb757133bc2d7ffedef0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRZvij3gZfmxm2FON3iimFCEl6p0-vcDDoHmfqRqav~0b5lBuVthgZXdjKWEldvsjFkmcWmAVnJV60MN~SP2TWGEpuw4EF-5Q-7MgMJ7E7afzwDNHrIoJCk241tH-N0YlG~m~0vu1hm2v-ZHVd47ChHxMw7q13ZlHAEzdSQbXJn2v4koblEYMkxekj8efekgj603el2yMx504hSX2fWR2g8QcSDcJzaek-NkkTOdCOlpeq6Ul8ZUPvA4Ql69KIJsB5V-jPLjNk-fD~TDENVsuzaoyP8B0slFW6DkDHcy~L~6JQi3Myysim76OTz3xwKqm3-F02G-MGFTrCFPWX1P-A__",
      name: "Innovative IFP Panels",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/7f92/2319/c291e52f776abb757133bc2d7ffedef0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRZvij3gZfmxm2FON3iimFCEl6p0-vcDDoHmfqRqav~0b5lBuVthgZXdjKWEldvsjFkmcWmAVnJV60MN~SP2TWGEpuw4EF-5Q-7MgMJ7E7afzwDNHrIoJCk241tH-N0YlG~m~0vu1hm2v-ZHVd47ChHxMw7q13ZlHAEzdSQbXJn2v4koblEYMkxekj8efekgj603el2yMx504hSX2fWR2g8QcSDcJzaek-NkkTOdCOlpeq6Ul8ZUPvA4Ql69KIJsB5V-jPLjNk-fD~TDENVsuzaoyP8B0slFW6DkDHcy~L~6JQi3Myysim76OTz3xwKqm3-F02G-MGFTrCFPWX1P-A__",
      name: "Edtech B2B Lead Generation",
    },
  ];

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={{ xs: 10, md: 0 }}
      >
        <Box
          width={"90%"}
          height={"80%"}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          position={"relative"}
        >
          <Box
            sx={{
              width: { md: "200px", xs: "150px" },
              height: { md: "200px", xs: "150px" },
              background: "#6D7BFE",
              borderRadius: 10,
            }}
          />
          <Box
            sx={{
              width: { md: "35%", xs: "40%" },
              height: { md: "30%", xs: "100%" },
              borderRadius: "20px",
              position: "absolute",
              top: { md: "16%", xs: "-50%" },
              left: { md: "13%", xs: "10%" },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
              src="https://s3-alpha-sig.figma.com/img/4dcc/3b87/5f08b510d8d814fd046d75634a5227fa?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=goQKrlR9K7VbdGo3nHs3bLIbFb~myV4NB2vIK-XRjmH51lC77hxUXRkR0hVM9pEDylfRXN9VxTFE8gjaH71GUWpQkRkhPPu7Z9UOOID9OCqaAO25IydexL8SKwU4HyNGe5rVQGGR8kQl89f0HAcbBPzBCr6LJ7og9nX~hiAKrxm85TiyyShVPtFMV5kAOquD~wr2qUBedLJhdjr~pj6BdrAUlcJiAx5b9JKdH3K0KoyShPFIsIF~2NVe1mNyVUQ7IMaf3G8dcL7NwukcRFx5F61mhsgScg39dwfg5cG5EnRYgvrLmInqRxdobVqZSJUyf~hp~11MTrbuY~9N1ZbBpg__"
            />
          </Box>
          <Box
            sx={{
              width: { md: "25%", xs: "35%" },
              height: { md: "20%", xs: "100%" },
              borderRadius: "20px",
              position: "absolute",
              top: { md: "25%", xs: "-40%" },
              right: { md: "20%", xs: "10%" },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
              src="https://s3-alpha-sig.figma.com/img/0e99/f073/d7b08529fc399553cfbe2fb09ec675b0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSrQQ8U-2Ql19s8M0dMIelqF4TAoAoA7yTppGZuRL4To1zfi85intw89azhJOMSxW1pNVgqXselD8ZmM5FnVQGw~eI6MREjkisBk3z7jJZhVbn1~AXKuuwgRn3SL76XIF2EpVOr7d5IIl5zPeUJHh7scShK79Y1pPn3kuFmU6MajUf8Rrwy78SNLy425Y24bEJdiuqOcn3UvH6lKcyLWJgatRBlE~aCQaAWEF7FoiSXcmHRQyWhlN52njmgbkuEjUZbQuNF3jqtDYxOdagp43dCtUa2FBhXrzg5epxA0PDsn~LZdmfCnVtrcyEfNjXazKgtukzYJxbSuG14u3aKZNg__"
            />
          </Box>
          <Box
            sx={{
              width: { md: "30%", xs: "35%" },
              height: { md: "25%", xs: "100%" },
              borderRadius: "20px",
              position: "absolute",
              bottom: { md: "25%", xs: "-70%" },
              right: { md: "25%", xs: "20%" },
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
              src="https://s3-alpha-sig.figma.com/img/19f2/7b1f/ec397d8e55dfdda9a6560e4d5de55933?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IU~scjTpfYND0GCEyd5QuVHPiwXPZjfDKPyrQJ~tiYlW7oLIQztCWujgGjygLV-~hI2JvNMvc8kE6CtzQYaF5lwEthivYKdWULjWuVBYRHqRFQaHOp5xlJQpQvtF4MpzfCK5mFPQw-DieeJBo5ED52IxYkuJzsplyyTHi75tqfjh4yvzDzNg4anT0S5rutyefB3OeDYUoLqKis3GIrIrfGszMR65GTyLFcDZgqmM9fXZChNt1KaUW36PqTpck8O6rvhSo6YdZ-nmqRqPRKYqzcJzgsGIhhN0qvWL-im7prERwQQeMQ3yF6rkXxsJBs7wKk0ohI-psVOpRb33NVZNlw__"
            />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} mt={{ xs: 5, md: 0 }}>
        <Box
          p={3}
          display={"flex"}
          justifyContent={"center"}
          gap={1}
          flexDirection={"column"}
          mt={6}
        >
          <Typography
            fontWeight={700}
            fontSize={"18px"}
            mb={1}
            color={"#100854"}
          >
            About Us
          </Typography>
          <Typography
            maxWidth={{ md: "80%", xs: "100%" }}
            fontWeight={400}
            mb={2}
            fontSize={"15px"}
            color={"#100854"}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, 
          </Typography>

          <Button
            onClick={() => navigate("/about-us")}
            variant="contained"
            sx={{
              textTransform: "none",
              background: "#FF8126",
              width: { md: "30%", xs: "100%" },
              borderRadius: 2,
            }}
          >
            Read More
          </Button>
          <Box container mt={3}>
            <Typography
              fontWeight={700}
              fontSize={"18px"}
              mb={1}
              color={"#100854"}
            >
              Our Services
            </Typography>
            <Grid
              container
              mt={1}
              spacing={3}
              width={{ md: "90%", xs: "100%" }}
            >
              {aboutData.map((data, index) => (
                <Grid item xs={4} key={index}>
                  <Box
                    display={"flex"}
                    // width={"100px"}
                    flexDirection={"column"}
                    gap={1}
                  >
                    <img
                      style={{ height: "80px", width: "80px" }}
                      src="https://s3-alpha-sig.figma.com/img/7f92/2319/c291e52f776abb757133bc2d7ffedef0?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRZvij3gZfmxm2FON3iimFCEl6p0-vcDDoHmfqRqav~0b5lBuVthgZXdjKWEldvsjFkmcWmAVnJV60MN~SP2TWGEpuw4EF-5Q-7MgMJ7E7afzwDNHrIoJCk241tH-N0YlG~m~0vu1hm2v-ZHVd47ChHxMw7q13ZlHAEzdSQbXJn2v4koblEYMkxekj8efekgj603el2yMx504hSX2fWR2g8QcSDcJzaek-NkkTOdCOlpeq6Ul8ZUPvA4Ql69KIJsB5V-jPLjNk-fD~TDENVsuzaoyP8B0slFW6DkDHcy~L~6JQi3Myysim76OTz3xwKqm3-F02G-MGFTrCFPWX1P-A__"
                    />
                    <Typography
                      ml={2}
                      textAlign={"start"}
                      fontSize={"13px"}
                      fontWeight={600}
                    >
                      {data.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
              <Button
                onClick={() => navigate("/our-service")}
                variant="contained"
                sx={{
                  textTransform: "none",
                  background: "#FF8126",
                  width: { md: "30%", xs: "100%" },
                  borderRadius: 2,
                  ml:4,
                  mt:1

                }}
              >
                Read More
              </Button>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;
