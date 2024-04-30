
        var typed2 = new Typed(".auto-type2", {
            strings: ["Hello!"],
            typeSpeed: 50,
            loop: false,
            onComplete: function() 
            {
                var typed3 = new Typed(".auto-type3", {
                    strings: ["My name is George Moysiadis, I come from Greece and I am a"],
                    typeSpeed: 50,
                    loop: false,
                    onComplete: function() {
                        var typed4 = new Typed(".auto-type4", {
                            strings: ["web developer.", "student of Computer Science."],
                            typeSpeed: 100,
                            backSpeed: 60,
                            loop: false
                        });
                    }
                });
            }
        });
    