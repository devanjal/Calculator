/**
 * New node file
 */
var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/calculator";

exports.multiply = function(req,res){
	// These two variables come from the form on
	// the views/calculator.hbs page
	var number1 = req.param("number1");
	var number2 = req.param("number2");
	var json_responses;
	if(number1!=null && number2 != null)
		{
			var x=number1*number2;
		json_responses = {"statusCode" : 200, "x":x};
		res.send(json_responses)
		}
	else
		{
		json_responses = {"statusCode" : 401};
		res.send(json_responses);
		}

};
exports.add = function(req,res){
	// These two variables come from the form on
	// the views/calculator.hbs page
	var number1 = req.param("number1");
	var number2 = req.param("number2");
	var json_responses;
	if(number1!=null && number2 != null)
	{
		var p=parseInt(number1);
		var q=parseInt(number2)
		var x=p+q;
		json_responses = {"statusCode" : 200, "x":x};
		res.send(json_responses)
	}
	else
	{
		json_responses = {"statusCode" : 401};
		res.send(json_responses);
	}

};
exports.sub = function(req,res){
	// These two variables come from the form on
	// the views/calculator.hbs page
	var number1 = req.param("number1");
	var number2 = req.param("number2");
	var json_responses;
	if(number1!=null && number2 != null)
	{
		var x=number1-number2;
		json_responses = {"statusCode" : 200, "x":x};
		res.send(json_responses)
	}
	else
	{
		json_responses = {"statusCode" : 401};
		res.send(json_responses);
	}

};
exports.divide = function(req,res){
	// These two variables come from the form on
	// the views/calculator.hbs page
	var number1 = req.param("number1");
	var number2 = req.param("number2");
	var json_responses;
	if(number1!=null && number2 != null)
	{
		if(number2==0){
			var x= "Denominator Cant Be 0"
		}
		else {
			x = number1/number2;
		}
		//var x=number1/number2;
		json_responses = {"statusCode" : 200, "x":x};
		res.send(json_responses)
	}
	else
	{
		json_responses = {"statusCode" : 401};
		res.send(json_responses);
	}

};

//Redirects to the homepage
exports.redirectToHomepage = function(req,res)
{
	//Checks before redirecting whether the session is valid
	/*if(req.session.username)
	{
		//Set these headers to notify the browser not to maintain any cache for the page being loaded
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		res.render("homepage",{username:req.session.username});
	}
	else
	{*/
		res.redirect('/');
	//}
};

//Logout the user - invalidate the session
exports.logout = function(req,res)
{
	req.session.destroy();
	res.redirect('/');
};

