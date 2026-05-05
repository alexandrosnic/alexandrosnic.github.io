// Media items for the About carousel.
// Add objects with either `image` (filename under images/carousel) or `video` (relative path), plus optional `title` and `description`.
// Examples:
// { image: 'robot-demo.gif', title: 'Robot Demo', description: 'Autonomous navigation in cluttered space' }
// { video: 'images/carousel/simulation.mp4', title: 'Simulation', description: 'High-fidelity sim run' }

export const carouselMedia = [
  // Populate with your files from images/carousel
  { video: 'images/carousel/conbotics_prototyping_3.mp4', title: 'Simulation framework development and digital twins workflow', description: 'Conbotics Sim2Real stack', demoLink: '/projects/simulation-framework-development.html' },
  { video: 'images/carousel/autonomous_driving.mp4', title: 'Object detection for autonomous driving in Morse simulator', description: '', demoLink: '/projects/morse-autonomous-driving-perception.html' },
  { video: 'images/carousel/drones.mp4', title: 'Development of a predefined drone trajectory in Python', description: '', demoLink: '/projects/drone-trajectory-python.html' },
  { video: 'images/carousel/mosaic.mp4', title: 'Simultaneous mosaicing and tracking with an event-based camera', description: 'Computer vision', demoLink: '/projects/event-based-mosaicing-tracking.html' },
  { image: 'cad_gif.gif', title: 'CAD/FEA mechanical design projects', description: '', demoLink: '/projects/cad-fea-design-workflow.html' },
  { video: 'images/carousel/behavioral_cloning.mp4', title: 'End-to-end deep learning autonomous driving', description: 'CNN behavioral cloning with CARLA validation', demoLink: '/projects/autonomous-driving.html' },
];
