const controller = new ScrollMagic.Controller();

const introTween = new TimelineMax();

introTween
.fromTo(".scrolldown", 2, {
    opacity: 1
}, {
    opacity: 0,
    ease: Linear.ease
});

for(i=1;i<=5;i++){
    if(i==3) {
        introTween
        .fromTo("#header_text"+i, 2, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Linear.ease
        },"intro");
        introTween.fromTo("#me", 2, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Linear.ease
        },"intro");
        introTween.to("#header_text"+i, 2, {
            opacity: 0,
            ease: Linear.ease
        });

        
    } else {
        introTween
        .fromTo("#header_text"+i, 2, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Linear.ease
        });
        introTween.to("#header_text"+i, 2, {
            opacity: 0,
            ease: Linear.ease
        });
    }

}

const introScene = new ScrollMagic.Scene({
	triggerElement: '.intro',
    triggerHook: 0,
    duration: 7000
})
.setTween(introTween)
// .addIndicators({ name: 'intro'})
.setPin('.intro')
.addTo(controller);

const matchTween = new TimelineMax();

matchTween
.fromTo("#tinder", 2, {
    opacity: 0
}, {
    opacity: 1,
    ease: Linear.ease
});
matchTween.to("#tinder", 2, {
    opacity: 0,
    ease: Linear.ease
});
matchTween.fromTo("#tinder_matched", 2, {
    opacity: 0
}, {
    opacity: 1,
    ease: Linear.ease
},"couple");
matchTween.fromTo("#couple", 2, {
    opacity: 0
}, {
    opacity: 1,
    ease: Linear.ease
},"couple");
matchTween.fromTo("#officialcouple", 2, {
    opacity: 0
}, {
    opacity: 1,
    ease: Linear.ease
});

const matchScene = new ScrollMagic.Scene({
	triggerElement: '.howwemet',
    triggerHook: 0,
    duration: 7000
})
.setTween(matchTween)
// .addIndicators({ name: 'tinder'})
.setPin('.howwemet')
.addTo(controller);

const sportTween = new TimelineMax();

const shuttlecockPath1 = {
    curviness: 1,
	values: [{
		x: 25,
		y: -25
	},{
		x: 50,
		y: -50
    },{
		x: 75,
		y: -75
    },{
		x: 100,
		y: -50
    },{
		x: 125,
		y: -25
    },{
		x: 150,
		y: -0
    }
]
}

const shuttlecockPath2 = {
    curviness: 1,
	values: [{
		x: 150,
		y: -0
    },{
		x: 125,
		y: -25
    },{
		x: 100,
		y: -50
    },{
		x: 75,
		y: -75
    },{
		x: 50,
		y: -50
    },{
		x: 25,
		y: -25
	}
]
}


sportTween
.fromTo(".startsports", 2, {
    opacity: 0
}, {
    opacity: 1,
    ease: Linear.ease
},"sport")
.fromTo("#racquet2", 2, {
    // rotation:0,
    ease: Power2.easeInOut
}, {
    // rotation:35,
    ease: Power1.easeInOut
},"sport")
.fromTo("#shuttlecock", 2, {
    bezier: shuttlecockPath1,
    ease: Power1.easeInOut
}, {
    bezier: shuttlecockPath2,
    ease: Power1.easeInOut
});


const sportScene = new ScrollMagic.Scene({
	triggerElement: '.sportstogether',
    triggerHook: 0,
    duration: 3000
})
.setTween(sportTween)
// .addIndicators({ name: 'sportstogether'})
.setPin('.sportstogether')
.addTo(controller);

const manPath = {
	values: [{
		x: 0,
		y: 0
	},{
		x: 200,
		y: 0
    },{
		x: 300,
		y: 0
    },{
		x: 400,
		y: 0
    }
]
}

const womanPath = {
	values: [{
		x: 0,
		y: 0
	},{
		x: 200,
		y: 0
    },{
		x: 300,
		y: 0
    },{
		x: 400,
		y: 0
    }
]
}

const liveTween = new TimelineMax();


