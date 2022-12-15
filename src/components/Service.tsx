import styles from '../../styles/Service.module.css'
import project from '../../pages/public/assets/project_eletric.jpeg'
import intelligence from '../../pages/public/assets/service.jpeg'
import consultancy from '../../pages/public/assets/contact1.jpeg'
import support from '../../pages/public/assets/project.jpeg'

const Service = () => {
  return (
    <main className={styles.service}>
      <div className={styles.row}>
      <div className={styles.card_green}>
        <h2>Projetos</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim delectus aspernatur sint et molestiae hic explicabo. Laboriosam, tenetur minima, quia magni illum alias asperiores sed blanditiis ad animi aliquam!</p>
        <img src={project.src} alt="project" />
      </div>
 
      <div className={styles.card_blue}>
        <h2>Consultoria</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim delectus aspernatur sint et molestiae hic explicabo. Laboriosam, tenetur minima, quia magni illum alias asperiores sed blanditiis ad animi aliquam!</p>
        <img src={consultancy.src} alt="settings" className='image2' />
      </div>
 
      <div className={styles.card_red}>
        <h2>Inteligência de mercado</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim delectus aspernatur sint et molestiae hic explicabo. Laboriosam, tenetur minima, quia magni illum alias asperiores sed blanditiis ad animi aliquam!</p>
        <img src={intelligence.src} alt="article" />
      </div>

      <div className={styles.card_yellow}>
        <h2>Suporte especializado</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim delectus aspernatur sint et molestiae hic explicabo. Laboriosam, tenetur minima, quia magni illum alias asperiores sed blanditiis ad animi aliquam!</p>
        <img src={support.src} alt="article" />
      </div>
    </div>
     
    </main>
  )
}

export default Service;