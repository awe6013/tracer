
export {
	formatDate,
	formatDollar
}


let formatDate = function(date){
	return new moment(date.toISOString()).format("MM/DD/YYYY");
}
