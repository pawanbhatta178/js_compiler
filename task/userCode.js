const circle = n => {
	
	const radius = 100 / (Math.PI * 2),
				theta = 360 / n,
				theta_rad = theta * Math.PI / 180,
				result = 2 * radius * Math.sin(theta_rad / 2) * n;
	return Math.round(result * 1000) / 1000;
}

module.exports = circle;

