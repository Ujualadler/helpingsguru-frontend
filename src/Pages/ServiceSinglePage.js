import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

function ServiceSinglePage() {
  const { serviceName } = useParams();
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
        <Typography color={"white"} fontWeight={700} textAlign={'center'} fontSize={"30px"}>
        {serviceName.replace(/-/g, " ")}
        </Typography>
      </Box>
      <Box px={{lg:30,md:8,sm:6,xs:4}} py={10}>
      <Typography fontWeight={400} fontSize={"16    px"} lineHeight={1.8}>
        So how did the classical Latin become so incoherent? According to
        McClintock, a 15th century typesetter likely scrambled part of Cicero's
        De Finibus in order to provide placeholder text to mockup various fonts
        for a type specimen book. It's difficult to find examples of lorem ipsum
        in use before Letraset made it popular as a dummy text in the 1960s,
        although McClintock says he remembers coming across the lorem ipsum
        passage in a book of old metal type samples. So far he hasn't relocated
        where he once saw the passage, but the popularity of Cicero in the 15th
        century supports the theory that the filler text has been used for
        centuries. And anyways, as Cecil Adams reasoned, “[Do you really] think
        graphic arts supply houses were hiring classics scholars in the 1960s?”
        Perhaps. But it seems reasonable to imagine that there was a version in
        use far before the age of Letraset. McClintock wrote to Before & After
        to explain his discovery; “What I find remarkable is that this text has
        been the industry's standard dummy text ever since some printer in the
        1500s took a galley of type and scrambled it to make a type specimen
        book; it has survived not only four centuries of letter-by-letter
        resetting but even the leap into electronic typesetting, essentially
        unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic
        that when the then-understood Latin was scrambled, it became as
        incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking'
        have common semantic roots!” (The editors published his letter in a
        correction headlined “Lorem Oopsum”). As an alternative theory, (and
        because Latin scholars do this sort of thing) someone tracked down a
        1914 Latin edition of De Finibus which challenges McClintock's 15th
        century claims and suggests that the dawn of lorem ipsum was as recent
        as the 20th century. The 1914 Loeb Classical Library Edition ran out of
        room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself).
        Thus, the truncated phrase leaves one page dangling with “do-”, while
        another begins with the now ubiquitous “lorem ipsum”. Whether a medieval
        typesetter chose to garble a well-known (but non-Biblical—that would
        have been sacrilegious) text, or whether a quirk in the 1914 Loeb
        Edition inspired a graphic designer, it's admittedly an odd way for
        Cicero to sail into the 21st century.
      </Typography>
      </Box>
    </Box>
  );
}

export default ServiceSinglePage;
