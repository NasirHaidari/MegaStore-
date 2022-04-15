import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <h3>
        Mega Store! &copy; {new Date().getFullYear()}
      </h3>
    </footer>
  )
}

export default Footer;