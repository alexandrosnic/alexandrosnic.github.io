export const heroProjects = [
  {
    key: "bosch",
    title: "Optimization of Bosch autonomous cars' sensors-processors data throughput/latency",
    subtitle: "Squeezing microsecond latency out of a production-grade autonomous vehicle system.",
    narrative:
      "Working on Bosch’s autonomous stack required moving far beyond standard C++ development. To improve throughput on an already highly-optimized system, I had to dive deep into the Linux Kernel network stack. I utilized low-level analysis tools like Wireshark to identify unseen bottlenecks and implemented RDMA transport protocols, ensuring that critical sensor data reached the CPU under strict real-time constraints.",
    techStack: ["C++", "Linux Kernel", "RDMA", "Wireshark", "Low-Level Networking"],
    media: { image: "images/projects/bosch-autonomous-vehicle.jpg" },
    demoLink: "/projects/bosch-autonomous-vehicle.html"
  },
  {
    key: "ur3e",
    title: "Robot arm manipulation via unified ROS2 framework",
    subtitle: "Architecting a user-friendly ROS2 hub to unify Computer Vision, NLP, and Motion Control teams.",
    narrative:
      "My role was to build the central nervous system for a complex Human-Robot Interaction project. I architected a unified, Dockerized ROS2 framework designed to integrate disparate modules - like external NLP and CV models - built by partner teams. The crucial challenge was abstracting this complexity into a simple, robust API, allowing non-roboticists to operate industrial hardware via ease-of-use interfaces, backed by seamless Sim-to-Real transfer.",
    techStack: ["ROS2 Migration", "System Architecture", "Docker", "MoveIt2", "Sim-to-Real"],
    media: { image: "images/projects/robotic-arm-manipulation.jpg" },
    demoLink: "/projects/robotic-arm-manipulation.html"
  },
  {
    key: "conbotics",
    title: "Full-stack autonomous navigation & robotic deployment",
    subtitle: "From developing the Navigation Stack solo to proving it on construction sites in Singapore.",
    narrative:
      "I took sole ownership of developing the complete autonomous navigation stack for this construction robot, implementing SLAM, sensor fusion, and path planning from scratch. The true test of my code came during a two-month international deployment. I transitioned from developer to field engineer, proving the stack's reliability in dusty, dynamic real-world conditions and optimizing performance on-site to meet customer requirements.",
    techStack: ["Navigation Stack", "SLAM", "On-Site Deployment", "YOLO", "ROS1"],
    media: { image: "images/projects/autonomous-mobile-base.jpeg" },
    demoLink: "/projects/autonomous-mobile-base.html"
  },
  {
    key: "llm-agents",
    title: "LLM-powered AI Agents for Robotic systems",
    subtitle: "Building intelligent conversational agents that understand robotics context and ground answers in verified documentation.",
    narrative:
      "I architected a Retrieval-Augmented Generation (RAG) system that powers intelligent troubleshooting assistants for robotics teams. The system harnesses local LLM inference via Ollama, combines hybrid BM25 keyword + vector-embedding retrieval through ChromaDB, and classifies user queries into five categories for targeted responses. A Streamlit frontend allows non-technical users to ask complex robotics questions and receive grounded, cited answers—avoiding hallucinations by enforcing strict retrieval-based foundations.",
    techStack: ["Ollama", "ChromaDB", "RAG Architecture", "LangChain/LlamaIndex", "Streamlit", "Vector Search"],
    media: { image: "images/carousel/ai_agent.jpg" },
    demoLink: "/projects/ai-agents-llm-systems.html"
  }
];