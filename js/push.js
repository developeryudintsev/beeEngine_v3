let object = {
    start: function () {
        let canvas = document.querySelector('#canvas');
        let element = canvas.getContext('2d');

        let x = 250;
        let y = 250;

        let drawBee = function (x, y, radius, fillStroke) {
            element.beginPath();
            element.lineWidth = 3;
            element.fillStyle = 'orange';
            element.strokeStyle = 'black';
            element.strokeRect(0, 0, 500, 500);

            element.arc(x, y, radius, 0, Math.PI * 2);
            if (fillStroke == true) {
                element.fill()
            } else {
                element.stroke();
            }
        }

        let beeRandome = function () {
            let beeRandome = Math.random() * 4 - 2;
            x = x + beeRandome;
            y = y + beeRandome;
            move();
        }

        let beeInterval = setInterval(() => {
            beeRandome();
            element.clearRect(0, 0, 500, 500);
            drawBee(x, y, 30, true);
            drawBee(x, y, 30, false);
            drawBee(x + 10, y, 10, false);
            drawBee(x - 10, y, 10, false);
            drawBee(x - 30, y - 50, 25, false);
            drawBee(x + 30, y - 50, 25, false);

        }, 50);

        let move = function () {
            $('body').keydown(function () {
                if (event.keyCode == 39) {
                    x = x + 0.05;
                    if (x > 430) {
                        x = 430;
                    }
                }
                if (event.keyCode == 37) {
                    x = x - 0.05;
                    if (x < 60) {
                        x = 60;
                    }
                }
                if (event.keyCode == 38) {
                    y = y - 0.05;
                    if (y < 80) {
                        y = 80;
                    }
                }
                if (event.keyCode == 40) {
                    y = y + 0.05;
                    console.log(y);
                    if (y > 460) {
                        y = 460;
                    }
                }
                console.log(event.keyCode);
            })
        }
    },
}
object.start();