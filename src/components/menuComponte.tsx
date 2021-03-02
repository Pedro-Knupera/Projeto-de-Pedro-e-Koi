import styles from '../../styles/menuContainer.module.css'
import {Chama} from './paginas_menus/pagina1';

export function MenuFunção(){
    
    
    return(
        
         <div className={styles.menuContainer}>
             <header>
              <a href="">{Chama}</a>
             </header>
        </div>
    )
}