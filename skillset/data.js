export const corePillars = [
  {
    title: "Robot Arm Motion Planning & Manipulation",
    media: "images/skills/ur3e.gif",
    overlayFile: "skillset/robot-arm-motion-planning-framework.html"
  },
  {
    title: "Autonomous Navigation Stack Development",
    media: "images/skills/ur3e.gif",
    overlayFile: "skillset/autonomous-navigation-stack-development.html"
  },
  {
    title: "Embodied AI, AI Agents & ML",
    media: "images/skills/ai-agents.gif",
    overlayFile: "skillset/AI-ML-and-AI-agents.html"
  }
];

export const domainMatrix = [
  {
    title: "Sim2Real & Digital Twins",
    teaser: "Webots/Gazebo/Isaac.",
    description: "High-fidelity simulation for iterative development of controllers and perception.",
    tools: ["Webots", "Gazebo", "Isaac Sim"],
    overlayFile: "skillset/sim-to-real-architecture.html"
  },
  {
    title: "ROS1 to ROS2 Migration",
    teaser: "Docker, CI, profiling.",
    description: "Containers, reproducible environments, performance analysis for embedded/desktop.",
    tools: ["Docker", "GitHub Actions", "VTune", "perf"],
    overlayFile: "skillset/ros1-to-ros2-migration.html"
  },
  {
    title: "Computer Vision",
    teaser: "3D vision, SLAM, detection.",
    description: "Depth sensing, point clouds, AprilTags, RealSense; robust pipelines for manipulation/perception.",
    tools: ["OpenCV", "PCL", "RealSense", "AprilTags"],
    overlayFile: "skillset/computer-vision.html"
  },
  {
    title: "Real-time, safety-critical systems design",
    teaser: "Linux kernel, RDMA, networking.",
    description: "Optimizing data transport for real-time systems; kernel modules, RDMA protocols, low-latency networking stacks.",
    tools: ["Linux Kernel", "RDMA", "Wireshark"],
    overlayFile: "skillset/low-level-communication.html"
  },
  {
    title: "Robotics Deployment & Field Engineering",
    teaser: "Bringup, debugging, reliability.",
    description: "On-site deployment, system bringup, diagnostics and recovery; robust ops for industrial and research robots.",
    tools: ["Linux", "Docker", "ROS2", "CAN"],
    overlayFile: "skillset/robotics-deployment.html"
  },  
  {
    title: "CAD Mechanical Design, FEA & 3D Printing",
    teaser: "CAD, prototyping.",
    description: "CAD integration for end-effectors and robot fixtures; rapid iteration.",
    tools: ["SolidWorks", "URDF/Xacro", "OnRobot"],
    overlayFile: "skillset/mechanical-design.html"
  },
  {
    title: "Optimization & Control",
    teaser: "Nonlinear, MPC, trajectory optimization.",
    description: "Design and tuning of controllers for mobile bases and arms; stability, robustness, and real-time constraints.",
    tools: ["MPC", "SMACH", "PID", "MoveIt2"],
    overlayFile: "skillset/advanced-control-and-optimization.html"
  },
  {
    title: "Hardware & Sensor Integration",
    teaser: "Lidar, depth, IMUs, cameras.",
    description: "Hands-on integration with Lidar, depth cameras (RealSense/OAK-D), IMUs, neuromorphic sensors; drivers, calibration, synchronization.",
    tools: ["RealSense", "OAK-D", "Lidar", "IMU"],
    overlayFile: "skillset/hardware-and-sensors.html"
  },
  
];

export const toolbox = [
  { label: "ROS1/ROS2", icon: "fa fa-cog" },
  { label: "Gazebo/Webots/Isaac Sim", icon: "fa fa-cubes" },
  { label: "AI agents/LLMs", icon: "fa fa-robot" },
  { label: "C/C++", icon: "fa fa-code" },
  { label: "CUDA", icon: "fa fa-code" },
  { label: "Python", icon: "fa fa-code" },
  { label: "Linux", icon: "fa fa-linux" },
  { label: "Matlab/Simulink", icon: "fa fa-code" },
  { label: "OpenCV/Tensorflow/PyTorch/Keras", icon: "fa fa-eye" },
  { label: "Docker", icon: "fa fa-cubes" },
  { label: "SolidWorks/Blender", icon: "fa fa-cube" },
];