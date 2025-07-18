
import React from 'react';

type PortfolioFeature = {
  title: string;
  details: string[];
  media?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
};

type PortfolioItemProps = {
  projectName?: string;
  features?: PortfolioFeature[];
};

const defaultFeatures: PortfolioFeature[] = [
  {
    title: "Feature 1",
    details: ["This is a dummy detail for feature 1.", "Another detail for feature 1."],
    media: {
      type: 'image',
      src: 'Pitt.png',
      alt: 'Pitt'
    }
  },
  {
    title: "Feature 2",
    details: ["This is a dummy detail for feature 2.", "Another detail for feature 2."],
  },
];

export default function PortfolioItem({ projectName = "Dummy Project", features = defaultFeatures }: PortfolioItemProps) {
  return (
    <div className="p-6 w-full">
      <h2 className="text-secondary text-2xl font-bold mb-6 font-mono">{projectName}</h2>
      <div className="flex flex-col gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border-b border-secondary pb-8 last:border-b-0 last:pb-0"
          >
            <div className="md:w-1/2 w-full">
              <h3 className="text-lg font-semibold text-secondary mb-2 font-mono">{feature.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-textMain">
                {feature.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
            {feature.media && (
              <div className="md:w-1/2 w-full flex justify-center items-center">
                {feature.media.type === 'image' ? (
                  <img
                    src={feature.media.src}
                    alt={feature.media.alt || feature.title}
                    className="rounded-lg shadow-md max-w-full max-h-64 object-contain"
                  />
                ) : (
                  <video
                    src={feature.media.src}
                    controls
                    className="rounded-lg shadow-md max-w-full max-h-64 object-contain"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
