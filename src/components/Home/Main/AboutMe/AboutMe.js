import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="to-about">
      <div className="about">
        <Card sx={{ minWidth: 275 }} className="about-card" id="about">
          <CardContent>
            <div className="text">
              <p>
                <span className="head-text">About Me</span>
                <br></br>
                <br></br>
                Hi, I'm Nevin Raju, a passionate web developer with a love for
                creating beautiful and functional websites. I've always been
                interested in technology, and after studying web development, I
                discovered my passion for creating websites that are not only
                visually stunning but also user-friendly and responsive. I'm
                proficient in programming languages such as HTML, CSS and
                JavaScript and have experience using popular web development
                frameworks such as Bootstrap and Material UI. Although I'm just
                starting my journey as a web developer, I'm eager to continue
                learning and growing in this field. I'm a detail-oriented
                individual with excellent problem-solving skills. I enjoy
                working collaboratively with other developers and designers to
                create innovative and effective solutions. I believe that a
                great website is one that provides an excellent user experience,
                and I always strive to achieve that goal in every project I work
                on. When I'm not coding, I enjoy exploring new technologies,
                attending web development meetups, and reading blogs about the
                latest web design trends. I'm excited to start my career in web
                development and can't wait to see where this journey takes me!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
