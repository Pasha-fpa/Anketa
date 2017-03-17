
/*DEPENDENCIES
JQUERY
MAGNIFICPOPUP
SELECT2

*/



g = $;

// YANDEX
 function f(a) {
            yaCounter42672999.reachGoal(a) && console.log("yandex reached")
        }
  
  // REACH GOAL
  function d(a) {
            var b = window.location.origin;
            g.ajax({
                type: "get",
                url: b + "/write_statistics.php",
                data: {
                    goal: a
                }
            }).done(function() {
                console.log("statistic written")
            })
        }

        function e(a) {
            var b = "отправить " + a,
                c = window.location.origin;
            g.ajax({
                type: "get",
                url: c + "/write_statistics.php",
                data: {
                    goal: b
                }
            }).done(function() {
                console.log("statistic written")
            })
        }
        
        
        
    
        
    $(function(){
    
    //SEND DATA TO CRM
     function a(a) {
                g.ajax({
                    type: "POST",
                    url: "/like_filkos/send_form.php",
                    data: form_data
                })
            }
            
            
      //MAKE  ANKETA ON MOBILE SMALL ONLY
     g(window).width() < 480 && g("form").addClass("small"), 
     
     
     // EVENTS ON EAVING SITE
     g(window).on("beforeunload", function() {
                if (form_data && !step1Sent && !step2Sent && !step3Sent && !onCloseSent) return a(form_data), region && e(region), onCloseSent = !0, "Возможно некоторые данные не сохранятся."
            }), g(window).on("unload", function() {
                if (form_data && !step1Sent && !step2Sent && !step3Sent && !onCloseSent) return a(form_data), region && e(region), onCloseSent = !0, "Возможно некоторые данные не сохранятся."
            })
    
    
    //ANKETA OPEN
    g(".cta.anketa").magnificPopup({
                type: "inline",
                closeBtnInside: "true",
                removalDelay: 300,
                callbacks: {
                    beforeOpen: function() {
                        var a = g.magnificPopup.instance.st.el[0].hash;
                        a = g(a), a.addClass("fadeIn")
                    },
                    beforeClose: function() {
                        var a = g.magnificPopup.instance.st.el[0].hash;
                        a = g(a), a.removeClass("fadeIn"), a.addClass("fadeOut")
                    },
                    afterClose: function() {
                        var a = g.magnificPopup.instance.st.el[0].hash;
                        a = g(a), g(".invalid_text").fadeOut(), g(".invalid").removeClass("invalid")
                    }
                }
            })
    
    //VALIDATE FORM
    g(".form_wrap_inner").on("focus", "input", function() {
                g(this).siblings('span:not(".static")').addClass("active")
            }), g('.form_wrap_inner:not(".static")').on("blur", "input", function() {
                (!g(this).val() || "__.__.____" == g(this).val() || g(this).hasClass("dateBirth") && g(this).val().indexOf("_") != -1) && g(this).siblings('span:not(".static")').removeClass("active")
            }), g(".input").on("click", function() {
                g(this).children("input").focus()
            }), g(".select_region").select2({
                placeholder: "Регион",
                minimumResultsForSearch: 1 / 0
            }), g(".form input").on("focus", function() {
                var a = g(this).parent(".input");
                a.hasClass("invalid") && a.removeClass("invalid"), g(".invalid_text").fadeOut()
            }), g(".select2").on("click", function() {
                g(this).hasClass("invalid") && (g(this).removeClass("invalid"), g(".invalid_text").fadeOut())
            }), g(".summ_money, .income").keydown(function(a) {
                g.inArray(a.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 || 65 === a.keyCode && (a.ctrlKey === !0 || a.metaKey === !0) || a.keyCode >= 35 && a.keyCode <= 40 || (a.shiftKey || a.keyCode < 48 || a.keyCode > 57) && (a.keyCode < 96 || a.keyCode > 105) && a.preventDefault()
            }), jQuery(".dateBirth").mask("99.99.9999"), jQuery("form .phone").mask("8 (999) 999-9999"),
            
            
            //SUBMIT TRIGGER
            g(".submit").on("click", function() {
                return g(this).parents("form").submit(), !1
            }), g(".form .input .placeholder").on("click", function() {
                g(this).siblings("input").focus()
            }),
            
            //SUBMIT FORM
            g(".form").on("submit", function(a) {
                a.preventDefault();
                var h = g(this).children(".cta");
                if (!h.hasClass("loading")) {
                    var i = !1;

                    if (g(this).find("[data-require]").each(function(a) {
                            g(this).val() || ("SELECT" == g(this).prop("tagName") ? g(".select2").addClass("invalid") : g(this).parent(".input").addClass("invalid"), g(".invalid_text").fadeIn(), i = !0)
                        }), i) return !1;
                    h.addClass("loading"), h.text("Ваша заявка отправляется...");

                     summ = g(this).find(".summ_money").val(), income = g(this).find(".income").val(), dateBirth = g(this).find(".dateBirth").val(), region = g(this).find(".select_region").val(), phone = g(this).find(".phone").val(), form_data = g(this).serialize();
                    var j = dateBirth.split("."),
                        k = (c(j[1], j[0], j[2]), window.location.origin);
                    if (console.log(g(this)), g(this).hasClass("small")) g.ajax({
                        type: "POST",
                        url: k + "/like_filkos/send_form.php",
                        data: form_data
                    }).done(function(a) {
                        a.indexOf("специалисты") != -1 && (console.log("sent"), e(region), f("ANKETA")), b(a), g("form")[0].reset(), g(".loading").removeClass("loading"), g(".small .cta").text("Получить кредит")
                    });
                    else {
                        g(".loading").removeClass("loading"), g("#step1 .cta").text("Получить кредит");
                        var l = g("#step2");
                        g.magnificPopup.instance.st.callbacks = {
                            close: function() {
                                console.log("step2sent " + step2Sent), !form_data.length || step1Sent || step2Sent || step3Sent || (g.ajax({
                                    type: "POST",
                                    url: k + "/like_filkos/send_form.php",
                                    data: form_data
                                }).done(function(a) {
                                    a.indexOf("специалисты") != -1 && (console.log("sent"), e(region), f("ANKETA"))
                                }), step1Sent || d("шаг 1"), step1Sent = !0)
                            }
                        }, g.magnificPopup.open({
                            items: {
                                src: l,
                                type: "inline"
                            },
                            closeBtnInside: "true",
                            removalDelay: 300
                        })
                    }
                }
            })
            
            
            
            
    
    })()