liveTween
.fromTo("#startliving", 2, {
    opacity: 0
}, {
    opacity: 1,
    ease: Linear.ease
},"live");
liveTween
.to("#man", 6, {
    bezier: manPath,
    ease: Power1.easeInOut
},"live")
.from('#woman', 6, {
    bezier: womanPath,
    ease: Power1.easeInOut
},"live");

const liveScene = new ScrollMagic.Scene({
	triggerElement: '.livingtogether',
    triggerHook: 0,
    duration: 4000
})
.setTween(liveTween)
// .addIndicators({ name: 'livingtogether'})
.setPin('.livingtogether')
.addTo(controller);


const planePath = {
	values: [{
		x: 100,
		y: 0
	},{
		x: 200,
		y: 0
    },{
		x: 300,
		y: 0
    },{
		x: 400,
		y: 0
    },{
		x: 500,
		y: 0
    },{
		x: 600,
		y: 0
    },{
		x: 700,
		y: 0
    },{
		x: 800,
		y: 0
    },{
		x: 900,
		y: 0
    },{
		x: 1000,
		y: 0
    },{
		x: 1100,
		y: 0
    },{
		x: 1200,
		y: 0
    },{
		x: 1300,
		y: 0
    },{
		x: window.innerWidth,
		y: 0
    }
]
}

const cloudPath = {
	values: [{
		x: -100,
		y: 0
	},{
		x: -200,
		y: 0
    },{
		x: -300,
		y: 0
    },{
		x: -400,
		y: 0
    },{
		x: -window.innerWidth,
		y: 0
    }
]
}

const divePath = {
	values: [{
		x: 0,
		y: 100
	},{
		x: 0,
		y: 200
    },{
		x: 0,
		y: 300
    },{
		x: 0,
		y: 400
    }
]
}

const stingrayPath = {
	values: [{
		x: 0,
		y: 0
	},{
		x: 100,
		y: 0
    },{
		x: 200,
		y: 0
    },{
		x: 300,
		y: 0
    }
]
}

const divePath2 = {
	values: [{
		x: 0,
		y: 430
	},{
		x: 0,
		y: 460
    },{
		x: 0,
		y: 470
    },{
		x: 0,
		y: 480
    }
]
}

const stingrayPath2 = {
	values: [{
		x: 0,
		y: 0
	},{
		x: 200,
		y: 0
    },{
		x: 300,
		y: 0
    },{
		x: 400,
		y: 0
    }
]
}

const sharkPath2 = {
	values: [{
		x: 0,
		y: 0
	},{
		x: 200,
		y: 0
    },{
		x: 300,
		y: 0
    },{
		x: 400,
		y: 0
    },{
		x: 500,
		y: 0
    },{
		x: 600,
		y: 0
    }
]
}

const paperPath = {
	curviness: 1.25,
	autoRotate: true,
	values: [{
		x: 100,
		y: -20
	},{
		x: 300,
		y: -10
	},{
		x: 500,
		y: 100
	},{
		x: 750,
		y: -100
	},{
		x: 350,
		y: -50
	},{
		x: 600,
		y: 100
	},{
		x: 800,
		y: 0
	},{
		x: window.innerWidth,
		y: -250
	}]
}

var revealElements = document.getElementsByClassName("digit");

const travelTween = new TimelineLite();

travelTween
.to("#plane", 6, {
    bezier: planePath,
    ease: Power1.easeInOut
},"first")
.to('.thailand_clouds', 6, {
    bezier: cloudPath,
    ease: Power1.easeInOut
},"first")
.to(revealElements[0], 1, {
    css: { className:  '+=visible' }},"first+=2")
.to(revealElements[1], 1, {
    css: { className:  '+=visible' }},"first+=2.5")
.to(revealElements[2], 1, {
    css: { className:  '+=visible' }},"first+=3")
.to(revealElements[3], 1, {
    css: { className:  '+=visible' }},"first+=3.5")
.to(revealElements[4], 1, {
    css: { className:  '+=visible' }},"first+=4")
