		function week(){
			currentdate = new Date();
			var oneJan = new Date(currentdate.getFullYear(),0,3);
			var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
			var result = parseInt(numberOfDays / 7)+1;
			var weekNumber=result%2;
			console.log(result);
			console.log(oneJan);
			console.log(numberOfDays);
			console.log(currentdate);
			console.log(currentdate.getDay());*/

			if (weekNumber==1){
				document.getElementById("demo").innerHTML="Сейчас ПЕРВАЯ неделя";
			}
			else{
				document.getElementById("demo").innerHTML="Сейчас ВТОРАЯ неделя";
			};
		}
