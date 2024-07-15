import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
        <Typography
          mt={5}
          color={"white"}
          fontWeight={700}
          fontSize={{ md: "30px", xs: "20px" }}
        >
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
                  src="/images/finallogo.png"
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
                Helping Gurus is an innovative platform that serves as a bridge
                between Edtech partners and a vast network of educational
                institutions across India. Our goal is to help you establish a
                strong presence in schools and universities, making it easier
                for educators to access the resources they need. With our
                extensive connections, we enable you to reach a wide range of
                institutions, including 10,000 CBSE schools, 400 ICSE schools,
                50 IB schools, and 700 State Board schools.
                <br />
                <br />
                Joining our network means unlocking a plethora of opportunities
                to showcase your brand and connect with educators nationwide.
                Whether you are a startup Edtech company looking to expand your
                reach or an established player seeking to strengthen your
                presence, Helping Gurus offers the perfect platform for growth
                and success.
                <br />
                <br />
                At Helping Gurus, our mission is simple yet powerful: to bring
                joy to educators by providing the support and resources they
                need. We understand the challenges and pain points faced by
                educators in today's fast-paced and ever-evolving educational
                landscape. That's why our motto is centered around the happiness
                and well-being of our Gurus – the educators who dedicate their
                lives to shaping the minds of future generations.
                <br />
                <br />
                We believe that when Gurus are happy, motivated, and
                well-equipped, they can create a positive impact on their
                students and communities. On the flip side, when they face
                challenges and struggles, we feel their pain and strive to
                provide solutions and support to help them overcome obstacles.
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
          <Grid container width={"100%"} mt={{ xs: 5, md: 0 }}>
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
                गुरु चरणों में शत शत नमन !!!
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
                Gurus' founder message is their motto,
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
                to improve their teaching practices
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
            width={{ md: "70%", xs: "100%" }}
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
                At Helping Gurus, our mission is to bridge the gap between
                <b>edtech partners and educational institutions</b> across
                India. We understand the importance of establishing a strong
                presence in schools and universities, and our vast network
                allows us to connect you with thousands of
                <b> CBSE, ICSE, IB, and State Board schools</b>. Our goal is to
                make it easy for your brand to reach educators and students
                nationwide, ensuring that you have the support and resources you
                need to succeed in the education sector.
                <br />
                <br />
                With over 10,000 CBSE schools, 400 ICSE schools, 50 IB schools,
                <b>and 700 State Board schools in our network</b>, we are
                dedicated to bringing joy to educators by providing them with
                the assistance they require. We understand the challenges that
                educators face in today's ever-evolving educational landscape,
                and we are here to support them every step of the way.
                <br />
                Our motto,{" "}
                <b>
                  "Gurus' Happiness is Our Happiness, Gurus' Pain is Our Pain,"
                </b>{" "}
                reflects our commitment to prioritizing the needs of educators
                and ensuring that they have access to the resources and support
                they need to excel in their roles. We believe that by supporting
                educators, we can ultimately uplift the level of education
                across the globe and build a community of dedicated
                professionals who are passionate about making a difference in
                the lives of students.
                <br />
                <br />
                <b>Our vision</b> at <b>Helping Gurus</b> is to create a
                supportive and nurturing environment for educators, where they
                can access the guidance and assistance they need to overcome any
                challenges they may face. Whether it's addressing manpower
                issues, school administrative problems, or enhancing the
                knowledge of staff members, we are here to provide the necessary
                support and assistance to ensure that educators have the tools
                they need to succeed.
                <br />
                <br />
                We understand that every educator is unique and may require
                different types of support, which is why we are committed to
                offering personalized assistance tailored to the specific needs
                of each individual. Our team of experts is dedicated to
                providing guidance, resources, and solutions to help educators
                navigate the complexities of the education sector and achieve
                their goals.
                <br />
                <br />
                At Helping Gurus, we truly believe that no educator should have
                to face their challenges alone. Our doors are always open, and
                we are here to support you, no matter what the situation may be.
                Join us in our mission to uplift the level of education across
                the globe and build a community of empowered and supported
                educators who are committed to making a difference in the lives
                of students
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
            width={{ md: "70%", xs: "100%" }}
            mt={{ md: 5, xs: 0 }}
            p={{ md: 4, xs: 3 }}
            pl={{ md: 0, xs: 4 }}
          >
            <Grid item md={12} xs={12} mt={{ md: 5, xs: 0 }}>
              <Grid container my={4} mt={0} spacing={2}>
                <MediaCard
                  name={"Dheeraj Malhotra"}
                  role={"Event Sponsorship Lead"}
                  img={"/images/dheeraj.png"}
                />
              </Grid>

              <Typography
                fontWeight={400}
                fontSize={"15px"}
                my={1}
                color={"#100854"}
              >
                <b>
                  Meet the team behind Helping Gurus, the dedicated individuals
                  who work tirelessly to connect Edtech partners with schools
                  and universities across India. Our team is made up of
                  passionate individuals who believe in the power of education
                  and technology to shape the future.
                </b>
                <br />
                <br />
                <b>
                  At the helm of Helping Gurus is our founder, who brings years
                  of experience in the education industry and a strong network
                  of contacts. Our team also includes experienced professionals
                  in marketing, sales, and client relations. Together, we work
                  diligently to establish strong partnerships between Edtech
                  partners and educational institutions nationwide.
                </b>
                <br />
                <br />
                <b>
                  Our team is driven by a common goal - to revolutionize
                  education in India by leveraging the latest technology and
                  innovative solutions. We believe that by connecting Edtech
                  partners with schools and universities, we can create a more
                  interactive and engaging learning experience for students.
                </b>
                <br />
                <br />
                <b>
                  With Helping Gurus, you can trust that you are working with a
                  team that is committed to your success. We are here to support
                  you every step of the way and help you reach your goals in the
                  ever-evolving landscape of education technology. Let us help
                  you make a difference in education today.
                </b>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default AboutUs;

function MediaCard({ name, role, img }) {
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Box
        bgcolor={"#3034BB"}
        height={"300px"}
        my={{ xs: 5, md: 0 }}
        borderRadius={2}
        position={"relative"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{
            position: "absolute",
            zIndex: 100,
            bottom: "27%",
            objectFit: "contain",
          }}
          src={img}
          width={"100%"}
          height={"300px"}
        />
        <Box position={"relative"} bgcolor={"red"} width={"100%"}>
          <Box position={"absolute"} bottom={10} mx={1} zIndex={104}>
            <Typography
              color={"white"}
              gutterBottom
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="white">
              {role}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
