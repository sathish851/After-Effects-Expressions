center = thisComp.layer("star").position;
delta = center - position;
dd = radiansToDegrees(Math.atan2(delta[1], delta[0]));
dd +90;