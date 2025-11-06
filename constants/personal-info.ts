export type Link = {
  type: string;
  label: string;
  url: string;
};

export const PERSONAL_INFO_LINKS = {
  Sojeong: {
    links: [
      {
        type: "LinkedIn",
        label: "sojeong",
        url: "https://www.linkedin.com/in/%EC%86%8C%EC%A0%95%EC%B5%9C-525792231/",
      },
      {
        type: "Disquiet",
        label: "sojeong",
        url: "https://disquiet.io/@daisyhyeseul",
      },
      {
        type: "Mail",
        label: "ceo@sam-meows.com",
        url: "mailto:ceo@sam-meows.com",
      },
    ] as Link[],
  },
  Changjoon: {
    links: [
      {
        type: "LinkedIn",
        label: "ChangJun (문창준) Mun",
        url: "https://www.linkedin.com/in/changjun-mun/",
      },
      {
        type: "Disquiet",
        label: "codeztree",
        url: "https://disquiet.io/@codeztree",
      },
      {
        type: "Mail",
        label: "cto@sam-meows.com",
        url: "mailto:cto@sam-meows.com",
      },
    ] as Link[],
  },
  Jaehoon: {
    links: [
      {
        type: "LinkedIn",
        label: "김재훈",
        url: "https://www.linkedin.com/in/hoon0214/",
      },
      {
        type: "Mail",
        label: "JHoon@sam-meows.com",
        url: "mailto:JHoon@sam-meows.com",
      },
    ] as Link[],
  },
  Hyorin: {
    links: [
      {
        type: "LinkedIn",
        label: "Hyorin Lim",
        url: "https://www.linkedin.com/in/hyorin01/",
      },
      {
        type: "Mail",
        label: "linad@sam-meows.com",
        url: "mailto:linad@sam-meows.com",
      },
    ] as Link[],
  },
  Jina: {
    links: [
      {
        type: "LinkedIn",
        label: "송지나",
        url: "https://www.linkedin.com/in/%EC%A7%80%EB%82%98-%EC%86%A1-9a7222336/",
      },
      {
        type: "Mail",
        label: "najina@sam-meows.com",
        url: "mailto:najina@sam-meows.com",
      },
    ] as Link[],
  },
  Sammeows: {
    links: [] as Link[],
  },
} as const;
