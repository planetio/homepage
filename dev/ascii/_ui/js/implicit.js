// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};


/*
 *
 * Implicit: mobile web app framework Requires: jQuery
 *
 */

(function (window, $, document, undefined) {
    var logger = console;    
    
    var Dialog = function() {
        arguments.callee.count = ++arguments.callee.count || 1;
        if (Dialog.count > 1) {
            return logger.error("Dialog is a singleton and cannot be created more than once.");
        }
        var that = this;

        this.dialogBox = document.createElement("div");
        this.dialogBox.id = "dialog";
        this.dialogBox.setAttribute("style", "display: none;");
        document.body.appendChild(this.dialogBox);
        this.spinner = document.createElement("div");
        this.spinner.className = "loading";
        this.spinner.style.display = "none";
        this.dialogBox.appendChild(this.spinner);
        this.content = document.createElement("div");
        this.content.className = "content";
        this.dialogBox.appendChild(this.content);
        this.centerH = function(element, parent) {
            element.style.left = ((parent.innerWidth / 2) - ($(element).outerWidth() / 2)) + "px";
        };
        this.centerY = function() {
             return ((window.innerHeight - $(this.dialogBox).outerHeight()) / 2) + $(window).scrollTop();
        };
        this.viewScroll = function() {
            this.dialogBox.style.top = this.centerY() + "px";
        };
        this.isShowing = false;
        // Focusing on inputs closes the dialog if it is showing
        $("input").live("focus", function() {
            if (that.isShowing) {
                that.hide();
            }
        });
    };
    Dialog.prototype = {
        show: function (msg, timeout, showLoadingIcon) {
            var that = this,
                dialogBox = this.dialogBox,
                content = this.content,
                spinner = this.spinner,
                viewScroll = this.viewScroll,
                $dialog = $(dialogBox);

            this.cancel();

            $("input").blur(); // For android inputs which on Android 2.2 and lower, the inputs have higher z index, when focused, than any other ui component.

            $(content).empty();

            if (showLoadingIcon === true || (arguments.length === 2 && timeout === true)) {
                spinner.style.display = "block";
            } else {
                spinner.style.display = "none";
            }

            $(content).html(msg);

            dialogBox.style.top = that.centerY() + "px";

            this.centerH(dialogBox, window);
            this.centerH(spinner, dialogBox);

            $dialog.show();
            this.isShowing = true;

            if (typeof timeout !== "undefined" && typeof timeout === "number") {
                that.timer = setTimeout(function () {
                    that.hide();
                }, timeout);
            }

            $(window).bind("scroll.dialog", function() {
                that.viewScroll.call(that);
            });

            $(window).bind("resize.dialog", function () { 
                that.viewScroll.call(that);
                that.centerH(dialogBox, window);
            });

            $("body").bind("touchend.dialog", function() {
                $dialog.hide();
            });
        },

        cancel: function () {
            clearTimeout(this.timer);
        },

        hide: function () {
            var dialogBox = this.dialogBox,
                $window = $(window),
                $dialogBox = $(dialogBox);
            $dialogBox.removeClass("loading");
            this.isShowing = false;
            $window.unbind("scroll.dialog");
            $window.unbind("resize.dialog");
            $("body").unbind("touchend.dialog");
            $dialogBox.fadeOut();
        },

        optionBox: function (html, events) {
            var that = this;
            this.show(html);
            $.each(events, function (i, event) {
                touchEvent(event.id, function () {
                    event.func.apply(that, event.params);
                    that.hide();
                });
            });
        }
    };


    var getDirection = function (id) {
        var element = document.getElementById(id);
        var direction;
        if (element) {
            direction = element.getAttribute("direction");
        }
        return (direction ? direction : "right");
    };

    var getOppositeDirection = function (direction) {
        var oppositeDirection = {
            "right": "left",
            "left": "right",
            "up": "down",
            "down": "up",
            "show": "show"
        };

        
        return oppositeDirection[direction];
    };
    
    var event = {
        eventMap: {},
        fire: function (eventName, data) {
            if (typeof this.eventMap[eventName] === "function") {
                this.eventMap[eventName](data);
            }
        },
        subscribe: function (eventName, fn, replace) {
            if (typeof this.eventMap[eventName] === "undefined" || replace) {
                this.eventMap[eventName] = fn;
            } else {
                var oldFunction = this.eventMap[eventName];
                this.eventMap[eventName] = function (data) {
                    if(typeof data !== "undefined") {
                        oldFunction(data);
                        fn(data);
                    } else {
                        oldFunction();
                        fn();
                    }
                };
            }
        }
    };
    
    var platform;
    
    var stackList = [];
    
    var hasAwesomePlatform = false;
        
    var Implicit = function() {
        var that = this;
        $("body").addClass("hasJS");
    };

    Implicit.prototype.setPlatform = function(objectivePlatform) {        
        if (typeof objectivePlatform !== "undefined") {
            platform = objectivePlatform = objectivePlatform.toLowerCase();
        } else {
            ["Safari", "Chrome", "Android", "iPhone", "Blackberry"].forEach(function(browser) {
                if (navigator.userAgent.indexOf(browser) > -1) {
                    platform = browser.toLowerCase();
                }
            });
        }
            
        document.body.setAttribute("data-platform", platform);
        
        if (platform !== "blackberry" && platform !== "android") {
            hasAwesomePlatform = true;
        } else {
            hasAwesomePlatform = false;            
        }
        
        return platform;
    };
    
    Implicit.prototype.getPlatform = function() {
        return platform;
    };
    
    // For sake of code design simplicity, I'm only supporting overflow: scroll components if the device has -webkit-overflow-scroll. 
    // The reason is that if I test for overflow: scroll, Android will return true although it was never implemented it.
    Implicit.prototype.hasScroll = (function() {
        var memo = null;
        // detect native overflow scrolling
        var div = document.createElement("div");
        div.style.webkitOverflowScrolling = "touch";
        div.style.overflow = "scroll";
        if (div.style.cssText.indexOf("-webkit-overflow-scrolling: touch;") > -1) {
            $("body").addClass("supportsNativeScrolling");
            memo = true;
        } else {
            memo = false;
        }
        div = null;
        Implicit.prototype.hasScroll = function() { return memo; };
        return memo;
    })();
        
    Implicit.prototype.path = (window.location.href).slice(0, (window.location.href).lastIndexOf("/"));
    
    Implicit.prototype.util = {
        setLogger: function(theLogger) {
            logger = theLogger || console;
        },
        flipToggleSwitch : function(element) {
            element.find(".toggle p").each(function(index) {
                $(this).toggleClass("offState");
            });
            element.toggleClass("on");
            return element.hasClass("on");
        }
    };
            
    Implicit.prototype.model = {
        localStorage : {
            set: function (key, value) {

                if (this.get(key) !== null) {
                    fireType = "change";
                } else {
                    fireType = "set";
                }

                localStorage.setItem(key, JSON.stringify(value));
                event.fire(key + ":data:" + fireType, key);
                return true;
            },

            get: function (key) {
                var value = localStorage.getItem(key);

                if (value !== null && value !== undefined) {
                    value = JSON.parse(value);
                
                    event.fire(key + ":data:received", value);
                }

                return value;
            },

            remove: function (key) {
                if (typeof key !== "string") {
                    I.logger.warn("The key: " + key + "isn't in the localstorage records");
                    return;
                }
                localStorage.removeItem(key);
                event.fire("data:deleted", key);
                return true;
            },
        
            clear: function(){
                localStorage.clear();
            }
        },
        
        XMLtoString : function (elem) {

            var serializer, serialized;

            try {
                // XMLSerializer exists in current Mozilla browsers
                serializer = new XMLSerializer();
                serialized = serializer.serializeToString(elem);
            } catch (e) {
                // Internet Explorer has a different approach to
                // serializing XML
                serialized = elem.xml;
            }

            return serialized;
        }  
    };
    
    Implicit.prototype.view = function() {
        var that = this;
        
        touchEvent(".goBack", function() {
            that.manager.goBack();
        });
        
        var viewPrep = function (e, view) {
            var $this = $(this);
            var direction = "right";
            var id = view || $this.attr("data-view-link");

            var userSetDirection = $this.attr("data-view-transition");

            if (typeof userSetDirection !== "undefined") {
                direction = userSetDirection;
            }

            var behavior = $this.attr("data-view-behavior") || "wait";
            var dataId = $this.attr("data-id");
            if (behavior === "wait") {
                logger.info("Preparing view for " + id);
                event.subscribe("view:prep:complete:" + id, function() {
                    logger.info("Done preparing view for " + id);
                    that.manager.change(id, direction, dataId);
                }, true); // replace any existing listeners for this event
                event.fire("view:prep:" + id, dataId);
            } else {
                that.manager.change(id, direction, dataId);
            }
        };
        touchEvent("[data-view-link]", viewPrep);
        
        var animations = {
            show: "in uiPageActive",
            rightOut: "slide out",
            rightIn: "slide in uiPageActive",
            leftOut: "slide out reverse",
            leftIn: "slide in reverse uiPageActive",
            up: "up in uiPageActive",
            down: "down out"
        };
        
        function adjustScrollableHeight(currentView) {
            var topFixedHeight = currentView.children(".fixedAtTopComponent").height() || 0,
            bottomFixedHeight = currentView.children(".fixedAtBottomComponent").height() || 0,
            viewportHeight = $(window).height();
            $("body > .uiPageActive .viewInnerContainer").css("height", (viewportHeight-(topFixedHeight+bottomFixedHeight))+"px");
        }
        
        $("body > div").live("webkitAnimationEnd", function () {
            $("body > div").removeClass("out", "in");
        });
        
        event.subscribe("viewChange", function(directionAndTo) {
            var direction = directionAndTo[0],
                to = directionAndTo[1],
                incomingView = $("#" + to),
                currentView = Implicit.currentView || document.querySelector(".uiPageActive"),
                $body = $("body");
                
            if (currentView === null) {
                currentView = incomingView;
            }
            
            if (!hasAwesomePlatform) {direction = "show";}

            $(currentView).attr("direction", getOppositeDirection(direction));

            switch (direction) {
            case "right":
                currentView.className = animations.rightOut;
                incomingView[0].className = animations.rightIn;
                break;
            case "left":
                currentView.className = animations.leftOut;
                incomingView[0].className = animations.leftIn;
                break;
            case "up":
                incomingView[0].className = animations.up;
                break;
            case "down":
                currentView.className = animations.down;
                incomingView[0].className = "uiPageActive";
                break;
            default:
                currentView.className = "out";
                incomingView[0].className = animations.show;
            }

            if (direction === "up" || direction === "show") {
                $body.scrollTop(0);
                $("body > div").removeClass("out", "in");
            } else {
                var timer = setTimeout(function() {
                    if (!Implicit.prototype.hasScroll) {$body.scrollTop(0);}
                }, 100);
            }

            $(".up").live("webkitAnimationEnd", function () {
                $("body > div").removeClass("uiPageActive");
                incomingView.addClass("uiPageActive");
            });
            
            $(".slide").live("webkitAnimationEnd", function () {
                incomingView.removeClass("slide");
            });            

            if (Implicit.prototype.hasScroll) {
                adjustScrollableHeight(incomingView);
            }

            Implicit.prototype.currentView = incomingView[0];
            
            logger.debug("viewChange to " + to + ", direction: " + direction + " complete");
            event.fire("view:complete:" + to);
            $body.css("background-color", incomingView.css("background-color"));
        });
        
        touchEvent(".uiPageActive .passwordToggle", function() {
            var $password = $(".uiPageActive input.password");
            var shouldPasswordBeHidden = Implicit.prototype.util.flipToggleSwitch($(this));
            if (shouldPasswordBeHidden) {
                $password[0].setAttribute("type", "password");
            } else {
                $password[0].setAttribute("type", "text");
            }
        });

        function toggleCheckBoxes() {
             var $this = $(this);
             if ($this.hasClass("selected")) {
               $this.removeClass("selected");
               $this.children("input")[0].checked = false;
             } else {
               $this.addClass("selected");
               $this.children("input")[0].checked = true;
             }
         }

         touchEvent("div.groupButton", function(e) {
             toggleCheckBoxes.apply(this, [e]);
         });
    };
    
    var dialog = Implicit.prototype.view.prototype.dialog = new Dialog();
    
    Implicit.prototype.view.prototype.indicator = function (close) {
        if (close === true) {
            $(".toolBar").removeClass("indicator");
        } else {
            $(".toolBar").addClass("indicator");
        }
    };
    
    Implicit.prototype.view.prototype.flickerFixer = function (children) {
        $(children).css({
            "-webkitTransform": "translate3D(0px, 0px, 0px)"
        });
    };
    
    Implicit.prototype.view.prototype.hideMissingAssets = function(selector) {
        $(selector).error(function(e) {
            $(this).addClass("displayNone");
        });   
    };

    Implicit.prototype.view.prototype.manager = {
        init: function (options) {
            this.change(options.initialView, "show");
        },
        
        stack: {
            getDirection : function (id) {
                var element = document.getElementById(id);
                var direction;
                if (element) {
                    direction = element.getAttribute("direction");
                }

                return (direction ? direction : "show");
            },
            clear: function() {
                stackList = [];
                return stackList;
            },
            record: function (id) {
                if ((typeof id !== "string") || (stackList[stackList.length-1] === id)) {
                    return false;
                }
                for (var i = 0; i < stackList.length; i++) {
                    if (stackList[i] === id) {
                        stackList.remove(stackList.length - 2, stackList.length);
                    }
                }
                if (stackList[stackList.length-1] !== id) {
                    stackList.push(id);
                }
            }
        },
        goBack: function(direction) {
            if (dialog.isShowing) {
                dialog.hide();
                return true;
            } else {
                var previousView = stackList[stackList.length - 2];
                if (typeof previousView !== "undefined") {
                    if (typeof direction === "undefined") {
                        direction = getDirection(previousView);
                    }
                    if (direction !== "down") {direction = "left";}
                    this.change(previousView, direction);
                    event.fire("goingBack");
                }
                return previousView;
            }
        },
        change: function (to, direction, dataKey) {
            logger.info("Changing view to: " + to + ", direction: " + direction);
            
            if (dataKey) {
                event.fire("view:" + to, dataKey);
            } else {
                event.fire("view:" + to);
            }

            if (typeof I.view !== "undefined") {
                if (dialog.isShowing) {
                    dialog.hide();
                }
            }
            this.stack.record(to);
            event.fire("viewChange", [direction, to]);    
        },
        prepareChange: function(view, id, urlRefresh) {
            var that = this;
            event.subscribe("view:prep:complete:"+view, function() {                
                that.change(view, "show", id, urlRefresh);                            
            });

            event.fire("view:prep:"+view, id);
        },
        resetOffsets: function() {
            $("body > div[data-offset]:not(div[data-offset='false'])").attr("data-offset", "0");
        }
    };
    
    Implicit.prototype.event = event;
    
    
    window.I = new Implicit();
    
    I.setPlatform();
    
    I.view = new I.view();
    
    

})(this, jQuery, document);
