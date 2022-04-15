import Head from 'next/head'

import Layout from '@components/Layout'
import Header from '@components/Header'
import Container from '@components/Container'
import Button from '@components/Button'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Image from 'next/image'
import styles from '@styles/Product.module.scss'

export default function Product({ product }) {
  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
        <meta name='description' content={product.name} />
      </Head>

      <Container>
        <div className={styles.productWrapper}>
          <div className={styles.productImage}>
            <img
              width={product.image.width}
              height={product.image.height}
              src={product.image.url}
              alt=''
            />
          </div>
          <div className={styles.productContent}>
            <h1>{product.name}</h1>
            <div
              className={styles.productDescription}
              dangerouslySetInnerHTML={{
                __html: product.description?.html,
              }}
            />
          </div>
          <p className={styles.productPrice}> Price: € {product.price}</p>
          <p className={styles.productBuy}>
            <Button>Add to Cart</Button>
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const client = new ApolloClient({
    uri: 'https://api-eu-central-1.graphcms.com/v2/cl1xeaipr14tb01z18n9z9ang/master',
    cache: new InMemoryCache(),
  })
  const data = await client.query({
    query: gql`
      query PageProduct($slug: String) {
        product(where: { slug: $slug }) {
          id
          image
          name
          price
          description {
            html
          }
        }
      }
    `,
    variables: {
      slug: params.productSlug,
    },
  })

  const product = data.data.product
  return {
    props: {
      product,
    },
  }
}

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: 'https://api-eu-central-1.graphcms.com/v2/cl1xeaipr14tb01z18n9z9ang/master',
    cache: new InMemoryCache(),
  })
  const data = await client.query({
    query: gql`
      query PageProducts {
        products {
          name
          price
          slug
          image
        }
      }
    `,
  })

  console.log(data)
  const paths = data.data.products.map((product) => {
    return {
      params: {
        productSlug: product.slug,
      },
    }
  })
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}
