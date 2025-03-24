import GalleryCarousel from "../GalleryCarousel";
import TextContainer from "../TextContainer";

const Home = () => {
  return (
    <>
      <GalleryCarousel />
      <TextContainer title="About Us:" path="/about" label="Read More">
        Something about the lab will go here Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Assumenda totam, quidem, quibusdam tempora
        fugit incidunt possimus laborum deleniti ad unde repellendus maiores
        repudiandae sed officia distinctio, mollitia molestiae culpa rem....
      </TextContainer>
    </>
  );
};

export default Home;
