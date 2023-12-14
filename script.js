'use strict';
import {console_color,console_red,console_orange,console_yellow,console_green,
	console_blue,console_purple,console_magenta,console_cyan} from './logColor.js';

// -------------------------------------------------------------------------------
//*                    --- DOCUMENT DISORDER MOUSE LEAVE ---
// -------------------------------------------------------------------------------
//	['.9','.8','.7','.6','.5','.4','.3','.2','.1']
		['e6','cc','b3','99','80','66','4d','33','1a']



// const body = document.querySelector('body');
// const container = document.querySelector('.container');
// const texts = document.querySelectorAll('.text');
// const navItems = document.querySelectorAll('.navItem');
// const cardTexts = document.querySelectorAll('.card-text');
// const title = document.querySelector('.title');
// const subTitle = document.querySelector('.sub-title');
// const subText = document.querySelector('.sub-text');
// const subFooterText = document.querySelector('.subFooter-text');
// const midDescription = document.querySelector('.mid-description');
// const bottomHeaderText = document.querySelector('.bottom-headerText');
// const devHeaderText = document.querySelector('.dev-headerText');
// const devDescription = document.querySelector('.dev-description');
// const devSubText = document.querySelector('.dev-subText');
// const layout = document.querySelector('.layout');
// const rughton = layout.querySelector('.rughton');
// const linkTop = document.querySelector('.linkTop');
// const footer = document.querySelector('footer');
// let maxScroll = container.scrollHeight - innerHeight;
// let subtract = maxScroll - footer.clientHeight;

// 	texts.forEach(text => { createColumns(text) });
// 	navItems.forEach(navItem => { createColumns(navItem) });
// 	cardTexts.forEach(cardText => { createColumns(cardText) });

// 	createRowsWithColumns(title);
// 	createRowsWithColumns(subTitle);
// 	createRowsWithColumns(subText);
// 	createRowsWithColumns(subFooterText);
// 	createRowsWithColumns(bottomHeaderText);
// 	createRowsWithColumns(devHeaderText);
// 	createRowsWithColumns(devDescription);
// 	createRowsWithColumns(devSubText);
// 	const columns = document.querySelectorAll('.column');

// //* ---------------------------------------------------------------

// let num;
// let nums = [0,1,2,3];
// let scroll = false;

// function disorder() {
// 	if(nums.length === 0) { nums = [0,1,2,3] }
// 	num = nums.splice(0, 1)[0];
// 	columns.forEach(column => {
// 	let randomX = column.dataset.x;
// 	let randomY = column.dataset.y;
// 	let randomDeg = column.dataset.deg;
// 	let randomSec = column.dataset.sec;
// 	let randomSize = column.dataset.size;
// 	column.style.transitionDelay = randomSec + 's';
// 	midDescription.style.padding = 30 +'px'; //*** 
// 	midDescription.style.borderRadius = 20 +'px';
// 	rughton.classList.add('active');
// 	if(num === 0 || num === 2) {
// 		if(column.classList.contains('header')) {
// 			column.style.transform = `translate(${randomX/5}px, ${Math.abs(randomY)}px) rotate(${randomDeg}deg)`;
// 		}
// 		if(column.classList.contains('card')) {
// 			column.style.transform = `translate(${randomX/5}px, ${randomY}px) rotate(${randomDeg}deg)`;
// 		}
// 		if(column.classList.contains('mid-description')) {
// 			column.querySelectorAll('.column').forEach((col, i) => {
// 				col.style.left = col.clientWidth/3 * i + 'px';
// 				col.style.position = 'absolute';
// 				col.style.transform = `translate(${randomX/10}px, ${-randomY}px) 
// 					scale(${randomSize*5}) rotate(${randomDeg}deg)`;
// 			});
// 		} 
// 		else {
// 			column.style.transform = `translate(${randomX}px, ${randomY}px) 
// 				rotate(${randomDeg}deg)`; //* original
// 		}
// 	}
// 	if(num === 1) {
// 		column.style.transform = `scale(${(randomSize*2/3)}) rotate(${randomDeg}deg) 
// 			translateY(${randomX}px)`; //* secondBestPlus
// 	}
// 	if(num === 3) {
// 		column.style.transform = `scale(${(randomSize)}) rotate(${randomDeg}deg) 
// 			translateY(${randomY}px)`; //* secondBestPlus
// 	}
// });
// 	cardTexts.forEach(cardText => {
// 		cardText.querySelectorAll('.column').forEach(col => {
// 			let randomX = col.dataset.x;
// 			let randomY = col.dataset.y;
// 			let randomDeg = col.dataset.deg;
// 			let randomSec = Math.random();
// 			col.style.transition = 5 + 's';
// 			col.style.transitionDelay = randomSec + 's';
// 			col.style.transform = `translate(${randomX*10}px, ${randomY}px) 
// 				rotate(${randomDeg}deg)`;
// 		});
// 	});
// }


