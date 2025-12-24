export const heroProjects = [
  {
    key: "bosch",
    title: "Deep Kernel Optimization for Autonomous Stacks",
    subtitle: "Squeezing microsecond latency out of a production-grade autonomous vehicle system.",
    narrative:
      "Working on Bosch’s autonomous stack required moving far beyond standard C++ development. To improve throughput on an already highly-optimized system, I had to dive deep into the Linux Kernel network stack. I utilized low-level analysis tools like Wireshark to identify unseen bottlenecks and implemented RDMA transport protocols, ensuring that critical sensor data reached the CPU under strict real-time constraints.",
    techStack: ["C++", "Linux Kernel", "RDMA", "Wireshark", "Low-Level Networking"],
    media: { image: "images/projects/ai-projects.jpg" },
    demoLink: "/projects/bosch-autonomous-vehicle.html"
  },
  {
    key: "ur3e",
    title: "The \"One-Button\" Industrial HRI Framework",
    subtitle: "Architecting a user-friendly ROS2 hub to unify Computer Vision, NLP, and Motion Control teams.",
    narrative:
      "My role was to build the central nervous system for a complex Human-Robot Interaction project. I architected a unified, Dockerized ROS2 framework designed to integrate disparate modules—like external NLP and CV models—built by partner teams. The crucial challenge was abstracting this complexity into a simple, robust API, allowing non-roboticists to operate industrial hardware via ease-of-use interfaces, backed by seamless Sim-to-Real transfer.",
    techStack: ["ROS2 Migration", "System Architecture", "Docker", "MoveIt2", "Sim-to-Real"],
    media: { image: "images/projects/ai-projects.jpg" },
    demoLink: "/projects/robotic-arm-manipulation.html"
  },
  {
    key: "conbotics",
    title: "Full-Stack Navigation & International Deployment",
    subtitle: "From developing the Navigation Stack solo to proving it on construction sites in Singapore.",
    narrative:
      "I took sole ownership of developing the complete autonomous navigation stack for this construction robot, implementing SLAM, sensor fusion, and path planning from scratch. The true test of my code came during a two-month international deployment. I transitioned from developer to field engineer, proving the stack's reliability in dusty, dynamic real-world conditions and optimizing performance on-site to meet customer requirements.",
    techStack: ["Navigation Stack", "SLAM", "On-Site Deployment", "YOLO", "ROS1"],
    media: { image: "images/projects/autonomous-mobile-base.jpg" },
    demoLink: "/projects/autonomous-mobile-base.html"
  },
  {
    key: "behavioral-cloning",
    title: "End-to-End Deep Learning for Autonomous Driving",
    subtitle: "Teaching a vehicle to drive by mimicking human intuition using CNNs.",
    narrative:
      "This project moved beyond classical rule-based robotics into end-to-end Deep Learning. I first trained a CNN to robustly recognize traffic signs from camera data. I then implemented a Behavioral Cloning model, feeding raw pixel data directly into a neural network. Instead of following hard-coded instructions, the vehicle learned to steer autonomously in simulation by imitating human driving patterns.",
    techStack: ["Deep Learning", "Computer Vision", "Behavioral Cloning", "PyTorch/Keras", "CNN"],
    media: { image: "images/projects/autonomous-driving.jpg" },
    demoLink: "/projects/autonomous-driving.html"
  }
];