let date1 = new Date("01/01/2022");

  
// To calculate the time difference of two dates
let Difference_In_Time = Date.now() - date1.getTime();
  
// To calculate the no. of days between two dates
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  
//To display the final no. of days (result)
const print=document.querySelector("#date");

print.textContent=Math.floor(Difference_In_Days) +" Days"

// const api_url = 
//       "https://www.instagram.com/_ndnhatanh_/?__a=1";
  
// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
    
// }
// // Calling that async function
// getapi(api_url);


	// $(function() {
	// 	$.ajax({
	// 		type: "GET",
	// 		dataType: "jsonp",
	// 		cache: true,
	// 		error: function(data) { console.log(data); },
    //         url: "https://api.instagram.com/v1/users/361586616/?access_token=20271803.f59def8.dfd7d830c0794ee380b194d4423a889a",
	// 		success: function(data) {
	// 			var ig_count = data.data.counts.followed_by.toString();
	// 			ig_count = add_commas(ig_count);
	// 			$(".instagram_count").html(ig_count);
	// 		}
	// 	});
	// 	function add_commas(number) {
	// 		if (number.length > 3) {
	// 			var mod = number.length % 3;
	// 			var output = (mod > 0 ? (number.substring(0,mod)) : '');
	// 			for (i=0 ; i < Math.floor(number.length / 3); i++) {
	// 				if ((mod == 0) && (i == 0)) {
	// 					output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
	// 				} else {
	// 					output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
	// 				}
	// 			}
	// 			return (output);
	// 		} else {
	// 			return number;
	// 		}
	// 	}
	// });

  