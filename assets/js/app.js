angular.module("app",["ngRoute"]),angular.module("app").controller("ContactCtrl",["$scope","MailSvc",function(t,e){t.result="hidden",t.resultMessage="",t.formData,t.submitButtonDisabled=!1,t.submitted=!1,t.submit=function(a){t.submitted=!0,t.submitButtonDisabled=!0,a.$valid?(console.log("posting mail"),console.log(t.formData),e.send(t.formData).success(function(e){console.log("Return data: "+e),t.submitButtonDisable=!0,t.resultMessage="Message sent!",t.result="bg-success"}).error(function(e){t.submitButtonDisabled=!1,t.resultMessage=e.message,t.result="bg-danger"})):(t.submitButtonDisabled=!1,t.resultMessage="Failed: Please fill out all fields",t.result="bg-danger")}}]),angular.module("app").controller("EducationCtrl",["$scope",function(t){t.courses=[{name:"BerkeleyX: CS188.1x Artificial Intelligence",course_link:"https://www.edx.org/course/uc-berkeleyx/uc-berkeleyx-cs188-1x-artificial-579#.U0HdDPldXng",certificate_link:"//s3.amazonaws.com/verify.edx.org/downloads/06060b8569da4de5a7ab58b13859188c/Certificate.pdf",school:"edx",school_logo:"/img/edx.png"},{name:"Algorithms: Design and Analysis, Part 1",course_link:"https://www.coursera.org/course/algo",certificate_link:"files/algo-certificate.pdf",school:"coursera",school_logo:"/img/coursera.png"},{name:"Genes and the Human Condition (From Behavior to Biotechnology)",course_link:"https://www.coursera.org/course/genes",certificate_link:"files/Coursera-genes.pdf",school:"coursera",school_logo:"/img/coursera.png"},{name:"HarvardX: PH201x: Health and Society",course_link:"https://www.edx.org/course/harvardx/harvardx-ph201x-health-society-905#.U0HeGvldXng",certificate_link:"https://s3.amazonaws.com/verify.edx.org/downloads/9d19bd661f5247e9816278159c972598/Certificate.pdf",school:"edx",school_logo:"/img/edx.png"}]}]),angular.module("app").service("MailSvc",["$http",function(t){this.send=function(e){return t.post("/api/sendmail",e)}}]),angular.module("app").directive("navPanel",function(){return{restrict:"E",templateUrl:"/templates/nav-panel.html",controller:["$scope","$location",function(t,e){t.navlinks=[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Education",path:"/education"},{title:"Skills",path:"/skills"},{title:"Contact",path:"/contact"}],t.isActive=function(t){return t.path==e.path()?!0:!1}}],controllerAs:"navpanel"}}),angular.module("app").config(["$routeProvider",function(t){t.when("/",{templateUrl:"/templates/home.html"}).when("/about",{templateUrl:"/templates/about.html"}).when("/education",{templateUrl:"/templates/education.html",controller:"EducationCtrl"}).when("/skills",{templateUrl:"/templates/skills.html",controller:"SkillsCtrl"}).when("/contact",{templateUrl:"/templates/contact.html",controller:"ContactCtrl"})}]),angular.module("app").controller("SkillsCtrl",["$scope",function(t){t.skills=[{name:"JavaScript",activity:"Recent"},{name:"AngularJS",activity:"Current"},{name:"HTML5",activity:"Current"},{name:"CSS",activity:"Current"},{name:"Node.js",activity:"Current"},{name:"MongoDB",activity:"Current"},{name:"PHP",activity:"Recent"},{name:"MySQL",activity:"Recent"},{name:"Drupal",activity:"Recent"},{name:"Wordpress",activity:"Recent"},{name:"Java",activity:"Rusty"},{name:"C/C++",activity:"Rusty"},{name:"ASP.NET",activity:"Rusty"},{name:"C#",activity:"Rusty"},{name:"Visual Basic",activity:"Rusty"},{name:"Git",activity:"Current"},{name:"Python",activity:"Recent"},{name:"MS SQL Server",activity:"Rusty"}]}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImNvbnRhY3QuY3RybC5qcyIsImVkdWNhdGlvbi5jdHJsLmpzIiwibWFpbC5zdmMuanMiLCJuYXYuZGlyZWN0aXZlLmpzIiwicm91dGVzLmpzIiwic2tpbGxzLmN0cmwuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJNYWlsU3ZjIiwicmVzdWx0IiwicmVzdWx0TWVzc2FnZSIsImZvcm1EYXRhIiwic3VibWl0QnV0dG9uRGlzYWJsZWQiLCJzdWJtaXR0ZWQiLCJzdWJtaXQiLCJjb250YWN0Zm9ybSIsIiR2YWxpZCIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwic3VjY2VzcyIsImRhdGEiLCJzdWJtaXRCdXR0b25EaXNhYmxlIiwiZXJyb3IiLCJtZXNzYWdlIiwiY291cnNlcyIsIm5hbWUiLCJjb3Vyc2VfbGluayIsImNlcnRpZmljYXRlX2xpbmsiLCJzY2hvb2wiLCJzY2hvb2xfbG9nbyIsInNlcnZpY2UiLCIkaHR0cCIsInRoaXMiLCJwb3N0IiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZVVybCIsIiRsb2NhdGlvbiIsIm5hdmxpbmtzIiwidGl0bGUiLCJwYXRoIiwiaXNBY3RpdmUiLCJuYXZsaW5rIiwiY29udHJvbGxlckFzIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwic2tpbGxzIiwiYWN0aXZpdHkiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLE9BQ0EsWUNEQUQsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGVBQUEsU0FBQSxVQUFBLFNBQUFDLEVBQUFDLEdBQ0FELEVBQUFFLE9BQUEsU0FDQUYsRUFBQUcsY0FBQSxHQUNBSCxFQUFBSSxTQUNBSixFQUFBSyxzQkFBQSxFQUNBTCxFQUFBTSxXQUFBLEVBQ0FOLEVBQUFPLE9BQUEsU0FBQUMsR0FDQVIsRUFBQU0sV0FBQSxFQUNBTixFQUFBSyxzQkFBQSxFQUNBRyxFQUFBQyxRQUNBQyxRQUFBQyxJQUFBLGdCQUNBRCxRQUFBQyxJQUFBWCxFQUFBSSxVQUNBSCxFQUFBVyxLQUFBWixFQUFBSSxVQUNBUyxRQUFBLFNBQUFDLEdBQ0FKLFFBQUFDLElBQUEsZ0JBQUFHLEdBQ0FkLEVBQUFlLHFCQUFBLEVBQ0FmLEVBQUFHLGNBQUEsZ0JBQ0FILEVBQUFFLE9BQUEsZUFDQWMsTUFBQSxTQUFBRixHQUNBZCxFQUFBSyxzQkFBQSxFQUNBTCxFQUFBRyxjQUFBVyxFQUFBRyxRQUNBakIsRUFBQUUsT0FBQSxnQkFHQUYsRUFBQUssc0JBQUEsRUFDQUwsRUFBQUcsY0FBQSxxQ0FDQUgsRUFBQUUsT0FBQSxpQkMzQkFMLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxpQkFBQSxTQUFBLFNBQUFDLEdBRUFBLEVBQUFrQixVQUVBQyxLQUFBLDhDQUNBQyxZQUFBLDRGQUNBQyxpQkFBQSwrRkFDQUMsT0FBQSxNQUNBQyxZQUFBLGlCQUdBSixLQUFBLDBDQUNBQyxZQUFBLHVDQUNBQyxpQkFBQSw2QkFDQUMsT0FBQSxXQUNBQyxZQUFBLHNCQUdBSixLQUFBLGlFQUNBQyxZQUFBLHdDQUNBQyxpQkFBQSwyQkFDQUMsT0FBQSxXQUNBQyxZQUFBLHNCQUdBSixLQUFBLHVDQUNBQyxZQUFBLHNGQUNBQyxpQkFBQSxxR0FDQUMsT0FBQSxNQUNBQyxZQUFBLG9CQzlCQTFCLFFBQUFDLE9BQUEsT0FDQTBCLFFBQUEsV0FBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFkLEtBQUEsU0FBQVIsR0FDQSxNQUFBcUIsR0FBQUUsS0FBQSxnQkFBQXZCLE9DSEFQLFFBQUFDLE9BQUEsT0FDQThCLFVBQUEsV0FBQSxXQUNBLE9BQ0FDLFNBQUEsSUFDQUMsWUFBQSw0QkFDQS9CLFlBQUEsU0FBQSxZQUFBLFNBQUFDLEVBQUErQixHQUVBL0IsRUFBQWdDLFdBQ0FDLE1BQUEsT0FBQUMsS0FBQSxNQUNBRCxNQUFBLFFBQUFDLEtBQUEsV0FDQUQsTUFBQSxZQUFBQyxLQUFBLGVBQ0FELE1BQUEsU0FBQUMsS0FBQSxZQUNBRCxNQUFBLFVBQUFDLEtBQUEsYUFJQWxDLEVBQUFtQyxTQUFBLFNBQUFDLEdBQ0EsTUFBQUEsR0FBQUYsTUFBQUgsRUFBQUcsUUFDQSxHQUVBLEtBR0FHLGFBQUEsY0N2QkF4QyxRQUFBQyxPQUFBLE9BQ0F3QyxRQUFBLGlCQUFBLFNBQUFDLEdBQ0FBLEVBQ0FDLEtBQUEsS0FDQVYsWUFBQSx5QkFFQVUsS0FBQSxVQUNBVixZQUFBLDBCQUVBVSxLQUFBLGNBQ0FWLFlBQUEsNEJBQ0EvQixXQUFBLGtCQUVBeUMsS0FBQSxXQUNBVixZQUFBLHlCQUNBL0IsV0FBQSxlQUVBeUMsS0FBQSxZQUNBVixZQUFBLDBCQUNBL0IsV0FBQSxtQkNuQkFGLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxjQUFBLFNBQUEsU0FBQUMsR0FDQUEsRUFBQXlDLFNBRUF0QixLQUFBLGFBQ0F1QixTQUFBLFdBR0F2QixLQUFBLFlBQ0F1QixTQUFBLFlBR0F2QixLQUFBLFFBQ0F1QixTQUFBLFlBR0F2QixLQUFBLE1BQ0F1QixTQUFBLFlBR0F2QixLQUFBLFVBQ0F1QixTQUFBLFlBR0F2QixLQUFBLFVBQ0F1QixTQUFBLFlBR0F2QixLQUFBLE1BQ0F1QixTQUFBLFdBR0F2QixLQUFBLFFBQ0F1QixTQUFBLFdBR0F2QixLQUFBLFNBQ0F1QixTQUFBLFdBR0F2QixLQUFBLFlBQ0F1QixTQUFBLFdBR0F2QixLQUFBLE9BQ0F1QixTQUFBLFVBR0F2QixLQUFBLFFBQ0F1QixTQUFBLFVBR0F2QixLQUFBLFVBQ0F1QixTQUFBLFVBR0F2QixLQUFBLEtBQ0F1QixTQUFBLFVBR0F2QixLQUFBLGVBQ0F1QixTQUFBLFVBR0F2QixLQUFBLE1BQ0F1QixTQUFBLFlBR0F2QixLQUFBLFNBQ0F1QixTQUFBLFdBR0F2QixLQUFBLGdCQUNBdUIsU0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuICAnbmdSb3V0ZSdcbl0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQ29udGFjdEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIE1haWxTdmMpe1xuXHQkc2NvcGUucmVzdWx0ID0gJ2hpZGRlbic7XG5cdCRzY29wZS5yZXN1bHRNZXNzYWdlID0gXCJcIjtcblx0JHNjb3BlLmZvcm1EYXRhO1xuXHQkc2NvcGUuc3VibWl0QnV0dG9uRGlzYWJsZWQgPSBmYWxzZTtcblx0JHNjb3BlLnN1Ym1pdHRlZCA9IGZhbHNlO1xuXHQkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24oY29udGFjdGZvcm0pe1xuXHRcdCRzY29wZS5zdWJtaXR0ZWQgPSB0cnVlO1xuXHRcdCRzY29wZS5zdWJtaXRCdXR0b25EaXNhYmxlZCA9IHRydWU7XG5cdFx0aWYgKGNvbnRhY3Rmb3JtLiR2YWxpZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJwb3N0aW5nIG1haWxcIik7XG5cdFx0XHRjb25zb2xlLmxvZygkc2NvcGUuZm9ybURhdGEpO1xuXHRcdFx0TWFpbFN2Yy5zZW5kKCRzY29wZS5mb3JtRGF0YSlcblx0XHRcdC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlJldHVybiBkYXRhOiBcIiArIGRhdGEpO1xuXHRcdFx0XHQkc2NvcGUuc3VibWl0QnV0dG9uRGlzYWJsZSA9IHRydWU7XG5cdFx0XHRcdCRzY29wZS5yZXN1bHRNZXNzYWdlID0gXCJNZXNzYWdlIHNlbnQhXCI7XG5cdFx0XHRcdCRzY29wZS5yZXN1bHQgPSAnYmctc3VjY2Vzcyc7XG5cdFx0XHR9KS5lcnJvcihmdW5jdGlvbihkYXRhLCBzdGF0dXMpe1xuXHRcdFx0XHQkc2NvcGUuc3VibWl0QnV0dG9uRGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0JHNjb3BlLnJlc3VsdE1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG5cdFx0XHRcdCRzY29wZS5yZXN1bHQ9J2JnLWRhbmdlcic7XG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdCRzY29wZS5zdWJtaXRCdXR0b25EaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0JHNjb3BlLnJlc3VsdE1lc3NhZ2UgPSAnRmFpbGVkOiBQbGVhc2UgZmlsbCBvdXQgYWxsIGZpZWxkcyc7XG5cdFx0XHQkc2NvcGUucmVzdWx0PSdiZy1kYW5nZXInO1xuXHRcdH1cblx0fVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdFZHVjYXRpb25DdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcblx0Ly9kZWZpbmVzIGNvbXBsZXRlZCBjb3Vyc2VzIGluIGNvbnRpbnVpbmcgZWR1Y2F0aW9uIHNlY3Rpb25cblx0JHNjb3BlLmNvdXJzZXMgPSBbXG5cdFx0e1xuXHRcdFx0bmFtZTogJ0JlcmtlbGV5WDogQ1MxODguMXggQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UnLFxuXHRcdFx0Y291cnNlX2xpbms6ICdodHRwczovL3d3dy5lZHgub3JnL2NvdXJzZS91Yy1iZXJrZWxleXgvdWMtYmVya2VsZXl4LWNzMTg4LTF4LWFydGlmaWNpYWwtNTc5Iy5VMEhkRFBsZFhuZycsXG5cdFx0XHRjZXJ0aWZpY2F0ZV9saW5rOiAnLy9zMy5hbWF6b25hd3MuY29tL3ZlcmlmeS5lZHgub3JnL2Rvd25sb2Fkcy8wNjA2MGI4NTY5ZGE0ZGU1YTdhYjU4YjEzODU5MTg4Yy9DZXJ0aWZpY2F0ZS5wZGYnLFxuXHRcdFx0c2Nob29sOiAnZWR4JyxcbiAgICAgIHNjaG9vbF9sb2dvOiAnL2ltZy9lZHgucG5nJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ0FsZ29yaXRobXM6IERlc2lnbiBhbmQgQW5hbHlzaXMsIFBhcnQgMScsXG5cdFx0XHRjb3Vyc2VfbGluazogJ2h0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9jb3Vyc2UvYWxnbycsXG5cdFx0XHRjZXJ0aWZpY2F0ZV9saW5rOiAnZmlsZXMvYWxnby1jZXJ0aWZpY2F0ZS5wZGYnLFxuXHRcdFx0c2Nob29sOiAnY291cnNlcmEnLFxuICAgICAgc2Nob29sX2xvZ286ICcvaW1nL2NvdXJzZXJhLnBuZydcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdHZW5lcyBhbmQgdGhlIEh1bWFuIENvbmRpdGlvbiAoRnJvbSBCZWhhdmlvciB0byBCaW90ZWNobm9sb2d5KScsXG5cdFx0XHRjb3Vyc2VfbGluazogJ2h0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9jb3Vyc2UvZ2VuZXMnLFxuXHRcdFx0Y2VydGlmaWNhdGVfbGluazogJ2ZpbGVzL0NvdXJzZXJhLWdlbmVzLnBkZicsXG5cdFx0XHRzY2hvb2w6ICdjb3Vyc2VyYScsXG4gICAgICBzY2hvb2xfbG9nbzogJy9pbWcvY291cnNlcmEucG5nJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ0hhcnZhcmRYOiBQSDIwMXg6IEhlYWx0aCBhbmQgU29jaWV0eScsXG5cdFx0XHRjb3Vyc2VfbGluazogJ2h0dHBzOi8vd3d3LmVkeC5vcmcvY291cnNlL2hhcnZhcmR4L2hhcnZhcmR4LXBoMjAxeC1oZWFsdGgtc29jaWV0eS05MDUjLlUwSGVHdmxkWG5nJyxcblx0XHRcdGNlcnRpZmljYXRlX2xpbms6ICdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdmVyaWZ5LmVkeC5vcmcvZG93bmxvYWRzLzlkMTliZDY2MWY1MjQ3ZTk4MTYyNzgxNTljOTcyNTk4L0NlcnRpZmljYXRlLnBkZicsXG5cdFx0XHRzY2hvb2w6ICdlZHgnLFxuICAgICAgc2Nob29sX2xvZ286ICcvaW1nL2VkeC5wbmcnXG5cdFx0fVxuXG5cdF07XG5cbn0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnTWFpbFN2YycsIGZ1bmN0aW9uICgkaHR0cCl7XG5cdHRoaXMuc2VuZCA9IGZ1bmN0aW9uKGZvcm1EYXRhKXtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZW5kbWFpbCcsIGZvcm1EYXRhKTtcblx0fVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5kaXJlY3RpdmUoJ25hdlBhbmVsJywgZnVuY3Rpb24oKXtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9uYXYtcGFuZWwuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCAkbG9jYXRpb24pe1xuXHRcdFx0Ly9zdG9yZXMgc2l0ZSBsaW5rc1xuXHRcdFx0JHNjb3BlLm5hdmxpbmtzID0gW1xuXHRcdFx0XHR7dGl0bGU6ICdIb21lJyxcdHBhdGg6ICcvJ30sXG5cdFx0XHRcdHt0aXRsZTogJ0Fib3V0JywgcGF0aDogJy9hYm91dCd9LFxuXHRcdFx0XHR7dGl0bGU6ICdFZHVjYXRpb24nLCBwYXRoOiAnL2VkdWNhdGlvbid9LFxuXHRcdFx0XHR7dGl0bGU6ICdTa2lsbHMnLCBwYXRoOiAnL3NraWxscyd9LFxuXHRcdFx0XHR7dGl0bGU6ICdDb250YWN0JywgcGF0aDogJy9jb250YWN0J31cblx0XHRcdF07XG5cblx0XHRcdC8vY2hlY2sgaWYgbGluayBpcyBmb3IgdGhlIGFjdGl2ZSBwYWdlLCBhbmQgaWYgc28gcmV0dXJucyB0cnVlXG5cdFx0XHQkc2NvcGUuaXNBY3RpdmUgPSBmdW5jdGlvbihuYXZsaW5rKXtcblx0XHRcdFx0aWYgKG5hdmxpbmsucGF0aCA9PSAkbG9jYXRpb24ucGF0aCgpKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0Y29udHJvbGxlckFzOiAnbmF2cGFuZWwnXG5cdH07XG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlcil7XG5cdCRyb3V0ZVByb3ZpZGVyXG5cdFx0LndoZW4oJy8nLCB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvaG9tZS5odG1sJ1xuXHRcdH0pXG5cdFx0LndoZW4oJy9hYm91dCcsIHtcblx0XHRcdHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9hYm91dC5odG1sJ1xuXHRcdH0pXG5cdFx0LndoZW4oJy9lZHVjYXRpb24nLCB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvZWR1Y2F0aW9uLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ0VkdWNhdGlvbkN0cmwnXG5cdFx0fSlcblx0XHQud2hlbignL3NraWxscycsIHtcblx0XHRcdHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9za2lsbHMuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnU2tpbGxzQ3RybCdcblx0XHR9KVxuXHRcdC53aGVuKCcvY29udGFjdCcsIHtcblx0XHRcdHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9jb250YWN0Lmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ0NvbnRhY3RDdHJsJ1xuXHRcdH0pXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1NraWxsc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUpe1xuICAkc2NvcGUuc2tpbGxzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdKYXZhU2NyaXB0JyxcbiAgICAgIGFjdGl2aXR5OiAnUmVjZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FuZ3VsYXJKUycsXG4gICAgICBhY3Rpdml0eTogJ0N1cnJlbnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnSFRNTDUnLFxuICAgICAgYWN0aXZpdHk6ICdDdXJyZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NTUycsXG4gICAgICBhY3Rpdml0eTogJ0N1cnJlbnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTm9kZS5qcycsXG4gICAgICBhY3Rpdml0eTogJ0N1cnJlbnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTW9uZ29EQicsXG4gICAgICBhY3Rpdml0eTogJ0N1cnJlbnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUEhQJyxcbiAgICAgIGFjdGl2aXR5OiAnUmVjZW50JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNeVNRTCcsXG4gICAgICBhY3Rpdml0eTogJ1JlY2VudCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdEcnVwYWwnLFxuICAgICAgYWN0aXZpdHk6ICdSZWNlbnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV29yZHByZXNzJyxcbiAgICAgIGFjdGl2aXR5OiAnUmVjZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0phdmEnLFxuICAgICAgYWN0aXZpdHk6ICdSdXN0eSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDL0MrKycsXG4gICAgICBhY3Rpdml0eTogJ1J1c3R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FTUC5ORVQnLFxuICAgICAgYWN0aXZpdHk6ICdSdXN0eSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDIycsXG4gICAgICBhY3Rpdml0eTogJ1J1c3R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1Zpc3VhbCBCYXNpYycsXG4gICAgICBhY3Rpdml0eTogJ1J1c3R5J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0dpdCcsXG4gICAgICBhY3Rpdml0eTogJ0N1cnJlbnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUHl0aG9uJyxcbiAgICAgIGFjdGl2aXR5OiAnUmVjZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ01TIFNRTCBTZXJ2ZXInLFxuICAgICAgYWN0aXZpdHk6ICdSdXN0eSdcbiAgICB9XG4gIF1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9