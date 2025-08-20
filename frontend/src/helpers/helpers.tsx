export enum TechCategory {
  Language = "language",
  Framework = "framework",
  Tool = "tool",
  External = "external"
}

export const TechIcons = {
  Github: {
    name: "GitHub",
    icon: "/icons/github.png",
    category: TechCategory.External
  },
  LinkedIn: {
    name: "LinkedIn",
    icon: "/icons/linkedin.png",
    category: TechCategory.External
  },
  Kotlin: {
    name: "Kotlin/Jetpack Compose",
    icon: "/icons/kotlin-96.png",
    category: TechCategory.Language
  },
  Swift: {
    name: "Swift/SwiftUI",
    icon: "/icons/swift-96.png",
    category: TechCategory.Language
  },
  Typescript: {
    name: "TypeScript",
    icon: "/icons/typescript-96.png",
    category: TechCategory.Language
  },
  Angular: {
    name: "Angular",
    icon: "/icons/angular-96.png",
    category: TechCategory.Framework
  },
  React: {
    name: "React",
    icon: "/icons/react-80.png",
    category: TechCategory.Framework
  },
  Java: {
    name: "Java",
    icon: "/icons/java-96.png",
    category: TechCategory.Language
  },
  Python: {
    name: "Python",
    icon: "/icons/python-96.png",
    category: TechCategory.Language
  },
  HTML5: {
    name: "HTML5",
    icon: "/icons/html5-96.png",
    category: TechCategory.Language
  },
  CSS3: {
    name: "CSS3/SCSS",
    icon: "/icons/css3-96.png",
    category: TechCategory.Language
  },
  SQLite: {
    name: "SQLite",
    icon: "/icons/sqlite-96.png",
    category: TechCategory.Tool
  },
  Cpp: {
    name: "C++",
    icon: "/icons/cplusplus-96.png",
    category: TechCategory.Language
  },
  Cucumber: {
    name: "Gherkin",
    icon: "/icons/cucumber.png",
    category: TechCategory.Tool
  },
  Yocto: {
    name: "The Yocto Project",
    icon: "/icons/yocto.png",
    category: TechCategory.Tool
  },
  SpringBoot: {
    name: "Spring Boot",
    icon: "/icons/spring-boot-80.png",
    category: TechCategory.Framework
  },
  Kotest: {
    name: "Kotest",
    icon: "/icons/kotest.png",
    category: TechCategory.Tool
  },
  Postman: {
    name: "Postman",
    icon: "/icons/postman-96.png",
    category: TechCategory.Tool
  },
  QuickNimble: {
    name: "Quick/Nimble",
    icon: "/icons/quickNimble.png",
    category: TechCategory.Tool
  }
} as const;

// Icons by Icons8 — https://icons8.com

export type ProgrammingLanguage = {
  name: string;
  icon: string;
};

type JobExperience = {
  companyName: string;
  jobDuties: string[];
  programmingLanguages?: ProgrammingLanguage[];
};

export enum AboutMeNavLocations {
  AboutMe = "aboutMe",
  WorkExperience = "workExperience",
  Portfolio = "portfolio",
  Education = "education",
  ContactInfo = "contactInfo"
}

export const jobExperiences: JobExperience[] = [
  {
    companyName: "Software Design Solutions Inc.",
    jobDuties: [
      "Implemented Behavior-Driven Development testing for .NET web applications using SpecFlow and Gherkin, enhancing test coverage and ensuring alignment with business requirements.",
      "Performed embedded development on Linux using the Yocto Project to create recipes for building and deploying firmware images to the BeagleBone Black.",
      "Established and maintained rigorous software testing standards, ensuring high product quality.",
      "Participated in Agile sprint planning, identifying risks and proposing mitigation strategies.",
      "Led debugging efforts to resolve software defects, improving product stability and customer satisfaction.",
      "Conducted peer code reviews to optimize software development processes and maintain code integrity."
    ],
    programmingLanguages: [
      { name: TechIcons.Cpp.name, icon: TechIcons.Cpp.icon },
      { name: TechIcons.Typescript.name, icon: TechIcons.Typescript.icon },
      { name: TechIcons.HTML5.name, icon: TechIcons.HTML5.icon },
      { name: TechIcons.CSS3.name, icon: TechIcons.CSS3.icon },
      { name: TechIcons.Cucumber.name, icon: TechIcons.Cucumber.icon },
      { name: TechIcons.Yocto.name, icon: TechIcons.Yocto.icon }
    ]
  },
  {
    companyName: "UPMC Enterprises",
    jobDuties: [
      "Developed and enhanced the MyUPMC web, iOS, and Android healthcare applications, improving user experience and patient engagement, with over 1 million monthly active users.",
      "Developed custom Angular components in TypeScript for the MyUPMC patient portal, leveraging NGXS for efficient and scalable state management.",
      "Managed and processed data interactions with backend services via Java Spring Boot APIs.",
      "Integrated SwiftUI and Jetpack Compose to modernize application functionality.",
      "Collaborated with UX designers and product teams to define requirements and design intuitive interfaces."
    ],
    programmingLanguages: [
      { name: TechIcons.Typescript.name, icon: TechIcons.Typescript.icon },
      { name: TechIcons.HTML5.name, icon: TechIcons.HTML5.icon },
      { name: TechIcons.CSS3.name, icon: TechIcons.CSS3.icon },
      { name: TechIcons.Kotlin.name, icon: TechIcons.Kotlin.icon },
      { name: TechIcons.Swift.name, icon: TechIcons.Swift.icon },
      { name: TechIcons.SpringBoot.name, icon: TechIcons.SpringBoot.icon },
      { name: TechIcons.Java.name, icon: TechIcons.Java.icon },
      { name: TechIcons.Angular.name, icon: TechIcons.Angular.icon },
      { name: TechIcons.Kotest.name, icon: TechIcons.Kotest.icon },
      { name: TechIcons.QuickNimble.name, icon: TechIcons.QuickNimble.icon },
      { name: TechIcons.Postman.name, icon: TechIcons.Postman.icon }
    ]
  }
];

