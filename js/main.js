window.addEventListener("load",function(){

	// #start

	let isMobile;
	let body=document.querySelector("body");
	let search=document.querySelector("#start .search");
	let tab=document.querySelector("#start .tab");
	let dim=document.querySelector("#start .dim");
	let searchCon=document.querySelector("#start .search_container");
	let roll=document.querySelector("#start .roll");
	let lang=document.querySelector("#start .lang")
	let nav=document.querySelector("#start nav");
	let navList=document.querySelectorAll("#start nav ul li");
	let swiper1=null;
	let swiper2=null;
		
		function initSwiper(){
			swiper1=new Swiper(".swiper1", {
				slidesPerView: 1.5,
				spaceBetween: 24,
			});
			swiper2=new Swiper(".swiper2", {
				slidesPerView: 1.5,
				spaceBetween: 24,
			});
		}

		function dimRemove(){
			search.classList.remove("active");
			dim.classList.remove("active");
			searchCon.classList.remove("active");
			roll.classList.remove("active");
			body.classList.remove("fixed")
		}

		function Resize(){
			if(window.innerWidth > 930){
				if(isMobile != false){
					isMobile=false;
					if(swiper1){
						swiper1.destroy();
						swiper2.destroy();
						swiper1=swiper2=null;
					}
				}				
			}
			else{
				if (isMobile != true) {
					isMobile = true;
					if(!swiper1){
					initSwiper();
					}
					document.querySelectorAll("#page4 .depth1 > li").forEach(function(item1){
						item1.classList.remove("active");
					});
					}
			}
			dimRemove();
			if(document.querySelector("#start .tab").classList.contains("active")){
				document.querySelector("#start .tab").classList.remove("active");
			}
		}

		Resize();

		window.addEventListener("resize", Resize);

		search.addEventListener("click", function(e){
			e.preventDefault();
			search.classList.add("active");
			tab.classList.add("active");
			dim.classList.add("active");
			searchCon.classList.add("active");
			roll.classList.add("active");
			body.classList.add("fixed")
		});

		lang.addEventListener("mouseenter", function(){
			if(isMobile == false){
				lang.classList.add("active");
			}
		});
		lang.addEventListener("mouseleave", function(){
			if(isMobile == false){
				lang.classList.remove("active");
			}
		});
		
		tab.addEventListener("click", function(e){
			e.preventDefault();
			body.classList.toggle("fixed");
			nav.classList.toggle("active");
			this.classList.toggle("active");
			if(search.classList.contains("active")){
				dimRemove();
				nav.classList.remove("active");
			}
			else{
				search.classList.toggle("active");
			}
		});
		
		dim.addEventListener("click", function(){
			dimRemove();
			if(tab.classList.contains("active")){
				tab.classList.remove("active");
			}
		});

		navList.forEach(function(item1, i){
			item1.addEventListener("mouseenter", function(){
				if(isMobile == false) {
					item1.classList.add("active");
				}
			});
			item1.addEventListener("mouseleave", function(){
				if(isMobile == false) {
					item1.classList.remove("active");
				}
			});
		});

		// #page1

		let page1Text=document.querySelector("#page1 .text .inner");

		const page1Tl=gsap.timeline({
			scrollTrigger : {
				trigger : "#page1",
				start: "top 0%",
				end: "bottom 0%",
			}
		});

		page1Tl.fromTo(page1Text, {y: 30, opacity: 0},{ y : 0, opacity: 1, duraiton: 0.5});

		// #page2 == LATEST
		//  left

		let left_img=document.querySelector("#page2 .left .image");
		let leftText=document.querySelector("#page2 .left .text");

		const page2LTl=gsap.timeline({
			scrollTrigger: {
				trigger : "#page2",
				start: "top center",
				end: "bottom center",
			}
		})

		page2LTl.fromTo(left_img, {y: 100, opacity: 0},{ y : 0, opacity: 1, duraiton: 0.3})
		page2LTl.fromTo(leftText, {y: 30, opacity: 0},{ y : 0, opacity: 1 ,duraiton: 0.4})

		// right

		let rightList=document.querySelectorAll("#page2 .right ul li")
		let right_img=document.querySelectorAll("#page2 .right .image");
		let rigthText=document.querySelectorAll("#page2 .right .text");
		let right_innertext=document.querySelectorAll("#page2 .right .inner")

		rightList.forEach(function(item, i){
			const page2RTl=gsap.timeline({
				scrollTrigger: {
					trigger : item,
					start: "top center",
					end: "bottom center",
				}
			})
			page2RTl.fromTo(right_img[i], {y: 80, opacity: 0},{ y : 0, opacity: 1, duraiton: 0.1}, "a")
			page2RTl.fromTo(rigthText[i], {y: 30, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.4}, "b")
			page2RTl.fromTo(right_innertext[i], {y: 30, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.4}, "b")
		});

		// #page3 , video

		let videoBanner=document.querySelector("#page3 .banner")
		let pcVideo=document.getElementById("pc_video");
		let mobileVideo=document.getElementById("mobile_video");

		videoBanner.addEventListener("mouseenter", function(){
			pcVideo.play();
			mobileVideo.play();
			
		});
		videoBanner.addEventListener("mouseleave", function(){
			pcVideo.pause();
			mobileVideo.pause();
		});

		// #page4 == SORT BY

		let newsList=document.querySelectorAll("#page4 .depth1 > li");
		let newsFlag=false;

		gsap.registerPlugin(ScrollTrigger);

		newsList.forEach(function(item1, i){

			newsList[0].classList.add("acitve");

			let [titleA, wrapper]=item1.children;

			item1.tl=gsap.timeline({
				scrollTrigger: {
					trigger : "#page4",
					start: "top center",
					end: "bottom center",
					onEnter: function(){
						if(i == 0 && newsFlag == false){
							newsFlag=true;
							activeList(i);
						}
					}
				}
			});

			let depth2=wrapper.lastElementChild;

			item1.tl.set(depth2.children, { y: 50, opacity: 0 });
			item1.tl.fromTo(wrapper.firstElementChild, {y: 50, opacity: 0} ,{ y: 0, opacity: 1, duration: 0.4 })

			

			function activeList(n){
				newsList.forEach(function(item, i){
					
					if(i == n){
						item.classList.add("active");
						item.tl.to(depth2.children, { y: 0, opacity: 1, duration: 0.4, stagger: 0.4, onComplete: function(){
						}});
						
					}
					else{
						item.classList.remove("active");
						item.tl.set(depth2.children, { y: 50, opacity: 0 });
					}
				});
			}

			titleA.addEventListener("click", function(e){
				e.preventDefault();

				activeList(i);
			});

			window.addEventListener('resize', function() {
				if (item1.classList.contains("active")) {
					item1.tl.set(depth2.children, { y: 50, opacity: 0 });
					item1.tl.to(depth2.children, { y: 0, opacity: 1, duration: 0.4, stagger: 0.4 });
				}
			});

			// ScrollTrigger.refresh();

		});


		// #page5 == MORE STORIES

		let page5List=document.querySelectorAll("#page5 .content ul li")
		let page5Btn=document.querySelector("#page5 .button")

		const page5Tl= gsap.timeline({
				scrollTrigger: {
					trigger : "#page5",
					start: "top center",
					end: "bottom center",
					// markers: true,
				}
		})

		page5Tl.fromTo(page5List, {y: 50, opacity: 0} ,{ y: 0, opacity: 1, duration: 0.4, stagger: 0.4 })
		page5Tl.fromTo(page5Btn, {y: 50, opacity: 0} ,{ y: 0, opacity: 1, duration: 0.4})


		// #page6 == NEWS

		let page6Image=document.querySelectorAll("#page6 .content ul li .image")
		let page6Btn=document.querySelector("#page6 .button")

		const page6Tl= gsap.timeline({
				scrollTrigger: {
					trigger : "#page6",
					start: "top center",
					end: "bottom center",
					// markers: true
				}
		})

		page6Tl.fromTo(page6Image, {y: 50, opacity: 0} ,{ y: 0, opacity: 1, duration: 0.4, stagger: 0.4 })
		page6Tl.fromTo(page6Btn, {y: 50, opacity: 0} ,{ y: 0, opacity: 1, duration: 0.4})

		
});