// function resetAll() {
// 	midDescriptionSetPaddingInit(); //***
// 	midDescription.style.borderRadius = 0 + 'px';
// 	setTimeout(() => { rughton.classList.remove('active') }, 0); 
// 	setBackground();
// 	columns.forEach(column => {
// 		column.style.transition = 1 + 's'; 
// 		column.style.transform = 'initial';
// 		if(column.classList.contains('mid-description')) {
// 			column.querySelectorAll('.column').forEach(col => {
// 				col.style.position = 'relative';
// 				col.style.left = 'initial';
// 			});
// 		}
// 	});
// 	scroll = false;
// 	setColumnsTransition(); //*>
// 	setNavTransition(); //*>
// }


// function setColumnsTransition() {
// 	columns.forEach(column => {	
// 		column.style.transition = .8 + 's';
// 		let randomX = (Math.random() - 0.5) * 125;
// 		let randomY = (Math.random() - 0.5) * 1250;
// 		let randomDeg = (Math.random() - 0.5)*2 * 360;
// 		let randomSec = Math.random() * 3;
// 		let randomSize = Math.random() * 3;
// 		column.setAttribute('data-x', randomX);
// 		column.setAttribute('data-y', randomY);
// 		column.setAttribute('data-deg', randomDeg);
// 		column.setAttribute('data-sec', randomSec);
// 		column.setAttribute('data-size', randomSize);
// 	});
// } setColumnsTransition();


// function setNavTransition() {
// 	const nvs = document.querySelectorAll('.nv');
// 	nvs.forEach(nv => {
// 		nv.querySelectorAll('.column').forEach(col => {
// 			col.style.transition = .1 +'s';
// 			col.style.transitionDelay = col.dataset.sec/4 +'s';
// 		});
// 	});
// } setNavTransition();


// function midDescriptionSetPaddingInit() {
// 	if(innerWidth > 500 && innerWidth < 1300) {
// 		midDescription.style.padding = '8vw 40px';
// 	}
// 	if(innerWidth > 1300) {
// 		midDescription.style.padding = '5vw 40px';
// 	}
// } midDescriptionSetPaddingInit();


// // * ---------------------------------------------------------------


// function createColumns(element) {
// 	element.innerHTML = element.textContent.split('').map(char => {
// 		if(char === ' ') { return ' '}
// 		else { return `<span class="column">${char}</span>` }
// 	}).join('');
// }


// function createRowsWithColumns(element) {
// 	const sentence = element.textContent;
// 	const lastChar = sentence[sentence.length-1];
// 		element.textContent = '';
// 	let whiteSpace = ( sentence.match( /\s/g ) || [] ).length;
// 	// console.log(whiteSpace);
// 	let [idx, prev] = [0,0];
// 	for (let i = 0; i < whiteSpace+1; i++) {
// 		idx = sentence.indexOf(' ',idx + 1);
// 		// console.log(idx); 
// 		const word = document.createElement('div');
// 		word.classList.add(`word${i+1}`,'word');
// 		word.innerHTML = sentence.slice(prev,idx).replace(/\S/g,`<span class="column">$&</span>`);
// 		if(i === whiteSpace) { word.innerHTML += `<span class="column">${lastChar}</span>` }
// 		prev = idx;
// 		element.appendChild(word); 
// 		// console.log(element);
// 	}
// }
// // * ---------------------------------------------------------------

// window.addEventListener('wheel', () => {
// 	if(!scroll && scrollY < subtract) {
// 		scroll = true;
// 		disorder();
// 	}
// });

// document.addEventListener('scroll', () => {
// 	subtract = maxScroll - footer.clientHeight;
// });


// linkTop.addEventListener('click', () => {
// 	scroll = true;
// 	setTimeout(() => { scroll = false }, 1500);
// });

// document.addEventListener('mouseleave', () => {
// 	resetAll();
// });