.to(revealElements[5], 1, {
    css: { className:  '+=visible' }},"first+=2")
.to(revealElements[6], 1, {
    css: { className:  '+=visible' }},"first+=2.5")
.to(revealElements[7], 1, {
    css: { className:  '+=visible' }},"first+=3")
.to(revealElements[8], 1, {
    css: { className:  '+=visible' }},"first+=3.5")
.to(revealElements[9], 1, {
    css: { className:  '+=visible' }},"first+=4")
.to(revealElements[10], 1, {
    css: { className:  '+=visible' }},"first+=2")
.to(revealElements[11], 1, {
    css: { className:  '+=visible' }},"first+=2.5")
.to(revealElements[12], 1, {
    css: { className:  '+=visible' }},"first+=3")
.to(revealElements[13], 1, {
    css: { className:  '+=visible' }},"first+=3.5")
.to(revealElements[14], 1, {
    css: { className:  '+=visible' }},"first+=4")

const travelScene = new ScrollMagic.Scene({
	triggerElement: '.traveltogether',
	duration: 5000,
	triggerHook: 0

})
.setTween(travelTween)
// .addIndicators()
.setPin('.traveltogether')
.addTo(controller);


const diveTween = new TimelineLite();

// diveTween
// .to("#tube_dude", 1, {
//     bezier: divePath,
//     ease: Power1.easeInOut
// },"second")
// .to("#stingray", 1, {
//     bezier: stingrayPath,
//     ease: Power1.easeInOut
// },"second")

// const diveScene = new ScrollMagic.Scene({
// 	triggerElement: '.divetogether',
// 	duration: 5000,
//     triggerHook: 0,

// })
// .setTween(diveTween)
// .addIndicators()
// .setPin('.divetogether')
// .addTo(controller);


const diveTween2 = new TimelineMax();

diveTween2
.to("#tube_dude", 1, {
    bezier: divePath2,
    ease: Power1.easeInOut
},"second")
.fromTo(".startdiving", 1, {
    opacity: 0
},{
    opacity: 1,
    ease: Power1.easeInOut
},"second")
.fromTo("#divepicture", 1, {
    opacity: 0
},{
    opacity: 1,
    ease: Power1.easeInOut
},"second")
.to("#stingray", 1, {
    bezier: stingrayPath2,
    ease: Power1.easeInOut
},"second")
.from("#shark2", 1, {
    bezier: sharkPath2,
    ease: Power1.easeInOut
},"second")

const diveScene2 = new ScrollMagic.Scene({
	triggerElement: '#depth1 .container',
	duration: 700,
    triggerHook: 0.3

})
.setTween(diveTween2)
// .addIndicators()
.setPin('.#depth1 .container')
.addTo(controller);

const learnTween = new TimelineMax({
    paused:true
  });

  var i;

  for(i=1;i<=11;i++){
    if(i==1)
        width = "15.18em";
    if(i==2)
        width = "17.18em";
    if(i==3)
        width = "20.18em";
    if(i==4)
        width = "32.18em";
    if(i==5)
        width = "31.18em";
    if(i==6)
        width = "8.18em";
    if(i==7)
        width = "16.18em";
    if(i==8)
        width = "23.18em";
    if(i==9)
        width = "19.18em";
    if(i==10)
        width = "19.18em";
    if(i==11)
        width = "25.18em";

    learnTween
        .fromTo("#macbookpro_content"+i, 2, {
            "border-right": "2px solid rgba(255,255,255,0)",
            width: "0",
        }, {
            width: width, /* same as CSS .line-1 width */
            ease: SteppedEase.config(37)
        })
        // text cursor animation
    learnTween
        .fromTo("#macbookpro_content"+i, 0.5, {
            "border-right-color": i==1 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0)",
        }, {
            "border-right-color": i==1 ? "rgba(255,255,255,0)" : "rgba(255,255,255,0.75)",
            repeat: i==11 ? -1 : 1,
            onComplete: function(i){
                document.getElementById("macbookpro_content"+i).style.removeProperty('border-right');
            },
            onCompleteParams:[i],
            ease: SteppedEase.config(37)
        });
  }

