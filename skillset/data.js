export const corePillars = [
  {
    title: "Embodied AI & Robot Learning",
    overlayFile: "skillset/embodied-ai-robot-learning.html"
  },
  {
    title: "AI Agents & LLM Systems",
    overlayFile: "skillset/AI-ML-and-AI-agents.html"
  },
  {
    title: "Robot Arm Motion Planning & Manipulation",
    overlayFile: "skillset/robot-arm-motion-planning-framework.html"
  },
  {
    title: "Autonomous Navigation Stack Development",
    overlayFile: "skillset/autonomous-navigation-stack-development.html"
  }
];

export const domainMatrix = [
  {
    title: "Sim2Real, Real2Sim & Digital Twins",
    teaser: "Isaac/MuJoCo/Gazebo.",
    description: "High-fidelity simulation for iterative development of controllers and perception.",
    tools: ["Isaac Sim", "Isaac Lab", "MuJoCo", "Gazebo", "Webots"],
    overlayFile: "skillset/sim-to-real-architecture.html"
  },
  {
    title: "Computer Vision & SLAM",
    teaser: "Visual SLAM, 3D vision, detection.",
    description: "Visual-inertial SLAM, depth sensing, point clouds and detection; robust pipelines for manipulation and navigation.",
    tools: ["ORB-SLAM3", "OpenVINS", "OpenCV", "PCL"],
    overlayFile: "skillset/computer-vision.html"
  },
  {
    title: "Robotics Deployment, Hardware & Sensors",
    teaser: "Bringup, sensors, reliability.",
    description: "On-site deployment, system bringup, sensor integration, diagnostics and recovery for industrial and research robots.",
    tools: ["ROS2", "Docker", "RealSense", "Lidar", "IMU"],
    overlayFile: "skillset/robotics-deployment.html"
  },
  {
    title: "Real-time Systems & Middleware Performance",
    teaser: "Linux kernel, RDMA, networking.",
    description: "Optimizing data transport for real-time systems; kernel modules, RDMA protocols, low-latency networking stacks.",
    tools: ["Linux Kernel", "RDMA", "Wireshark"],
    overlayFile: "skillset/low-level-communication.html"
  },
  {
    title: "Optimization & Control",
    teaser: "Nonlinear, MPC, trajectory optimization.",
    description: "Design and tuning of controllers for mobile bases and arms; stability, robustness, and real-time constraints.",
    tools: ["MPC", "SMACH", "PID", "MoveIt2"],
    overlayFile: "skillset/advanced-control-and-optimization.html"
  },
  {
    title: "CAD Mechanical Design, FEA & 3D Printing",
    teaser: "CAD, prototyping.",
    description: "CAD integration for end-effectors and robot fixtures; rapid iteration.",
    tools: ["SolidWorks", "URDF/Xacro", "OnRobot"],
    overlayFile: "skillset/mechanical-design.html"
  },
];

export const toolbox = [
  { label: "ROS1/ROS2", icon: "fa fa-cog" },
  { label: "MoveIt2/Nav2", icon: "fa fa-cog" },
  { label: "Isaac Sim/Isaac Lab", icon: "fa fa-cubes" },
  { label: "MuJoCo/Gazebo", icon: "fa fa-cubes" },
  { label: "SLAM (ORB-SLAM3/OpenVINS)", icon: "fa fa-map" },
  { label: "AI agents/LLMs/RAG", icon: "fa fa-robot" },
  { label: "VLA/VLM/World Models", icon: "fa fa-robot" },
  { label: "LeRobot/Hugging Face", icon: "fa fa-robot" },
  { label: "PyTorch/OpenCV", icon: "fa fa-eye" },
  { label: "C/C++", icon: "fa fa-code" },
  { label: "Python", icon: "fa fa-code" },
  { label: "CUDA", icon: "fa fa-code" },
  { label: "Linux", icon: "fa fa-linux" },
  { label: "Docker", icon: "fa fa-cubes" },
  { label: "Matlab/Simulink", icon: "fa fa-code" },
  { label: "SolidWorks/Blender", icon: "fa fa-cube" },
];