export type PortfolioFeature = {
  title: string;
  details: string[];
  media?: {
    type: "image" | "video";
    src: string;
    alt?: string;
  }[];
};

export type PortfolioItemProps = {
  projectName?: string;
  features?: PortfolioFeature[];
  programmingLanguages?: ProgrammingLanguage[];
};

const pokedexiOSFeatures: PortfolioFeature[] = [
  {
    title: "Pokemon List",
    details: ["Browse a complete list of the first 386 Pokémon, spanning from Bulbasaur to Deoxys, each displayed with their name and sprite. Favorites are also indicated by a star.",
      "Filter the list dynamically by your favorited Pokémon, element types (like Fire, Water, or Psychic), or by using the search bar to find Pokémon by name. All filters can be combined for precise results.",
    ],
    media: [
      {
        type: "video",
        src: "/videos/PokemonListFeaturesiOS.m4v",
        alt: "Pokemon List"
      }
    ],
  },
  {
    title: "Who's That Pokemon?",
    details: [
      "Inspired by the classic game, you'll be presented with the silhouette of a mystery Pokémon and challenged to guess its identity to reveal the full image.",
      "If you're stuck, you can either skip to the next Pokémon or request a hint that provides an anagram of its name to help you solve the puzzle."
    ],
    media: [
      {
        type: "video",
        src: "/videos/WhoIsThatPokemon.m4v",
        alt: "Who's That Pokemon"
      }
    ]
  },
  {
    title: "Pokemon Details",
    details: [
      "View the core stats of the selected Pokémon, including HP, Attack, Defense, Special Attack, Special Defense, and Speed. These stats are pulled from the PokeAPI, which sources its information from the trusted, community-driven Veekun database.",
      "See which elemental types are assigned to the Pokémon. These types affect how the Pokémon performs in battle against others.",
      "Switch between the Pokémon’s standard and shiny versions to compare their appearances. Shiny Pokémon feature unique color palettes and are a favorite among collectors and fans.",
      "Save your favorite Pokémon for faster browsing and easy access."
    ],
    media: [
      {
        type: "image",
        src: "PokemonDetailsDefault.png",
        alt: "Default Pokemon Sprite"
      },
      {
        type: "image",
        src: "PokemonDetailsShiny.png",
        alt: "Shiny Pokemon Sprite"
      }
    ]
  },
];

const pokedexAndroidFeatures: PortfolioFeature[] = [
  {
    title: "Pokemon List",
    details: [
      "Browse all official Pokémon from the PokeAPI.",
      "Switch between Small, Medium, and Large tile sizes to change how much info is displayed per Pokémon.",
      "Toggle between default and shiny sprites.",
      "Use the search bar to filter Pokémon by name. This only searches the currently loaded batch from the API."
    ],
    media: [
      {
        type: "video",
        src: "/videos/PokemonListAndroid.mp4",
        alt: "Pokemon List"
      }
    ]
  },
  {
    title: "Pokemon Details",
    details: [
      "Tap a Pokémon to view its details, including name, types, description, size, height, and base stats.",
      "Switch between shiny and default sprites.",
      "See the previous and next evolutions, and navigate to them directly.",
      "View a type effectiveness chart showing how other types interact with the selected Pokémon's types; helpful for planning battles."
    ],
    media: [
      {
        type: "video",
        src: "/videos/PokemonDetailsAndroid.mp4",
        alt: "Pokemon Details"
      }
    ]
  }
];


export const PortfolioProjects: PortfolioItemProps[] = [{
  projectName: "Pokedex iOS",
  features: pokedexiOSFeatures,
  programmingLanguages: [
    { name: "Swift/SwiftUI", icon: TechIcons.Swift.icon }
  ]
},
{
  projectName: "Pokedex Android",
  features: pokedexAndroidFeatures,
  programmingLanguages: [
    { name: "Kotlin/Jetpack Compose", icon: TechIcons.Kotlin.icon }
  ]
}
]

export const techStack: ProgrammingLanguage[] = Object.values(TechIcons)
  .filter(({ category }) =>
    category === TechCategory.Language || category === TechCategory.Framework
  )
  .map(({ name, icon }) => ({ name, icon }));