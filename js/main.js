window.addEventListener("DOMContentLoaded",function(){

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
				start: "top center",
				end: "bottom center",
				markers : true
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
		page2LTl.fromTo(leftText, {y: 30, opacity: 0},{ y : 0, opacity: 1 ,duraiton: 0.5})

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
			page2RTl.fromTo(rigthText[i], {y: 30, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5}, "b")
			page2RTl.fromTo(right_innertext[i], {y: 30, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5}, "b")
		});

		// #page4 == SORT BY

		let sortList=document.querySelectorAll("#page4 .depth1 > li");
		let titleP=document.querySelectorAll("#page4 .depth2 p");
		let sort_img=document.querySelectorAll("#page4 ul ul .image");

		let liH3=document.querySelectorAll("#page4 ul ul h3");
		let liSpan=document.querySelectorAll("#page4 ul ul span");
		let liI=document.querySelectorAll("#page4 ul ul i");

		const page4Tl=gsap.timeline({
			scrollTrigger: {
				trigger : "page4",
				start: "top center",
				end: "bottom center",
				markers: true
			}
		})

		sortList.forEach(function(item, i){
			item.firstElementChild.addEventListener("click", function(e){
				e.preventDefault();

				item.classList.toggle("active");
			});

			if(item.classList.contains("active")){
				page4Tl.fromTo(titleP[i], {y: 30, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5})

				page4Tl.fromTo(sort_img[0], {y: 50, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5}, "a")
				page4Tl.fromTo(sort_img[1], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.1,duraiton: 0.5}, "a")
				page4Tl.fromTo(sort_img[2], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.2,duraiton: 0.5}, "a")

				page4Tl.fromTo(liH3[0], {y: 50, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5}, "a")
				page4Tl.fromTo(liH3[1], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.1,duraiton: 0.5}, "a")
				page4Tl.fromTo(liH3[2], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.2,duraiton: 0.5}, "a")

				page4Tl.fromTo(liSpan[0], {y: 50, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5}, "a")
				page4Tl.fromTo(liSpan[1], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.1,duraiton: 0.5}, "a")
				page4Tl.fromTo(liSpan[2], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.2,duraiton: 0.5}, "a")

				page4Tl.fromTo(liI[0], {y: 50, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5}, "a")
				page4Tl.fromTo(liI[1], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.1,duraiton: 0.5}, "a")
				page4Tl.fromTo(liI[2], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.2,duraiton: 0.5}, "a")


				page4Tl.fromTo(sort_img[3], {y: 50, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5}, "b")
				page4Tl.fromTo(sort_img[4], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.1,duraiton: 0.5}, "b")
				page4Tl.fromTo(sort_img[5], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.2,duraiton: 0.5}, "b")

				page4Tl.fromTo(liH3[3], {y: 50, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5}, "b")
				page4Tl.fromTo(liH3[4], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.1,duraiton: 0.5}, "b")
				page4Tl.fromTo(liH3[5], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.2,duraiton: 0.5}, "b")

				page4Tl.fromTo(liSpan[3], {y: 50, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5}, "b")
				page4Tl.fromTo(liSpan[4], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.1,duraiton: 0.5}, "b")
				page4Tl.fromTo(liSpan[5], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.2,duraiton: 0.5}, "b")

				page4Tl.fromTo(liI[3], {y: 50, opacity: 0},{ y : 0, opacity: 1,duraiton: 0.5}, "b")
				page4Tl.fromTo(liI[4], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.1,duraiton: 0.5}, "b")
				page4Tl.fromTo(liI[5], {y: 50, opacity: 0},{ y : 0, opacity: 1,delay: 0.2,duraiton: 0.5}, "b")
			}
		});
});