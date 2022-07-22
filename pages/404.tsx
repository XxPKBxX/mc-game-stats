import { NextPage } from 'next'

import Error from '../components/users/Error'
import Layout from '../components/layout'
import Header from '../components/head'

const NotFound: NextPage = () => (
  <>
  <Header title={'404 Not Found'} />
  <Layout>
    <Error error={'Page not found.'} />
  </Layout>
  </>
)

export default NotFound