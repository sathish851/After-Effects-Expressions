censter = [1920 / 2, 1080 / 2];
console.log('centers: ',censter);

delta = [censter[0] - 960, censter[1] - 100];
console.log('delta: ', delta)
angle = Math.atan2(delta[1], delta[0])
console.log(angle)

function radiansToDegrees(radians) {
  const degrees = radians * (180 / Math.PI);
  return degrees;
}

// center = [thisComp.width / 2, thisComp.height / 2];
// delta = center - position;
console.log(radiansToDegrees(Math.atan2(delta[1], delta[0])));


thisComp.width