// window.addEventListener('resize', () => {
// 	maxScroll = container.scrollHeight - innerHeight;
// 	subtract = maxScroll - footer.clientHeight;
// 	midDescriptionSetPaddingInit();
// });


// -------------------------------------------------------------------------------
//*                    --- DOCUMENT DISORDER SCROLL ---
// -------------------------------------------------------------------------------


	const container = document.querySelector('.container');
	const texts = document.querySelectorAll('.text');
	const navItems = document.querySelectorAll('.navItem');
	const cardTexts = document.querySelectorAll('.card-text');
	const title = document.querySelector('.title');
	const subTitle = document.querySelector('.sub-title');
	const subText = document.querySelector('.sub-text');
	const subFooterText = document.querySelector('.subFooter-text');
	const midDescription = document.querySelector('.mid-description');
	const bottomHeaderText = document.querySelector('.bottom-headerText');
	const devHeaderText = document.querySelector('.dev-headerText');
	const devDescription = document.querySelector('.dev-description');
	const devSubText = document.querySelector('.dev-subText');
	const layout = document.querySelector('.layout');
	const rughton = layout.querySelector('.rughton');
	const linkTop = document.querySelector('.linkTop');
	const footer = document.querySelector('footer');
	let maxScroll = container.scrollHeight - innerHeight;
	let realms = maxScroll - footer.clientHeight;

		texts.forEach(text => { createColumns(text) });
		navItems.forEach(navItem => { createColumns(navItem) });
		cardTexts.forEach(cardText => { createColumns(cardText) });

		createRowsWithColumns(title);
		createRowsWithColumns(subTitle);
		createRowsWithColumns(subText);
		createRowsWithColumns(subFooterText);
		createRowsWithColumns(bottomHeaderText);
		createRowsWithColumns(devHeaderText);
		createRowsWithColumns(devDescription);
		createRowsWithColumns(devSubText);
		const columns = document.querySelectorAll('.column'); //*>

		const boxWpr = document.querySelector('.boxWpr');
		const nth1 = boxWpr.querySelector('.nth1');
		const nth2 = boxWpr.querySelector('.nth2');
		const nth3 = boxWpr.querySelector('.nth3');
		const boxes = boxWpr.querySelectorAll('.box')
		boxes.forEach(box => { box.style.opacity = 0 });

	let num;
	let nums = [0,1,2,3];
	let duration = 4000;
	let timeoutId;
	let scroll = false;
	let scrollend = false;
	let scrollEnds = [];
	let abort = false;
	
	
	linkTop.addEventListener('click', () => {
		scroll = true;
		setTimeout(() => { scroll = false }, 1500);
	});
	
	document.addEventListener('dblclick', () => {
		if(abort) {
			abort = false;
			return;
		}
		abort = true;
		resetAll();
		clearTimeout(timeoutId);
	});


	window.addEventListener('wheel', () => {
		if(abort) return;
		clearTimeout(timeoutId);
		if(scrollend) { duration = 500 }
		realms = maxScroll - footer.clientHeight - boxWpr.clientHeight/2;
		if(!scroll && scrollY < realms) {
			scroll = true;
			disorder();
		}
	});

	document.addEventListener('scroll', () => {
		// console.log('scrolled'); //* log
		boxes.forEach(box => { box.textContent = '' });
	});

	document.addEventListener('scrollend', () => {
		if(abort) return;
		scrollend = true;
		if(scroll) { boxes.forEach(box => { box.style.opacity = .8 }) }
		timeoutId = setTimeout(() => {
			const intervalId = setInterval(() => {
				scrollEnds.push(scrollY);
				// console.log(scrollEnds); //* log *** //
				displayMsg();
				if(scrollEnds.length > 2) {
					if(scrollEnds[0] === scrollEnds[1] 
						&& scrollEnds[0] === scrollEnds[2]) {
						clearInterval(intervalId);
						resetAll();
					} else { scrollEnds = []; clearInterval(intervalId); duration = 100 }
				}
				if(abort) { clearInterval(intervalId) }
			}, 1000);
		}, duration);
	});

	function resetAll() {
		scrollEnds = [];
		midDescriptionSetPaddingInit(); //***
		midDescription.style.borderRadius = 0 + 'px';
		rughton.classList.remove('active');
		columns.forEach(column => {
			column.style.transition = 1 + 's'; 
			column.style.transform = 'initial';
			if(column.classList.contains('mid-description')) {
				column.querySelectorAll('.column').forEach(col => {
					col.style.position = 'relative';
					col.style.left = 'initial';
					col.style.scale = 'initial';
				});
			}
		});
		scroll = false;
		scrollend = false;
		duration = 4000;
		setColumnsTransition(); //*>
		setNavTransition(); //*>
		setTimeout(() => { resetDisplayMsg() }, 500);
	}


	function disorder() {
		if(nums.length === 0) { nums = [0,1,2,3] }
		num = nums.splice(0, 1)[0];
		const scale = Math.random() > 0.5 ? true : false;
		columns.forEach(column => {
		let randomX = column.dataset.x;
		let randomY = column.dataset.y;
		let randomDeg = column.dataset.deg;
		let randomSec = column.dataset.sec;
		let randomSize = column.dataset.size;
		column.style.transitionDelay = randomSec + 's';
		midDescription.style.padding = 30 +'px'; //*** 
		midDescription.style.borderRadius = 20 +'px';
		rughton.classList.add('active');
		if(num === 0 || num === 2) {
			if(column.classList.contains('header')) {
				column.style.transform = `translate(${randomX/5}px, ${Math.abs(randomY)}px) 
					rotate(${randomDeg}deg)`;
			}
			else if(column.classList.contains('card')) {
				column.style.transform = `translate(${randomX/5}px, ${randomY}px) 
					rotate(${randomDeg}deg)`;
			} else if(column.classList.contains('mid-description')) {
				column.style.transform = `translate(${randomX/5}px, ${randomY}px) 
					rotate(${randomDeg}deg)`;
				column.querySelectorAll('.column').forEach((col, i) => {
					col.style.left = col.clientWidth/3 * i + 'px';
					col.style.position = 'absolute';
					if(scale) {
						let randomSize = col.dataset.size;
						col.style.scale = randomSize * 2;
					}
				});
			} else {
				column.style.transform = `translate(${randomX}px, ${randomY}px) 
					rotate(${randomDeg}deg)`; //* original
			}
		}
		if(num === 1) {
			column.style.transform = `scale(${(randomSize*2/3)}) rotate(${randomDeg}deg) 
				translateY(${randomX}px)`; //* secondBestPlus
		}
		if(num === 3) {
			column.style.transform = `scale(${(randomSize)}) rotate(${randomDeg}deg) 
				translateY(${randomY}px)`; //* secondBestPlus
		}
	});
		cardTexts.forEach(cardText => {
			cardText.querySelectorAll('.column').forEach(col => {
				let randomX = col.dataset.x;
				let randomY = col.dataset.y;
				let randomDeg = col.dataset.deg;
				let randomSec = Math.random();
				col.style.transition = 5 + 's';
				col.style.transitionDelay = randomSec + 's';
				col.style.transform = `translate(${randomX*10}px, ${randomY}px) 
					rotate(${randomDeg}deg)`;
			});
		});
	}


	function displayMsg() {
		if(scroll) {
			if(scrollEnds[0] || scrollEnds[0] === 0) {
				nth1.textContent = 'FUCK';
			}
			if(scrollEnds[0] === scrollEnds[1]) {
				nth2.textContent = 'THE'
			} 
			if(scrollEnds[0] === scrollEnds[1] && scrollEnds[0] === scrollEnds[2]) {
				nth3.textContent = 'WORLD';
			} 
		}
	}

	function resetDisplayMsg() {
		boxes.forEach(box => { 
			box.textContent = ''; 
			box.style.opacity = 0;
		});
	}

	function setColumnsTransition() {
		columns.forEach(column => {	
			column.style.transition = .8 + 's';
			let randomX = (Math.random() - 0.5) * 125;
			let randomY = (Math.random() - 0.5) * 1250;
			let randomDeg = (Math.random() - 0.5) * 2 * 360;
			let randomSec = Math.random() * 3; //*3
			let randomSize = Math.random() * 3;
			column.setAttribute('data-x', randomX);
			column.setAttribute('data-y', randomY);
			column.setAttribute('data-deg', randomDeg);
			column.setAttribute('data-sec', randomSec);
			column.setAttribute('data-size', randomSize);
		});
	} setColumnsTransition();


	function setNavTransition() {
		const nvs = document.querySelectorAll('.nv');
		nvs.forEach(nv => {
			nv.querySelectorAll('.column').forEach(col => {
				col.style.transition = .1 +'s';
				col.style.transitionDelay = col.dataset.sec/4 +'s';
			});
		});
	} setNavTransition();


	window.addEventListener('resize', () => {
		maxScroll = container.scrollHeight - innerHeight;
		realms = maxScroll - footer.clientHeight;
		midDescriptionSetPaddingInit();
	});


	function midDescriptionSetPaddingInit() {
		if(innerWidth > 500 && innerWidth < 1300) {
			midDescription.style.padding = '8vw 40px';
		}
		if(innerWidth > 1300) {
			midDescription.style.padding = '5vw 40px';
		}
	} midDescriptionSetPaddingInit();


	//* --------------------------------------------------------------------------------


	function createColumns(element) {
		element.innerHTML = element.textContent.split('').map(char => {
			if(char === ' ') { return ' '}
			else { return `<span class="column">${char}</span>` }
		}).join('');
	}


	function createRowsWithColumns(element) {
		const sentence = element.textContent;
		const lastChar = sentence[sentence.length-1];
			element.textContent = '';
		let whiteSpace = ( sentence.match( /\s/g ) || [] ).length;
		// console.log(whiteSpace);
		let [idx, prev] = [0,0];
		for (let i = 0; i < whiteSpace+1; i++) {
			idx = sentence.indexOf(' ',idx + 1);
			// console.log(idx); 
			const word = document.createElement('div');
			word.classList.add(`word${i+1}`,'word');
			word.innerHTML = sentence.slice(prev,idx).replace(/\S/g,`<span class="column">$&</span>`);
			if(i === whiteSpace) { word.innerHTML += `<span class="column">${lastChar}</span>` }
			prev = idx;
			element.appendChild(word); 
			// console.log(element);
		}
	}











