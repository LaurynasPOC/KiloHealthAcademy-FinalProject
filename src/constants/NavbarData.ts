export interface NavData {
  logo: string;
  navigation: Nav[];
  socialTags: SocialTags[];
}
type SocialTags = {
  img: string;
  alt: string;
  link: string;
};

type Nav = {
  title: string;
  link: string;
};

export const NAVBARDATA: NavData = {
  logo: "pageLogo",
  navigation: [
    {
      title: "Pagrindinis",
      link: "http://localhost:8000",
    },
    {
      title: "Receptai",
      link: "http://localhost:8000/recipes",
    },
    {
      title: "Planai",
      link: "http://localhost:8000/plans",
    },
    {
      title: "Apie mane",
      link: "http://localhost:8000/about",
    },
    {
      title: "DUK",
      link: "http://localhost:8000/duk",
    },
  ],
  socialTags: [
    {
      img: "facebookIcon",
      alt: "fbalt",
      link: "https://www.facebook.com/aistetrenere",
    },
    {
      img: "instagramIcon",
      alt: "instaalt",
      link: "https://www.instagram.com/aistebabarske/",
    },
    {
      img: "youtubeIcon",
      alt: "youtubeAlt",
      link: "https://www.youtube.com/watch?v=6iFbuIpe68k",
    },
  ],
};