const learnScene = new ScrollMagic.Scene({
	triggerElement: '.learntogether',
    triggerHook: 0,
    reverse: false

})
.setTween(learnTween)
// .addIndicators({ name: 'loop'})
// .setPin('.learntogether')
.addTo(controller);

const growoldTween = new TimelineMax();

growoldTween
    .fromTo("#growoldtogether", 2, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Linear.ease
    })
    .fromTo("#oldcouple_text1", 2, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Linear.ease
    })
    .fromTo("#oldcouple", 2, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Linear.ease
    },"together")
    .fromTo("#growoldtogether", 2, {
        opacity: 1
    }, {
        opacity: 0,
        ease: Linear.ease
    },"together")
    .fromTo("#oldcouple_text2", 2, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Linear.ease
    })

const growoldScene = new ScrollMagic.Scene({
	triggerElement: '.growoldtogether',
    triggerHook: 0,
    duration: 5000
})
.setTween(growoldTween)
// .addIndicators({ name: 'growold'})
.setPin('.growoldtogether')
.addTo(controller);


const selfinterTween = new TimelineMax();

for(i=1;i<=8;i++){
    if(i==8){
        selfinterTween
        .fromTo("#selfinterpretation"+i, 2, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Linear.ease
        },"yesido");
    } else {
        selfinterTween
        .fromTo("#selfinterpretation"+i, 2, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Linear.ease
        });
    }

    if(i!=8) {
        selfinterTween.to("#selfinterpretation"+i, 2, {
            opacity: 0,
            ease: Linear.ease
        });
    }
    
    
}

selfinterTween
    .fromTo("#yesido", 2, {
        opacity: 0
    }, {
        opacity: 1,
        ease: Linear.ease
    },"yesido");

const selfinterScene = new ScrollMagic.Scene({
	triggerElement: '.selfinterpretation',
    triggerHook: 0,
    duration: 7000
})
.setTween(selfinterTween)
// .addIndicators({ name: 'selfinter'})
.setPin('.selfinterpretation')
.addTo(controller);

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#yesido')) return;

	// Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
    console.log(event.target);
    initDrawingCanvas();
    requestAnimationFrame(loop);

}, false);

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI * 0.5;

// canvas settings
var viewWidth = window.innerWidth,
    viewHeight = window.innerWidth+100,
    drawingCanvas = document.getElementById("drawing_canvas"),
    ctx,
    timeStep = (1/60);

Point = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

Particle = function(p0, p1, p2, p3) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;

    this.time = 0;
    this.duration = 3 + Math.random() * 2;
    this.color =  '#' + Math.floor((Math.random() * 0xffffff)).toString(16);

    this.w = 8;
    this.h = 6;

    this.complete = false;
};

Particle.prototype = {
    update:function() {
        this.time = Math.min(this.duration, this.time + timeStep);

        var f = Ease.outCubic(this.time, 0, 1, this.duration);
        var p = cubeBezier(this.p0, this.p1, this.p2, this.p3, f);

        var dx = p.x - this.x;
        var dy = p.y - this.y;

        this.r =  Math.atan2(dy, dx) + HALF_PI;
        this.sy = Math.sin(Math.PI * f * 10);
        this.x = p.x;
        this.y = p.y;

        this.complete = this.time === this.duration;
    },
    draw:function() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.r);
        ctx.scale(1, this.sy);

        ctx.fillStyle = this.color;
        ctx.fillRect(-this.w * 0.5, -this.h * 0.5, this.w, this.h);

        ctx.restore();
    }
};

Loader = function(x, y) {
    this.x = x;
    this.y = y;

    this.r = 24;
    this._progress = 0;

    this.complete = false;
};

Loader.prototype = {
    reset:function() {
        this._progress = 0;
        this.complete = false;
    },
    set progress(p) {
        this._progress = p < 0 ? 0 : (p > 1 ? 1 : p);

        this.complete = this._progress === 1;
    },
    get progress() {
        return this._progress;
    },
    draw:function() {
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, -HALF_PI, TWO_PI * this._progress - HALF_PI);
        ctx.lineTo(this.x, this.y);
        ctx.closePath();
        ctx.fill();
    }
};

