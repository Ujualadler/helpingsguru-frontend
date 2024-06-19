import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { keyframes } from "@mui/system";
import ServiceForm from "../Components/ServiceForm";
import { serviceService } from "../Services/service";
import { API_URL } from "../Services/url";
import OurSpeakers from "../Components/OurSpeakers";
import { ourSpeakersService } from "../Services/OurSpeakersService";
import ServiceModal from "../Components/ServiceModal";
import GallerySlider from "../Components/GallerySlider";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

function ServiceSinglePage() {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [teacherGalleryData, setTeachergallery] = useState([]);
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const educationRound = "Educational Events & Roundtables";

  const openGallery = (index) => {
    setShowGallery(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const getGallery = async () => {
      try {
        const result = await serviceService.getTeacherGallery();
        console.log(result.data);
        if (result.data.success === true) {
          console.log(result.data.data);
          setTeachergallery(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getGallery();
  }, []);

  const [ourSpeakerData, setOurSpeakerData] = useState([]);
  const [openSpeakersModal, setOpenSpeakersModal] = useState(false);

  useEffect(() => {
    const getOurSpeakers = async () => {
      try {
        const result = await ourSpeakersService.getOurSpeakers();
        console.log(result.data);
        if (result.data.success === true) {
          console.log(result.data.data);
          setOurSpeakerData(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOurSpeakers();
  }, []);

  return (
    <Box>
      {openSpeakersModal && (
        <ServiceModal
          open={openSpeakersModal}
          show={setOpenSpeakersModal}
          type={"Our Services"}
          service={serviceName.replace(/-/g, " ")}
        />
      )}
      {showGallery && (
        <GallerySlider
          show={setShowGallery}
          open={showGallery}
          data={teacherGalleryData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
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
          color={"white"}
          fontWeight={700}
          textAlign={"center"}
          fontSize={{md:"30px",xs:'20px'}}
          mt={2}
        >
          {serviceName.replace(/-/g, " ")}
        </Typography>
      </Box>
      <Box
        px={{
          lg:
            serviceName.replace(/-/g, " ") ===
            "Inspiring Speakers for Educational Institutions"
              ? 0
              : 30,
          md: 8,
          sm: 5,
          xs: 2,
        }}
        py={{ md: 10, xs: 5 }}
      >
        {serviceName.replace(/-/g, " ") === "Educational Magazine Hub" && (
          <Box>
            <Typography
              fontWeight={700}
              fontSize={{ sm: "20px", xs: "16px" }}
              color={"#FF8126"}
            >
              Join the Helping Gurus Educational Magazine Community - Connecting
              Minds, Inspiring Hearts!
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              Journey with Us
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              Step into a world where knowledge meets community, where ideas
              flow freely, and connections are nurtured. Helping Gurus Magazine
              invites you to join a vibrant platform that bridges the gap
              between educators, students, and parents.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              A Tapestry of Learning
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              Immerse yourself in a tapestry of learning as Helping Gurus offers
              both Digital and Print editions tailored for Schools and Colleges.
              Our mission is simple: to unite Gurus from diverse backgrounds and
              foster a culture of idea-sharing and collaboration.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              A Magazine For All
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              With a strong presence in over 10,000 Schools across India and
              partnerships with 100+ Universities, Helping Gurus Magazine is a
              hub of excellence in education. Together, we create a ripple
              effect of knowledge that transcends borders and inspires growth in
              every learner.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              Bringing Excellence to Your Doorstep
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              Every edition of Helping Gurus Magazine features 100 top
              educators' articles, each crafted with premium content that
              enriches, enlightens, and empowers. Your voice matters, your
              insights are valued—contribute your article today and be part of a
              movement that fuels inspiration.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              A Nationwide Reach, A Global Impact
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              Witness the magic unfold as Helping Gurus Magazine reaches 10,000+
              Schools and top Universities across India. Our commitment to
              spreading knowledge knows no bounds, and our dedication to sharing
              the best content with the education community remains unwavering.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              Join the Conversation
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              Ready to make a difference? Register yourself today and share your
              wisdom with a community that celebrates innovation, embraces
              diversity, and thrives on collaboration. Your words have the power
              to shape minds, ignite passions, and spark change.
            </Typography>
            <Box
              sx={{ background: "#3034BB" }}
              color={"white"}
              position={"relative"}
              borderRadius={2}
              display={"flex"}
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={{ md: "center", xs: "start" }}
              justifyContent={"space-between"}
              mt={3}
              py={2}
              pb={5}
              px={3}
            >
              <Box
                component="img"
                src="/images/dot-svg.png"
                sx={{
                  position: "absolute",
                  top: "15%",
                  right: "2%",
                  height: "120px",
                  opacity: "20%",
                  width: "150px",
                  animation: `${bounce} 2s infinite`,
                }}
              />
              <Box ml={{ md: 0, xs: 0 }}>
                <Typography
                  fontWeight={700}
                  fontSize={{ md: "28px", xs: "20px" }}
                  color={"white"}
                  mt={4}
                >
                  Let Your Voice Be Heard
                </Typography>
                <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                  <Typography
                    fontWeight={600}
                    fontSize={{ md: "16px", xs: "14px" }}
                    color={"#FF8126"}
                  >
                    Word Count Limit
                  </Typography>
                  <Typography
                    fontWeight={600}
                    color={"white"}
                    fontSize={{ md: "16px", xs: "14px" }}
                  >
                    400-500 words
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                  <Typography
                    fontWeight={600}
                    fontSize={{ md: "16px", xs: "14px" }}
                    color={"#FF8126"}
                  >
                    Email Us
                  </Typography>
                  <Typography
                    fontWeight={600}
                    fontSize={{ md: "16px", xs: "14px" }}
                    color={"#fff"}
                  >
                    rajiv@helpinggurus.com
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                  <Typography
                    fontWeight={600}
                    fontSize={{ md: "16px", xs: "14px" }}
                    color={"#FF8126"}
                  >
                    Registration Fee for 1-page article
                  </Typography>
                  <Typography
                    fontWeight={600}
                    fontSize={{ md: "16px", xs: "14px" }}
                    color={"#fff"}
                  >
                    ₹8,500
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  onClick={() => navigate("/contact-us")}
                  variant="contained"
                  sx={{ background: "#FF8126", mt: { md: "100%", xs: "10%" } }}
                >
                  For More Details
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        {serviceName ===
          educationRound.replace(/ & /g, "-").replace(/ /g, "-") && (
          <Box>
            <Typography
              fontWeight={700}
              fontSize={{ sm: "25px", xs: "20px" }}
              color={"#FF8126"}
            >
              Welcome to Helping Gurus
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              At Helping Gurus, we specialize in organizing large-scale
              educational events for schools and colleges. With a track record
              of 15 successful RoundTable Sessions and 5 Summits, we bring
              together top educational authorities from our extensive network of
              over 10,000 schools and 100 universities.
            </Typography>
            <Typography
              fontWeight={700}
              color={"#FF8126"}
              fontSize={"18px"}
              mt={4}
            >
              Why Choose Us?
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              Our Clients Are Our Priority
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              - Once you partner with us, we take full responsibility to connect
              you with top educational authorities.
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              - Our focus is on creating synergies beneficial for both parties.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              Showcase Your Services
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              - We offer our partners the opportunity to present their services
              directly within educational institutions.
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              - This exposure helps in building credibility and trust with your
              target audience.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              Comprehensive Marketing Support
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              - We assist with marketing, branding, and increasing the reach of
              your brand.
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              - Our dedicated team ensures your brand shines in the educational
              sector.
            </Typography>

            <Box
              sx={{ background: "#3034BB" }}
              color={"white"}
              position={"relative"}
              borderRadius={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={3}
              py={2}
              pb={5}
              px={3}
            >
              <Box
                component="img"
                src="/images/dot-svg.png"
                sx={{
                  position: "absolute",
                  top: "15%",
                  right: "2%",
                  height: "120px",
                  opacity: "20%",
                  width: "150px",
                  animation: `${bounce} 2s infinite`,
                }}
              />
              <Box px={{ md: 4, xs: 0 }}>
                <Typography
                  fontWeight={700}
                  fontSize={{ md: "28px", xs: "18px" }}
                  color={"white"}
                  mt={4}
                >
                  Excited to partner with us?
                </Typography>
                <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                  <Typography
                    fontWeight={600}
                    color={"#FF8126"}
                    fontSize={"16px"}
                  >
                    Let's work together to elevate educational institutions to
                    new heights.
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                  <ServiceForm
                    type={"Our Services"}
                    service={"Educational Events & Roundtables"}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        {serviceName.replace(/-/g, " ") === "Staff Recruitment Solutions" && (
          <Box>
            <Typography
              fontWeight={700}
              fontSize={{ md: "25px", xs: "17px" }}
              color={"#FF8126"}
            >
              Staff Recruitment Support by Helping Gurus
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              At Helping Gurus, we specialize in connecting Principals, College
              Faculties, and Teachers with the right job opportunities in
              educational institutions. Leveraging our extensive network, we
              maintain direct relationships with school and college authorities
              to facilitate seamless recruitment processes.
            </Typography>
            <Typography
              fontWeight={700}
              //   color={"#FF8126"}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              What We Do
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              Our primary service is managing the recruitment process for
              schools and colleges, ensuring educational institutions find the
              right fit for their staffing needs.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              Our Mission
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              We believe in placing educators in the right environment where
              they can truly excel and make a difference. Reach out to us today
              and let's make a positive impact in the education sector.
            </Typography>
            <Box
              sx={{ background: "#3034BB" }}
              color={"white"}
              position={"relative"}
              borderRadius={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={3}
              py={2}
              pb={5}
              px={3}
            >
              <Box
                component="img"
                src="/images/dot-svg.png"
                sx={{
                  position: "absolute",
                  top: "15%",
                  right: "2%",
                  height: "120px",
                  opacity: "20%",
                  width: "150px",
                  animation: `${bounce} 2s infinite`,
                }}
              />
              <Box px={{ md: 4, xs: 0 }}>
                <Typography
                  fontWeight={700}
                  fontSize={{ md: "28px", xs: "20px" }}
                  color={"#FF8126"}
                  mt={4}
                >
                  For Schools and Colleges
                </Typography>
                <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                  <Typography fontWeight={600} color={"#fff"} fontSize={"16px"}>
                    If you're an educational authority in need of qualified
                    manpower, please submit your details below.
                  </Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                  <ServiceForm
                    type={"Our Services"}
                    service={"Staff Recruitment Solutions"}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        {serviceName.replace(/-/g, " ") ===
          "Teacher Training Certification Programme" && (
          <Box>
            <Box>
              <Typography
                fontWeight={700}
                fontSize={{ md: "25px", xs: "17px" }}
                color={"#FF8126"}
              >
                Teacher Training Certification Programs for Schools and Colleges
              </Typography>
              <Typography
                fontWeight={"400"}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={2}
              >
                At Helping Gurus, we provide Teacher Training Certification
                Programs on many topics. Our experts have 25 to 30 years of
                experience in their fields.
              </Typography>
              <Typography
                fontWeight={700}
                //   color={"#FF8126"}
                fontSize={{ md: "18px", xs: "16px" }}
                mt={4}
              >
                Our Expert Team
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={2}
              >
                We have a team of over 150 experts who are masters in their
                subjects.
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={{ md: "18px", xs: "16px" }}
                mt={4}
              >
                Custom Sessions for Popular Topics
              </Typography>
              <Typography
                fontWeight={"400"}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={2}
              >
                If your school or college wants sessions on any popular topics,
                we can suggest the best ones and connect you with our experts.
              </Typography>
              <Box
                sx={{ background: "#3034BB" }}
                color={"white"}
                position={"relative"}
                borderRadius={2}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={3}
                py={2}
                pb={5}
                px={3}
              >
                <Box
                  component="img"
                  src="/images/dot-svg.png"
                  sx={{
                    position: "absolute",
                    top: "15%",
                    right: "2%",
                    height: "120px",
                    opacity: "20%",
                    width: "150px",
                    animation: `${bounce} 2s infinite`,
                  }}
                />
                <Box px={{ md: 4, xs: 0 }}>
                  <Typography
                    fontWeight={700}
                    fontSize={{ md: "28px", xs: "20px" }}
                    color={"#FF8126"}
                    mt={4}
                  >
                    For Schools and Colleges
                  </Typography>
                  <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                    <Typography
                      fontWeight={600}
                      color={"#fff"}
                      fontSize={"16px"}
                    >
                      If you're an educational authority in need of qualified
                      manpower, please submit your details below.
                    </Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                    <ServiceForm
                      type={"Our Services"}
                      service={"Teacher Training Certification Programme"}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
            >
              Learning Materials
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              We offer learning materials to help you improve your knowledge and
              skills in education.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={{ md: "18px", xs: "16px" }}
              mt={4}
              color={"#FF8126"}
            >
              Ready to boost your teaching skills? Contact us today!
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/contact-us")}
              sx={{ background: "#FF8126", textTransform: "none", mt: 3 }}
            >
              Contact Us
            </Button>

            <Grid container spacing={1} mt={4}>
              {teacherGalleryData.length > 0 &&
                teacherGalleryData.map((img, index) => (
                  <Grid item md={3} sm={4} xs={6}>
                    <img
                      onClick={() => openGallery(index)}
                      src={`${API_URL}api/v1/image/${img}`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        background:
                          "linear-gradient(to right, #6D7BFE, #3034BB)",
                      }}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        )}
        {serviceName.replace(/-/g, " ") ===
          "Inspiring Speakers for Educational Institutions" && (
          <Box>
            <Typography
              fontWeight={700}
              fontSize={{ md: "25px", xs: "17px" }}
              color={"#FF8126"}
              px={{ lg: 30, md: 8, sm: 5, xs: 2 }}
            >
              Welcome to HelpingGurus - Connecting Inspirational Speakers with
              Educational Institutions
            </Typography>
            <Typography
              px={{ lg: 30, md: 8, sm: 5, xs: 2 }}
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              At HelpingGurus, we specialize in providing renowned personalities
              from the education sector to schools and colleges. Our vast
              network includes motivational speakers, spiritual leaders, content
              creators, business coaches, IAS officers, government officials, as
              well as authorities from NCERT, CBSE, NITI Ayog and KVS Sangathan
            </Typography>
            <Box my={3}>
              <Grid
                container
                width={"100%"}
                justifyContent={"center"}
                display={"flex"}
              >
                <Grid container width={{ md: "70%", xs: "95%" }}>
                  {ourSpeakerData.length > 0 &&
                    ourSpeakerData.map((data, index) => (
                      <Grid item md={4} xs={12} sm={6} p={2}>
                        <Box
                          sx={{
                            border: `
                         "1px"
                       solid #cfd4dc`,
                            background: "yellow",
                            height: { lg: "45vh", md: "40vh", xs: "50vh" },
                            // borderRadius: 3,
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              background: "rgba(0, 0, 0, 0.5)",
                              filter: "brightness(80%)",
                              objectFit: "cover",
                              background:
                                "linear-gradient(to right, #6D7BFE, #3034BB)",
                              objectPosition: "top",
                            }}
                            src={`${API_URL}api/v1/image/${data?.img}`}
                            loading="lazy"
                          />

                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 20,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "start",
                              left: -1,
                              zIndex: 2,
                            }}
                          >
                            <Typography
                              fontSize={"25px"}
                              fontWeight={600}
                              px={1}
                              color={"white"}
                              sx={{
                                // background: "orange",
                                paddingRight: "15px",
                                paddingBlock: "3px",
                                textAlign: "left",
                                // overflowWrap: "break-word",
                              }}
                            >
                              {data?.name}
                            </Typography>
                            <Typography px={1} color={"white"}>
                              {data?.designation}
                            </Typography>
                            <Button
                              onClick={() =>
                                setOpenSpeakersModal(!openSpeakersModal)
                              }
                              sx={{ ml: 1, mt: 1, background: "#FF8126" }}
                              variant="contained"
                            >
                              Book Now
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                </Grid>
              </Grid>
            </Box>
            <Box px={{ lg: 30, md: 8, sm: 5, xs: 2 }}>
              <Typography
                fontWeight={700}
                fontSize={{ md: "18px", xs: "16px" }}
                mt={4}
              >
                Who We Connect You With
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={2}
                color={"#FF8126"}
              >
                Motivational Speakers
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={1}
              >
                Experts who inspire and motivate students, teachers and parents
                to achieve their best.
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={2}
                color={"#FF8126"}
              >
                Spiritual Speakers
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={1}
              >
                Individuals who guide and uplift students on spiritual and moral
                grounds.
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={2}
                color={"#FF8126"}
              >
                Content Creators
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={1}
              >
                Innovators who bring fresh perspectives and creativity to the
                educational landscape.
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={2}
                color={"#FF8126"}
              >
                Business Coaches
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={1}
              >
                Professionals who impart valuable business insights and
                entrepreneurial knowledge.
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={2}
                color={"#FF8126"}
              >
                IAS and Govt Officials
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={1}
              >
                Leaders in governance and administration who share their
                experience and wisdom.
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={2}
                color={"#FF8126"}
              >
                NCERT,CBSE, NITI Ayog & KVS Authorities
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={1}
              >
                Key figures in the educational regulatory bodies offering
                valuable guidance.
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={{ md: "18px", xs: "16px" }}
                mt={4}
              >
                How We Can Help
              </Typography>
              <Typography
                fontWeight={"400"}
                fontSize={{ md: "16px", xs: "14px" }}
                mt={2}
              >
                If your school and college is interested in inviting these
                esteemed personalities to inspire your students and teachers,
                Book your slot today. Enhance your educational experience with
                the wisdom and guidance of these distinguished figures.
              </Typography>
              <Box
                sx={{ background: "#3034BB" }}
                color={"white"}
                position={"relative"}
                borderRadius={2}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={3}
                py={2}
                pb={5}
                px={3}
              >
                <Box
                  component="img"
                  src="/images/dot-svg.png"
                  sx={{
                    position: "absolute",
                    top: "15%",
                    right: "2%",
                    height: "120px",
                    opacity: "20%",
                    width: "150px",
                    animation: `${bounce} 2s infinite`,
                  }}
                />
                <Box px={{ md: 4, xs: 0 }}>
                  <Typography
                    fontWeight={700}
                    fontSize={{ md: "28px", xs: "20px" }}
                    color={"#FF8126"}
                    mt={4}
                  >
                    Contact Us for Bookings
                  </Typography>
                  <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                    <Typography
                      fontWeight={600}
                      color={"#fff"}
                      fontSize={"16px"}
                    >
                      To book a slot for a speaker, please provide the following
                      details.
                    </Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                    <ServiceForm
                      type={"Our Services"}
                      service={
                        "Inspiring Speakers for Educational Institutions"
                      }
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        {serviceName.replace(/-/g, " ") === "Talks With Gurus" && (
          <Box width={'100%'}>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              In the fast-paced world of education, it is crucial to have a
              platform where educators can come together to share their
              experiences, ideas, and best practices. Talks with Gurus, a
              segment of <strong>Helping Gurus</strong> , aims to do just that by providing a
              space for top educators from India and abroad to express their
              viewpoints on important topics related to education.
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              Education is not just about teaching lessons from textbooks; it is
              about shaping the minds of the future generation, uplifting the
              standards of education, and inspiring students to reach their full
              potential. Talks with Gurus brings to light the personal
              experiences and thought-provoking ideas of educators who have
              dedicated their lives to the field of education.
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              Through our online webinars, we have successfully connected with
              over<strong>500 top educationists across the globe</strong> . These webinars have
              provided a platform for educators to share their stories of
              <strong>struggle, efforts, and successes</strong>, and have allowed them to learn
              from each other's experiences.
            </Typography>
            <Typography
              fontWeight={"400"}
              fontSize={{ md: "16px", xs: "14px" }}
              mt={2}
            >
              <strong>At Talks with Gurus</strong>, we believe that by coming together and
              sharing our knowledge and experiences, we can uplift the level of
              education and inspire a new generation of learners. Join us in
              this initiative, and together, we can make a difference in the
              world of education. Let's start a conversation, share our stories,
              and learn from each other to create a brighter future for our
              students.
            </Typography>

            <Box >

              <Box
                sx={{ background: "#3034BB" }}
                color={"white"}
                position={"relative"}
                borderRadius={2}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={3}
                py={2}
                pb={5}
                px={3}
              >
                <Box
                  component="img"
                  src="/images/dot-svg.png"
                  sx={{
                    position: "absolute",
                    top: "15%",
                    right: "2%",
                    height: "120px",
                    opacity: "20%",
                    width: "150px",
                    animation: `${bounce} 2s infinite`,
                  }}
                />
                <Box px={{ md: 4, xs: 0 }}>
                  <Typography
                    fontWeight={700}
                    fontSize={{ md: "28px", xs: "20px" }}
                    color={"#FF8126"}
                    mt={4}
                  >
                    Contact Us for Bookings
                  </Typography>
                  <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                    <Typography
                      fontWeight={600}
                      color={"#fff"}
                      fontSize={"16px"}
                    >
                      If you are an educator and wish to be part of our initiative, please
                      share your details below:
                    </Typography>
                  </Box>
                  <Box display={"flex"} alignItems={"center"} mt={3} gap={2}>
                    <ServiceForm
                      type={"Our Services"}
                      service={
                        "Talks with Gurus"
                      }
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ServiceSinglePage;
