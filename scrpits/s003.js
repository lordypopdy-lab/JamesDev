!(function () {
  "use strict";
  var e = {
      761: function () {
        var e;
        (e = jQuery)(window).on("elementor/frontend/init", function () {
          var n = elementorModules.frontend.handlers.Base.extend({
              onInit: function () {
                elementorModules.frontend.handlers.Base.prototype.onInit.apply(
                  this,
                  arguments
                ),
                  this.run();
              },
              getDefaultSettings: function () {
                return {
                  autoplay: !0,
                  arrows: !1,
                  container: ".noxfolio-carousel-active",
                  dots: !1,
                  infinite: !0,
                  rows: 0,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: !0,
                  centerPadding: 0,
                  appendDots: this.findElement(".noxfolio-carousel-dots"),
                  prevArrow: this.findElement(".noxfolio-prev-arrow"),
                  nextArrow: this.findElement(".noxfolio-next-arrow"),
                  vertical: !1,
                  verticalSwiping: !1,
                  fade: !1,
                  adaptiveHeight: !1,
                };
              },
              getDefaultElements: function () {
                return {
                  $container: this.findElement(this.getSettings("container")),
                };
              },
              getCarouselSettings: function () {
                var n = this,
                  t = {
                    infinite: !!this.getElementSettings("loop"),
                    autoplay: !!this.getElementSettings("autoplay"),
                    autoplaySpeed: this.getElementSettings("autoplay_speed"),
                    speed: this.getElementSettings("speed"),
                    arrows: !!this.getElementSettings("show_arrows"),
                    dots: !!this.getElementSettings("show_dots"),
                    pauseOnHover: !!this.getElementSettings("pause_on_hover"),
                    centerMode: !!this.getElementSettings("center_mode"),
                    slidesToShow:
                      parseInt(this.getElementSettings("slides_per_view")) || 1,
                    slidesToScroll:
                      parseInt(this.getElementSettings("slides_to_scroll")) ||
                      1,
                    adaptiveHeight:
                      !!this.getElementSettings("adaptive_height"),
                  };
                this.getElementSettings("center_mode") &&
                  (t.centerPadding =
                    this.getElementSettings("center_padding").size +
                    this.getElementSettings("center_padding").unit);
                var o = [],
                  i = elementorFrontend.config.responsive.activeBreakpoints;
                return (
                  e.each(i, function (e) {
                    var t =
                        "slides_per_view" + ("desktop" === e ? "" : "_" + e),
                      a = "slides_to_scroll" + ("desktop" === e ? "" : "_" + e),
                      s = "center_padding" + ("desktop" === e ? "" : "_" + e),
                      r = {
                        breakpoint: i[e].value + 1,
                        settings: {
                          slidesToShow: parseInt(n.getElementSettings(t)),
                          slidesToScroll: parseInt(n.getElementSettings(a)),
                        },
                      };
                    n.getElementSettings("center_mode") &&
                      (r.settings.centerPadding =
                        n.getElementSettings(s).size +
                        n.getElementSettings(s).unit),
                      o.push(r);
                  }),
                  (t.responsive = o),
                  this.getElementSettings("prev_arrow_id") &&
                    (t.prevArrow =
                      "#" + this.getElementSettings("prev_arrow_id")),
                  this.getElementSettings("next_arrow_id") &&
                    (t.nextArrow =
                      "#" + this.getElementSettings("next_arrow_id")),
                  "vertical" ===
                    this.getElementSettings("carousel_direction") &&
                    ((t.vertical = !0), (t.verticalSwiping = !0)),
                  noxfolioLocalize.is_rtl && (t.rtl = !0),
                  e.extend({}, this.getSettings(), t)
                );
              },
              run: function () {
                var n = this.elements.$container;
                n.slick(this.getCarouselSettings()),
                  n.hasClass("has-animation-events") &&
                    (n.on("afterChange", function (t, o, i) {
                      n.find(".slick-active .elementor-invisible").each(
                        function (n, t) {
                          var o = e(t).data("settings");
                          if (o && (o._animation || settings.animation)) {
                            var i = o._animation_delay ? o._animation_delay : 0,
                              a = o._animation || o.animation;
                            setTimeout(function () {
                              e(t)
                                .removeClass("elementor-invisible")
                                .addClass(a + " animated");
                            }, i);
                          }
                        }
                      );
                    }),
                    n.on("beforeChange", function (t, o, i) {
                      var a = n.find(".slick-slide");
                      "init" === t && (a = a.not(".slick-current")),
                        a.find(".animated").each(function (n, t) {
                          var o = e(t).data("settings");
                          if (o && (o._animation || o.animation)) {
                            var i = o._animation || o.animation;
                            e(t)
                              .removeClass("animated " + i)
                              .addClass("elementor-invisible");
                          }
                        });
                    }));
              },
            }),
            t = {
              "noxfolio-testimonials.default": n,
              "noxfolio-recent-posts.default": n,
              "noxfolio-client-logos.default": n,
            };
          e.each(t, function (e, n) {
            elementorFrontend.hooks.addAction(
              "frontend/element_ready/" + e,
              function (e) {
                elementorFrontend.elementsHandler.addHandler(n, {
                  $element: e,
                });
              }
            );
          });
        });
      },
      816: function () {
        var e;
        (e = jQuery)(window).on("elementor/frontend/init", function () {
          var n = function (n) {
              e.each(n, function (n) {
                var t = e(this),
                  o = t.height(),
                  i = t.data("id"),
                  a = t.position().top + o,
                  s =
                    '<div class="noxfolio-sticky-gap sticky-gap-' +
                    i +
                    '" style="height: ' +
                    o +
                    'px"></div>';
                if (t.hasClass("noxfolio-sticky")) {
                  t.after(s);
                  var r = e(".sticky-gap-" + i);
                  e(window).on("scroll", function () {
                    e(this).scrollTop() < a
                      ? (t.removeClass("noxfolio-sticky-active"),
                        r.removeClass("active-sticky-gap"))
                      : (t.addClass("noxfolio-sticky-active"),
                        r.addClass("active-sticky-gap"));
                  });
                }
              });
            },
            t = {
              "noxfolio-mini-search.default": function (e, n) {
                e.find(".noxfolio-search-wrapper").each(function () {
                  var e = n(this),
                    t = e.find(".search-icon"),
                    o = e.find(".noxfolio-search-overly"),
                    i = e.find(".search-close");
                  t.on("click", function (n) {
                    n.preventDefault(),
                      console.log("hello"),
                      e.toggleClass("show-search-canvas");
                  }),
                    o.on("click", function (n) {
                      n.preventDefault(), e.removeClass("show-search-canvas");
                    }),
                    i.on("click", function (n) {
                      n.preventDefault(), e.removeClass("show-search-canvas");
                    });
                });
              },
              "noxfolio-counter.default": function (e, n) {
                !(function (e, n) {
                  if ("IntersectionObserver" in window) {
                    var t = new IntersectionObserver(
                      function (e, t) {
                        e.forEach(function (e) {
                          e.isIntersecting &&
                            (n(e.target), t.unobserve(e.target));
                        });
                      },
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : { threshold: 0.5 }
                    );
                    document.querySelectorAll(e).forEach(function (e) {
                      return t.observe(e);
                    });
                  } else
                    document.querySelectorAll(e).forEach(function (e) {
                      return n(e);
                    });
                })(".elementor-counter-number", function (e) {
                  var t = n(e),
                    o = t.data(),
                    i = o.toValue.toString().match(/\.(.*)/);
                  i && (o.rounding = i[1].length), t.numerator(o);
                });
              },
              "noxfolio-accordion.default": function (e, n) {
                e.find(
                  ".noxfolio-accordion .accordion-item .accordion-header"
                ).on("click", function (e) {
                  e.preventDefault();
                  var t = n(this).data("target"),
                    o = n(this).parents(".noxfolio-accordion"),
                    i = o.find(".accordion-header.active-header");
                  n.each(i, function (e, i) {
                    var a = n(i).data("target"),
                      s = o.find(".accordion-content.active-content");
                    a != t &&
                      (n(i).removeClass("active-header"),
                      s.removeClass("active-content"),
                      n(this).parent().removeClass("active-accordion"),
                      n(a).slideUp(500));
                  }),
                    n(this).parent().toggleClass("active-accordion"),
                    n(this).toggleClass("active-header"),
                    o.find(".accordion-content").toggleClass("active-content"),
                    n(t).slideToggle(500);
                });
              },
              "noxfolio-video-popup.default": function () {
                e(".noxfolio-video-popup").each(function () {
                  e(this)
                    .find(".popup-video")
                    .magnificPopup({
                      disableOn: 700,
                      type: "iframe",
                      mainClass: "mfp-fade",
                      removalDelay: 160,
                      preloader: !1,
                      fixedContentPos: !1,
                    });
                });
              },
              "noxfolio-offcanvas.default": function (e, n) {
                e.find(".noxfolio-offcanvas").each(function () {
                  var e = n(this),
                    t = e.find(".offcanvas-toggle"),
                    o = e.find(".offcanvas-overly"),
                    i = e.find(".offcanvas-close"),
                    a = e.find(".noxfolio-offcanvas-wrapper");
                  t.on("click", function (e) {
                    a.toggleClass("show-offcanvas");
                  }),
                    o.on("click", function (e) {
                      a.removeClass("show-offcanvas");
                    }),
                    i.on("click", function (e) {
                      a.removeClass("show-offcanvas");
                    });
                });
              },
              "noxfolio-content-switcher.default": function (e, n) {
                e.find(".noxfolio-content-switcher").each(function () {
                  var e = n(this),
                    t = e.find(".switcher-input-label"),
                    o = e.find("input.switcher-checkbox"),
                    i = e.find(".primary-switch"),
                    a = e.find(".secondary-switch"),
                    s = e.find(".primary-switch-content"),
                    r = e.find(".secondary-switch-content");
                  t.on("click", function (e) {
                    o.is(":checked")
                      ? (i.removeClass("active"),
                        s.removeClass("active"),
                        a.addClass("active"),
                        r.addClass("active"))
                      : (a.removeClass("active"),
                        r.removeClass("active"),
                        i.addClass("active"),
                        s.addClass("active"));
                  });
                });
              },
              "noxfolio-image-gallery.default": function (e, n) {
                n(".noxfolio-image-gallery").each(function () {
                  n(this)
                    .find(".gallery-image-link")
                    .not(".slick-cloned .gallery-image-link")
                    .magnificPopup({
                      type: "image",
                      gallery: { enabled: !0 },
                      mainClass: "mfp-fade",
                    });
                });
              },
            };
          e.each(t, function (e, n) {
            elementorFrontend.hooks.addAction("frontend/element_ready/" + e, n);
          }),
            elementorFrontend.hooks.addAction(
              "frontend/element_ready/section",
              n
            ),
            elementorFrontend.hooks.addAction(
              "frontend/element_ready/container",
              n
            );
        });
      },
      578: function () {
        !(function (e) {
          function n() {
            e(".noxfolio-nav-menu").each(function () {
              var n,
                t,
                o = e(this),
                i = (o.find(".primary-menu"), o.find(".navbar-toggler")),
                a = o.find(".slide-panel-wrapper"),
                s = o.find(".slide-panel-overly"),
                r = o.find(".slide-panel-close"),
                l = o.find(".slide-panel-menu"),
                c = "show-panel";
              i.on("click", function (e) {
                a.addClass(c), e.preventDefault();
              }),
                r.on("click", function (e) {
                  e.preventDefault(), a.removeClass(c);
                }),
                s.on("click", function (e) {
                  e.preventDefault(), a.removeClass(c);
                }),
                l.find("a").on("click", function (n) {
                  e(n.target).hasClass("submenu-toggler") ||
                    (e(this).attr("href").startsWith("#") && a.removeClass(c));
                }),
                (n = "submenu-active"),
                (t = "show-submenu"),
                a.find(".submenu-toggler").on("click", function (o) {
                  o.preventDefault();
                  var i = jQuery(this).parents("li");
                  if (e(this).hasClass(n))
                    e(this)
                      .parent()
                      .prev(".sub-menu")
                      .stop(!0)
                      .slideUp(450)
                      .removeClass(t),
                      e(this)
                        .parent()
                        .next(".sub-menu")
                        .stop(!0)
                        .slideUp(450)
                        .removeClass(t);
                  else {
                    var a = e(".slide-panel-menu .menu-item-has-children");
                    a
                      .not(i)
                      .find(".sub-menu")
                      .stop(!0)
                      .slideUp(450)
                      .removeClass("show-submenu"),
                      a.not(i).find(".submenu-toggler").removeClass(n),
                      e(this)
                        .parent()
                        .prev(".sub-menu")
                        .stop(!0)
                        .slideDown(450)
                        .addClass(t),
                      e(this)
                        .parent()
                        .next(".sub-menu")
                        .stop(!0)
                        .slideDown(450)
                        .addClass(t);
                  }
                  e(this).toggleClass(n);
                });
            });
          }
          e(document).on("ready", function (t) {
            var o, i, a, s;
            n(),
              (o = e(window).height()),
              (i = e("#backToTop")),
              e(window).on("scroll", function () {
                e(window).scrollTop() > o
                  ? i.addClass("active")
                  : i.removeClass("active");
              }),
              i.on("click", function (n) {
                n.preventDefault(),
                  e("html,body").animate({ scrollTop: 0 }, 400);
              }),
              (s =
                3e3 * (a = e(".noxfolio-popup-wrapper")).data("delay") || 3e3),
              a.length > 0 &&
                (setTimeout(function () {
                  e(".noxfolio-popup-wrapper").addClass("show-popup"),
                    document.body.setAttribute("style", "overflow:hidden;");
                }, s),
                e(
                  ".noxfolio-popup-wrapper .popup-close, .noxfolio-popup-wrapper .popup-overly"
                ).on("click", function () {
                  a.hasClass("editing") || a.removeClass("show-popup"),
                    document.body.setAttribute("style", "overflow:auto;");
                }));
          }),
            e(window).on("load", function () {
              var n;
              (n = e("#preloader"))
                .find(".animation-preloader")
                .fadeOut("slow"),
                n.length > 0 &&
                  e(".preloader-layer .overly").animate(
                    { left: "100%" },
                    {
                      step: function (n, t) {
                        e(this).css({
                          transform: "translate3d(0px, 0px, 0px)",
                        });
                      },
                      duration: 650,
                      easing: "linear",
                      queue: !1,
                      complete: function () {
                        n.fadeOut("slow");
                      },
                    },
                    "linear"
                  );
            }),
            e(window).on("elementor/frontend/init", function () {
              elementorFrontend.hooks.addAction(
                "frontend/element_ready/noxfolio-nav-menu.default",
                function () {
                  window.elementorFrontend.isEditMode() && n();
                }
              );
            });
        })(jQuery);
      },
      377: function (e, n, t) {
        t.r(n);
      },
    },
    n = {};
  function t(o) {
    var i = n[o];
    if (void 0 !== i) return i.exports;
    var a = (n[o] = { exports: {} });
    return e[o](a, a.exports, t), a.exports;
  }
  (t.r = function (e) {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
    t(377),
    t(578),
    t(761),
    t(816);
})();
