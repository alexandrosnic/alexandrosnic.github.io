export const bio = [
  "I am a <strong>Robotics & AI Engineer</strong> that bridges the gap between innovative R&D thinking and high-speed, market-ready prototyping that moves the needle on turnover.",
  "I master both the 'thinking' and the 'doing' of robotics and AI.",
  "Whether I’m debugging a Linux kernel at <strong>Bosch</strong> to squeeze out 10% more throughput or deploying autonomous fleets on-site in <strong>Singapore</strong>, my goal is to build technologically feasible products without the 'research drag.'",
  "Specializing in <strong>Autonomous Navigation, Motion Planning, ROS1-to-ROS2 migration, and Embodied AI</strong>, I aim to help companies leave a positive footprint in the smart systems sector that facilitates human well-being without costing the planet.",
  "Based in Berlin. Driven by complex problems. Powered by C++, Python, and coffee (ginger tea after 14:00)."
];

export const skills = [
  "C++, Python, ROS, ROS2, MoveIt, OpenCV, PCL",
  "Reinforcement Learning, Motion Planning, Trajectory Optimization",
  "Intel RealSense, AprilTags, NVIDIA Isaac Sim, Gazebo, RViz",
  "Point Cloud Processing, SLAM, Sensor Fusion, Computer Vision",
  "Software Development, System Integration, Algorithm Design",
];

export const experience = [
  {
    title: "Field Deployment, AI & Robotics Engineer",
    duration: "2025 (Deployment) & 2021 (R&D)",
    subtitle: "Conbotics - Construction Robotics Startup",
    details: [
      "2025: Led international deployment in Singapore, acting as a bridge between the customer and the dev team to diagnose and resolve mission-critical Sim2Real discrepancies.",
      "2025: Engineered diagnostic solutions using Rosbag analysis and telemetry to monitor robot health and performance in unstructured, real-world environments.",
      "2021: Architected the full navigation stack from scratch, integrating SLAM, sensor fusion, and YOLO-based computer vision for autonomous painting operations.",
      "2021: Optimized motion planning using custom PID controllers for wall-following and Finite State Machines for complex task logic."
    ],
    tags: ["ROS", "Gazebo", "Navigation Stack", "SLAM", "On-Site Deployment", "Computer Vision", "Diagnostics"],
    icon: "cogs", 
  },
  {
    title: "Autonomous Driving Software Engineer",
    duration: "03/2023 - 10/2024",
    subtitle: "Bosch Autonomous Driving Division",
    details: [
      "Optimized data throughput and latency for the autonomous vehicle stack by developing C++/CUDA shared memory solutions and researching RDMA/SMC-R protocols.",      "Worked with sensor fusion, SLAM, and motion planning techniques to enhance vehicle autonomy.",
      "Identified and resolved low-level performance bottlenecks by debugging the Linux Kernel and performing deep-packet analysis using Wireshark and eBPF.",
      "Architected the deployment environment by developing Dockerized setups for local and embedded middleware (ROS 1 & 2)."
    ],
    tags: ["C++", "ROS", "CUDA", "Linux Kernel", "RDMA", "Wireshark", "Docker"],
    icon: "microchip",
  },
  {
    title: "Robotics Research Engineer",
    duration: "02/2022 - 11/2022",
    subtitle: "University of Potsdam - COCOBOTs project",
    details: [
      "Architected a unified ROS2 framework to integrate NLP, Computer Vision, and Motion Planning (MoveIt2) into a user-friendly API for industrial pick-and-place tasks.",
      "Established a high-fidelity Sim-to-Real pipeline using Webots, ROS2 and Docker, ensuring seamless transition between virtual simulations and physical UR3e hardware.",
      "Migrated legacy ROS1 drivers for OnRobot VGC10 grippers to ROS2 and designed custom industrial CAD components in SolidWorks for performance testing.",
    ],
    tags: ["ROS2", "MoveIt2", "Docker", "SolidWorks", "Universal Robot", "Webots"],
    icon: "robot",
  },
  {
    title: "Product and Mechanical Design Trainee",
    duration: "12/2018 - 06/2019",
    subtitle: "Airbond - R&D Sector",
    details: [
      "Transformed high-level aerospace product concepts into functional prototypes for advanced composite material splicers entering a million-pound market.",
      "Directed the end-to-end R&D cycle, utilizing SolidWorks for mechanical design and PLC integration for electronics.",
      "Mastered industrial additive manufacturing using both FDM rapid prototyping and high-end powder-based systems, including the HP Jet Fusion 4200.",
      "Contributed to designs that secured the Queen’s Award for Enterprise."
    ],
    tags: ["SolidWorks", "R&D", "Industrial 3D Printing", "CAD", "Aerospace"],
    icon: "tools", 
  },
];

export const hobbies = [
  "<strong>Yoga</strong> – Practicing mindfulness and balance.",
  "<strong>Surfing</strong> – Exploring waves and enjoying the ocean.",
  "<strong>Travel</strong> – Visiting places like Koh Phangan, Koh Tao, Cat Ba, and Madeira.",
  "<strong>Music Production</strong> – Producing electronic music as 'Tampa Tumpu'.",
];

export const education = [
  {
    title: "EIT Digital's Joint MSc in Autonomous Systems",
    duration: "08/2019 - 03/2022",
    subtitle: "KTH Royal Institute of Technology / TU Berlin",
    details: [
      "Graduated with a 1.7 (First-Class Honours equivalent) and a GPA of ~3.7/4.0, specialized in Robotics and Autonomous Systems.",
      "Awarded the EIT Digital Excellence Full Scholarship and the Leventis Foundation Excellence Full Scholarship.",
      "Acquired a minor in Innovation and Entrepreneurship, bridging technical robotics with product development and entrepreneurship.",
      "Selected as a UN Sustainability Young Leader and EIT Climate-KIC Alumnus."
    ],
    tags: ["Robotics", "AI", "Autonomous Systems", "Entrepreneurship"],
    icon: "graduation-cap",
  },
  {
    title: "Diploma in Mechanical Engineering (Integrated MEng)",
    duration: "09/2013 - 09/2018",
    subtitle: "National Technical University of Athens (NTUA)",
    details: [
      "Completed a 5-year rigorous program (300 ECTS) with a specialization in Mechanical Design, Robotics, and Control Systems.",
      "Ranked in the top 10% of the class with a grade of 8.3/10 (GPA ~3.0/4.0).",
      "My thesis was awarded the Cyprus Ministry of Education First Prize for Best Student Project, and NTUA's Second Prize for the Most Innovative Project.",
      "Hult Prize Competition Greece Finalist (2017)."
    ],
    tags: ["Mechanical Design", "Control Systems", "Kinematics", "FEA"],
    icon: "university",
  },
];


export const footer = [
  {
    label: "Links",
    data: [
      { text: "<i class='fa fa-envelope'></i>", link: "mailto:alexnic31@gmail.com" },
      { text: "<i class='fa fa-github'></i>", link: "https://github.com/alexandrosnic" },
      { text: "<i class='fa fa-linkedin'></i>", link: "https://www.linkedin.com/in/alexandros-nicolaou31/" },
      { text: "<i class='fa fa-soundcloud'></i>", link: "https://soundcloud.com/tampatumpu" },
      { text: "<i class='fa fa-youtube-play'></i>", link: "https://www.youtube.com/@tampatumpu" },
    ],
  },
  {
    label: "copyright-text",
    data: ["Made with passion for AI & Robotics by Alexandros Nikolaou"],
  },
];
