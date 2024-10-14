

/* ------------------------------메인 비주얼 배너 슬라이드--------------------------------------- */


let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let carousel = document.querySelector('.carousel');
let items = carousel.querySelectorAll('.list .item');
let indicator = carousel.querySelector('.indicators');
let dots = indicator.querySelectorAll('.indicators ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let autoPlay;

const startAutoPlay = () => {
    clearInterval(autoPlay); 
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
}
startAutoPlay();

const setSlider = () => {
    let itemActiveOld = carousel.querySelector('.list .item.active');
    if(itemActiveOld) itemActiveOld.classList.remove('active');
    items[active].classList.add('active');

    let dotActiveOld = indicator.querySelector('.indicators ul li.active');
    if(dotActiveOld) dotActiveOld.classList.remove('active');
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerText = '0' + (active + 1);
    startAutoPlay();
}
setSlider();

nextBtn.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    carousel.style.setProperty('--calculation', 1);
    setSlider();
}
prev.onclick = () => {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    carousel.style.setProperty('--calculation', -1);
    setSlider();
    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        nextBtn.click();
    }, 5000);
}
dots.forEach((item, position) => {
    item.onclick = () => {
        active = position;
        setSlider();
    }
})


function createLoopingText(el) {
    const lerp = (current, target, factor) => current * (1 - factor) + target * factor;
  
    const state = {
      el, 
      lerp: {
        current: 0,
        target: 0 
      },
      interpolationFactor: 0.1, // 선형 보간에 사용되는 요인
      speed: 0.2, 
      direction: -1
    };
    
    state.el.style.cssText = 'position: relative; display: inline-flex; white-space: nowrap;';
    state.el.children[1].style.cssText = `position: absolute; left: ${100 * -state.direction}%;`;
  
    
    function animate() {
      state.lerp.target += state.speed;
      state.lerp.current = lerp(state.lerp.current, state.lerp.target, state.interpolationFactor);
  
      if (state.lerp.target > 100) {
        state.lerp.current -= state.lerp.target;
        state.lerp.target = 0;
      }
  
      const x = state.lerp.current * state.direction;
      state.el.style.transform = `translateX(${x}%)`;
    }
  
    function render() {
      animate();
      window.requestAnimationFrame(render);
    }
  
    render();
    return state;
  }
  
  document.querySelectorAll('.loop-container').forEach(el => createLoopingText(el));




  /* ------------------------------메뉴 슬라이드--------------------------------------- */

  

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2, // 한번에 보여질 슬라이드 수
    spaceBetween: 30, // 슬라이드 사이의 간격
    loop: true, // 무한 루프 활성화
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2000, // 2초마다 자동 슬라이드
      disableOnInteraction: false, // 사용자가 조작해도 자동 슬라이드 유지
    },
    
    breakpoints: {

      360: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      1700: {
        slidesPerView: 6,
        spaceBetween: 30,
      },

    }
  });


  document.addEventListener("DOMContentLoaded", function() {
    const allMenu = document.querySelector('.all-menu');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY; // 현재 스크롤 위치
        const maxScroll = 600; // 최대 스크롤 시점 (left 40%로 이동하는 최대 지점)

        // 스크롤 위치에 따른 left 값 계산 (0에서 40% 사이로 애니메이션)
        let leftValue = Math.min((scrollPosition / maxScroll) * 40, 40);

        // left 값을 부드럽게 적용
        allMenu.style.left = leftValue + '%';
        allMenu.style.transition = 'left 0.5s ease';

     });
     
    const shop = document.querySelector('.shop');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY; 
        const maxScroll = 600; 
        
        let leftValue = Math.min((scrollPosition / maxScroll) * 50, 50);

        shop.style.left = leftValue + '%';
        shop.style.transition = 'left 0.5s ease'; 
    });
});



  
  


  /* ------------------------------브랜드 슬라이드--------------------------------------- */
 

  AOS.init({
    duration: 1000,  // 애니메이션 지속 시간
    once: false,      // 스크롤할 때마다 애니메이션 실행
    mirror: true // 스크롤을 올릴 때도 애니메이션 재실행
  });


  /* ------------------------------자사몰 상품 섹션--------------------------------------- */

  document.addEventListener("DOMContentLoaded", function () {
    const imageSources = [
    "./img/shop-seasoning.jpg",
    "./img/shop-snack(3).jpg",
    "./img/shop-protein(4).jpg",
    "./img/shop-6pack.jpg",
    "./img/shop-6pack(1).jpg",
    "./img/shop-12pack.jpg",
    "./img/shop-pack(2).jpg",
    "./img/shop-hotdogs(2).jpg",
    "./img/shop-hotdogs(2).jpg",
    ];
  
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach((item) => {
      const copyElements = item.querySelectorAll(".name");
  
      copyElements.forEach((div) => {
        const copy = div.querySelector("p");
        if (copy) {
          const duplicateCopy = document.createElement("p");
          duplicateCopy.textContent = copy.textContent;
          div.appendChild(duplicateCopy);
        }
      });
    });
  
    const appendImages = (src) => {
      const preview1 = document.querySelector(".preview-img-1");
      const preview2 = document.querySelector(".preview-img-2");
  
      const img1 = document.createElement("img");
      const img2 = document.createElement("img");
  
      img1.src = src;
      img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
      img2.src = src;
      img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
  
      preview1.appendChild(img1);
      preview2.appendChild(img2);
  
      gsap.to([img1, img2], {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.out",
        onComplete: function () {
          removeExtraImages(preview1);
          removeExtraImages(preview2);
        },
      });
    };
  
    function removeExtraImages(container) {
      while (container.children.length > 10) {
        container.removeChild(container.firstChild);
      }
    }
  
    document.querySelectorAll(".menu-item").forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        mouseOverAnimation(item);
        appendImages(imageSources[index]);
      });
  
      item.addEventListener("mouseout", () => {
        mouseOutAnimation(item);
      });
    });
  
    const mouseOverAnimation = (elem) => {
      gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
        top: "-100%",
        duration: 0.3,
      });
      gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
        top: "0%",
        duration: 0.3,
      });
    };
  
    const mouseOutAnimation = (elem) => {
      gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
        top: "0%",
        duration: 0.3,
      });
      gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
        top: "100%",
        duration: 0.3,
      });
    };
  
    document.querySelector(".menu").addEventListener("mouseout", function () {
      gsap.to(".preview-img img", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.out",
      });
    });
  
    document.addEventListener("mousemove", function (e) {
      const preview = document.querySelector(".preview");
      gsap.to(preview, {
        x: e.clientX + 100,
        y: e.clientY + 300,
        duration: 1,
        ease: "power3.out",
      });
    });
  });








