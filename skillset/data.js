export const corePillars = [
  {
    title: "Bosch L4 Autonomous Driving",
    media: "images/skills/bosch.gif",
    story: "Optimized transport stack (ETH/UDP/RDMA), C++/CUDA unit tests, and system profiling for real-time autonomy."
  },
  {
    title: "UR3e Manipulation Framework",
    media: "images/skills/ur3e.gif",
    story: "ROS2/Webots/MoveIt2 pipeline with custom drivers and gripper integration for robust pick-and-place."
  },
  {
    title: "AI Agents for Robotics",
    media: "images/skills/ai-agents.gif",
    story: "Agentic workflows combining CV/NLP and control for task-level autonomy and HRI."
  }
];

export const domainMatrix = [
  {
    title: "Control Theory",
    teaser: "Nonlinear, MPC, trajectory optimization.",
    description: "Design and tuning of controllers for mobile bases and arms; stability, robustness, and real-time constraints.",
    tools: ["MPC", "SMACH", "PID", "MoveIt2"]
  },
  {
    title: "Perception & CV",
    teaser: "3D vision, SLAM, detection.",
    description: "Depth sensing, point clouds, AprilTags, RealSense; robust pipelines for manipulation/perception.",
    tools: ["OpenCV", "PCL", "RealSense", "AprilTags"]
  },
  {
    title: "Motion Planning",
    teaser: "Sampling, optimization, kinematics.",
    description: "Kinematic chains, collision checking, planners for constrained pick-and-place.",
    tools: ["OMPL", "MoveIt2", "URDF", "SRDF"]
  },
  {
    title: "Simulation & Digital Twins",
    teaser: "Webots/Gazebo/Isaac.",
    description: "High-fidelity simulation for iterative development of controllers and perception.",
    tools: ["Webots", "Gazebo", "Isaac Sim"]
  },
  {
    title: "Systems & DevOps",
    teaser: "Docker, CI, profiling.",
    description: "Containers, reproducible environments, performance analysis for embedded/desktop.",
    tools: ["Docker", "GitHub Actions", "VTune", "perf"]
  },
  {
    title: "Mechanical Design",
    teaser: "CAD, prototyping.",
    description: "CAD integration for end-effectors and robot fixtures; rapid iteration.",
    tools: ["SolidWorks", "URDF/Xacro", "OnRobot"]
  }
];

export const toolbox = [
  { label: "Linux", icon: "fa fa-linux" },
  { label: "C++", icon: "fa fa-code" },
  { label: "Python", icon: "fa fa-code" },
  { label: "ROS / ROS2", icon: "fa fa-cog" },
  { label: "OpenCV", icon: "fa fa-eye" },
  { label: "PCL", icon: "fa fa-cubes" },
  { label: "Git", icon: "fa fa-git" },
  { label: "Docker", icon: "fa fa-cubes" },
  { label: "SolidWorks", icon: "fa fa-cube" },
  { label: "Gazebo", icon: "fa fa-cubes" },
  { label: "Webots", icon: "fa fa-cubes" },
  { label: "Isaac Sim", icon: "fa fa-rocket" }
];