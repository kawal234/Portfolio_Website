/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kawaljot Singh",
  title: "Hi all, I'm Kawal",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/e/2PACX-1vQaKMjdtXH8yFwu3tKhe4sd0VE-jEfzf1jGOwq4I1qPlRZjQ_vkPcbCsYSYOo8oJA/pub", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kawal234",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "kawaljot1official@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/kawaljot_singh",
  //medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/31641833/kawaljot-singh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    //emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lovely Professional University, Phagwara, Punjab",
      logo: require("./assets/images/lpulogo.png"), // PLACEHOLDER: Use a real logo path
      subHeader: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      duration: "Aug’ 21 – Present",
      desc: "Focused on core Computer Science principles with practical experience in Full-Stack Development (Node.js/React) and Cloud Architecture (AWS).",
      descBullets: [
        "Current CGPA: 7.41"
      ]
    },
    {
      schoolName: "Kashinath Lahiri Public School, Asansol, West Bengal",
      logo: require("./assets/images/klpslogo.jpg"), // PLACEHOLDER: Use a real logo path
      subHeader: "Intermediate (PCM)",
      duration: "Mar 20 - May 22",
      desc: "Completed secondary education with a focus on Physics, Chemistry, and Mathematics (PCM).",
      descBullets: [
        "Percentage: 91.6%"
      ]
    },
    {
      schoolName: "Burnpur Riverside School, Asansol, West Bengal",
      logo: require("./assets/images/brslogo.png"), // PLACEHOLDER: Use a real logo path
      subHeader: "Matriculation",
      duration: "Mar 18 - May 20",
      desc: "", // Description is not necessary for this level
      descBullets: [
        "Percentage: 81%"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud/Serverless Development (Training)",
      company: "Gokboru Tech Pvt. Ltd. (Edtech)",
      companylogo: require("./assets/images/gokborulogo.jpeg"), // PLACEHOLDER: Replace with actual path
      date: "June 2023 - July 2023",
      desc: "Developed and implemented a scalable, AI-powered serverless architecture using core AWS services.",
      descBullets: [
        "Engineered and deployed an **AI-powered chatbot** using **Amazon Lex** and **AWS Lambda** for real-time voice and text interactions.",
        "Implemented a **serverless backend** with AWS Lambda to ensure scalability, dynamic logic, and robust API integrations.",
        "Gained hands-on expertise in cloud-based AI architecture, serverless computing, and customer support automation."
      ]
    },
    {
      role: "Full-Stack Project Developer",
      company: "Gym Management Platform Project",
      companylogo: require("./assets/images/airbnbLogo.png"), // PLACEHOLDER: Replace with actual path
      date: "Project Completion: April 2024",
      desc: "Designed and developed a comprehensive management system focused on real-time data sharing and client management.",
      descBullets: [
        "Created a **live Shareable Dashboard** feature, enabling agencies to share real-time account reports with clients via external links.",
        "Implemented a client management system allowing definition of routines, packages, and timetables using **ReactJs** and **PHP/MySQL**."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Serverless AI Chatbot",
      subtitle:
        "Developed and deployed an AI-powered chatbot using Amazon Lex and AWS Lambda, demonstrating expertise in serverless cloud architecture.",
      image: require("./assets/images/awslogo.webp"), // PLACEHOLDER: Use an AWS or Lex logo
      imageAlt: "AWS Lambda and Amazon Lex Project Logo",
      footerLink: [
        {
          name: "Project Details (GitHub)",
          url: "https://github.com/kawal234" // PLACEHOLDER: Link to the specific project repo if available
        },
        {
          name: "AWS Training Certificate",
          url: "[Link to AWS Certificate]" // PLACEHOLDER: Insert the actual certificate URL
        }
      ]
    },
    {
      title: "DevOps & AI/ML Fundamentals",
      subtitle:
        "Completed certified courses on DevOps principles and the fundamentals of Artificial Intelligence/Machine Learning via LinkedIn Learning.",
      image: require("./assets/images/ailogo.webp"), // PLACEHOLDER: Use a LinkedIn Learning logo
      imageAlt: "LinkedIn Learning Certification Logo",
      footerLink: [
        {
          name: "Getting Started with DevOps",
          url: "[Link to DevOps Certificate]" // PLACEHOLDER: Insert the actual certificate URL
        },
        {
          name: "AI/ML Introduction Class",
          url: "[Link to AI/ML Certificate]" // PLACEHOLDER: Insert the actual certificate URL
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
// not included in the demo version
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
// Not included in the demo version
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
// Not included in the demo version
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7478998465",
  email_address: "kawaljot1official@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Kawaljotsingh01", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
