export enum IconsHelper {
    // Icon locations for the site
    Github = "/icons/github.png",
    LinkedIn = "/icons/linkedin.png",
    Kotlin = "/icons/kotlin-96.png",
    Swift = "/icons/swift-96.png",
    Typescript = "/icons/typescript-96.png",
    Angular = "/icons/angular-96.png",
    React = "/icons/react-96.png",
    Java = "/icons/java-96.png",
    Python = "/icons/python-96.png",
    HTML5 = "/icons/html5-96.png",
    CSS3 = "/icons/css3-96.png",
    SQLite = "/icons/sqlite-96.png",
    Cpp = "/icons/cplusplus-96.png",
    Cucumber = "icons/cucumber.png",
    Yocto = "/icons/yocto.png"
}

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
    WorkExperience = 'workExperience',
    Portfolio = 'portfolio',
    Education = 'education',
    ContactInfo = 'contactInfo'
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
            { name: "C++", icon: IconsHelper.Cpp },
            { name: "Typescript", icon: IconsHelper.Typescript },
            { name: "HTML5", icon: IconsHelper.HTML5 },
            { name: "CSS3", icon: IconsHelper.CSS3 },
            { name: "Gherkin", icon: IconsHelper.Cucumber },
            { name: "The Yocto Project", icon: IconsHelper.Yocto }
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
            { name: "C++", icon: IconsHelper.Cpp },
            { name: "Typescript", icon: IconsHelper.Typescript },
            { name: "HTML5", icon: IconsHelper.HTML5 },
            { name: "CSS3", icon: IconsHelper.CSS3 }
        ]
    }
];

export type PortfolioFeature = {
    title: string;
    details: string[];
    media?: {
        type: 'image' | 'video';
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
          src: "/videos/PokemonListFeatures.m4v",
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
        title: "Pokemon Details?",
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
      details: ["Browse a complete list of the first 386 Pokémon, spanning from Bulbasaur to Deoxys, each displayed with their name and sprite. Favorites are also indicated by a star.",
        "Filter the list dynamically by your favorited Pokémon, element types (like Fire, Water, or Psychic), or by using the search bar to find Pokémon by name. All filters can be combined for precise results.",
      ],
      media: [
        {
          type: "video",
          src: "/videos/PokemonListFeatures.m4v",
          alt: "Pokemon List"
        }
      ],
    },
    {
      title: "Pokemon Details",
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
        title: "Pokemon Types",
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


export const PortfolioProjects: PortfolioItemProps[] = [{
    projectName: "Pokedex iOS",
    features: pokedexiOSFeatures,
    programmingLanguages: [
        { name: "Swift/SwiftUI", icon: IconsHelper.Swift }
    ]
},
{
    projectName: "Pokedex Android",
    features: pokedexiOSFeatures,
    programmingLanguages: [
        { name: "Swift/SwiftUI", icon: IconsHelper.Swift }
    ]
}
]