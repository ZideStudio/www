import { Helmet } from 'react-helmet-async';
import { Screen } from '../../models/screen.model';

interface HeadProps {
  screen: Screen;
  pathLocation: string;
  title?: string;
  description?: string;
}

export const Head = ({ screen, pathLocation, title, description }: HeadProps) => {
  const isWelcomeScreen = screen === Screen.WELCOME;

  return (
    <Helmet>
      <title>{isWelcomeScreen ? 'Zide' : (title ?? 'Projects')}</title>
      <meta name="description" content={description ?? (isWelcomeScreen ? "Digital simplicity, greater efficiency. We're producing innovative and useful tools for our users!" : 'Explore our innovative projects designed for digital simplicity and a greater efficiency.')} />
      <meta property="og:title" content={isWelcomeScreen ? 'Zide' : (title ?? 'Projects')} />
      <meta property="og:description" content={description ?? (isWelcomeScreen ? "Digital simplicity, greater efficiency. We're producing innovative and useful tools for our users!" : "Discover the tools and solutions we're creating to enhance user experiences and drive innovation.")} />
      <meta property="og:image" content="/assets/logo/zide_complete.png" />
      <meta name="google-site-verification" content="oSycr6s-tbcxcGBjTexUhsgH0NinsvxBXBhOokbBPRk" />
      <link rel="canonical" href={`https://zide.fr${pathLocation}`} />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};
