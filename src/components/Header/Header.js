import Link from 'next/link'
import { useSnipcart } from 'use-snipcart'
import { FaShoppingCart } from 'react-icons/fa'

import Container from '@components/Container'

import styles from './Header.module.scss'

const Header = () => {
  const { cart = {} } = useSnipcart()

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href='/'>
            <a>Mega Store!</a>
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <Link href='/categories/shoes'>
              <a>Shoes</a>
            </Link>
          </li>
          <li>
            <Link href='/categories/accessories'>
              <a>Accessories</a>
            </Link>
          </li>
          <li>
            <Link href='/stores'>
              <a>Find a Store</a>
            </Link>
          </li>
        </ul>
        <p className={styles.headerCart}>
          <button className='snipcart-checkout'>
            <FaShoppingCart />
            <span>€ {cart.subtotal?.toFixed(2)}</span>
          </button>
        </p>
        <ul className={styles.headerLocales}>
          <li>
            <Link href='#'>
              <a>ES</a>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header
