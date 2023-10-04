$(document).ready(function () {

    // ================= MENU ================
    // function clickMenu() {
    //     let btnMenu = $('.header .header__humburger'),
    //         nav = $('.navbar');
    //     btnMenu.click(function (e) {
    //         e.stopPropagation();
    //         hideDropDown()
    //         hideSelect()
    //         $('body').toggleClass('menu-show');
    //         $(this).toggleClass('--close');
    //     });
    //     nav.click(function (e) {
    //         // e.stopPropagation();
    //     });
    // }
    // clickMenu();

    // function closeMenu() {
    //     let btnMenu = $('.header .header__humburger');
    //     $('body').removeClass('menu-show');
    //     btnMenu.removeClass('--close');
    // }

    // ================= HIDE SELECT ================
    function hideSelect() {
        $('.select.active .sub').fadeOut(200);
        $('.select sub').fadeOut(200);
        $('.select').removeClass('active')
    }

    // ================= LOAD VIDEO HERO HOME ================
    // function loadVideoBG() {
    //     let videoBgWrap = $('.hero__background-video'),
    //         srcVideoBg = videoBgWrap.data('src');
    //     setTimeout(function () {
    //         videoBgWrap.html('<video preload="none" autoplay loop muted playsinline><source src="' + srcVideoBg + '" type="video/mp4">Your browser does not support the video tag.</video>')
    //     }, 500);
    // }
    // loadVideoBG()

    // ================= COURSE COMING HOME ================
    // function courseComingList() {
    //     let courseComingSlider = $("#coursecoming__slider");
    //     courseComingSlider.flickity({
    //         cellAlign: "left",
    //         contain: true,
    //         prevNextButtons: false,
    //         pageDots: false,
    //         dragThreshold: 0,
    //         wrapAround: true
    //     });

    //     $(".coursecoming .control .control__next").on(
    //         "click",
    //         function (e) {
    //             e.preventDefault();
    //             courseComingSlider.flickity("next");
    //         }
    //     );
    //     $(".coursecoming .control .control__prev").on(
    //         "click",
    //         function (e) {
    //             e.preventDefault();
    //             courseComingSlider.flickity("previous");
    //         }
    //     );
    // }
    // courseComingList()

    // ================= TEACHER HOME ================
    // function teacherSlider() {
    //     let courseComingSlider = $(".teacher .teacher__list .teacher__list-inner");
    //     courseComingSlider.flickity({
    //         cellAlign: "left",
    //         contain: true,
    //         prevNextButtons: false,
    //         pageDots: false,
    //         dragThreshold: 0
    //     });

    //     $(".teacher .control .control__next").on(
    //         "click",
    //         function (e) {
    //             e.preventDefault();
    //             courseComingSlider.flickity("next");
    //         }
    //     );
    //     $(".teacher .control .control__prev").on(
    //         "click",
    //         function (e) {
    //             e.preventDefault();
    //             courseComingSlider.flickity("previous");
    //         }
    //     );
    //     courseComingSlider.flickity("resize");
    // }
    // teacherSlider()

    // ================= TESTIMONIALS HOME ================
    // function testimonialSlider() {
    //     if ($('.testimonial__slider').length) {
    //         var $carousel = $(".testimonial__slider .images .list").flickity({
    //             contain: true,
    //             wrapAround: false,
    //             freeScroll: false,
    //             cellAlign: 'center',
    //             lazyLoad: 2,
    //             imagesLoaded: true,
    //             prevNextButtons: false,
    //             dragThreshold: 0,
    //             on: {
    //                 ready: function () {
    //                     let dotsSlideTes = $('.testimonial__slider .flickity-page-dots');
    //                     let dotsNew = $('.testimonial__slider .dots');
    //                     dotsSlideTes.appendTo(dotsNew);
    //                 },
    //                 change: function (index) {
    //                     $('.testimonial__slider .ct').removeClass('active');
    //                     $('.testimonial__slider .ct-' + (index + 1)).addClass('active');
    //                 }
    //             }
    //         });
    //         var flkty = $carousel.data('flickity');
    //         var $imgs = $('.testimonial__slider .carousel-cell picture img');

    //         $carousel.on('scroll.flickity', function (event, progress) {
    //             flkty.slides.forEach(function (slide, i) {
    //                 var img = $imgs[i];
    //                 var x = (slide.target + flkty.x) * -1 / 2;
    //                 img.style.transform = 'translateX( ' + x + 'px)';
    //             });
    //         });

    //         let ctrPrevTes = $('.testimonial .control .control__prev'),
    //             ctrNextTes = $('.testimonial .control .control__next');

    //         ctrPrevTes.on('click', function () {
    //             $carousel.flickity('previous', true);
    //         });
    //         ctrNextTes.on('click', function () {
    //             $carousel.flickity('next', true);
    //         });
    //     }
    // }
    // testimonialSlider()


    // ======================TEAM HOME ===================
    // function teamSlider() {
    //     let $carouselGallery = $(".gallery .list"),
    //         $progressBar = $('.gallery .timeline .process');

    //     $carouselGallery.flickity({
    //         contain: true,
    //         wrapAround: false,
    //         freeScroll: true,
    //         cellAlign: 'left',
    //         lazyLoad: 6,
    //         imagesLoaded: true,
    //         wrapAround: true,
    //         prevNextButtons: false
    //     });
    //     $carouselGallery.on('scroll.flickity', function (event, progress) {
    //         progress = Math.max(0.05, Math.min(1, progress));
    //         $progressBar.width(progress * 100 + '%');
    //     });

    //     let ctrPrevGallery = $('.gallery .btn_ctr.prev'),
    //         ctrNextGallery = $('.gallery .btn_ctr.next');

    //     ctrPrevGallery.on('click', function () {
    //         $carouselGallery.flickity('previous');
    //     });
    //     ctrNextGallery.on('click', function () {
    //         $carouselGallery.flickity('next');
    //     });
    // }
    // teamSlider()


    // ==================== MODAL =========================

    // function showModal() {
    //     let btnmodal = $('[data-modal]'),
    //         modal = $('.modal'),
    //         modalwrapper = $('.modal__wrapper-content');
    //     btnmodal.click(function (e) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //         let datamodal = $(this).data('modal');
    //         modal.addClass('open');
    //         modalwrapper.removeClass('active');
    //         $('.modal__wrapper-content.' + datamodal).addClass('active');
    //     })
    // }
    // showModal();

    // function closeModal() {
    //     let modal = $('.modal');
    //     modal.removeClass('open');
    // }

    // let btnCloseModal = $('.modal .modal__wrapper-close'),
    //     modalwrapper = $('.modal__wrapper-content');
    // btnCloseModal.click(function (e) {
    //     e.stopPropagation();
    //     closeModal();
    // });
    // modalwrapper.click(function (e) {
    //     e.stopPropagation();
    //     hideSelect();
    // })

    // ==================== ACCORDION ==========================
    // function accordion() {
    //     $(document).on('click', '.accordion .accordion__content-title', function () {
    //         $(this).next().stop().slideToggle(200);
    //         $(this).closest('.accordion__content').toggleClass('active');
    //         $(this).closest('.accordion__content').siblings('.active').removeClass('active').find('.accordion__content-text').stop().slideUp(200);
    //     });
    // }
    // accordion();


    // ===================== BACKGROUND HEADER ==================
    // function setBgHeader(scrollY) {
    //     let header = $('header')
    //     if (scrollY > header.height()) {
    //         header.addClass('--bgwhite');
    //     } else {
    //         header.removeClass('--bgwhite');
    //     }
    // }
    // function scrollBgHeader() {
    //     let scrollY = $(window).scrollTop();
    //     if ($('.header').hasClass('--transparent')) {
    //         setBgHeader(scrollY);
    //     }
    //     hideDropDown()
    // }
    // scrollBgHeader()

    // ================= WINDOW SCROLL ========================
    $(window).scroll(function () {
        // scrollBgHeader()
    });

    // ============== DOCUMENT CLICKED ========================
    $(document).click(function () {
        // closeMenu();
        hideSelect();
    });

    // ========================= TABS ========================
    function clickTab() {
        $(document).on("click", ".tab__title a", function (e) {
            e.preventDefault();
            let i = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".tab__content .tab__content-item").eq(i).css({
                display: "block",
            }).siblings().css({
                display: "none"
            });
        });
    }
    clickTab();

    // ============== SHOW HEAD TOP COURSE DETAIL ====================
    // function showHeadCourseDetail() {
    //     let buttonRegister = $('.herodetail .btn');
    //     if (buttonRegister.length) {
    //         let headtop = $('.headtop');
    //         let headProgress = $('.headtop__progress');
    //         let offsetHead = buttonRegister.offset().top;
    //         let pageHeight = $(document).height() - $(window).height();
    //         let scrollTop = $(window).scrollTop(); // y

    //         let progress = scrollTop / pageHeight * 100;

    //         if (offsetHead <= scrollTop) {
    //             headtop.addClass('show');
    //         } else {
    //             headtop.removeClass('show');
    //         }
    //         headProgress.css({
    //             width: progress + '%'
    //         });
    //     }
    // }
    // function coursePage() {
    //     if ($('.coursedetailpage').length) {
    //         showHeadCourseDetail();
    //         $(window).on('scroll', function () {
    //             showHeadCourseDetail();
    //         });
    //     }
    // }
    // coursePage();

    // ========================= DROPDOWN ===========================
    // function hideDropDown() {
    //     let dropdown = $('.dropdown')
    //     dropdown.removeClass('active');
    // }
    // function dropDown() {
    //     let btndropdown = $('[data-dropdown]'),
    //         dropdown = $('.dropdown');
    //     btndropdown.on("click", function (e) {
    //         e.stopPropagation();
    //         let data = $(this).attr('data-dropdown');
    //         dropdown.removeClass('active');
    //         $(`.${data}`).toggleClass('active');
    //         closeMenu();
    //     });
    //     dropdown.on("click", function (e) {
    //         e.stopPropagation();
    //     });

    //     $(document).click(function () {
    //         hideDropDown()
    //     })
    // }
    // dropDown();

    //================== SELECT PAYMENT METHOD =====================

//     let itemRadioPayment = $('.boxorder__pay');
//     itemRadioPayment.on('click', function () {
//         itemRadioPayment.find('.boxorder__pay-tooltip').hide()
//         $(this).find('.boxorder__pay-tooltip').show()
//     });


    $(window).on('load', () => {
        $('.loading').addClass('--hide')
    })
});

