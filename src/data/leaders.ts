export interface Leader {
    name: string;
    position: string;
    photo: string;
    bio: string;
}

export const leaders: Leader[] = [
     {
        name: "Dylen Liverman",
        position: "President",
        photo: "/assets/images/dylen-liverman.png",
        bio: `Leads club operations and represents CanSat Robotics to the
            Institute and to sponsors.`,
    },
    {
        name: "Katie Aycock",
        position: "Vice President",
        photo: "/assets/images/katie-aycock.png",
        bio: `Second in command to President and assists with new initiatives.`,
    },
    {
        name: "Annika Trout",
        position: "Secretary",
        photo: "/assets/images/annika-trout.png",
        bio: `Records meeting minutes and manages the club's internal software.`
    },
    {
        name: "Harineel Gajelli",
        position: "Finance Officer",
        photo: "/assets/images/harineel-gajelli.png",
        bio: `Manages club spending and SGA procurement.`,
    },
    {
        name: "Zane Plante",
        position: "Social Media Manager",
        photo: "/assets/images/leadership-placeholder.png",
        bio: `Manages and directs club branding through social media, fliers, and other graphics.`
    },
    {
        name: "Luca Baldelli",
        position: "Rover Team Lead",
        photo: "/assets/images/luca-baldelli.png",
        bio: `Directs and leads the development of the Rover.`,
    },
    {
        name: "Luke Ricketts",
        position: "Glider Team Lead",
        photo: "/assets/images/luke-ricketts.png",
        bio: `Directs and leads the development of the Glider.`,
    },
    {
        name: "Tristan Wilson",
        position: "Satellite Team Lead",
        photo: "/assets/images/tristan-wilson.png",
        bio: `Directs and leads the development of the Satellite.`,
    },
    {
        name: "Ethin Vo",
        position: "Testing Team Lead",
        photo: "/assets/images/ethin-vo.png",
        bio: `Directs and leads the development of all testing platforms 
        and assists other teams in large scale testing.`
    }, 
]