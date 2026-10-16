export interface Spec {
    label: string;
    value: string;
    headline?: boolean;
}

export interface GalleryItem {
    image: string;
    caption: string;
}

export interface Member {
    name: string;
    major: string;
}

export interface Team {
    lead: string;
    members: Member[];
}

export interface Project {
    name: string;
    slug: string;
    image: string;
    description: string;
    competition: string;
    specs: Spec[];
    overview: {
        heading: string;
        body: string;
    }[];
    gallery: GalleryItem[];
    team: Team;
}

export const projects = [
    {
        name: "Rover Team",
        slug: "rover",
        image: "/assets/images/rover/rover-cover.webp",
        description:
            "A two-wheel autonomous rover designed for reliable navigation after landing.",
        competition: "ARLISS",
        specs: [
            {label: "Mass", value: "820 g", headline: true},
            {label: "Chassis size (L × W × H)", value: "13 × 6 × 4 cm" },
            {label: "Top speed", value: "1.0 m/s", headline: true },
            {label: "Microcontroller", value: "ESP32-S3" },
            {label: "Navigation", value: "GPS + IMU" },
            {label: "Competitions", value: "2", headline: true },
        ],
        overview : [
            {
                heading: "Design goal",
                body: `Design a 2-wheeled GPS autonomous rover capable of parachuting out of a rocket at 15,000', landing, and navigating to a predetermined location.`,
            },
            {
                heading: "How it works",
                body: `The rover works by controlling motor speeds based off of GPS heading and position. This allows the rover to consistently get within 2.5 m of a target. For next year's rover, we will be using a 2-D LiDAR to determine the position of the target when we are within 2.5 m, and driving to the exact position.`,
            },
        ],
        gallery : [
            { image: "/assets/images/rover/rover-1.webp", caption: "CAD" },
            { image: "/assets/images/rover/rover-2.webp", caption: "Rover isometric"},
            { image: "/assets/images/rover/rover-3.webp", caption: "Rover top down"}
        ],
        team : {
            lead: "Luca Baldelli",
            members: [
                { name: "Harineel Gajelli", major: "Mechanical Engineering" },
                { name: "Katie Aycock", major: "Mechanical Engineering" },
                { name: "Zane Plante", major: "Aerospace Engineering" },
                { name: "Liam Resnick", major: "Computer Science" },
                { name: "Arsenii Toradze", major: "Computer Engineering" },
            ]
        },
    },
    {
        name: "Glider Team",
        slug: "glider",
        image: "/assets/images/glider/glider-cover.png",
        description:
            "An autonomous glider designed to reach the target on landing.",
        competition: "ARLISS",
        specs: [
            { label: "Mass", value: "250 g", headline: true },
            { label: "Wingspan", value: "66 cm", headline: true },
            { label: "Competitions", value: "0", headline: true },
        ],
        overview: [
            {
                heading: "Design goal",
                body: `The design goal of the glider is to reach the target with a propulsion-less, controls-only glide. This project is meant to be a unique solution to achieve the requirements set by the Cansat competition, as no other teams have attempted a glider as of yet.`,
            },
            {
                heading: "How it works",
                body: `The glider will rely on minimal control surfaces and a small onboard flight controller to reach the target. With no parachute attached, the moment the glider releases from the payload canister, its wings will fold out and it will rely on two servo-controlled ailerons to guide its descent down towards the target.`,
            },
        ],
        gallery: [
            { image: "/assets/images/glider/glider-1.webp", caption: "Wing Servo" },
            { image: "/assets/images/glider/glider-2.webp", caption: "Glider Wing Folded top down"},
            { image: "/assets/images/glider/glider-3.webp", caption: "Folded Wing CAD"},
            { image: "/assets/images/glider/glider-4.webp", caption: "Un-folded Wing CAD"}
        ],
        team: {
            lead: "Luke Ricketts",
            members: [
                { name: "Geneva Brannon", major: "Aerospace Engineering" },
                { name: "Thomas Fitzgerald", major: "Physics" },
                { name: "Henry Gilmore", major: "Electrical Engineering" },
                { name: "Kyler Jacobs", major: "Mechanical Engineering" },
            ]
        },
    },
    // {
    //     name: "Satellite Team",
    //     slug: "satellite",
    //     image: "/assets/images/robot_placeholder.png",
    //     description:
    //         "Can-Satellite designed to collect data and deploy a PocketQube.",
    //     specs: [
    //         { label: "Mass", value: "... g", headline: true },
    //         { label: "Competitions", value: "0", headline: true },
    //     ],
    //     overview: [
    //         {
    //             heading: "Design goal",
    //             body: ``,
    //         },
    //         {
    //             heading: "How it works",
    //             body: ``,
    //         },
    //     ],
    //     gallery: [
    //         {image: "/assets/images/robot_placeholder.png", caption: "placeholder"}
    //     ],
    //     team: {
    //         lead: "Tristan Wilson",
    //         members: [
    //             { name: "Kevin Jiao", major: "Electrical Engineering" },
    //             { name: "Noah Svetcov", major: "Computer Engineering" },
    //         ]
    //     },
    // },
];