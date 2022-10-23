import { IMG_LINK, MY_NFT_LINK } from "../img/link";

const adventureNFTs = [
  {
    imgUrl: IMG_LINK.moonBird,
    head: "Moonbirds #4486",
    small: "1명 추첨",
  },
  {
    imgUrl: IMG_LINK.meeBits,
    head: "Meebits #15350",
    small: "1명 추첨",
  },
  {
    imgUrl: IMG_LINK.cryptoAdz,
    head: "Cryptoads #1347",
    small: "1명 추첨",
  },
  {
    imgUrl: IMG_LINK.diaTv,
    head: "DIA TV",
    small: "25명 추첨",
  },
  {
    imgUrl: IMG_LINK.hellBound,
    head: "Hellbound",
    small: "50명 추첨",
  },
  {
    imgUrl: IMG_LINK.dosiCitizen,
    head: "DOSI Citizen",
    small: "30000명 추첨",
  },
];

const userProfile = {
  don: 1000,
  level: 1,
  weeklyParticipationCount: 0,
  haveNFTs: [
    {
      imgUrl: MY_NFT_LINK.traveler1.imgUrl,
      videoUrl: MY_NFT_LINK.traveler1.videoUrl,
      level: 1,
      levelName: "Traveler",
    },
  ],
};

const weeklyDosiInfo = {
  participationAccCount: 19376,
};

export { adventureNFTs, userProfile, weeklyDosiInfo };
