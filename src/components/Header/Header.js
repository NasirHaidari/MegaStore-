import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSnipcart } from 'use-snipcart'
import { FaShoppingCart } from 'react-icons/fa'

import Container from '@components/Container'

import styles from './Header.module.scss'

const Header = () => {
  const { locale: activeLocale, locales, asPath } = useRouter()
  console.log(activeLocale, locales)
  const { cart = {} } = useSnipcart()

  const availableLocales = locales.filter((locale) => locale !== activeLocale)

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
          {availableLocales.map((locale, idx) => (
            <li key={idx}>
              <Link href={asPath} locale={locale}>
                <a>{locale.toUpperCase()}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}

export default Header
