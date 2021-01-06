function doesTriangleFit(brick, hole) {
	var brickIsTriangle = isTriangle(brick[0], brick[1], brick[2]);
	if(!brickIsTriangle) return false;
	var holeIsTriangle = isTriangle(hole[0], hole[1], hole[2]);
	if(!holeIsTriangle) return false;
	var brickSize = brick.reduce((accum,ndx) => accum + ndx);
	var holeSize = hole.reduce((accum,ndx) => accum + ndx);
	return holeSize >= brickSize;
}

function isTriangle(a,b,c){
	var flag = true;
	if(a + b <= c) flag = false;
	if(a + c <= b) flag = false;
	if(b + c <= a) flag = false;
	return flag;
}

module.exports=doesTriangleFit