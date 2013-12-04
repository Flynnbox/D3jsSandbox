if(typeof ihi === 'undefined'){
    var ihi = {};
}

if (typeof ihi.chart === 'undefined'){
    ihi.chart = {};
}

ihi.chart.insurance = (function(){

	var

	exists = function(object){
		if (typeof object === 'undefined' || object === null){
			return false;
		}
		return true;
		//return typeof object !== 'undefined' && object !== null;
	},

	log = function(msg){
		if (exists(console) && exists(console.log)){
			console.log(msg);
		}
	},

	createChart = function(){

	};

	return {
		exists: exists,
		log: log,
		createChart: createChart	
	};

}());