(function ($, undefined) {
    var hasTouch = function() {
        return window.TouchEvent && !( /chrome/.test(navigator.userAgent.toLowerCase()));
    };
    
    var CLICK = window.CLICK = "touchstart";
    MOUSEUP = window.MOUSEUP = (hasTouch() ? "touchend" : "mouseup");
    
    window.touchState = {
        "lastEvent": '',
        "touchHash": ''
    };
    
    window.scrollState = {
        "isScrolling": false,
        "wasScrolling": false,
        "lastYOffset": 0,
        "scrollCheck": function() {
            var tS = window.touchState;
            if (this.lastYOffset !== window.pageYOffset && tS.lastEvent !== 'touchend' && tS.lastEvent !== '' && tS.lastEvent !== 'scroll') {
                this.lastYOffset = window.pageYOffset;
                this.isScrolling = true;
                tS.lastEvent = 'scroll';
                ++this.wasScrolling;
            } else {
                this.isScrolling = false;
            }
        }
    };
    
    window.triggerTouchEvent = function(element) {
        var $element = $(element);
        if (hasTouch()) {
            var fakeTouches = {
                "originalEvent": {
                    "touches": [
                        {
                            "screenY": 100
                        }
                    ]
                }
            };
            $element.trigger("touchstart", [fakeTouches]);
            setTimeout(function () {
                window.scrollState.isScrolling = false;
                $element.trigger("touchend");
            }, 50);
        } else {
            $element.click();
        }
    };
    
    window.touchEvent = function(element, actionTouch, actionLongPress, shouldPrevent) {
        var moveThreshold = 25;
        var userAgent = navigator.userAgent.toLowerCase();
        var logger = window.console ? console : {'info': function() {}};
        
        function isDefault($element) {
            return ($element.hasClass("default") && typeof shouldPrevent === "undefined") || shouldPrevent === false;
        }
        
        $element = $(element);
        touchEvent.elementBounds = touchEvent.elementBounds || {};
        touchEvent.elements = touchEvent.elements || {};
        if (touchEvent.elements[element]) {
            $element.die();
        }
        
        var getElementBounds = function($element, elemPos) {
            var elemBounds;
            var boundsPadding = 25;
            if ($element.attr('data-bounds-hash')) {
                elemBounds = touchEvent.elementBounds[$element.attr('data-bounds-hash')];
            } else {
                var elemSize = {"width": $element.outerWidth(), "height": $element.outerHeight()};
                var hash = 1 * (new Date().getTime() + '' + (Math.random() * 100000000));
                elemBounds = {
                    "top": elemPos.top - boundsPadding,
                    "right": elemPos.left + parseInt(elemSize.width, 10) + boundsPadding,
                    "bottom": elemPos.top + parseInt(elemSize.height, 10) + boundsPadding,
                    "left": elemPos.left - boundsPadding
                };
                $element.attr('data-bounds-hash', hash);
                touchEvent.elementBounds[hash] = elemBounds;
            }
            return elemBounds;
        };
        
        var isElementNearTouch = function($element, elemPos) {
            var elemBounds = getElementBounds($element, elemPos);
            //var startY2 = (startY - window.pageYOffset);
            var startY2 = (startY - 0);
            var elementNearTouch = startX >= elemBounds.left && startX <= elemBounds.right && startY2 >= elemBounds.top && startY2 <= elemBounds.bottom;
            logger.info($element[0].outerHTML + ' = ' + elementNearTouch + '\n' + window.pageYOffset + ' = ' + $element.scrollTop() + '\n' + startX + ' >= ' + elemBounds.left + ' && ' + startX + ' <= ' + elemBounds.right + ' && ' + startY2 + ' >= ' + elemBounds.top + ' && ' + startY2 + ' <= ' + elemBounds.bottom);
            return elementNearTouch;
        };
            
        var highlightThis = function($this) {
            var highlightTimeout = 250;
            $this.not(".noHighlight").addClass("highlighted");
            
            var highlightTimer = setTimeout(function() {
                $this.removeClass("highlighted");
            }, highlightTimeout);
        };
        
        if (!hasTouch() && typeof forceTouch === 'undefined') {
            // If we don't have touch capabilities, default to a regular click binding, add temporary highlighting, prevent default, and apply the action.
            $element.live("click", function(e) {
                var $this = $(this);
                highlightThis($this);
                if (isDefault($this)) {
                    return true;
                } else {
                    e.preventDefault();
                    actionTouch.call(this, e);
                    return false;
                }
            });
        } else {
            var tS = window.touchState;
            var sS = window.scrollState;
            var startX = 0,
                startY = 0,
                yMove = 0,
                longPressTimeout = 1000;
            
            var shouldBustEvent = function(event, touchedElement, hasDefault) {
                if (event.type === 'click' && (tS.lastEvent === 'touchend' || tS.lastEvent === 'longpress') && !hasDefault) {
                    return true;
                }
                if (tS.lastEvent === 'longpress') {
                    return true;
                }
                if (event.type === 'touchend' && tS.lastEvent === 'scroll') {
                    return true;
                }
                if (sS.isScrolling || sS.wasScrolling) {
                    return true;
                }
                if (event.type === 'touchend' && hasDefault) {
                    return true;
                }
                // And the final magic, if the item we are triggering (most likely a click), doesn't have the same data-touch-hash (microtime guid) as the one from touchstart
                var hashMatches = tS.touchHash === 1 * (touchedElement.attr('data-touch-hash'));
                if (!hasDefault && !hashMatches) {
                    return true;
                }
                if (hasDefault && event.type === 'click' && (tS.lastEvent === 'touchend' || tS.lastEvent === 'longpress') && !hashMatches) {
                    return true;
                }
                return false;
            };
            
            var onTouchMove = function(e) {
                if (arguments.length > 1) {
                    e = arguments[1];
                }
                // As a touch moves, keep track of where it is relative to the screen
                yMove = e.originalEvent.touches[0].screenY;
                
                // If the difference between the starting Y position relative to the screen and the current Y position relative to the screen is greater than the threshold, set the window.touchState.lastEvent to 'scroll'
                if (Math.abs(yMove - startY) > moveThreshold) {
                    tS.lastEvent = 'scroll';
                }
            };
            var onTouchStart = function(e) {
                if (arguments.length > 1) {
                    e = arguments[1];
                }
                var that = this;
                // As soon as we start a touch, set window.touchState.lastEvent to touchstart
                window.touchState.lastEvent = 'touchstart';
                    
                // Start a 1 second timer for the longPress function
                longPressTimer = setTimeout(function () {
                    // If we are still holding after a second, and the last event was a touchstart or a close enough touch move, trigger the longpress callback
                    if (typeof actionLongPress !== 'undefined' && (tS.lastEvent === 'touchstart' || (tS.lastEvent === 'touchmove' && Math.abs(yMove - startY) <= moveThreshold))) {
                        highlightThis($(that));
                        
                        // Set the lastEvent to longpress so that we can handle the rest of the function
                        tS.lastEvent = 'longpress';
                        
                        actionLongPress.call(that, e);
                    }
                }, longPressTimeout);
                
                
                // This little piece of magic generates and stores a microtime guid of the item that you touched so that when the event ends, either touchend or click, it can check the item that receives the final event to see it if matched the original. If not, it gets busted.
                $(this).attr('data-touch-hash', tS.touchHash = 1 * (new Date().getTime()));
                
                // Set the start Y variable, which is the position relative to the screen.
                startX = e.originalEvent.touches[0].screenX;
                startY = e.originalEvent.touches[0].screenY;
            };
            var onClick = function(e) {
                e.stopPropagation();
                var $this = $(this);
                var hasDefault = isDefault($this);
                // If a touchend just fired, and the last event wasn't scroll, set lastEvent to touchend
                if (e.type === 'touchend' && tS.lastEvent !== 'scroll' && tS.lastEvent !== 'longpress') {
                    tS.lastEvent = 'touchend';
                }
                // Should we bust this event?
                var bustEvent = shouldBustEvent(e, $this, hasDefault);
                
                // This is a handy alert to see what you tapped, what the event was, what classes it has, if it matched the bust criteria, and the innerHTML. Uncomment the alerts in the three sections below to troubleshoot as needed.
                var debug_text = 'this event: ' + e.type + '\nscroll offset y (last, this): (' + startY + ', ' + window.pageYOffset + ')\nis scrolling? ' + sS.isScrolling + '\nwas scrolling? ' + sS.wasScrolling + '\nlast event: ' + tS.lastEvent + '\nclassName: ' + this.className + '\nBust: ' + bustEvent + '\ntS.touchHash: ' + tS.touchHash + '\nattr(data-touch-hash): ' + $this.attr('data-touch-hash') + '\n' + this.innerHTML;
                if (!bustEvent || (sS.wasScrolling && !sS.isScrolling)) {
                    sS.lastYOffset = 0;
                    sS.isScrolling = false;
                    sS.wasScrolling = false;
                }
                // If we need to bust this event, prevent the default, clear the lastEvent, and return true.
                if (bustEvent) {
                    logger.info('Event: Busted\n' + debug_text);
                    e.preventDefault();
                    if (e.type === 'click') {
                        tS.lastEvent = '';
                        tS.touchHash = '';
                    }
                    return true;
                
                // If we don't have to bust this event, and it doesn't have a class of default, then we keep going...
                } else if (!hasDefault) {
                    logger.info('Event: Not Busted & Not .default\n' + debug_text);
                    e.preventDefault();
                    
                    // Temporarily disable any inputs on the page in order to fix an odd ghost event that keeps triggering them... not click.
                    if ($('#post-touch-shield').css('display') !== 'block') {
                        $('#post-touch-shield').css('display', 'block');
                        var preBuster = setTimeout(function() {
                            $('#post-touch-shield').css('display', 'none');
                        }, 400);
                    }
                    
                    var $inputs = $('select:not(.default):not(.bustMeNot), input:not(.default):not(.bustMeNot)');
                    $inputs.each(function(inputIndex, inputElement) {
                        if (inputElement.offsetTop > 0 || true) {
                            var $inputElement = $(inputElement);
                            var elemPos = $inputElement.offset();
                            if (elemPos.top === 0 || isElementNearTouch($inputElement, elemPos)) {
                                $inputElement.prop("disabled", true);
                                var preBuster = setTimeout(function() {
                                    $inputElement.prop("disabled", false);
                                    if (inputElement.tagName === 'SELECT') {
                                        var preBuster = setTimeout(function() {
                                            $('#select-activator').trigger('touchstart');
                                        }, 50);
                                    }
                                }, 400);
                            }
                        }
                    });
                    
                    var that = this;
                    highlightThis($this);
                    
                    // Apply the action to this (that), the element we touched, after 10ms so that the highlight has time to display
                    var highlightWait = setTimeout(function () {
                        actionTouch.call(that, e);
                    }, 10);
                    return false;
                
                // If we don't have to bust the event, and it does have a class of default, just return true and it should trigger the default behavior.
                } else {
                    logger.info('Event: Not Busted & Has .default\n' + debug_text);
                    highlightThis($this);
                    return true;
                }
            };
            
            $element.live({
                'touchmove': onTouchMove,
                'touchstart': onTouchStart,
                'touchend': onClick,
                'click': onClick
            });
        }
        
        touchEvent.elements[element] = actionTouch;
    };
    $(window).bind('scroll', window.scrollState.scrollCheck);
    if ($('#post-touch-shield').length === 0) {
        $('body').append('<div id="post-touch-shield" style="top: 0px; left: 0px; visibility: visible; display: none; position: absolute; z-index: 9999999; width: ' + window.innerWidth + 'px; height: ' + window.innerHeight + 'px; background-color: #FFFFFF; opacity: 0.0;"></div>');
        $('body').append('<div id="select-activator" style="top: 0px; left: 0px; visibility: visible; display: block; position: absolute; z-index: 8888888; width: 10px; height: 10px; background-color: #FFFFFF; opacity: 0.0;">&nbsp;</div>');
        $('#select-activator').bind('touchstart', function (e) {
            var that = this;
            setTimeout(function () {
                that.style.display = 'none';
                setTimeout(function () {
                    that.style.display = 'block';
                }, 100);
            }, 100);
        });
    }
    // Associate all items with a class of default with the touchEvent handler so that we can capture and bust them.
    touchEvent(".default", function() {});
})(jQuery);
