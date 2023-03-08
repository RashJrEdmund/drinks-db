import StyledBody from '../styles/StyledBody';
import pourWineImg from '../images/pour_wine_glass_2.png';
import blueWine from '../images/blue_wine_glass.png';
import standingGlass from '../images/standing_wine_glass.png';
import wineGlasses from '../images/wine_glasses.png';

export default function Body() {
  return (
    <StyledBody className="body-section" id="body_section">
      <div className="drinks-container">
        <div className="drink">
          <h3>this the Title</h3>
          <p>this the body</p>
        </div>

        <div className="drink">
          <h3>this the Title</h3>
          <p>this the body</p>
        </div>

        <div className="drink">
          <h3>this the Title</h3>
          <p>this the body</p>
        </div>
      </div>

      <div className="body_images">
        <div
          className="first_img"
          style={{ backgroundImage: `url(${pourWineImg})` }}
        />
        <div
          className="first_img"
          style={{ backgroundImage: `url(${standingGlass})` }}
        />
      </div>

      <div className="drinks-container_2">
        <div className="drink">
          <h3>this the Title</h3>
          <p>this the body</p>
        </div>

        <div className="drink">
          <h3>this the Title</h3>
          <p>this the body</p>
        </div>

        <div className="drink">
          <h3>this the Title</h3>
          <p>this the body</p>
        </div>
      </div>

      <div className="body_images">
        <div
          className="first_img"
          style={{ backgroundImage: `url(${blueWine})` }}
        />
        <div
          className="first_img"
          style={{ backgroundImage: `url(${wineGlasses})` }}
        />
      </div>
    </StyledBody>
  );
}
