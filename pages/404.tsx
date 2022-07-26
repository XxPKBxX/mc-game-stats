import { NextPage } from 'next'

import Error from '../components/error'
import Layout from '../components/layout'

const NotFound: NextPage = () => (
  <Layout title={'404 Not Found'}>
    <Error error={'Page not found.'} rainbow />
  </Layout>
)

export default NotFound