gsap.registerPlugin(ScrollTrigger);

// 
gsap.from('.shiftLeft', {
    scrollTrigger: {
        trigger: '.shiftLeft',
        toggleActions: 'restart pause resume reset',
        scrub: 2,
    },
    duration: 7, x: 900
});
gsap.from('.shiftRight', {
    scrollTrigger: {
        trigger: '.shiftRight',
        toggleActions: 'restart pause resume reset',
        scrub: 2,
    },
    duration: 7, x: -900
});

// ABOUT ME TEXT ROLL 
gsap.from('.aboutP1', {
    scrollTrigger: {
        trigger: '.aboutP1',
        toggleActions: 'restart pause resume reset',
        scrub: false,
    },
    duration: 1.8, height: "0", stagger: 1.7
})
gsap.from('.aboutP2', {
    scrollTrigger: {
        trigger: '.aboutP2',
        toggleActions: 'restart pause resume reset',
        scrub: false,
    },
    duration: 1.8, height: "0", stagger: 1.7
})
gsap.from('.aboutP3', {
    scrollTrigger: {
        trigger: '.aboutP3',
        toggleActions: 'restart pause resume reset',
        scrub: false,
    },
    duration: 1.8, height: "0", stagger: 1.7
})


// ABOUT WHITE LINES
gsap.from('.whiteLine', {
    scrollTrigger: {
        trigger: '.whiteLine',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 12, width: "0", stagger: 5.6
});

gsap.from('.whiteLine2', {
    scrollTrigger: {
        trigger: '.whiteLine2',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 12, width: "0%", stagger: 5.6
});


gsap.from('.skillDiv i', {
    scrollTrigger: {
        trigger: '.skillDiv i',
        toggleActions: 'restart pause resume reset',
        scrub: true,
    },
    duration: 12, fontSize: '0.2rem', stagger: 5.6
});

// gsap.to('.arrowVisuals .top, .arrowVisuals .bottom', {
//     scrollTrigger: {
//         trigger: '.arrowVisuals',
//         toggleActions: 'restart pause resume reset',
//         scrub: true,
//     },
//     duration: 5, left: '100%'
// })


const bMac = {};

// bMac.contact = $('.contactClick');
// bMac.arrowContact = $('.arrowContact');
bMac.cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    bMac.cursor.setAttribute('style', 'top: '+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+'px;');
})

document.addEventListener('click', () => {
    bMac.cursor.classList.add('expand');
    setTimeout(() => {
        bMac.cursor.classList.remove('expand');
    }, 500)
})


// TOGGLE HEADER IMAGE FUNCTION 
// bMac.loadHeader = 2;

// document.querySelector('.arrow').onclick = () => {
  // if we're about to move to image1
  // this timeout allows img3 to drop below 1>> 
  // first drop z of 3, then give 1 width:100 and higher z, then give 3 width:0
    // if (bMac.loadHeader === 1) {
    //     $('#headerImg3').css('z-index', '-10');
    //     setTimeout(() => {
    //         $('#headerImg1')
    //             .css('width', '100%')
    //             .css('z-index', '-9');
    //     }, 100);
    //     setTimeout(() => {
    //         $('#headerImg3').css('width', '0');
    //     }, 800);
        // if we're not moving from 1 to 3, give width:100 & z:-9 to all
    // } else {
    //     $('#headerImg'+bMac.loadHeader)
    //         .css('width', '100%')
    //         .css('z-index', '-9');
    // }
    
//     let previousImg = bMac.loadHeader - 1;

//     if (bMac.loadHeader === 3) {
//         // otherwise would go back to 2
//         bMac.loadHeader = 1;
//     } else if (bMac.loadHeader === 1) {
//         // because 1 - 1 = 0, and we want to do stuff to 3 in this scenario
//         previousImg = 3;
//         bMac.loadHeader++;
//     } else {
//         bMac.loadHeader++;
//     }
    
//     // this part i dont quite understand
//     if (bMac.loadHeader !== 2) {
//         setTimeout(() => {
//             $('#headerImg' + previousImg)
//                 .css('width', '0')
//                 .css('z-index', '-10');
//         }, 800);
//     }
// }


// bMac.contactModal = function() {
//     bMac.contact.click(function () {
//         $('.modal').toggleClass(`activeView`);
//     })
//     bMac.arrowContact.click(function() {
//         $('.modal').toggleClass(`activeView`);
//     })
// }
// // function to make my burger menu appear
// bMac.hamburger = function () {
//     $(`.hamburg`).click(function () {
//         $(this).toggleClass(`active`);
//         $(`.dropdownMenu`).toggleClass(`active`);
//     });
// }

// bMac.init = function() {
//     bMac.hamburger();
//     bMac.contactModal();
// }

// $(document).ready(function () {
//     bMac.init();
// })