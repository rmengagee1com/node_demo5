import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'


class RevealOnScroll{
	constructor(els,thresholdPercent){
		this.thresholdPercent = thresholdPercent
		this.itemsToReveal = els;
		this.browserHeight = window.innerHeight;
		this.hideInitially();
		this.scrollThrottle = throttle(this.calcCaller,200).bind(this);
		this.events();
	}

	calcCaller(){
		this.itemsToReveal.forEach(el =>{
			if(el.isRevelaled == false){	
				this.calculateIfScrolledTo(el)}
		})
	}

	events(){
		window.addEventListener("scroll", this.scrollThrottle)
		window.addEventListener("resize", debounce(()=>{
			this.browserHeight = window.innerHeight
		},333))
	}

	calculateIfScrolledTo(el){
		if(window.scrollY + el.offsetTop){
			if(window.scrollY + this.browserHeight > el.offsetTop){
		let scrollPercent =(el.getBoundingClientRect().y / this.browserHeight)*100
		if(scrollPercent < this.thresholdPercent){
			el.classList.add("reveal-item__is-visible")
			el.isRevelaled=true
			if(el.isLastItem){
				window.removeEventListener("scroll",this.scrollThrottle)
					}
				}
			}
		}
	}


	hideInitially(){
		this.itemsToReveal.forEach(el=>{
			el.classList.add("reveal-item")
			el.isRevelaled = false
		})
		this.itemsToReveal[this.itemsToReveal.length -1].isLastItem = true
	}
}


export default RevealOnScroll;