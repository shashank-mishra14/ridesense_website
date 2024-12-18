import { Map, Users, Camera, Navigation } from 'lucide-astro';

export const features = [
  {
    title: "Personalized Route Planning",
    description: "Plan your perfect ride in minutes with routes tailored to your style and preferences.",
    icon: Map,
    details: [
      "Ride planning in two minutes",
      "Discover destinations matching your needs",
      "Choose routes according to your taste",
      "Know what scenery to expect along the route"
    ],
    image: "/feature-1.jpg",
    imageAlt: "Route planning interface showing a scenic motorcycle route"
  },
  {
    title: "Group Ride Coordination",
    description: "Seamlessly coordinate group rides with integrated planning and tracking features.",
    icon: Users,
    details: [
      "Create ride plans and add riders easily",
      "Decide meeting points in one page",
      "Send invites with ride plan overview",
      "View all upcoming rides in your group"
    ],
    image: "/feature-2.jpg",
    imageAlt: "Group of motorcyclists planning their route together"
  },
  {
    title: "Live Location Sharing",
    description: "Stay connected with your group throughout the journey.",
    icon: Navigation,
    details: [
      "Share and view location of riders in real-time",
      "No rider left behind feature",
      "Dynamic route replanning",
      "Get updates when co-riders reach home"
    ],
    image: "/feature-3.jpg",
    imageAlt: "Live tracking interface showing multiple riders on a map"
  },
  {
    title: "Ride Memories",
    description: "Capture and preserve your riding adventures.",
    icon: Camera,
    details: [
      "Look back upon your riding memories",
      "Maintain detailed ride logs",
      "View route maps and key statistics",
      "Share ride images in shared albums"
    ],
    image: "/feature-4.jpg",
    imageAlt: "Collection of motorcycle journey photographs and statistics"
  }
];