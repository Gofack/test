'use strict';

let MODAL_WIDTH = 420;
let MODAL_HEIGHT = 270;
let STAT_HEIGHT = 150;
let STAT_COL_WIDTH = 40;
let DISTANCE = 50;
let MY_COLOR = 'rgba(255,0,0,.2)';

window.renderStatistics = function(ctx, names, times) {
    var max = Math.max.apply(null, times);
    ctx.fillStyle = 'rgba(0,0,0,.7)';
    ctx.fillRect(110, 20, MODAL_WIDTH, MODAL_HEIGHT);
    ctx.fillStyle = '#fff';
    ctx.fillRect(100, 10, MODAL_WIDTH, MODAL_HEIGHT);
    ctx.fillStyle = "#000";
    ctx.font = '16px Tahoma';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', 250, 20);
    ctx.fillText('Список результатов:', 240, 40);

    for(var i = 0;i < names.length; i++) {
        ctx.fillStyle = '#000';
        ctx.fillText(names[i], 150+90*i, 250);

        if (names[i] == 'Вы') {
            var height = STAT_HEIGHT * times[i] / max;
            ctx.fillStyle = MY_COLOR;
            ctx.fillRect(145 + (90*i), 240 - height, STAT_COL_WIDTH, height);
            console.log(Math.round(times[i]));
        }
        else {
            var height = STAT_HEIGHT * times[i] / max;
            ctx.fillStyle = 'rgba(1,1,255, ' + Math.random(0, 1) + ')';
            ctx.fillRect(145 + (90*i), 240 - height, STAT_COL_WIDTH, height);
            console.log(Math.round(times[i]));
        }
    }
};