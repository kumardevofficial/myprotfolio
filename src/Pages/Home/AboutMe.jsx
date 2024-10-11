import myImage from "../../assets/fianlpfimage.png";
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={myImage} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            A passionate B.Tech student with a keen interest in full-stack
            development. I specialize in the MERN stack, leveraging my skills to
            create dynamic web applications. In addition to my expertise in
            Java, I have a solid understanding of object-oriented programming
            principles.
          </p>
          <p className="hero--section-description">
            Recently, I've ventured into Web3 technologies, exploring blockchain
            and decentralized applications (dApps) to enhance user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
