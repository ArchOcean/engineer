function drawArrow(
  ctx,
  fromx,
  fromy,
  tox,
  toy,
  arrowWidth,
  color,
  tilt,
  text = "F"
) {
  //variables to be used when creating the arrow
  var headlen = 10;
  var angle = Math.atan2(toy - fromy, tox - fromx);

  ctx.save();
  ctx.strokeStyle = color;

  //starting path of the arrow from the start square to the end square
  //and drawing the stroke
  ctx.beginPath();
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.lineWidth = arrowWidth;
  ctx.stroke();

  //starting a new path from the head of the arrow to one of the sides of
  //the point
  ctx.beginPath();
  ctx.moveTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  //path from the side point of the arrow, to the other side point
  ctx.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 7),
    toy - headlen * Math.sin(angle + Math.PI / 7)
  );

  //path from the side point back to the tip of the arrow, and then
  //again to the opposite side point
  ctx.lineWidth = 4;
  ctx.lineTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(
    text,
    fromx + 120 * Math.cos(tilt - Math.PI / 25),
    fromy + 120 * Math.sin(tilt - Math.PI / 25)
  );

  //draws the paths created above
  ctx.stroke();
  ctx.restore();
}

function toSub(value) {
  var str = "";
  var mag = Math.max(0, Math.floor(Math.log10(value)));

  while (mag >= 0) {
    var digit = Math.floor(value / Math.pow(10, mag)) % 10;
    str += String.fromCharCode(8320 + digit);
    mag--;
  }
  return str;
}
