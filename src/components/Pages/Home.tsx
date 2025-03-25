import { Box, Flex } from "@chakra-ui/react";
import GalleryCarousel from "../GalleryCarousel";
import TextContainer from "../TextContainer";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={10}
        height="100vh" // Use minHeight instead of height
        paddingBottom="200px"
      >
        <GalleryCarousel />
        <TextContainer title="About Us:" path="/about" label="Read More">
          Something about the lab will go here Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Assumenda totam, quidem, quibusdam
          tempora fugit incidunt possimus laborum deleniti ad unde repellendus
          maiores repudiandae sed officia distinctio, mollitia molestiae culpa
          rem....
        </TextContainer>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
