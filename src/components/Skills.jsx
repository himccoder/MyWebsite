// Skills Component - Clean Rewrite
import pythonlogo from "../assets/img/python.png";
import javalogo from "../assets/img/java.svg";
import clogo from "../assets/img/c.png";
import jslogo from "../assets/img/js.png";
import tslogo from "../assets/img/ts.png";
import htmllogo from "../assets/img/html2.png";
import csslogo from "../assets/img/css.png";
import reactlogo from "../assets/img/react (1).png";
import nextlogo from "../assets/img/next-js.svg";
import tailwindlogo from "../assets/img/tailwind.png";
import expresslogo from "../assets/img/express-js-icon.png";
import socketlogo from "../assets/img/socket-io.svg";
import awslogo from "../assets/img/aws.png";
import MySQLlogo from "../assets/img/sql.png";
import mongologo from "../assets/img/mongodb.png";
import firebaselogo from "../assets/img/firebase.png";
import redislogo from "../assets/img/redis.svg";
import pytorchlogo from "../assets/img/pytorch.svg";
import scilogo from "../assets/img/scikit-learn.png";
import pandaslogo from "../assets/img/Pandas.png";
import numpylogo from "../assets/img/NumPy.png";
import matplotliblogo from "../assets/img/matplotlib.png";
import dockerlogo from "../assets/img/docker.png";
import kuberneteslogo from "../assets/img/kubernetes.svg";
import gitlogo from "../assets/img/git.png";
import postmanlogo from "../assets/img/postman.png";
import arduinologo from "../assets/img/arduino.png";
import latexlogo from "../assets/img/latex.svg";
import vscodelogo from "../assets/img/vscode.svg";
import haproxylogo from "../assets/img/haproxy.webp";
import stripelogo from "../assets/img/stripe.png";
import cloudinarylogo from "../assets/img/cloudinary.webp";

export const Skills = () => {
  // Organized skills data
  const skillsData = {
    "Programming Languages": [
      { name: "Python", logo: pythonlogo },
      { name: "Java", logo: javalogo },
      { name: "JavaScript", logo: jslogo },
      { name: "TypeScript", logo: tslogo },
      { name: "C/C++", logo: clogo },
      { name: "HTML5", logo: htmllogo },
      { name: "CSS3", logo: csslogo }
    ],
    "Web Development": [
      { name: "React.js", logo: reactlogo },
      { name: "Next.js", logo: nextlogo },
      { name: "Tailwind CSS", logo: tailwindlogo },
      { name: "Express.js", logo: expresslogo },
      { name: "Socket.io", logo: socketlogo },
      { name: "AWS", logo: awslogo }
    ],
    "Databases": [
      { name: "MySQL", logo: MySQLlogo },
      { name: "MongoDB", logo: mongologo },
      { name: "Firebase", logo: firebaselogo },
      { name: "Redis", logo: redislogo }
    ],
    "AI/ML": [
      { name: "PyTorch", logo: pytorchlogo },
      { name: "Scikit-Learn", logo: scilogo },
      { name: "Pandas", logo: pandaslogo },
      { name: "NumPy", logo: numpylogo },
      { name: "Matplotlib", logo: matplotliblogo }
    ],
    "Tools": [
      { name: "Docker", logo: dockerlogo },
      { name: "Kubernetes", logo: kuberneteslogo },
      { name: "Git", logo: gitlogo },
      { name: "Postman", logo: postmanlogo },
      { name: "Arduino", logo: arduinologo },
      { name: "LaTeX", logo: latexlogo },
      
      { name: "HAProxy", logo: haproxylogo }
    ],
    "3rd Party APIs": [
      { name: "Stripe", logo: stripelogo },
      { name: "Cloudinary", logo: cloudinarylogo },
      { 
        name: "WattTime", 
        logo: null, // Custom SVG component
        customComponent: () => (
          <svg className="skill-logo" width="40" height="40" viewBox="0 0 24 24" fill="#22C55E">
            <path d="M12 2L2 12l10 10 10-10L12 2zm0 2.83L19.17 12 12 19.17 4.83 12 12 4.83z"/>
            <path d="M7 12l5 5 5-5-5-5-5 5z"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        )
      }
    ]
  };

  // Skill item component
  const SkillItem = ({ skill }) => (
    <div className="skill-item">
      <div className="skill-content">
        <span className="skill-name">{skill.name}</span>
        <div className="skill-logo-container">
          {skill.customComponent ? (
            skill.customComponent()
          ) : (
            <img src={skill.logo} className="skill-logo" alt={`${skill.name} logo`} />
          )}
        </div>
      </div>
    </div>
  );

  // Skills category component
  const SkillsCategory = ({ title, skills }) => (
    <div className="skills-category">
      <h4 className="category-title">{title}</h4>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="skills-container">
                {Object.entries(skillsData).map(([category, skills]) => (
                  <SkillsCategory key={category} title={category} skills={skills} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

