var output = {
	$el: $('#output'),	
	init: function(){
		console.log("init");
		//var rs = RiString("The elephant took a bite!");				
	},	
	understand: function(txt){
		var temp = txt;

		myRiString = new RiString(temp);

		var structure = myRiString.pos()
		console.log("structure", structure); 

		temp = ''

		for(var a of structure ){	
		console.log(a)		
			temp += RiTa.randomWord(a) + " ";
		}

		this.render(temp);
	},
	render: function(str){
		console.log('render', str)
		this.$el.text(str);
	}
}

var engine = {
	times: [RiTa.PAST_TENSE, RiTa.PAST_TENSE, RiTa.PAST_TENSE ],
	persons: [RiTa.PAST_TENSE, RiTa.PAST_TENSE, RiTa.PAST_TENSE],
}

var input = {
	$el: $('#input'),
	$input: $('#input textarea'),
	$button: $('#input button'),
	init: function(){		
		this.addEvents();
	},
	addEvents: function(){
		var self = this;
		this.$button.on('click', function(){
			console.log("click!")
			output.understand(self.getText());
		})
	},	
	getText: function(){
		return this.$input.val();
	}
}

window.onload = function() {
	input.init();
  	output.init();
};