export const heroProjects = [
  {
    key: "conbotics",
    title: "Full-stack autonomous navigation & robotic deployment",
    subtitle: "From developing the Navigation Stack solo to proving it on construction sites in Singapore.",
    narrative:
      "As employee #1 at Conbotics, I built the complete autonomous navigation stack for a construction painting robot from scratch: SLAM, sensor fusion, path planning and YOLO-based detection. I then led a two-month international deployment in Singapore, moving from developer to field engineer and fixing Sim2Real discrepancies on-site in dusty, constantly changing conditions. The deployment helped secure a €1M+ lead investor conversion and was demonstrated to the Minister of Innovation and to CEOs of multi-billion dollar companies.",
    techStack: ["Navigation Stack", "SLAM", "Sensor Fusion", "On-Site Deployment", "YOLO", "ROS"],
    media: { image: "images/projects/autonomous-mobile-base.jpeg" },
    demoLink: "/projects/autonomous-mobile-base.html"
  },
  {
    key: "real-to-sim",
    title: "Real-to-sim: replaying recorded human tasks on a robot arm",
    subtitle: "Can a robot do what the worker did? Every recorded grasp gets a usable / not-usable verdict.",
    narrative:
      "Starting from egocentric recordings of people at work, visual SLAM recovers the room and where the worker stood, and each grasp becomes a grasp and release pose. A simulated Franka Panda is placed at the worker's stance in a model of the recorded room and replays every grasp through ROS 2, MoveIt 2 and ros2_control on MuJoCo: approach, grasp, lift, carry, place and release. A strict verdict (pose within 2 cm and 10°, no collisions, box not dropped) marks each grasp usable or names the failure; 32 of 44 recorded grasps came out usable.",
    techStack: ["MuJoCo", "ROS 2", "MoveIt 2", "ros2_control", "Egocentric SLAM", "Real-to-Sim"],
    media: { video: "images/projects/real_to_sim_replay.mp4" },
    demoLink: "/projects/real-to-sim-replay.html"
  },
  {
    key: "llm-agents",
    title: "LLM-powered AI Agents for Robotic systems",
    subtitle: "Troubleshooting agents that understand the robot and ground every answer in verified documentation.",
    narrative:
      "A production RAG agent stack running fully on an NVIDIA Jetson onboard the robot, so troubleshooting works offline and data never leaves the machine. It combines local LLM inference (Ollama, Qwen2.5) with hybrid BM25 + vector search over manuals, customer chat history and the robot's own source code, mapping physical symptoms to likely software or hardware causes. Confidence scores, clarification questions and an operator feedback loop keep answers grounded instead of hallucinated.",
    techStack: ["NVIDIA Jetson", "Ollama", "Hybrid RAG", "ChromaDB", "Agent Orchestration", "Streamlit"],
    media: { image: "images/projects/ai_agent_chat_plain.jpg" },
    demoLink: "/projects/ai-agents-llm-systems.html"
  },
  {
    key: "bosch",
    title: "Optimization of Bosch autonomous cars' sensors-processors data throughput/latency",
    subtitle: "Squeezing microsecond latency out of a production-grade autonomous vehicle system.",
    narrative:
      "On Bosch's autonomous driving stack I increased sensor-data throughput by 10% on an already highly optimized system, using C++, CUDA and shared-memory transport. Getting there meant going below the middleware into the Linux kernel network stack, with Wireshark and eBPF to find bottlenecks at microsecond level. Along the way I identified a bug in the Linux kernel's RDMA (SMC-R) module and proposed a fix.",
    techStack: ["C++", "CUDA", "Linux Kernel", "RDMA", "eBPF", "Wireshark"],
    media: { image: "images/projects/bosch-autonomous-vehicle.jpg" },
    demoLink: "/projects/bosch-autonomous-vehicle.html"
  },
  {
    key: "ur3e",
    title: "Robot arm manipulation via unified ROS2 framework",
    subtitle: "Architecting a user-friendly ROS2 hub to unify Computer Vision, NLP, and Motion Control teams.",
    narrative:
      "For a voice-controlled industrial manipulator (UR3e, COCOBOTs project), I architected the Dockerized ROS2 framework that ties together NLP and computer-vision modules built by partner teams with MoveIt2 motion planning. The key was hiding that complexity behind a simple API, so non-roboticists could run pick-and-place tasks on real hardware. A Webots digital twin kept simulation and the physical robot interchangeable, and the framework is now used by Airbus subsidiaries.",
    techStack: ["ROS2", "MoveIt2", "System Architecture", "Docker", "Sim-to-Real"],
    media: { image: "images/projects/robotic-arm-manipulation.jpg" },
    demoLink: "/projects/robotic-arm-manipulation.html"
  },
  {
    key: "autosim",
    title: "Autosim: text-to-simulation with LLM agents",
    subtitle: "From one sentence to a Gazebo or Isaac Sim world, a robot and a ROS 2 controller.",
    narrative:
      "Autosim turns a natural-language task, such as \"a mobile robot navigating to a green box avoiding a red cylinder\", into a working simulation. An LLM parses the prompt into a typed scene specification with explicit success criteria; a scene agent generates the Gazebo world, URDF and launch file (or an Isaac Sim script), and a control agent writes the ROS 2 controller. A verification step checks the XML and compiles every generated script before anything launches.",
    techStack: ["LLM Agents", "ROS 2", "Gazebo", "Isaac Sim", "URDF", "Docker"],
    media: { image: "images/projects/autosim_text_to_sim.jpg" },
    demoLink: "/projects/autosim-text-to-simulation.html"
  }
];
