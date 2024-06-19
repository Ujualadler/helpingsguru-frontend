import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const aboutusData = [
  {
    title: "CBSE Schools",
    img: "https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8499.jpg?t=st=1717833954~exp=1717837554~hmac=5e641d9e3369c00e3c584a2709a235c7124746f016ee04ab49847fae76405b7c&w=740",
    count: "10,000",
  },
  {
    title: "ICSE Schools",
    img: "https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8499.jpg?t=st=1717833954~exp=1717837554~hmac=5e641d9e3369c00e3c584a2709a235c7124746f016ee04ab49847fae76405b7c&w=740",
    count: "400",
  },
  {
    title: "IB Schools",
    img: "https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8499.jpg?t=st=1717833954~exp=1717837554~hmac=5e641d9e3369c00e3c584a2709a235c7124746f016ee04ab49847fae76405b7c&w=740",
    count: "50",
  },
  {
    title: "State Board Schools",
    img: "https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8499.jpg?t=st=1717833954~exp=1717837554~hmac=5e641d9e3369c00e3c584a2709a235c7124746f016ee04ab49847fae76405b7c&w=740",
    count: "700",
  },
];

function AboutUs() {
  const { serviceName } = useParams();
  const videoId = "dQw4w9WgXcQ"; // Example YouTube video ID
  const url = `https://www.youtube.com/embed/${videoId}`;

  const achievmentsData = [
    {
      title: "Roundtables",
      img: "https://previews.123rf.com/images/sabelskaya/sabelskaya1908/sabelskaya190800765/128900118-team-of-colleagues-holding-giant-golden-cup-trophy-and-celebrating-goal-achievement-flat-vector.jpg",
      count: "21",
    },
    {
      title: "Summits",
      img: "https://previews.123rf.com/images/sabelskaya/sabelskaya1908/sabelskaya190800765/128900118-team-of-colleagues-holding-giant-golden-cup-trophy-and-celebrating-goal-achievement-flat-vector.jpg",
      count: "5",
    },
  ];
  return (
    <Box>
      <Box
        height={{ xs: "250px" }}
        pt={5}
        sx={{
          background:
            "url(https://img.freepik.com/free-vector/gradient-blue-background_23-2149322706.jpg?size=626&ext=jpg&ga=GA1.1.563629714.1713778942&semt=ais_user)",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography mt={5} color={"white"} fontWeight={700} fontSize={"30px"}>
          {serviceName ? serviceName.replace(/-/g, " ") : "About Us"}
        </Typography>
      </Box>
      {!serviceName ? (
        <>
          {/* <Box
            mt={5}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            flexDirection={{ xs: "column", md: "row" }}
            gap={3}
          >
            <Box
              sx={{
                width: { md: "180px", xs: "0px" },
                height: { md: "200px", xs: "0px" },
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  background: "white",
                  objectFit: "contain",
                }}
                loading="lazy"
                src="/images/dotblue.webp"
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: "98%", md: "70%" },
                //   m: 4,
                paddingBottom: { md: "30%", xs: "70%" }, // 16:9 aspect ratio
                height: 0,
                overflow: "hidden",
                borderRadius: { md: "20px", xs: "0" },
              }}
            >
              <iframe
                src={`${url}?rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </Box>
          </Box> */}
          <Grid container width={"100%"}>
            <Grid
              item
              xs={12}
              md={6}
              py={{ md: 4, xs: 0 }}
              display={"flex"}
              justifyContent={{ md: "end", xs: "center" }}
              alignItems={"center"}
            >
              <Box
                sx={{
                  width: { lg: "70%", md: "90%", xs: "70%" },
                  height: { md: "400px", xs: "200px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "80%",
                    height: "60%",
                    borderRadius: "10px",
                    // background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                  }}
                  loading="lazy"
                  src="/images/logo1.png"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              mt={{ md: 5, xs: 0 }}
              p={{ lg: 4, xs: 3 }}
              pl={{ lg: 8, xs: 4 }}
            >
              <Typography fontWeight={600} fontSize={"18px"}>
                About Us
              </Typography>
              <Typography
                fontWeight={600}
                fontSize={{ md: "35px", xs: "20px" }}
                my={1}
                maxWidth={{ md: "70%", xs: "100%" }}
              >
                Gurus Happiness is our Happiness and Gurus pain is our pain
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"15px"}
                my={1}
                maxWidth={{ md: "70%", xs: "100%" }}
                color={"#100854"}
              >
                "As the Founder and CEO of Helping Gurus, Mr.Rajiv Bahl has
                dedicated himself to improving the educational landscape by
                providing support and services to schools and colleges across
                India. With a background in Computer Application from Manav
                Rachna International University, Mr. Bahl has quickly
                established personal connections with over 3,000 school
                authorities nationwide." Driven by a passion for identifying and
                solving the pain points of educators, Mr. Bahl and his team at
                Helping Gurus are committed to ensuring the happiness and
                success of every educator they work with. Their company motto,
                "Gurus Happiness is our Happiness and Gurus pain is our pain,"
                reflects their dedication to going above and beyond to meet the
                needs of their clients. Driven by a passion for identifying and
                solving the pain points of educators, Mr. Bahl and his team at
                Helping Gurus are committed to ensuring the happiness and
                success of every educator they work with. Their company motto,
                "Gurus Happiness is our Happiness and Gurus pain is our pain,"
                reflects their dedication to going above and beyond to meet the
                needs of their clients. The Helping Gurus team is always
                prepared to support schools and colleges, ensuring that
                educators receive the assistance they need to succeed.
              </Typography>
            </Grid>
          </Grid>
          <Box
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Grid
              container
              m={3}
              gap={{ xs: 4, md: 0 }}
              py={3}
              bgcolor={"#3034BB"}
              borderRadius={3}
              width={{ md: "70%", xs: "90%" }}
            >
              <Grid item xs={12} py={1} mb={2}>
                <Typography
                  textAlign={"center"}
                  fontSize={"20px"}
                  fontWeight={700}
                  color={"#FF8126"}
                >
                  Join Helping Gurus Network!
                </Typography>
              </Grid>
              {aboutusData.map((data) => (
                <Grid
                  item
                  xs={12}
                  md={3}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={"4px"}
                  >
                    <img
                      style={{
                        borderRadius: "50%",
                        height: "80px",
                        width: "80px",
                        objectFit: "cover",
                        background:
                          "linear-gradient(to right, #6D7BFE, #3034BB)",
                      }}
                      src={data.img}
                    />
                    <Typography
                      color={"#FF8126"}
                      fontWeight={700}
                      fontSize={"25px"}
                    >
                      {data.count}
                    </Typography>
                    <Typography
                      color={"#fff"}
                      fontWeight={600}
                      fontSize={"15px"}
                    >
                      {data.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
              <Grid item xs={12} mt={3} mb={2}>
                <Typography
                  textAlign={"center"}
                  fontSize={"20px"}
                  fontWeight={700}
                  color={"#FF8126"}
                >
                  Achievments
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={12}
                gap={{ md: 22, xs: 4 }}
                display={"flex"}
                flexDirection={{ md: "row", xs: "column" }}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {achievmentsData.map((data) => (
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={"4px"}
                  >
                    <img
                      style={{
                        borderRadius: "50%",
                        height: "80px",
                        width: "80px",
                        objectFit: "cover",
                        background:
                          "linear-gradient(to right, #6D7BFE, #3034BB)",
                      }}
                      src={data.img}
                    />
                    <Typography
                      color={"#FF8126"}
                      fontWeight={700}
                      fontSize={"25px"}
                    >
                      {data.count}
                    </Typography>
                    <Typography
                      color={"#fff"}
                      fontWeight={600}
                      fontSize={"15px"}
                    >
                      {data.title}
                    </Typography>
                  </Box>
                ))}
              </Grid>
              <Grid item xs={12} mt={4}>
                <Typography
                  textAlign={"center"}
                  fontSize={"15px"}
                  fontWeight={600}
                  color={"#FF8126"}
                >
                  Experience the difference with us!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        ""
      )}
      {serviceName?.replace(/-/g, " ") === "Founders Voice" && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Grid container width={"100%"} mt={{xs:5,md:0}}>
            <Grid
              item
              xs={12}
              md={5}
              py={{ md: 4, xs: 0 }}
              display={"flex"}
              justifyContent={{ md: "end", xs: "center" }}
              alignItems={"center"}
            >
              <Box
                sx={{
                  width: { md: "70%", xs: "70%" },
                  height: { md: "400px", xs: "200px" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    objectFit: "contain",
                    // background: "linear-gradient(to right, #6D7BFE, #3034BB)",
                  }}
                  loading="lazy"
                  src="/images/rajiv.png"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              mt={{ md: 5, xs: 0 }}
              p={{ md: 4, xs: 3 }}
              pl={{ md: 8, xs: 4 }}
            >
              <Typography
                fontWeight={600}
                fontSize={{ md: "25px", xs: "15px" }}
                my={1}
                maxWidth={{ md: "70%", xs: "100%" }}
              >
                गु चरण मशत शत नमन !!!
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"15px"}
                my={1}
                maxWidth={{ md: "85%", xs: "100%" }}
                color={"#100854"}
              >
                As the Founder and CEO of Helping Gurus, Mr. Rajiv Bahl has
                built a company that is dedicated to supporting educators and
                schools across India. With years of experience and a passion for
                making a difference in the education sector, Mr. Bahl and his
                team are committed to ensuring the happiness and success of
                every educator they work with. One of the key aspects of Helping
                Gurus' founder message is their motto,{" "}
                <strong>
                  "Gurus Happiness is our Happiness and Gurus pain is our pain."
                </strong>{" "}
                This reflects their deep understanding of the challenges that
                educators face on a daily basis and their commitment to
                addressing those challenges in a timely and effective manner. By
                putting the needs of educators first, Helping Gurus has been
                able to build strong and lasting relationships with over 5,000
                educational institutions across the country.
                <br />
                <br />
                One of the main objections that educators often face is the lack
                of support and resources available to them. Mr. Bahl and his
                team at Helping Gurus have made it their mission to provide
                educators with the tools and assistance they need to succeed.
                Whether it's through marketing strategy, relationship building,
                influencer outreach, or lead generation, Helping Gurus is always
                there to offer support and guidance to educators who are looking
                to improve their teaching practices.
                <br />
                <br /> Another key objection that educators face is the feeling
                of being overwhelmed and overworked. With the demands of
                teaching, lesson planning, and grading, educators often find
                themselves struggling to balance their workload and personal
                life. Helping Gurus recognizes this challenge and works with
                educators to find solutions that will help them manage their
                time more effectively and reduce their stress levels.
                <br />
                <br /> Ultimately, Mr. Bahl's vision for Helping Gurus is to
                bring a smile to the face of every educator they work with. By
                addressing the pain points and challenges that educators face on
                a daily basis, Helping Gurus is helping to improve the
                educational landscape and ensure that educators have the support
                they need to thrive. Through their dedication, passion, and
                commitment to excellence, Mr. Bahl and his team are truly making
                a difference in the lives of educators across India.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      {serviceName?.replace(/-/g, " ") === "Our Mission And Vision" && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Grid
            item
            container
            xs={12}
            md={12}
            width={{ md: "70%", xs: "90%" }}
            mt={{ md: 5, xs: 0 }}
            p={{ md: 4, xs: 3 }}
            pl={{ md: 0, xs: 4 }}
          >
            <Grid item md={12} xs={12}>
              <Typography
                fontWeight={600}
                fontSize={{ md: "35px", xs: "20px" }}
                my={1}
              >
                Our Mission & Vision
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"15px"}
                my={1}
                color={"#100854"}
              >
                "As the Founder and CEO of Helping Gurus, Mr.Rajiv Bahl has
                dedicated himself to improving the educational landscape by
                providing support and services to schools and colleges across
                India. With a background in Computer Application from Manav
                Rachna International University, Mr. Bahl has quickly
                established personal connections with over 3,000 school
                authorities nationwide." Driven by a passion for identifying and
                solving the pain points of educators, Mr. Bahl and his team at
                Helping Gurus are committed to ensuring the happiness and
                success of every educator they work with. Their company motto,
                "Gurus Happiness is our Happiness and Gurus pain is our pain,"
                reflects their dedication to going above and beyond to meet the
                needs of their clients. Driven by a passion for identifying and
                solving the pain points of educators, Mr. Bahl and his team at
                Helping Gurus are committed to ensuring the happiness and
                success of every educator they work with. Their company motto,
                "Gurus Happiness is our Happiness and Gurus pain is our pain,"
                reflects their dedication to going above and beyond to meet the
                needs of their clients. The Helping Gurus team is always
                prepared to support schools and colleges, ensuring that
                educators receive the assistance they need to succeed.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      {serviceName?.replace(/-/g, " ") === "Our Family" && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Grid
            item
            container
            xs={12}
            md={12}
            width={{ md: "70%", xs: "90%" }}
            mt={{ md: 5, xs: 0 }}
            p={{ md: 4, xs: 3 }}
            pl={{ md: 0, xs: 4 }}
          >
            <Grid item md={12} xs={12} mt={{ md: 5, xs: 0 }}>
              <Typography
                fontWeight={600}
                fontSize={{ md: "35px", xs: "20px" }}
                my={1}
              >
                Our Family
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"15px"}
                my={1}
                color={"#100854"}
              >
                "As the Founder and CEO of Helping Gurus, Mr.Rajiv Bahl has
                dedicated himself to improving the educational landscape by
                providing support and services to schools and colleges across
                India. With a background in Computer Application from Manav
                Rachna International University, Mr. Bahl has quickly
                established personal connections with over 3,000 school
                authorities nationwide." Driven by a passion for identifying and
                solving the pain points of educators, Mr. Bahl and his team at
                Helping Gurus are committed to ensuring the happiness and
                success of every educator they work with. Their company motto,
                "Gurus Happiness is our Happiness and Gurus pain is our pain,"
                reflects their dedication to going above and beyond to meet the
                needs of their clients. Driven by a passion for identifying and
                solving the pain points of educators, Mr. Bahl and his team at
                Helping Gurus are committed to ensuring the happiness and
                success of every educator they work with. Their company motto,
                "Gurus Happiness is our Happiness and Gurus pain is our pain,"
                reflects their dedication to going above and beyond to meet the
                needs of their clients. The Helping Gurus team is always
                prepared to support schools and colleges, ensuring that
                educators receive the assistance they need to succeed.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default AboutUs;
