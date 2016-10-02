var app = angular.module('cricapp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'templates/login.html',
    controller:'loginController'
  })
  .when('/profile',{
    templateUrl:'templates/userprofile.html',
    controller:'profileController'
  })
  .when('/team',{
    templateUrl:'templates/teamprofile.html',
    controller:'teamController'
  })
  .when('/tournament',{
    templateUrl:'templates/tournamentprofile.html',
    controller:'tournamentController'
  })
  .when('/match',{
    templateUrl:'templates/matchprofile.html',
    controller:'matchController'
  })
  .when('/createtournament',{
    templateUrl:'templates/createtournament.html',
    controller:'createtournamentController'
  })
  .when('/edittournament',{
    templateUrl:'templates/edittournament.html',
    controller:'tournamentController'
  })
  .when('/createteam',{
    templateUrl:'templates/createteam.html',
    controller:'createteamController'
  })
  .when('/editteam',{
    templateUrl:'templates/editteam.html',
    controller:'teamController'
  })
  .when('/editprofile',{
    templateUrl:'templates/editprofile.html',
    controller:'profileController'
  })
  .otherwise({
    redirectTo:'/'
  });
});
app.controller("loginController", function($scope){

});
app.controller("navController", function ($scope) {
  $scope.LOGO = "Cricket";
  $scope.userdp={'background':'url("http://static.comicvine.com/uploads/original/11125/111253442/4897645-batman.jpg")'};
});
app.controller("profileController", function ($scope) {
  $scope.Name = "Player Name";
  $scope.setlogo={'background':'url("http://ste.india.com/sites/default/files/2015/04/11/345370-sachin-tendulkar-mi-pract.jpg")'};
  $scope.userage = "14";
  $scope.City = "Chennai";
  $scope.Country = "India";
  $scope.userplayertype = "Batsman";
  $scope.userdp ="http://ste.india.com/sites/default/files/2015/04/11/345370-sachin-tendulkar-mi-pract.jpg";
  $scope.coverimg = "http://media.dcentertainment.com/sites/default/files/GalleryComics_1920x1080_20160323_bm_50_56d9d3898bd774.52001353.jpg";

});
app.controller("teamController", function ($scope) {
  $scope.Name = "Chennai Super Kings";
  $scope.City = "Chennai";
  $scope.Country = "India";
  $scope.setlogo={'background':'url("http://3.bp.blogspot.com/-je3yfOkq_oc/UylzWM6N8PI/AAAAAAAACSs/f7hQuueTcWI/s1600/IPL+T20+2014++Team+CSK+1920x1080.jpg")'};
  $scope.teamdp ="http://3.bp.blogspot.com/-je3yfOkq_oc/UylzWM6N8PI/AAAAAAAACSs/f7hQuueTcWI/s1600/IPL+T20+2014++Team+CSK+1920x1080.jpg";
  $scope.coverimg = "http://3.bp.blogspot.com/-alo3kMTmfYU/VQ-2h6DaeSI/AAAAAAAAE-0/J7XxcSFNz38/s1600/ChennaiSuperKingsIPLWallpapersHD03.jpg";
  // $scope.$on('$viewContentLoaded', function(){
  //   $(document).ready(function () {
  //     $('.button-collapse').sideNav();
  //     $('.parallax').parallax();
  //     });
  // });

});
app.controller("tournamentController", function ($scope) {
  $scope.Name = "Natwest T20 Blast";
  $scope.City = "";
  $scope.Country = "ENGLAND";
  $scope.setlogo={'background':'url("http://wccc.co.uk/crops/s/m/4359-27.jpg")'};
  $scope.teamdp ="http://wccc.co.uk/crops/s/m/4359-27.jpg";
  $scope.coverimg = "http://i.imgur.com/exGzljp.jpg";
});
app.controller("matchController", function ($scope) {
  $scope.hometeam = "chennai super kings";
  $scope.homeruns = "102/7";
  $scope.awayteam = "mumbai indians";
  $scope.awayruns = "103/2";
  $scope.City = "";
  $scope.Country = "ENGLAND";
  $scope.dp ="http://wccc.co.uk/crops/s/m/4359-27.jpg";
  $scope.coverimg = "http://i.imgur.com/exGzljp.jpg";
  $scope.Total = function(){
    var total = 0;
    // for(var i = 0; i < $scope.cart.products.length; i++){
    //     var product = $scope.cart.products[i];
    //     total += (product.price * product.quantity);
    // }
    return total;
}
});
app.controller("createtournamentController", function ($scope) {
  $scope.title = "Create New Tournament";
  $scope.setlogo={'background':'url("http://wccc.co.uk/crops/s/m/4359-27.jpg")'};
  $scope.coverimg = "http://i.imgur.com/exGzljp.jpg";
});
app.controller("createteamController", function ($scope) {
  $scope.title = "Create New Team";
  $scope.setlogo={'background':'url("http://wccc.co.uk/crops/s/m/4359-27.jpg")'};
  $scope.coverimg = "http://i.imgur.com/exGzljp.jpg";
});
// $(document).ready(function(){
//     $('.button-collapse').sideNav();
//     $('.parallax').parallax();
//     $('.pdp').hide();
//     function dp_icon_anime(){
//       $('.profile_dp').click(function(){
//       $('.pdp').toggle();
//       });
//     }
//     function upload(){
//       $('.uploadbutton').hide();
//       $( '.userinfo' ).delegate("hover", function() {
//         $('.uploadbutton').toggle();
//       });
//       // $('.userinfo').hover(function(){
//       //   $('.uploadbutton').toggle();
//       // });
//     }
//     $(window).scroll(function(){
//     $(".userinfo").css("opacity", 1 - $(window).scrollTop() / 250);
//   });
//   function image_upload_preview(input) {
//
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             $('.topsegment .parallax-container .parallax img').attr('src', e.target.result);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }
//
// $("#upload_cover_file").change(function(){
//     image_upload_preview(this);
// });
//     dp_icon_anime();
//     upload();
// });
