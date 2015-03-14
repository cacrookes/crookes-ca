angular.module("app",["ngRoute","ngAnimate"]),angular.module("app").controller("AboutCtrl",["$scope",function(t){t.pageId="aboutPage"}]),angular.module("app").controller("ContactCtrl",["$scope","MailSvc",function(t,e){t.pageId="contactPage",t.result="hidden",t.resultMessage="",t.formData,t.submitButtonDisabled=!1,t.submitted=!1,t.submit=function(a){t.submitted=!0,t.submitButtonDisabled=!0,a.$valid?(console.log("posting mail"),console.log(t.formData),e.send(t.formData).success(function(e){console.log("Return data: "+e),t.submitButtonDisable=!0,t.resultMessage="Message sent!",t.result="bg-success"}).error(function(e){t.submitButtonDisabled=!1,t.resultMessage=e.message,t.result="bg-danger"})):(t.submitButtonDisabled=!1,t.resultMessage="Failed: Please fill out all fields",t.result="bg-danger")}}]),angular.module("app").controller("EducationCtrl",["$scope",function(t){t.pageId="educationPage",t.courses=[{name:"BerkeleyX: CS188.1x Artificial Intelligence",course_link:"https://www.edx.org/course/uc-berkeleyx/uc-berkeleyx-cs188-1x-artificial-579#.U0HdDPldXng",certificate_link:"//s3.amazonaws.com/verify.edx.org/downloads/06060b8569da4de5a7ab58b13859188c/Certificate.pdf",school:"edx"},{name:"Algorithms: Design and Analysis, Part 1",course_link:"https://www.coursera.org/course/algo",certificate_link:"files/algo-certificate.pdf",school:"coursera"},{name:"Genes and the Human Condition (From Behavior to Biotechnology)",course_link:"https://www.coursera.org/course/genes",certificate_link:"files/Coursera-genes.pdf",school:"coursera"},{name:"HarvardX: PH201x: Health and Society",course_link:"https://www.edx.org/course/harvardx/harvardx-ph201x-health-society-905#.U0HeGvldXng",certificate_link:"https://s3.amazonaws.com/verify.edx.org/downloads/9d19bd661f5247e9816278159c972598/Certificate.pdf",school:"edx"},{name:"HTML5 Game Development",course_link:"https://www.udacity.com/course/cs255",certificate_link:"files/html5-game-dev-certificate.pdf",school:"udacity"}]}]),angular.module("app").controller("HomeCtrl",["$scope",function(t){t.pageId="homePage"}]),angular.module("app").service("MailSvc",["$http",function(t){this.send=function(e){return t.post("/api/sendmail",e)}}]),angular.module("app").directive("navPanel",function(){return{restrict:"E",templateUrl:"/templates/nav-panel.html",controller:["$scope","$location",function(t,e){t.navlinks=[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Education",path:"/education"},{title:"Skills",path:"/skills"},{title:"Contact",path:"/contact"}],t.isActive=function(t){return t.path==e.path()?!0:!1}}],controllerAs:"navpanel"}}),angular.module("app").config(["$routeProvider",function(t){t.when("/",{templateUrl:"/templates/home.html",controller:"HomeCtrl"}).when("/about",{templateUrl:"/templates/about.html",controller:"AboutCtrl"}).when("/education",{templateUrl:"/templates/education.html",controller:"EducationCtrl"}).when("/skills",{templateUrl:"/templates/skills.html",controller:"SkillsCtrl"}).when("/contact",{templateUrl:"/templates/contact.html",controller:"ContactCtrl"})}]),angular.module("app").controller("SkillsCtrl",["$scope",function(t){t.pageId="skillsPage",t.skills=[{name:"JavaScript",activity:"Current"},{name:"AngularJS",activity:"Current"},{name:"HTML5",activity:"Current"},{name:"CSS",activity:"Current"},{name:"Node.js",activity:"Current"},{name:"MongoDB",activity:"Current"},{name:"PHP",activity:"Recent"},{name:"MySQL",activity:"Recent"},{name:"Drupal",activity:"Recent"},{name:"Wordpress",activity:"Recent"},{name:"Java",activity:"Rusty"},{name:"C/C++",activity:"Rusty"},{name:"ASP.NET",activity:"Rusty"},{name:"C#",activity:"Rusty"},{name:"Visual Basic",activity:"Rusty"},{name:"Git",activity:"Current"},{name:"Python",activity:"Current"},{name:"MS SQL Server",activity:"Rusty"}]}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFib3V0LmN0cmwuanMiLCJjb250YWN0LmN0cmwuanMiLCJlZHVjYXRpb24uY3RybC5qcyIsImhvbWUuY3RybC5qcyIsIm1haWwuc3ZjLmpzIiwibmF2LmRpcmVjdGl2ZS5qcyIsInJvdXRlcy5qcyIsInNraWxscy5jdHJsLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwicGFnZUlkIiwiTWFpbFN2YyIsInJlc3VsdCIsInJlc3VsdE1lc3NhZ2UiLCJmb3JtRGF0YSIsInN1Ym1pdEJ1dHRvbkRpc2FibGVkIiwic3VibWl0dGVkIiwic3VibWl0IiwiY29udGFjdGZvcm0iLCIkdmFsaWQiLCJjb25zb2xlIiwibG9nIiwic2VuZCIsInN1Y2Nlc3MiLCJkYXRhIiwic3VibWl0QnV0dG9uRGlzYWJsZSIsImVycm9yIiwibWVzc2FnZSIsImNvdXJzZXMiLCJuYW1lIiwiY291cnNlX2xpbmsiLCJjZXJ0aWZpY2F0ZV9saW5rIiwic2Nob29sIiwic2VydmljZSIsIiRodHRwIiwidGhpcyIsInBvc3QiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInRlbXBsYXRlVXJsIiwiJGxvY2F0aW9uIiwibmF2bGlua3MiLCJ0aXRsZSIsInBhdGgiLCJpc0FjdGl2ZSIsIm5hdmxpbmsiLCJjb250cm9sbGVyQXMiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJza2lsbHMiLCJhY3Rpdml0eSJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQUFDLE9BQUEsT0FDQSxVQUNBLGNDRkFELFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxhQUFBLFNBQUEsU0FBQUMsR0FDQUEsRUFBQUMsT0FBQSxlQ0ZBSixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsZUFBQSxTQUFBLFVBQUEsU0FBQUMsRUFBQUUsR0FDQUYsRUFBQUMsT0FBQSxjQUNBRCxFQUFBRyxPQUFBLFNBQ0FILEVBQUFJLGNBQUEsR0FDQUosRUFBQUssU0FDQUwsRUFBQU0sc0JBQUEsRUFDQU4sRUFBQU8sV0FBQSxFQUNBUCxFQUFBUSxPQUFBLFNBQUFDLEdBQ0FULEVBQUFPLFdBQUEsRUFDQVAsRUFBQU0sc0JBQUEsRUFDQUcsRUFBQUMsUUFDQUMsUUFBQUMsSUFBQSxnQkFDQUQsUUFBQUMsSUFBQVosRUFBQUssVUFDQUgsRUFBQVcsS0FBQWIsRUFBQUssVUFDQVMsUUFBQSxTQUFBQyxHQUNBSixRQUFBQyxJQUFBLGdCQUFBRyxHQUNBZixFQUFBZ0IscUJBQUEsRUFDQWhCLEVBQUFJLGNBQUEsZ0JBQ0FKLEVBQUFHLE9BQUEsZUFDQWMsTUFBQSxTQUFBRixHQUNBZixFQUFBTSxzQkFBQSxFQUNBTixFQUFBSSxjQUFBVyxFQUFBRyxRQUNBbEIsRUFBQUcsT0FBQSxnQkFHQUgsRUFBQU0sc0JBQUEsRUFDQU4sRUFBQUksY0FBQSxxQ0FDQUosRUFBQUcsT0FBQSxpQkM1QkFOLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxpQkFBQSxTQUFBLFNBQUFDLEdBQ0FBLEVBQUFDLE9BQUEsZ0JBRUFELEVBQUFtQixVQUVBQyxLQUFBLDhDQUNBQyxZQUFBLDRGQUNBQyxpQkFBQSwrRkFDQUMsT0FBQSxRQUdBSCxLQUFBLDBDQUNBQyxZQUFBLHVDQUNBQyxpQkFBQSw2QkFDQUMsT0FBQSxhQUdBSCxLQUFBLGlFQUNBQyxZQUFBLHdDQUNBQyxpQkFBQSwyQkFDQUMsT0FBQSxhQUdBSCxLQUFBLHVDQUNBQyxZQUFBLHNGQUNBQyxpQkFBQSxxR0FDQUMsT0FBQSxRQUdBSCxLQUFBLHlCQUNBQyxZQUFBLHVDQUNBQyxpQkFBQSx1Q0FDQUMsT0FBQSxlQ2pDQTFCLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxZQUFBLFNBQUEsU0FBQUMsR0FDQUEsRUFBQUMsT0FBQSxjQ0ZBSixRQUFBQyxPQUFBLE9BQ0EwQixRQUFBLFdBQUEsUUFBQSxTQUFBQyxHQUNBQyxLQUFBYixLQUFBLFNBQUFSLEdBQ0EsTUFBQW9CLEdBQUFFLEtBQUEsZ0JBQUF0QixPQ0hBUixRQUFBQyxPQUFBLE9BQ0E4QixVQUFBLFdBQUEsV0FDQSxPQUNBQyxTQUFBLElBQ0FDLFlBQUEsNEJBQ0EvQixZQUFBLFNBQUEsWUFBQSxTQUFBQyxFQUFBK0IsR0FFQS9CLEVBQUFnQyxXQUNBQyxNQUFBLE9BQUFDLEtBQUEsTUFDQUQsTUFBQSxRQUFBQyxLQUFBLFdBQ0FELE1BQUEsWUFBQUMsS0FBQSxlQUNBRCxNQUFBLFNBQUFDLEtBQUEsWUFDQUQsTUFBQSxVQUFBQyxLQUFBLGFBSUFsQyxFQUFBbUMsU0FBQSxTQUFBQyxHQUNBLE1BQUFBLEdBQUFGLE1BQUFILEVBQUFHLFFBQ0EsR0FFQSxLQUdBRyxhQUFBLGNDdkJBeEMsUUFBQUMsT0FBQSxPQUNBd0MsUUFBQSxpQkFBQSxTQUFBQyxHQUNBQSxFQUNBQyxLQUFBLEtBQ0FWLFlBQUEsdUJBQ0EvQixXQUFBLGFBRUF5QyxLQUFBLFVBQ0FWLFlBQUEsd0JBQ0EvQixXQUFBLGNBRUF5QyxLQUFBLGNBQ0FWLFlBQUEsNEJBQ0EvQixXQUFBLGtCQUVBeUMsS0FBQSxXQUNBVixZQUFBLHlCQUNBL0IsV0FBQSxlQUVBeUMsS0FBQSxZQUNBVixZQUFBLDBCQUNBL0IsV0FBQSxtQkNyQkFGLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxjQUFBLFNBQUEsU0FBQUMsR0FDQUEsRUFBQUMsT0FBQSxhQUNBRCxFQUFBeUMsU0FFQXJCLEtBQUEsYUFDQXNCLFNBQUEsWUFHQXRCLEtBQUEsWUFDQXNCLFNBQUEsWUFHQXRCLEtBQUEsUUFDQXNCLFNBQUEsWUFHQXRCLEtBQUEsTUFDQXNCLFNBQUEsWUFHQXRCLEtBQUEsVUFDQXNCLFNBQUEsWUFHQXRCLEtBQUEsVUFDQXNCLFNBQUEsWUFHQXRCLEtBQUEsTUFDQXNCLFNBQUEsV0FHQXRCLEtBQUEsUUFDQXNCLFNBQUEsV0FHQXRCLEtBQUEsU0FDQXNCLFNBQUEsV0FHQXRCLEtBQUEsWUFDQXNCLFNBQUEsV0FHQXRCLEtBQUEsT0FDQXNCLFNBQUEsVUFHQXRCLEtBQUEsUUFDQXNCLFNBQUEsVUFHQXRCLEtBQUEsVUFDQXNCLFNBQUEsVUFHQXRCLEtBQUEsS0FDQXNCLFNBQUEsVUFHQXRCLEtBQUEsZUFDQXNCLFNBQUEsVUFHQXRCLEtBQUEsTUFDQXNCLFNBQUEsWUFHQXRCLEtBQUEsU0FDQXNCLFNBQUEsWUFHQXRCLEtBQUEsZ0JBQ0FzQixTQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICduZ1JvdXRlJyxcbiAgJ25nQW5pbWF0ZSdcbl0pO1xuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQWJvdXRDdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcbiAgJHNjb3BlLnBhZ2VJZCA9ICdhYm91dFBhZ2UnXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQ29udGFjdEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIE1haWxTdmMpe1xuXHQkc2NvcGUucGFnZUlkID0gJ2NvbnRhY3RQYWdlJ1xuXHQkc2NvcGUucmVzdWx0ID0gJ2hpZGRlbic7XG5cdCRzY29wZS5yZXN1bHRNZXNzYWdlID0gXCJcIjtcblx0JHNjb3BlLmZvcm1EYXRhO1xuXHQkc2NvcGUuc3VibWl0QnV0dG9uRGlzYWJsZWQgPSBmYWxzZTtcblx0JHNjb3BlLnN1Ym1pdHRlZCA9IGZhbHNlO1xuXHQkc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24oY29udGFjdGZvcm0pe1xuXHRcdCRzY29wZS5zdWJtaXR0ZWQgPSB0cnVlO1xuXHRcdCRzY29wZS5zdWJtaXRCdXR0b25EaXNhYmxlZCA9IHRydWU7XG5cdFx0aWYgKGNvbnRhY3Rmb3JtLiR2YWxpZCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJwb3N0aW5nIG1haWxcIik7XG5cdFx0XHRjb25zb2xlLmxvZygkc2NvcGUuZm9ybURhdGEpO1xuXHRcdFx0TWFpbFN2Yy5zZW5kKCRzY29wZS5mb3JtRGF0YSlcblx0XHRcdC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlJldHVybiBkYXRhOiBcIiArIGRhdGEpO1xuXHRcdFx0XHQkc2NvcGUuc3VibWl0QnV0dG9uRGlzYWJsZSA9IHRydWU7XG5cdFx0XHRcdCRzY29wZS5yZXN1bHRNZXNzYWdlID0gXCJNZXNzYWdlIHNlbnQhXCI7XG5cdFx0XHRcdCRzY29wZS5yZXN1bHQgPSAnYmctc3VjY2Vzcyc7XG5cdFx0XHR9KS5lcnJvcihmdW5jdGlvbihkYXRhLCBzdGF0dXMpe1xuXHRcdFx0XHQkc2NvcGUuc3VibWl0QnV0dG9uRGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0JHNjb3BlLnJlc3VsdE1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG5cdFx0XHRcdCRzY29wZS5yZXN1bHQ9J2JnLWRhbmdlcic7XG5cdFx0XHR9KTtcblx0XHR9ZWxzZXtcblx0XHRcdCRzY29wZS5zdWJtaXRCdXR0b25EaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0JHNjb3BlLnJlc3VsdE1lc3NhZ2UgPSAnRmFpbGVkOiBQbGVhc2UgZmlsbCBvdXQgYWxsIGZpZWxkcyc7XG5cdFx0XHQkc2NvcGUucmVzdWx0PSdiZy1kYW5nZXInO1xuXHRcdH1cblx0fVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdFZHVjYXRpb25DdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcblx0JHNjb3BlLnBhZ2VJZCA9ICdlZHVjYXRpb25QYWdlJ1xuXHQvL2RlZmluZXMgY29tcGxldGVkIGNvdXJzZXMgaW4gY29udGludWluZyBlZHVjYXRpb24gc2VjdGlvblxuXHQkc2NvcGUuY291cnNlcyA9IFtcblx0XHR7XG5cdFx0XHRuYW1lOiAnQmVya2VsZXlYOiBDUzE4OC4xeCBBcnRpZmljaWFsIEludGVsbGlnZW5jZScsXG5cdFx0XHRjb3Vyc2VfbGluazogJ2h0dHBzOi8vd3d3LmVkeC5vcmcvY291cnNlL3VjLWJlcmtlbGV5eC91Yy1iZXJrZWxleXgtY3MxODgtMXgtYXJ0aWZpY2lhbC01NzkjLlUwSGREUGxkWG5nJyxcblx0XHRcdGNlcnRpZmljYXRlX2xpbms6ICcvL3MzLmFtYXpvbmF3cy5jb20vdmVyaWZ5LmVkeC5vcmcvZG93bmxvYWRzLzA2MDYwYjg1NjlkYTRkZTVhN2FiNThiMTM4NTkxODhjL0NlcnRpZmljYXRlLnBkZicsXG5cdFx0XHRzY2hvb2w6ICdlZHgnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiAnQWxnb3JpdGhtczogRGVzaWduIGFuZCBBbmFseXNpcywgUGFydCAxJyxcblx0XHRcdGNvdXJzZV9saW5rOiAnaHR0cHM6Ly93d3cuY291cnNlcmEub3JnL2NvdXJzZS9hbGdvJyxcblx0XHRcdGNlcnRpZmljYXRlX2xpbms6ICdmaWxlcy9hbGdvLWNlcnRpZmljYXRlLnBkZicsXG5cdFx0XHRzY2hvb2w6ICdjb3Vyc2VyYSdcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdHZW5lcyBhbmQgdGhlIEh1bWFuIENvbmRpdGlvbiAoRnJvbSBCZWhhdmlvciB0byBCaW90ZWNobm9sb2d5KScsXG5cdFx0XHRjb3Vyc2VfbGluazogJ2h0dHBzOi8vd3d3LmNvdXJzZXJhLm9yZy9jb3Vyc2UvZ2VuZXMnLFxuXHRcdFx0Y2VydGlmaWNhdGVfbGluazogJ2ZpbGVzL0NvdXJzZXJhLWdlbmVzLnBkZicsXG5cdFx0XHRzY2hvb2w6ICdjb3Vyc2VyYSdcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6ICdIYXJ2YXJkWDogUEgyMDF4OiBIZWFsdGggYW5kIFNvY2lldHknLFxuXHRcdFx0Y291cnNlX2xpbms6ICdodHRwczovL3d3dy5lZHgub3JnL2NvdXJzZS9oYXJ2YXJkeC9oYXJ2YXJkeC1waDIwMXgtaGVhbHRoLXNvY2lldHktOTA1Iy5VMEhlR3ZsZFhuZycsXG5cdFx0XHRjZXJ0aWZpY2F0ZV9saW5rOiAnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3ZlcmlmeS5lZHgub3JnL2Rvd25sb2Fkcy85ZDE5YmQ2NjFmNTI0N2U5ODE2Mjc4MTU5Yzk3MjU5OC9DZXJ0aWZpY2F0ZS5wZGYnLFxuXHRcdFx0c2Nob29sOiAnZWR4J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogJ0hUTUw1IEdhbWUgRGV2ZWxvcG1lbnQnLFxuXHRcdFx0Y291cnNlX2xpbms6ICdodHRwczovL3d3dy51ZGFjaXR5LmNvbS9jb3Vyc2UvY3MyNTUnLFxuXHRcdFx0Y2VydGlmaWNhdGVfbGluazogJ2ZpbGVzL2h0bWw1LWdhbWUtZGV2LWNlcnRpZmljYXRlLnBkZicsXG5cdFx0XHRzY2hvb2w6ICd1ZGFjaXR5J1xuXHRcdH1cblx0XTtcblxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdIb21lQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSl7XG4gICRzY29wZS5wYWdlSWQgPSAnaG9tZVBhZ2UnXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnTWFpbFN2YycsIGZ1bmN0aW9uICgkaHR0cCl7XG5cdHRoaXMuc2VuZCA9IGZ1bmN0aW9uKGZvcm1EYXRhKXtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZW5kbWFpbCcsIGZvcm1EYXRhKTtcblx0fVxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5kaXJlY3RpdmUoJ25hdlBhbmVsJywgZnVuY3Rpb24oKXtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9uYXYtcGFuZWwuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogZnVuY3Rpb24oJHNjb3BlLCAkbG9jYXRpb24pe1xuXHRcdFx0Ly9zdG9yZXMgc2l0ZSBsaW5rc1xuXHRcdFx0JHNjb3BlLm5hdmxpbmtzID0gW1xuXHRcdFx0XHR7dGl0bGU6ICdIb21lJyxcdHBhdGg6ICcvJ30sXG5cdFx0XHRcdHt0aXRsZTogJ0Fib3V0JywgcGF0aDogJy9hYm91dCd9LFxuXHRcdFx0XHR7dGl0bGU6ICdFZHVjYXRpb24nLCBwYXRoOiAnL2VkdWNhdGlvbid9LFxuXHRcdFx0XHR7dGl0bGU6ICdTa2lsbHMnLCBwYXRoOiAnL3NraWxscyd9LFxuXHRcdFx0XHR7dGl0bGU6ICdDb250YWN0JywgcGF0aDogJy9jb250YWN0J31cblx0XHRcdF07XG5cblx0XHRcdC8vY2hlY2sgaWYgbGluayBpcyBmb3IgdGhlIGFjdGl2ZSBwYWdlLCBhbmQgaWYgc28gcmV0dXJucyB0cnVlXG5cdFx0XHQkc2NvcGUuaXNBY3RpdmUgPSBmdW5jdGlvbihuYXZsaW5rKXtcblx0XHRcdFx0aWYgKG5hdmxpbmsucGF0aCA9PSAkbG9jYXRpb24ucGF0aCgpKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0Y29udHJvbGxlckFzOiAnbmF2cGFuZWwnXG5cdH07XG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlcil7XG5cdCRyb3V0ZVByb3ZpZGVyXG5cdFx0LndoZW4oJy8nLCB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvaG9tZS5odG1sJyxcblx0XHRcdGNvbnRyb2xsZXI6ICdIb21lQ3RybCdcblx0XHR9KVxuXHRcdC53aGVuKCcvYWJvdXQnLCB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvYWJvdXQuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnQWJvdXRDdHJsJ1xuXHRcdH0pXG5cdFx0LndoZW4oJy9lZHVjYXRpb24nLCB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvZWR1Y2F0aW9uLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ0VkdWNhdGlvbkN0cmwnXG5cdFx0fSlcblx0XHQud2hlbignL3NraWxscycsIHtcblx0XHRcdHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9za2lsbHMuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnU2tpbGxzQ3RybCdcblx0XHR9KVxuXHRcdC53aGVuKCcvY29udGFjdCcsIHtcblx0XHRcdHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9jb250YWN0Lmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ0NvbnRhY3RDdHJsJ1xuXHRcdH0pXG59KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1NraWxsc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUpe1xuICAkc2NvcGUucGFnZUlkID0gJ3NraWxsc1BhZ2UnO1xuICAkc2NvcGUuc2tpbGxzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdKYXZhU2NyaXB0JyxcbiAgICAgIGFjdGl2aXR5OiAnQ3VycmVudCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBbmd1bGFySlMnLFxuICAgICAgYWN0aXZpdHk6ICdDdXJyZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0hUTUw1JyxcbiAgICAgIGFjdGl2aXR5OiAnQ3VycmVudCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDU1MnLFxuICAgICAgYWN0aXZpdHk6ICdDdXJyZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ05vZGUuanMnLFxuICAgICAgYWN0aXZpdHk6ICdDdXJyZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ01vbmdvREInLFxuICAgICAgYWN0aXZpdHk6ICdDdXJyZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1BIUCcsXG4gICAgICBhY3Rpdml0eTogJ1JlY2VudCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTXlTUUwnLFxuICAgICAgYWN0aXZpdHk6ICdSZWNlbnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRHJ1cGFsJyxcbiAgICAgIGFjdGl2aXR5OiAnUmVjZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1dvcmRwcmVzcycsXG4gICAgICBhY3Rpdml0eTogJ1JlY2VudCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdKYXZhJyxcbiAgICAgIGFjdGl2aXR5OiAnUnVzdHknXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQy9DKysnLFxuICAgICAgYWN0aXZpdHk6ICdSdXN0eSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdBU1AuTkVUJyxcbiAgICAgIGFjdGl2aXR5OiAnUnVzdHknXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQyMnLFxuICAgICAgYWN0aXZpdHk6ICdSdXN0eSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdWaXN1YWwgQmFzaWMnLFxuICAgICAgYWN0aXZpdHk6ICdSdXN0eSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdHaXQnLFxuICAgICAgYWN0aXZpdHk6ICdDdXJyZW50J1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1B5dGhvbicsXG4gICAgICBhY3Rpdml0eTogJ0N1cnJlbnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTVMgU1FMIFNlcnZlcicsXG4gICAgICBhY3Rpdml0eTogJ1J1c3R5J1xuICAgIH1cbiAgXTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9