// pun intended
Exploader = function(x, y) {
    this.x = x;
    this.y = y;

    this.startRadius = 24;

    this.time = 0;
    this.duration = 0.4;
    this.progress = 0;

    this.complete = false;
};

Exploader.prototype = {
    reset:function() {
        this.time = 0;
        this.progress = 0;
        this.complete = false;
    },
    update:function() {
        this.time = Math.min(this.duration, this.time + timeStep);
        this.progress = Ease.inBack(this.time, 0, 1, this.duration);

        this.complete = this.time === this.duration;
    },
    draw:function() {
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.startRadius * (1 - this.progress), 0, TWO_PI);
        ctx.fill();
    }
};

var particles = [],
    loader,
    exploader,
    phase = 0;

function initDrawingCanvas() {
    drawingCanvas.style.display = 'block';
    drawingCanvas.width = viewWidth;
    drawingCanvas.height = viewHeight;
    ctx = drawingCanvas.getContext('2d');

    createLoader();
    createExploader();
    createParticles();
}

function createLoader() {
    loader = new Loader(viewWidth * 0.5, viewHeight * 0.5);
}

function createExploader() {
    exploader = new Exploader(viewWidth * 0.5, viewHeight * 0.5);
}

function createParticles() {
    for (var i = 0; i < 128; i++) {
        var p0 = new Point(viewWidth * 0.5, viewHeight * 0.5);
        var p1 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
        var p2 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
        var p3 = new Point(Math.random() * viewWidth, viewHeight + 64);

        particles.push(new Particle(p0, p1, p2, p3));
    }
}

function update() {

    switch (phase) {
        case 0:
            loader.progress += (1/45);
            break;
        case 1:
            exploader.update();
            break;
        case 2:
            particles.forEach(function(p) {
                p.update();
            });
            break;
    }
}

function draw() {
    ctx.clearRect(0, 0, viewWidth, viewHeight);

    switch (phase) {
        case 0:
            // loader.draw();
            break;
        case 1:
            exploader.draw();
            break;
        case 2:
            particles.forEach(function(p) {
                p.draw();
            });
        break;
    }
}

function loop() {
    update();
    draw();

    if (phase === 0 && loader.complete) {
        phase = 1;
    }
    else if (phase === 1 && exploader.complete) {
        phase = 2;
    }
    else if (phase === 2 && checkParticlesComplete()) {
        // reset
        phase = 0;
        loader.reset();
        exploader.reset();
        particles.length = 0;
        createParticles();
    }

    requestAnimationFrame(loop);
}

function checkParticlesComplete() {
    for (var i = 0; i < particles.length; i++) {
        if (particles[i].complete === false) return false;
    }
    return true;
}

// math and stuff

/**
 * easing equations from http://gizma.com/easing/
 * t = current time
 * b = start value
 * c = delta value
 * d = duration
 */
var Ease = {
    inCubic:function (t, b, c, d) {
        t /= d;
        return c*t*t*t + b;
    },
    outCubic:function(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t + 1) + b;
    },
    inOutCubic:function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    },
    inBack: function (t, b, c, d, s) {
        s = s || 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    }
};

function cubeBezier(p0, c0, c1, p1, t) {
    var p = new Point();
    var nt = (1 - t);

    p.x = nt * nt * nt * p0.x + 3 * nt * nt * t * c0.x + 3 * nt * t * t * c1.x + t * t * t * p1.x;
    p.y = nt * nt * nt * p0.y + 3 * nt * nt * t * c0.y + 3 * nt * t * t * c1.y + t * t * t * p1.y;

    return p;
}
// const scene2 = new ScrollMagic.Scene({
// 	triggerElement: '.thailand_clouds',
// 	duration: 5000,
// 	triggerHook: 0

// })
// .setTween(tween)
// .addIndicators()
// .setPin('.thailand_clouds')
// .addTo(controller);
