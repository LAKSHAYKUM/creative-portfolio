export interface showReelI {
  title: string;
  wistiaId: string;
  thumbnail: string;
  stats: {
    views: number;
    likes: number;
    comments: number;
    repost: number;
  };
}

export const showRealData: showReelI[] = [
  {
    title: "USA Client Talking Head Reel",
    wistiaId: "q8q9tkidpl",
    thumbnail: "/images/thumbnail-1.jpg",
    stats: { views: 110000, likes: 15300, comments: 290, repost: 180 },
  },
  {
    title: "Motion Graphics Reel",
    wistiaId: "phez2y7wcb",
    thumbnail: "/images/thumbnail-2.jpg",
    stats: { views: 92000, likes: 12400, comments: 310, repost: 150 },
  },
  {
    title: "Motion Graphics Animated",
    wistiaId: "xy6er9treb",
    thumbnail: "/images/thumbnail-3.jpg",
    stats: { views: 68000, likes: 8900, comments: 180, repost: 90 },
  },
];