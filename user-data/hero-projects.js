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
      "I architected a Retrieval-Augmented Generation (RAG) system deployed directly on an NVIDIA Jetson onboard edge device to power intelligent troubleshooting assistants for robotics teams. The system harnesses local LLM inference via Ollama, combines hybrid BM25 keyword + vector-embedding retrieval through ChromaDB, and classifies user queries into five categories for targeted responses. A Streamlit frontend allows non-technical users to ask complex robotics questions and receive grounded, cited answers—avoiding hallucinations by enforcing strict retrieval-based foundations.",
    techStack: ["NVIDIA Jetson", "Ollama", "ChromaDB", "RAG Architecture", "Streamlit", "Vector Search"],
    media: { image: "images/projects/ai_agent_chat_plain.jpg" },
    demoLink: "/projects/ai-agents-llm-systems.html"
  },
  {
    key: "mujoco-agent",
    title: "Closed-loop Physical AI agent in MuJoCo",
    subtitle: "A VLM watches the robot fail, an LLM fixes the physics, and the simulator tries again.",
    narrative:
      "I built a closed-loop grasping agent around a MuJoCo gripper-and-box scene. A first trial runs with deliberately weak grip and low friction; a vision-language model (Qwen2-VL-2B) inspects the rendered frame and explains why the grasp failed; an LLM planner (Qwen2.5-1.5B) turns that critique, plus an optional human command, into corrected simulator parameters as structured JSON; the second trial runs with those values and the VLM verifies the result. Everything runs locally on the GPU behind a Gradio dashboard.",
    techStack: ["MuJoCo", "Qwen2-VL", "Qwen2.5", "PyTorch", "Gradio", "Closed-loop Control"],
    media: { image: "images/projects/mujoco_closed_loop_agent.jpg" },
    demoLink: "/projects/mujoco-closed-loop-agent.html"
  },
  {
    key: "autosim",
    title: "Autosim: text-to-simulation with LLM agents",
    subtitle: "From one sentence to a Gazebo or Isaac Sim world, a robot and a ROS 2 controller.",
    narrative:
      "Autosim takes a natural-language task such as \"a mobile robot navigating to a green box avoiding a red cylinder\" and compiles it into a working simulation. An LLM parses the prompt into a typed scene specification (objects, robot, success criteria); a scene agent generates the Gazebo world, URDF and launch file, or an Isaac Sim script; a control agent writes the ROS 2 controller node; and a verification step checks the XML and compiles every generated script before launch. It runs locally or in Docker.",
    techStack: ["LLM Agents", "ROS 2", "Gazebo", "Isaac Sim", "URDF", "Docker"],
    media: { image: "images/projects/autosim_text_to_sim.jpg" },
    demoLink: "/projects/autosim-text-to-simulation.html"
  }
];