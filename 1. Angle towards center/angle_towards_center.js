center = [  thisComp.width / 2,  thisComp.height/ 2];
delta = center - position;
dd = radiansToDegrees(Math.atan2(delta[1], delta[0]));
dd +90;

center = thisComp.layer("star").position;
delta = center - position;
dd = radiansToDegrees(Math.atan2(delta[1], delta[0]));
dd +90;