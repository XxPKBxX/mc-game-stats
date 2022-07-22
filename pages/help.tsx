import { NextPage } from 'next'

import { Container, Title, A } from '../components/help/style'
import Layout from '../components/layout'

const Help: NextPage = () => (
  <Layout>
    <Container>
      <Title>Welcome to MC Game Stats.</Title>
      <span>You can look up Hypixel players' stats with MC Game Stats.</span>
      <span>Currently you can check Hypixel, Bedwars, and SkyWars level.</span>
      <span>This website uses <A target={'_blank'} href={'https://mc-heads.net/'}>MCHeads</A> for player avatars,
      <br />and <A target={'_blank'} href={'https://api.hypixel.net/'}>Hypixel Public API</A> for user stats.</span>
      <span>This website is <strong>NOT</strong> affiliated with Mojang or Hypixel.</span>
    </Container>
  </Layout>
)

export default Help