//        *://*/*
if(window.location.href.includes('web.telegram.org')){	  
    setInterval(function(){
    try{
        if(document.getElementsByTagName("iframe")[0].src.includes('tg-game.bccoin')){
            window.location.href = document.getElementsByTagName("iframe")[0].src;
        }
        if(document.getElementsByTagName("iframe")[0].src.includes('binance.com')){
            window.location.href = document.getElementsByTagName("iframe")[0].src;
        }
    }catch{
        
    }
    },1000);
}

if(window.location.href.includes('https://www.binance.com/en/game/tg/moon-bix')){
	debugger
	let updatedHref = window.location.href.replace('https://www.binance.com/en/game/tg/moon-bix', 
																			'https://www.binance.com/vi/game/tg/moon-bix');
  window.location.href = updatedHref;
}

if(window.location.href.includes('https://www.binance.com/vi/game/tg/moon-bix')){
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[n] = "af93d7d4-79c0-5dc7-aae9-2df13ecf0376")
    } catch (e) {}
}();
(self.webpackChunkgrowth_game_ui = self.webpackChunkgrowth_game_ui || []).push([[1504], {
    J5u7: (t, e, i) => {
        "use strict";
        i.d(e, {
            x: () => o
        });
        var s = i("HX/w")
          , n = i("yQTX")
          , a = i("Luap");
        function o(t) {
            var e;
            if ("undefined" !== typeof window) {
                (0,
                s.M9)("lang", t, 365, !0, "High"),
                (0,
                s.M9)("language", t, 180, !1);
                var i = new URL(window.location.href)
                  , o = null === (e = i.pathname.match(n.s)) || void 0 === e ? void 0 : e[1];
                o && (0,
                a.f)(o) && (i.pathname = i.pathname.replace(n.s, "")),
                i.searchParams.delete("hl"),
                window.location.href = i.href
            }
        }
    }
    ,
    UV0w: (t, e, i) => {
        "use strict";
        i.r(e),
        i.d(e, {
            default: () => V
        });
        var s = i("sViW")
          , n = i("BK7R")
          , a = i("QUKP")
          , o = i("gZfF")
          , r = i("VP0d")
          , h = i("0GOp")
          , l = i.n(h)
          , d = i("TrCV")
          , c = i("DTvD")
          , u = i.n(c)
          , m = i("JfTh")
          , f = i("5htd")
          , p = i("elZI")
          , g = i("wIZF")
          , v = i("Y4uf");
        const y = function(t) {
            return u().createElement(v.A, (0,
            g.__assign)({
                viewBox: "0 0 24 24",
                fill: "none"
            }, t), u().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 21l-5-5H3V8h4l5-5v18zm9.015-9a9.968 9.968 0 01-2.93 7.072l-1.767-1.768a7.477 7.477 0 002.197-5.303c0-2.071-.84-3.946-2.197-5.304l1.768-1.767A9.969 9.969 0 0121.015 12z",
                fill: "currentColor"
            }), u().createElement("path", {
                d: "M15.535 15.536A4.984 4.984 0 0017 12c0-1.38-.56-2.63-1.465-3.535l-1.767 1.768c.452.452.732 1.077.732 1.767s-.28 1.316-.732 1.768l1.767 1.768z",
                fill: "currentColor"
            }))
        };
        const x = function(t) {
            return u().createElement(v.A, (0,
            g.__assign)({
                viewBox: "0 0 24 24",
                fill: "none"
            }, t), u().createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 21l-5-5H3V8h4l5-5v18zm1.702-6.702L16 12l-2.298-2.298 1.768-1.767 2.298 2.297 2.298-2.298L21.834 9.7 19.535 12l2.299 2.299-1.768 1.767-2.298-2.298-2.298 2.297-1.768-1.767z",
                fill: "currentColor"
            }))
        };
        var A = i("Lp65")
          , k = i("5G5+")
          , w = i("eeEA")
          , S = i("6h1A")
          , E = i("kYnA")
          , L = i("7tD2")
          , M = i("BejE")
          , T = i("Smuz")
          , b = i("1Mr6")
          , D = i("uqCI")
          , P = i("888e")
          , O = i("nG1z")
          , R = i("ezuS")
          , C = i("2PCm")
          , G = i("4Y6J")
          , _ = i("b9+J")
          , I = {
            REWARD: {
                t: 1,
                img: "item-token"
            },
            TRAP: {
                t: 0,
                img: "item-planet"
            },
            BONUS: {
                t: 2,
                img: "item-bonus",
                tweenSetting: {
                    y: {
                        getEnd: function(t) {
                            return t.y - 5
                        }
                    },
                    duration: 750,
                    ease: "Sine.easeInOut",
                    yoyo: !0,
                    repeat: -1
                }
            }
        }
          , N = 300
          , j = function(t) {
            return Math.random() * (t || 1)
        }
          , B = function(t, e) {
            return [Math.floor(j(t - 100) + 50), Math.floor(j(e - 300 - 100) + 300 + 50)]
        };
        const H = function(t) {
            (0,
            C.A)(i, t);
            var e = (0,
            G.A)(i);
            function i() {
                var t;
                return (0,
                P.A)(this, i),
                t = e.call(this, "game"),
                (0,
                R.A)((0,
                D.A)(t), "swipeSpeed", N),
                (0,
                R.A)((0,
                D.A)(t), "swipeSpeedLate", N),
                (0,
                R.A)((0,
                D.A)(t), "stickOffsetX", 0),
                (0,
                R.A)((0,
                D.A)(t), "stickOffsetY", 0),
                (0,
                R.A)((0,
                D.A)(t), "isPlaying", !1),
                (0,
                R.A)((0,
                D.A)(t), "isAiming", !1),
                (0,
                R.A)((0,
                D.A)(t), "isFiring", !1),
                (0,
                R.A)((0,
                D.A)(t), "isPulling", !1),
                (0,
                R.A)((0,
                D.A)(t), "swipeMovement", null),
                (0,
                R.A)((0,
                D.A)(t), "playerMovement", []),
                (0,
                R.A)((0,
                D.A)(t), "selectedItem", null),
                (0,
                R.A)((0,
                D.A)(t), "colliders", []),
                (0,
                R.A)((0,
                D.A)(t), "hook", null),
                (0,
                R.A)((0,
                D.A)(t), "hookBody", null),
                (0,
                R.A)((0,
                D.A)(t), "stick", null),
                (0,
                R.A)((0,
                D.A)(t), "timeLeft", 0),
                (0,
                R.A)((0,
                D.A)(t), "timeLeftSec", 0),
                (0,
                R.A)((0,
                D.A)(t), "score", 0),
                (0,
                R.A)((0,
                D.A)(t), "data", []),
                (0,
                R.A)((0,
                D.A)(t), "firingPosition", null),
                (0,
                R.A)((0,
                D.A)(t), "currentItem", null),
                (0,
                R.A)((0,
                D.A)(t), "twinklingStar", null),
                (0,
                R.A)((0,
                D.A)(t), "bgm", null),
                (0,
                R.A)((0,
                D.A)(t), "sfxClaim", null),
                (0,
                R.A)((0,
                D.A)(t), "sfxDrag", null),
                (0,
                R.A)((0,
                D.A)(t), "sfxFire", null),
                (0,
                R.A)((0,
                D.A)(t), "sfxGameOver", null),
                (0,
                R.A)((0,
                D.A)(t), "sfxHitItem", null),
                (0,
                R.A)((0,
                D.A)(t), "sfxHitTrap", null),
                (0,
                R.A)((0,
                D.A)(t), "sfxTimeRunningOut", null),
                (0,
                R.A)((0,
                D.A)(t), "isLate", !1),
                t
            }
            return (0,
            O.A)(i, [{
                key: "preload",
                value: function() {
                    var t = this;
                    this.game.events.on("TOGGLE_SOUND", (function(e) {
                        t.sys.sound.setMute(!e)
                    }
                    )),
                    this.load.crossOrigin = "anonymous",
                    this.load.setBaseURL("".concat(_.CA, "/game-assets")),
                    this.load.image("astronaut", "spaceship.png"),
                    this.load.image("item-planet", "item-planet.png"),
                    this.load.image("item-token", "item-token.png"),
                    this.load.image("item-bonus", "item-bonus.png"),
                    this.load.image("start-twinkle", "start-twinkle.png"),
                    this.load.spritesheet("hook", "hook.png", {
                        frameWidth: 204,
                        frameHeight: 185
                    }),
                    this.load.audio("bgm", "sound/bgm.mp3"),
                    this.load.audio("sfx-claim", "sound/sfx-claim.mp3"),
                    this.load.audio("sfx-drag", "sound/sfx-drag.mp3"),
                    this.load.audio("sfx-fire", "sound/sfx-fire.mp3"),
                    this.load.audio("sfx-gameover", "sound/sfx-gameover.mp3"),
                    this.load.audio("sfx-hititem", "sound/sfx-hititem.mp3"),
                    this.load.audio("sfx-hittrap", "sound/sfx-hittrap.mp3"),
                    this.load.audio("sfx-timerunningout", "sound/sfx-timerunningout.mp3"),
                    this.load.on("progress", (function(e) {
                        t.game.events.emit("LOAD_PROGRESS", e)
                    }
                    )),
                    this.load.on("complete", (function() {
                        t.game.events.emit("LOAD_COMPLETE")
                    }
                    ))
                }
            }, {
                key: "create",
                value: function() {
                    var t = this
                      , e = this.game.config
                      , i = e.width
                      , s = e.height
                      , o = this.game.config.customData;
                    this.swipeSpeed = o.hookSwipeSpeed,
                    this.swipeSpeedLate = o.finalHookSwipeSpeed,
                    this.walls = this.add.group(),
                    this.walls.add(this.physics.add.existing(this.add.rectangle(0, s / 2, 1, s), !0)),
                    this.walls.add(this.physics.add.existing(this.add.rectangle(i, s / 2, 1, s), !0)),
                    this.walls.add(this.physics.add.existing(this.add.rectangle(i / 2, 0, i, 1), !0)),
                    this.walls.add(this.physics.add.existing(this.add.rectangle(i / 2, s, i, 1), !0)),
                    this.items = this.add.group(),
                    o.itemSettingList.forEach((function(e) {
                        var n = e.type
                          , a = e.speed
                          , o = e.size;
                        e.rewardValueList.forEach((function(e) {
                            var r = B(i, s)
                              , h = I[n]
                              , l = t.add.image(r[0], r[1], h.img);
                            l.speed = a,
                            l.pts = e,
                            l.type = n,
                            l.size = o,
                            l.tweenSetting = h.tweenSetting,
                            l.setDisplaySize(o, o),
                            l.setDepth(3);
                            for (var d = t.physics.add.existing(l), c = 30; c > 0 && t.items.children.entries.some((function(e) {
                                return t.physics.world.intersects(d.body, e.body)
                            }
                            )); ) {
                                var u = B(i, s);
                                d.setPosition(u[0], u[1]),
                                d.body.updateFromGameObject(),
                                c--
                            }
                            t.items.add(d)
                        }
                        ))
                    }
                    )),
                    this.items.children.entries.forEach((function(e) {
                        var i = .1 * e.width;
                        if (e.body.setCircle(e.width / 2 - i, i, i),
                        e.tweenSetting) {
                            var s = t.tweens.add((0,
                            a.A)((0,
                            n.A)({
                                targets: e
                            }, e.tweenSetting), {
                                delay: j(e.tweenSetting.duration)
                            }));
                            e.tween = s
                        }
                    }
                    )),
                    this.player = this.add.image(i / 2, 100, "astronaut"),
                    this.player.setDepth(2),
                    this.player.displayWidth = 100,
                    this.player.scaleY = this.player.scaleX,
                    this.stickOffsetX = 57 - this.player.displayWidth / 2,
                    this.stickOffsetY = 82 - this.player.displayHeight / 2,
                    this.stick = this.add.line(this.player.x + this.stickOffsetX, this.player.y + this.stickOffsetY, 0, 0, 0, 20, 16777215).setOrigin(0, 0).setDepth(3).setLineWidth(3),
                    this.hook = this.add.image(this.stick.x, this.stick.y + this.stick.height, "hook").setDepth(4).setOrigin(.5, 0),
                    this.hook.setDisplaySize(40, 35),
                    this.playerMovement.push(this.tweens.add({
                        targets: this.player,
                        y: {
                            from: 105,
                            to: 100
                        },
                        duration: 750,
                        ease: "Sine.easeInOut",
                        yoyo: !0,
                        repeat: -1,
                        paused: !0
                    })),
                    this.swipeMovement = this.tweens.add({
                        targets: this.stick,
                        angle: {
                            from: -60,
                            to: 60
                        },
                        duration: 1500,
                        ease: "Sine.easeInOut",
                        yoyo: !0,
                        repeat: -1,
                        paused: !0
                    }),
                    this.swipeMovement.setTimeScale(this.swipeSpeed / N),
                    this.playerMovement.push(this.swipeMovement),
                    this.prestartGame()
                }
            }, {
                key: "prestartGame",
                value: function() {
                    var t, e = this;
                    this.sys.sound.setVolume(.3),
                    this.bgm = this.sound.add("bgm", {
                        loop: !0
                    }),
                    this.bgm.play(),
                    this.playerMovement.forEach((function(t) {
                        return t.play()
                    }
                    )),
                    this.isAiming = !0,
                    (null === (t = this.game.config.customData) || void 0 === t ? void 0 : t.autoStart) ? this.startGame() : this.input.once("pointerdown", (function() {
                        e.startGame()
                    }
                    ))
                }
            }, {
                key: "startGame",
                value: function() {
					console.log("Đây là phiên bản của tôi thay vì hàm gốc.");
                    var t;
                    this.game.events.emit("GAME_START"),
                    this.input.on("pointerdown", this.fireHook, this),
                    this.startTime = Date.now();
                    var e = Math.min(null === (t = this.game.config.customData) || void 0 === t ? void 0 : t.gameDuration, 45);
                    this.gameDuration = 1e3 * e,
                    this.timeLeft = this.gameDuration,
                    this.timeLeftSec = e,
                    this.score = 0,
                    this.data = [],
                    this.firingPosition = null,
                    this.game.events.emit("UPDATE_TIMELEFT", this.timeLeftSec),
                    this.game.events.emit("UPDATE_SCORE", this.score),
                    this.isPlaying = !0,
                    this.sfxClaim = this.sound.add("sfx-claim"),
                    this.sfxDrag = this.sound.add("sfx-drag", {
                        loop: !0
                    }),
                    this.sfxFire = this.sound.add("sfx-fire"),
                    this.sfxGameOver = this.sound.add("sfx-gameover"),
                    this.sfxHitItem = this.sound.add("sfx-hititem"),
                    this.sfxHitTrap = this.sound.add("sfx-hittrap"),
                    this.sfxTimeRunningOut = this.sound.add("sfx-timerunningout", {
                        loop: !0
                    });
                    //lambte
                    window.pAuto = setInterval(function(maingame){
                        try{
                            maingame.fireHook();
                        }catch{

                        }
                    },500,this)
                }
            }, 
			{
				key: "fireHook",
				value: function() {
					var t = this;
					if (this.isPlaying && this.isAiming && !this.isFiring && !this.isPulling) {
						this.isFiring = !0;
						this.isAiming = !1;
						this.playerMovement.forEach((function(t) {
							return t.pause();
						}));

						// Lấy vị trí hiện tại của móc kéo
						var hookX = this.hook.x;
						var hookY = this.hook.y;

						// Tìm vật phẩm gần nhất (hoặc có thể là vật phẩm mục tiêu cụ thể)
						var closestItem = null;
						var minDistance = Number.MAX_VALUE;

						this.items.children.iterate(function(item) {
							var distance = Phaser.Math.Distance.Between(hookX, hookY, item.x, item.y);
							if (distance < minDistance) {
								minDistance = distance;
								closestItem = item;
							}
						});
						
						if(this.items.children.entries.length == 1){
							this.isFiring = false
							this.isPlaying = true
							this.isAiming = true
							this.isPulling = false
							return 
						}
						this.autoGift = false

						// Nếu có vật phẩm để nhắm tới
						if (closestItem) {
							this.closestItem = closestItem;
							if(this.consecutive == 0 || isNaN(this.consecutive)){
								this.consecutive = 1;
							}
							else{
								this.consecutive = this.consecutive + 1;
							}
							
							var n = { x: targetX, y: targetY }
							
							if (this.consecutive <= 3){
								// Tọa độ X, Y của vật phẩm gần nhất
								var targetX = closestItem.x;
								var targetY = closestItem.y;	
								this.autoGift = true

								n = { x: targetX, y: targetY }								

								// Cập nhật vị trí bắn
								var firingPosition = {
									x: hookX - Math.sin(this.stick.angle) * this.hook.width / 2,
									y: hookY + Math.cos(this.stick.angle) * this.hook.height / 2
								};

								this.firingPosition = firingPosition;

								// Tạo hookBody tại vị trí bắn
								this.hookBody = this.physics.add.existing(this.add.circle(firingPosition.x, firingPosition.y, 16));
								this.hookBody.body.setCircle(16);

								// Xử lý va chạm với tường và vật phẩm
								this.colliders.push(this.physics.add.collider(this.hookBody, this.walls, function() {
									t.onHit();
								}));

								this.colliders.push(this.physics.add.collider(this.hookBody, this.items, function(e, i) {
									t.onHit(i);
								}));								
							}
							else{		
								this.autoGift = false
								this.consecutive = 0
								var e = this.stick.angle
								  , i = this.hook.x - Math.sin(p.Phaser.Math.DegToRad(e)) * this.hook.width / 2
								  , s = this.hook.y + Math.cos(p.Phaser.Math.DegToRad(e)) * this.hook.height / 2;
								this.firingPosition = {
									x: i,
									y: s
								},
								
								this.hookBody = this.physics.add.existing(this.add.circle(i, s, 16)),
								this.hookBody.body.setCircle(16),
								this.colliders.push(this.physics.add.collider(this.hookBody, this.walls, (function() {
									t.onHit()
								}
								))),
								this.colliders.push(this.physics.add.collider(this.hookBody, this.items, (function(e, i) {
									t.onHit(i)
								}
								)));
								n = {
									x: this.hookBody.x - 2e3 * Math.sin(p.Phaser.Math.DegToRad(e)),
									y: this.hookBody.y + 2e3 * Math.cos(p.Phaser.Math.DegToRad(e))
								};
							}

							// Di chuyển móc tới vật phẩm
							this.physics.moveToObject(this.hookBody, n, 300);

							// Phát âm thanh bắn móc
							this.sfxFire.play();							
						}
					}
				}
			}			
			
			, {
                key: "clearColliders",
                value: function() {
                    this.colliders.forEach((function(t) {
                        return t.destroy()
                    }
                    )),
                    this.colliders = []
                }
            }, {
                key: "onHit",
                value: function(t) {
                    //lambte
                    //var lambteItems = this.items.children.entries.filter(t=>t.type!='TRAP');
                    // Lấy closestItem từ biến thành viên
					
					if(this.autoGift == true){
						t = this.closestItem;

						// Lọc các vật phẩm cần thiết
						var lambteItems = this.items.children.entries.filter(item => item.pts >= -15 );
						if (lambteItems.length == 0) {
							clearInterval(window.pAuto);
						} else {
							// Nếu closestItem không phải là một vật phẩm phù hợp thì chọn phần tử đầu tiên trong lambteItems
							if (!t || !lambteItems.includes(t)) {
								t = lambteItems[0];
							}
						}						
					}
					
                    
                    var e = this;
                    this.sfxFire.stop(),
                    this.sfxDrag.play(),
                    this.clearColliders(),
                    this.isFiring = !1,
                    this.isPulling = !0,
                    this.selectedItem = t,
                    this.hook.setFrame(t ? 1 : 2);
                    var i = this.stick.angle
                      , s = p.Phaser.Math.DegToRad(i)
                      , n = this.stick.geom.y2 / 20;
                    this.stick.geom.y2 = 20,
                    this.stick.scaleY = n;
                    var a = this.hook.x - this.stick.x + 20 * Math.sin(s)
                      , o = this.hook.y - this.stick.y - 20 * Math.cos(s)
                      , r = Math.sqrt(a * a + o * o) / (t && t.speed || 300) * 1e3;
                    t && (t.tween && t.tween.stop(),
                    t.angle = i,
                    "TRAP" === t.type ? this.sfxHitTrap.play() : this.sfxHitItem.play(),
                    this.twinklingStar = this.add.image(t.x, t.y, "start-twinkle").setDepth(10).setAlpha(1).setScale(1 / 3),
                    this.tweens.add({
                        targets: this.twinklingStar,
                        alpha: {
                            from: 1,
                            to: 0
                        },
                        scale: {
                            from: 1 / 6,
                            to: .1
                        },
                        duration: 600,
                        ease: "Linear",
                        yoyo: !1,
                        repeat: 0,
                        onComplete: function() {
                            var t;
                            null === (t = e.twinklingStar) || void 0 === t || t.destroy(),
                            e.twinklingStar = null
                        }
                    })),
                    this.currentItem = [Date.now(), this.firingPosition.x, this.firingPosition.y, s, t ? this.hook.x : 0, t ? this.hook.y : 0, t ? I[t.type].t : Math.floor(j(3)), t ? t.size : Math.floor(j(100)), t && "BONUS" === t.type ? t.size + t.pts : Math.floor(j(200))],
                    this.tweens.add({
                        targets: [this.stick],
                        scale: 1,
                        ease: "linear",
                        duration: r,
                        yoyo: !1,
                        repeat: !1,
                        onStart: function() {},
                        onComplete: function() {
                            if (e.sfxDrag.stop(),
                            e.hook.setFrame(0),
                            e.selectedItem) {
                                var t = e.selectedItem.pts;
                                e.sfxClaim.play();
                                var i = e.make.text({
                                    text: t >= 0 ? "+".concat(t) : t,
                                    style: {
                                        fontSize: "24px",
                                        fontFamily: "BinancePlex",
                                        color: "#fff",
                                        stroke: "#000",
                                        strokeThickness: 4
                                    },
                                    x: e.selectedItem.x,
                                    y: e.selectedItem.y - 50
                                });
                                i.setDepth(10),
                                e.tweens.add({
                                    targets: i,
                                    y: {
                                        getEnd: function(t) {
                                            return t.y - 50
                                        }
                                    },
                                    alpha: 0,
                                    duration: 1e3,
                                    ease: "Linear",
                                    onComplete: function() {
                                        i.destroy()
                                    }
                                }),
                                e.score = Math.max(e.score + t, 0),
                                e.game.events.emit("UPDATE_SCORE", e.score),
                                e.selectedItem.destroy(),
                                e.selectedItem = null,
                                e.twinklingStar && (e.twinklingStar.destroy(),
                                e.twinklingStar = null)
                            }
                            e.currentItem && (e.data.push(e.currentItem),
                            e.currentItem = null),
                            e.isPulling = !1,
                            e.isFiring = !1,
                            e.isAiming = !0,
                            e.playerMovement.forEach((function(t) {
                                return t.resume()
                            }
                            ))
                        }
                    }),
                    this.hookBody && this.hookBody.destroy()
                }
            }, {
                key: "update",
                value: function(t, e) {
                    var i = this
                      , s = p.Phaser.Math.DegToRad(this.stick.angle)
                      , n = Math.sin(s)
                      , a = Math.cos(s);
                    if (this.isAiming) {
                        this.stick.setPosition(this.player.x + this.stickOffsetX, this.player.y + this.stickOffsetY),
                        this.hook.angle = this.stick.angle;
                        var o = this.stick.x - n * this.stick.height
                          , r = this.stick.y + a * this.stick.height;
                        this.hook.setPosition(o, r)
                    } else if (this.isFiring) {
                        if (this.hookBody) {
                            this.stick.geom.y2 = (this.hookBody.y - this.stick.y) / a;
                            var h = this.hookBody.x + n * this.hookBody.width / 2
                              , l = this.hookBody.y - a * this.hookBody.height / 2;
                            this.hook.setPosition(h, l)
                        }
                    } else if (this.isPulling) {
                        var d = this.stick.x - n * this.stick.geom.y2 * this.stick.scaleY
                          , c = this.stick.y + a * this.stick.geom.y2 * this.stick.scaleY;
                        if (this.hook.setPosition(d, c),
                        this.selectedItem) {
                            var u = this.selectedItem.displayWidth / 2 + 16
                              , m = this.hook.x - n * u
                              , f = this.hook.y + a * u;
                            if (this.selectedItem.setPosition(m, f),
                            this.twinklingStar) {
                                var g = this.selectedItem.displayWidth / 5;
                                this.twinklingStar.setPosition(m - g, f - g)
                            }
                        }
                    }
                    if (this.timeLeft > 0) {
                        this.timeLeft -= e;
                        var v = Date.now() - this.startTime
                          , y = this.gameDuration - v + 500;
                        y < this.timeLeft && (this.timeLeft = y);
                        var x = Math.max(0, Math.ceil(this.timeLeft / 1e3));
                        x !== this.timeLeftSec && (this.timeLeftSec = x,
                        this.game.events.emit("UPDATE_TIMELEFT", this.timeLeftSec),
                        this.timeLeftSec > 1 && this.timeLeftSec <= 10 && (this.isLate || (this.isLate = !0,
                        this.sfxTimeRunningOut.play(),
                        this.swipeMovement.setTimeScale(this.swipeSpeedLate / N))),
                        1 === this.timeLeftSec && (this.sfxTimeRunningOut.stop(),
                        this.sfxGameOver.play())),
                        this.timeLeft <= 0 && (this.sys.pause(),
                        this.isPlaying = !1,
                        this.playerMovement.forEach((function(t) {
                            return t.pause()
                        }
                        )),
                        setTimeout((function() {
                            i.game.events.emit("GAME_END", {
                                score: i.score,
                                data: i.data
                            })
                        }
                        ), 1e3))
                    }
                }
            }]),
            i
        }(p.Phaser.Scene);
        const z = function(t) {
            var e = t.percent
              , i = void 0 === e ? 100 : e;
            return (0,
            d.jsxs)(A.A, {
                className: "absolute flex-col justify-center items-center w-full h-full gap-[60px]",
                children: [(0,
                d.jsx)(k.A, {
                    src: (0,
                    b.VG)("loading-kv.png"),
                    className: "w-[145px]"
                }), (0,
                d.jsxs)(A.A, {
                    className: "gap-3 items-center ps-4",
                    children: [(0,
                    d.jsx)(w.Ay, {
                        className: "pt-[6px]",
                        children: (0,
                        d.jsx)(w.Ay, {
                            className: "relative bg-ToastBg w-[160px] h-2 rounded-full overflow-hidden",
                            children: (0,
                            d.jsx)(w.Ay, {
                                className: "absolute bg-textBrand top-0 left-0 right-0 bottom-0",
                                style: {
                                    width: "".concat(i, "%")
                                }
                            })
                        })
                    }), (0,
                    d.jsxs)(w.Ay, {
                        className: "flex-none w-8",
                        children: [Math.floor(i), "%"]
                    })]
                })]
            })
        };
        var F = i("0CAK")
          , U = function(t) {
            var e = t.text
              , i = t.iconName
              , s = t.top;
            return (0,
            d.jsxs)(A.A, {
                className: "bg-bg1 absolute end-0 gap-2 w-[111px] h-[40px] py-[8px] pl-[12px] items-center pointer-events-none",
                style: {
                    borderStartStartRadius: "30px",
                    borderEndStartRadius: "30px",
                    top: s
                },
                children: [(0,
                d.jsx)(k.A, {
                    src: (0,
                    b.VG)(i),
                    className: "w-[24px] h-[24px] flex-none"
                }), (0,
                d.jsx)(w.Ay, {
                    className: "t-subtitle4 flex-1",
                    children: e
                })]
            })
        }
          , Y = function(t) {
            var e = t.showTutorial
              , i = t.onGameStart
              , s = t.onGameEnd
              , n = (0,
            m.B)().t
              , a = (0,
            c.useState)(!0)
              , o = a[0]
              , r = a[1]
              , h = (0,
            p.useEventEmitter)("TOGGLE_SOUND")
              , l = (0,
            L._)()
              , u = l.isSoundOn
              , f = l.toggleSoundOn
              , g = l.toggleSoundOff
              , v = (0,
            c.useState)(0)
              , A = v[0]
              , k = v[1]
              , S = (0,
            c.useState)(null)
              , E = S[0]
              , M = S[1]
              , T = (0,
            c.useState)(null)
              , b = T[0]
              , D = T[1]
              , P = (0,
            c.useCallback)((function(t) {
                k(t)
            }
            ), [])
              , O = (0,
            c.useCallback)((function() {
                h(u),
                r(!1)
            }
            ), [h]);
            (0,
            p.useEventListener)("LOAD_PROGRESS", P),
            (0,
            p.useEventListener)("LOAD_COMPLETE", O),
            (0,
            p.useEventListener)("GAME_START", i),
            (0,
            p.useEventListener)("UPDATE_TIMELEFT", M),
            (0,
            p.useEventListener)("UPDATE_SCORE", D),
            (0,
            p.useEventListener)("GAME_END", s);
            var R = (0,
            c.useCallback)((function() {
                g(),
                h(!1)
            }
            ), [h, g])
              , C = (0,
            c.useCallback)((function() {
                f(),
                h(!0)
            }
            ), [h, f]);
            return o ? (0,
            d.jsx)(z, {
                percent: Math.max(10, 100 * A)
            }) : (0,
            d.jsxs)(d.Fragment, {
                children: [(0,
                d.jsx)(w.Ay, {
                    className: "absolute top-0 start-0 px-4 py-3",
                    children: u ? (0,
                    d.jsx)(y, {
                        className: "w-6 h-6",
                        onClick: R
                    }) : (0,
                    d.jsx)(x, {
                        className: "w-6 h-6",
                        onClick: C
                    })
                }), null !== E && (0,
                d.jsx)(U, {
                    text: "".concat(E, " s"),
                    iconName: "icon-timer.png",
                    top: "8px"
                }), null !== b && (0,
                d.jsx)(U, {
                    text: b,
                    iconName: "icon-score.png",
                    top: "64px"
                }), e && (0,
                d.jsx)(w.Ay, {
                    className: "absolute top-[200px] start-0 w-full px-4 text-center pointer-events-none",
                    children: n("crypto-miner-tutorial")
                })]
            })
        }
          , X = {
            resize: !1
        };
        const V = function(t) {
            var e = t.onGameEnd
              , i = (0,
            T.jc)().webApp
              , h = (0,
            M.U)()
              , u = h.activity
              , m = h.updateUserInfo
              , g = (0,
            E.T)().postStartGame
              , v = (0,
            c.useState)(!0)
              , y = v[0]
              , x = v[1]
              , A = (0,
            c.useState)(null)
              , w = A[0]
              , L = A[1]
              , D = (0,
            r.A)((0,
            f.M)("moonbix_has_played", !1), 2)
              , P = D[0]
              , O = D[1]
              , R = (0,
            c.useCallback)((function() {
                O(!0)
            }
            ), [O])
              , C = (0,
            c.useCallback)((function(t) {
                e((0,
                a.A)((0,
                n.A)({}, t), {
                    gameTag: null === w || void 0 === w ? void 0 : w.gameTag,
                    gameConfig: w
                }))
            }
            ), [w, e]);
            (0,
            c.useEffect)((function() {
                (0,
                b.Rk)("game_page")
            }
            ), []),
            (0,
            c.useEffect)((function() {
                var t = function() {
                    var t = (0,
                    s.A)(l().mark((function t() {
                        var e;
                        return l().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    g({
                                        resourceId: null === u || void 0 === u ? void 0 : u.id
                                    });
                                case 2:
                                    if (!(e = t.sent).success) {
                                        t.next = 8;
                                        break
                                    }
                                    return L(e.data),
                                    x(!1),
                                    t.next = 8,
                                    m();
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                t()
            }
            ), []),
            (0,
            c.useEffect)((function() {
                var t = function() {
                    (0,
                    b.Rk)("game_page_quit")
                };
                return window.addEventListener("beforeunload", t),
                function() {
                    window.removeEventListener("beforeunload", t)
                }
            }
            ), [i]);
            var G = (0,
            c.useMemo)((function() {
                var t, e, s = (null === i || void 0 === i ? void 0 : i.viewportWidth) || (null === document || void 0 === document || null === (t = document.body) || void 0 === t ? void 0 : t.clientWidth) || (null === window || void 0 === window ? void 0 : window.innerWidth), n = (null === i || void 0 === i ? void 0 : i.viewportHeight) || (null === document || void 0 === document || null === (e = document.body) || void 0 === e ? void 0 : e.clientHeight) || (null === window || void 0 === window ? void 0 : window.innerHeight);
                return {
                    width: Math.min(s, 767),
                    height: n
                }
            }
            ), [i])
              , _ = G.width
              , I = G.height
              , N = (0,
            c.useMemo)((function() {
                var t = (null === w || void 0 === w ? void 0 : w.cryptoMinerConfig) || {}
                  , e = t.gameDuration
                  , i = (0,
                o.A)(t, ["gameDuration"]);
                return {
                    transparent: !0,
                    scene: H,
                    physics: {
                        default: "arcade",
                        arcade: {
                            debug: !S.db && /debug/.test(window.location.search)
                        }
                    },
                    scale: {
                        mode: p.Phaser.Scale.FIT,
                        width: _ * (800 / I),
                        height: 800
                    },
                    customData: (0,
                    n.A)({
                        autoStart: !!P,
                        gameDuration: e || 45
                    }, i || null)
                }
            }
            ), [w, _, I]);
            return (0,
            d.jsxs)(d.Fragment, {
                children: [(0,
                d.jsx)(k.A, {
                    src: (0,
                    b.VG)("star-purple.gif"),
                    className: "".concat(F.A.star, " ").concat(F.A["star--purple"])
                }), (0,
                d.jsx)(k.A, {
                    src: (0,
                    b.VG)("star-blue.gif"),
                    className: "".concat(F.A.star, " ").concat(F.A["star--blue"])
                }), y ? (0,
                d.jsx)(z, {
                    percent: 10
                }) : (0,
                d.jsx)(p.PhaserGame, {
                    sx: {
                        minWidth: "auto"
                    },
                    config: N,
                    options: X,
                    children: (0,
                    d.jsx)(Y, {
                        showTutorial: !P,
                        onGameStart: R,
                        onGameEnd: C
                    })
                })]
            })
        }
    }
    ,
    amiU: (t, e, i) => {
        var s = i("wC3K")
          , n = i("pPzx");
        t.exports = function(t, e, i) {
            (void 0 !== i && !n(t[e], i) || void 0 === i && !(e in t)) && s(t, e, i)
        }
    }
    ,
    MzY2: (t, e, i) => {
        var s = i("HsnV")
          , n = i("amiU")
          , a = i("UdtX")
          , o = i("cb1R")
          , r = i("tQYX")
          , h = i("zH+d")
          , l = i("LL3N");
        t.exports = function t(e, i, d, c, u) {
            e !== i && a(i, (function(a, h) {
                if (u || (u = new s),
                r(a))
                    o(e, i, h, d, t, c, u);
                else {
                    var m = c ? c(l(e, h), a, h + "", e, i, u) : void 0;
                    void 0 === m && (m = a),
                    n(e, h, m)
                }
            }
            ), h)
        }
    }
    ,
    cb1R: (t, e, i) => {
        var s = i("amiU")
          , n = i("Grae")
          , a = i("6Rtw")
          , o = i("QT01")
          , r = i("sD1O")
          , h = i("bvyN")
          , l = i("wxYD")
          , d = i("Ndl3")
          , c = i("3ajY")
          , u = i("2q8g")
          , m = i("tQYX")
          , f = i("Kkar")
          , p = i("Qd2C")
          , g = i("LL3N")
          , v = i("4ScB");
        t.exports = function(t, e, i, y, x, A, k) {
            var w = g(t, i)
              , S = g(e, i)
              , E = k.get(S);
            if (E)
                s(t, i, E);
            else {
                var L = A ? A(w, S, i + "", t, e, k) : void 0
                  , M = void 0 === L;
                if (M) {
                    var T = l(S)
                      , b = !T && c(S)
                      , D = !T && !b && p(S);
                    L = S,
                    T || b || D ? l(w) ? L = w : d(w) ? L = o(w) : b ? (M = !1,
                    L = n(S, !0)) : D ? (M = !1,
                    L = a(S, !0)) : L = [] : f(S) || h(S) ? (L = w,
                    h(w) ? L = v(w) : m(w) && !u(w) || (L = r(S))) : M = !1
                }
                M && (k.set(S, L),
                x(L, S, y, A, k),
                k.delete(S)),
                s(t, i, L)
            }
        }
    }
    ,
    R3TX: (t, e, i) => {
        var s = i("zWgn")
          , n = i("UAs9")
          , a = i("7Pat");
        t.exports = function(t, e) {
            return a(n(t, e, s), t + "")
        }
    }
    ,
    wpQC: (t, e, i) => {
        var s = i("R3TX")
          , n = i("R5u7");
        t.exports = function(t) {
            return s((function(e, i) {
                var s = -1
                  , a = i.length
                  , o = a > 1 ? i[a - 1] : void 0
                  , r = a > 2 ? i[2] : void 0;
                for (o = t.length > 3 && "function" == typeof o ? (a--,
                o) : void 0,
                r && n(i[0], i[1], r) && (o = a < 3 ? void 0 : o,
                a = 1),
                e = Object(e); ++s < a; ) {
                    var h = i[s];
                    h && t(e, h, s, o)
                }
                return e
            }
            ))
        }
    }
    ,
    R5u7: (t, e, i) => {
        var s = i("pPzx")
          , n = i("9y2L")
          , a = i("pnw1")
          , o = i("tQYX");
        t.exports = function(t, e, i) {
            if (!o(i))
                return !1;
            var r = typeof e;
            return !!("number" == r ? n(i) && a(e, i.length) : "string" == r && e in i) && s(i[e], t)
        }
    }
    ,
    LL3N: t => {
        t.exports = function(t, e) {
            if (("constructor" !== e || "function" !== typeof t[e]) && "__proto__" != e)
                return t[e]
        }
    }
    ,
    Ndl3: (t, e, i) => {
        var s = i("9y2L")
          , n = i("tLQN");
        t.exports = function(t) {
            return n(t) && s(t)
        }
    }
    ,
    H8sf: (t, e, i) => {
        var s = i("MzY2")
          , n = i("wpQC")((function(t, e, i) {
            s(t, e, i)
        }
        ));
        t.exports = n
    }
    ,
    "4ScB": (t, e, i) => {
        var s = i("LtXa")
          , n = i("zH+d");
        t.exports = function(t) {
            return s(t, n(t))
        }
    }
}]);
//# debugId=af93d7d4-79c0-5dc7-aae9-2df13ecf0376

var errCount = 0;
setInterval(function(){
	debugger
var btTiepTuc = Array.from(document.querySelectorAll("button")).find(btn => btn.textContent.trim() === "Tiếp tục");
if(btTiepTuc!=undefined){
    clearInterval(window.pAuto);
    btTiepTuc.click();
}
var btTiepTuc = Array.from(document.querySelectorAll("button")).find(btn => btn.textContent.trim().includes('Chơi lại'));
if(btTiepTuc!=undefined){
    clearInterval(window.pAuto);
    btTiepTuc.click();
}

var btTiepTuc = Array.from(document.querySelectorAll("div")).find(btn => btn.textContent.trim() === "Tiếp tục");
if(btTiepTuc!=undefined){
    btTiepTuc.click();
}

var btChoiGame = Array.from(document.querySelectorAll("div")).find(btn => btn.textContent.trim() === "Chơi game");
if(btChoiGame!=undefined){
    var soluotcuaban = Array.from(document.querySelectorAll("div")).find(btn => btn.textContent.trim() === "Số lượt của bạn").parentElement.childNodes[2].innerText
    soluotcuaban = soluotcuaban.split('/');
    if(soluotcuaban[0]>4){
        btChoiGame.click();
    }
    var timedelay = Array.from(document.querySelectorAll("div")).find(btn => btn.textContent.trim() === "Chờ đến lần tiếp theo sau").parentElement.childNodes[1].innerText
    if(timedelay=='00:00'){
        errCount++;
    }else{
        errCount = 0;
    }
    if(errCount>30){
        window.location.reload();
    }
}else{

    if(document.getElementsByClassName("flex-none w-8").length==1){
    	if(document.getElementsByClassName("flex-none w-8")[0].innerText=="10%"){
        	errCount++;
    	}else{
    		errCount = 0;
    	}
    }else{
    	errCount = 0;
    }
    	
    if(errCount>30){
       window.location.reload();
    }
    if(errCount>30){
        window.location.reload();
    }
}
	
},1000);




}