import "./hero.scss";
import X from "../assets/x.png";
import Discord from "../assets/discord.png";
import Union from "../assets/Union.png";
// Import your quest card image
import QuestCardImage from "../assets/quest-image.png"; // Replace with your actual image path
import GridBackground from "../assets/grid-card-background.png"; // Your grid background (Image 2)
import QuestCardImageSmall from "../assets/quest-image-small.png";

import "./TextDisplay.scss";
import { textDisplayItems } from "./heroConstant";
import { useWindowWidth } from "../utils/width";

function Hero() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="hero-section">
        <div className="socal">
          <div>
            <img src={X} alt="" />
            Twitter
          </div>
          <div>
            <img src={Discord} alt="" />
            Discord
          </div>
          <div>
            <img src={Union} alt="" />
            Whitepaper
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "79px",
          }}
        >
          <div className="title">
            <div className="quote">Quests Reimagined</div>
            <div className="head">Quest Platform</div>
          </div>
        </div>

        {/* Double-bordered container with full image */}
        <div className="double-border-container">
          <div className="image-container">
            <img
              src={windowWidth < 430 ? QuestCardImageSmall : QuestCardImage}
              alt="Quest card"
            />
          </div>
        </div>
        <div className="tile-container">
          {textDisplayItems.map((item, index) => (
            <div
              key={item.id}
              style={{ margin: "50px auto", width: "100%", maxWidth: "1280px" }}
            >
              <TextDisplay
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                gridBackgroundUrl={GridBackground}
                height={
                  windowWidth < 430
                    ? "auto"
                    : windowWidth < 768
                    ? "500px"
                    : "641px"
                }
                width="100%"
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Hero;

interface TextDisplayProps {
  title: string;
  description: string;
  imageUrl?: string;
  gridBackgroundUrl: string;
  width?: string;
  height?: string;
  index: number;
}

const TextDisplay: React.FC<TextDisplayProps> = ({
  title,
  description,
  imageUrl,
  gridBackgroundUrl,
  width = "100%",
  height = "auto",
  index,
}) => {
  const windowWidth = useWindowWidth();
  return (
    <div
      className={`text-display-container ${index === 0 ? "shadow" : ""}`}
      style={{ width, height }}
    >
      <div className="text-display-inner">
        <div className="content-wrapper">
        {imageUrl && windowWidth <= 430 && (
            <div className="image-container">
              <div
                className="grid-background"
                style={{ backgroundImage: `url(${gridBackgroundUrl})` }}
              ></div>
              <img src={imageUrl} alt="Decorative" />
            </div>
          )}
          <div className="text-content">
            <h1 className="text-display-title">{title}</h1>
            <div className="divider"></div>
            <p className="description">{description}</p>
          </div>
          {imageUrl && windowWidth > 430 && (
            <div className="image-container">
              <div
                className="grid-background"
                style={{ backgroundImage: `url(${gridBackgroundUrl})` }}
              ></div>
              <img src={imageUrl} alt="Decorative" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
