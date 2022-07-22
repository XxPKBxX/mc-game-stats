import Head from "next/head";

export interface HeaderProps {
  title?: string
}

const Header = ({ title }: HeaderProps): JSX.Element => (
  <Head>
    <title>{`MC Game Stats${title ? ` - ${title}` : ''}`}</title>
    <meta property={'og:title'} content={`MC Game Stats${title ? ` - ${title}` : ''}`} />
    <meta property={'og:description'} content={'Check Hypixel players\' stats quickly, simply, easily.'} />
    <meta property={'og:site_name'} content={'MC Game Stats'} />
  </Head>
)

export default Header