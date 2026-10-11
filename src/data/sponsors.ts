export interface Sponsor {
    name: string;
    logo: string;
    url?: string;
    width?: string;
}

export const sponsors: Sponsor[] = [
    {
        name: "Georgia Space Grant Consortium",
        logo: "/assets/sponsors/GSGCLogo_Transparent.png",
        url: "https://gasgc.org/wp/"
    },
    {
        name: "Georgia Tech",
        logo: "/assets/sponsors/GTLogo_RGB.png",
        url: "https://www.gatech.edu/"
    },
    {
        name: "Georgia Tech Woodruff School of Mechanical Engineering",
        logo: "/assets/sponsors/ME_Woodruff_School_GTGold_RGB.png",
        url: "https://www.me.gatech.edu/"
    },
    {
        name: "Georgia Tech SGA",
        logo: "/assets/sponsors/SGALogo_Transparent.png",
        url: "https://www.sga.gatech.edu/",
        width: "70%"
    }
];