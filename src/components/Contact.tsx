import styles from '../../styles/Contact.module.css'

const Contact = () => {
  return (
    <main className={styles.contact}>
      <div className={styles.card}>
        <h3>Entre em contato conosco!</h3>
        <h4><span>Telefone:  </span> (071) 99350-0101</h4>
        <h4><span>WhatsApp:  </span> (071) 99350-0101</h4>
        <h4><span>E-mail:  </span> pbpeixoto@gmail.com</h4>
        <h4><span>Local:  </span> Salvador - Bahia - Brasil</h4>
      </div>
    </main>
  )
}

export default Contact;