//* --------------------------------------------------------------------------------
//* --------------------------------------------------------------------------------


// window.addEventListener('wheel', () => {
// 	clearTimeout(timeout);
// 	setBackground();
// 	if(!scroll && scrollY < realms) {
// 		scroll = true;
// 		columns.forEach(column => {
// 		let randomX = column.dataset.x;
// 		let randomY = column.dataset.y;
// 		let randomSec = column.dataset.sec;
// 		let randomDeg = column.dataset.deg;
// 		column.style.transition = .8 + 's';
// 		column.style.transitionDelay = randomSec + 's';
// 		// column.style.transform = `rotate(${randomDeg}deg`;
// 		// column.style.transform = `scale(${randomSec*10/5}) rotate(${randomDeg}deg`; //* thirdBest
// 		// column.style.transform = `scale(${(randomSec*10/3)*1.4})`; //* secondBestPlus
// 		// column.style.transform = `scale(${randomSec*10/3})`; //* secondBest
// 		column.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomDeg}deg)`; //* original
// 		if(column.classList.contains('header')) {
// 			column.style.transform = `translate(${randomX/5}px, ${Math.abs(randomY)}px) rotate(${randomDeg}deg)`;
// 		}
// 		if(column.classList.contains('.card')) {
// 			column.style.transform = `translate(${randomX/5}px, ${randomY}px) rotate(${randomDeg}deg)`;
// 		}
// 		midDescription.style.padding = 30 +'px'; //*** 
// 		midDescription.style.borderRadius = 20 +'px';
// 		if(column.classList.contains('mid-description')) {
// 			column.querySelectorAll('.column').forEach((col, i) => {
// 				col.style.left = col.clientWidth/3 * i + 'px';
// 				col.style.position = 'absolute';
// 				col.style.transform = `translate(${randomX/10}px, ${-randomY}px) 
// 					rotate(${randomDeg}deg)`;
// 			});
// 		}
// 	});
// 		cardTexts.forEach(cardText => {
// 			cardText.querySelectorAll('.column').forEach(col => {
// 				let randomX = col.dataset.x;
// 				let randomY = col.dataset.y;
// 				let randomSec = col.dataset.sec;
// 				let randomDeg = col.dataset.deg;
// 				col.style.transition = 5 + 's';
// 				col.style.transitionDelay = randomSec + 's';
// 				col.style.transform = `translate(${randomX*10}px, ${randomY}px) 
// 					rotate(${randomDeg}deg)`;
// 			});
// 		});
// 		rughton.classList.add('active');
// 		clearTimeout(timeoutId);
// 	}
// 	setBackground(); 
// });




