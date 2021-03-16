import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'

/* When you create a new class from an imported object store it in it's own variable for later use.*/

let mobileMenu = new MobileMenu();

if(module.hot){
	module.hot.accept()
}


