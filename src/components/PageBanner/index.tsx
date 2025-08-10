import { Tag } from '@components/Tag';

type PageBannerProps = {
  title: string;
  description: string;
  tag?: string;
};

export const PageBanner = ({ title, description, tag }: PageBannerProps) => {
  return (
    <section className="relative h-96 w-full">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url('/assets/background/projects.jpg')` }} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-text px-4">
        {tag && <Tag>{tag}</Tag>}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <h2 className="text-lg md:text-xl max-w-2xl mb-6">{description}</h2>
      </div>
    </section>
  );
};
