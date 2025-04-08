window.addEventListener("DOMContentLoaded",function(){
	let isMobile;
		let swiper1=null;
		let swiper2=null;
		function dimRemove(){
			document.querySelector("#start .search").classList.remove("active");
			document.querySelector("#start .dim").classList.remove("active");
			document.querySelector("#start .search_container").classList.remove("active");
			document.querySelector("#start .index").classList.remove("active");
			document.querySelector("body").classList.remove("fixed")
		}
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

		document.querySelector("#start .search").addEventListener("click", function(e){
			e.preventDefault();
			document.querySelector("#start .search").classList.add("active");
			document.querySelector("#start .tab").classList.add("active");
			document.querySelector("#start .dim").classList.add("active");
			document.querySelector("#start .search_container").classList.add("active");
			document.querySelector("#start .index").classList.add("active");
			document.querySelector("body").classList.add("fixed")
		});

		document.querySelector("#start .lang").addEventListener("mouseenter", function(){
			if(isMobile == false){
				document.querySelector("#start .lang").classList.add("active");
			}
		});
		document.querySelector("#start .lang").addEventListener("mouseleave", function(){
			if(isMobile == false){
				document.querySelector("#start .lang").classList.remove("active");
			}
		});
		
		document.querySelector("#start .tab").addEventListener("click", function(e){
			e.preventDefault();
			document.querySelector("body").classList.toggle("fixed");
			document.querySelector("#start nav").classList.toggle("active");
			this.classList.toggle("active");
			if(document.querySelector("#start .search").classList.contains("active")){
				dimRemove();
				document.querySelector("#start nav").classList.remove("active");
			}
			else{
				document.querySelector("#start .search").classList.toggle("active");
			}
		});
		
		document.querySelector("#start .dim").addEventListener("click", function(){
			dimRemove();
			if(document.querySelector("#start .tab").classList.contains("active")){
				document.querySelector("#start .tab").classList.remove("active");
			}
		});

		document.querySelectorAll("#start nav ul li").forEach(function(item1, i){
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

		document.querySelectorAll("#page4 .depth1 > li > a").forEach(function(item1, i){
			item1.addEventListener("click", function(e){
				e.preventDefault();

				item1.parentElement.classList.toggle("active");
			});
		});
});