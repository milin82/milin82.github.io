var bio = {
	"name" : "Milin Patel",
	"role" : "Engineer",
	"contacts" : {
		"email" : "milin82@gmail.com",
		"location" : "East Windsor, NJ",
		"github" : "@milin82",
		"twitter" : "@milin82",
		"blog" : "milin82.tumblr.com"
	},
	//"contact info" : "milin82@gmail.com",
	"pictureURL" : "http://simpleicon.com/wp-content/uploads/Code-Optimization.png",
	"welcomemessage" : "Hello All, welcome to my site!",
	"summary" : "Leading a cross-functional DevOps team responsible for empowering developers across the organization by providing them with secure infrastructure code, deployment tools, automation scripts, monitoring and alerting tools. Over 5 years of experience in Performance and Network Engineering with expertise in TCP/IP Networking, Wireless LANs, Routing, Switching, Load Balancing, Application Performance Monitoring and Security.",
	"skills" : ["DevOps", "Software Development", "PaaS", "Cloud", "Architecture", "TCP/IP Networking", "Web and Application Performance Management"]
}

var education = {
	"schools" : [
		{
			"name" : "Stevens Institute of Technology",
			"degree" : "Masters in Electrical Engineering",
			"location" : "Hoboken, NJ",
			"gpa" : "3.9/ 4.0",
			"coursework" : ["Management of LANs", "Information Networks", "Wireless System Security", "CyberSecurity", "Information System Security", "TCP/IP Networking"],
			"dates" : "2008"
		}, 
		{
			"name" : "Sarvajanik College of Engineering and Technology",
			"degree" : "Bachelors of Engineering in Electronics and Communication",
			"location" : "Surat, India",
			"gpa" : "NA",
			"coursework" : ["Computer Communication and Networking", "Mobile Communication", "Telematics", "Modern Communication Systems", "Analog & Digital Communication"],
			"dates" : "2004"
		}
	],
	"onlinecourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud804"
		}
	]
}
education.display = function(){
	for(var school in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last a").append(formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation).append('<br>');
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for(var onlinecourse in education.onlinecourses){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[onlinecourse].title).replace('#', education.onlinecourses[onlinecourse].url);
		//$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[onlinecourse].school);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlinecourses[onlinecourse].dates);
		$(".education-entry:last").append(formattedOnlineDates).append('<br>');
//		$(".education-entry:last").append(formattedOnlineURL);
	}
}
education.display();
var work = {
	"jobs" : [  
		{
			"employer" : "Dow Jones",
			"title" : "Head of DevOps",
			"location" : "South Brunswick, NJ",
			"dates" : "Jul'14 - Present",
			"description" : "Leading a cross-functional DevOps team that is responsible for building infrastructure code to empower Developers across Dow Jones supporting several customer-facing products. The team is responsible for building cloud based application architectures that are secure, scalable, performant and operationally efficient."
		}, 
		{
			"employer" : "Dow Jones",
			"title" : "DevOps-Core Manager, Engineer",
			"location" : "South Brunswick, NJ",
			"dates" : "Mar'13 - Jul'14",
			"description" : "Responsible for building cloud based architectures and frameworks, automation and systems engineering"
		}, 
		{
			"employer" : "Dow Jones",
			"title" : "IT Manager, End User Technology",
			"location" : "South Brunswick, NJ",
			"dates" : "Mar'11 - Feb'13",
			"description" : "Develop Strategy and Architecture for End User Technology (internal) and deliver innovative solutions in the Mobility, Collaboration and Compute space with the end goal of increasing End User Productivity"
		},
		{
			"employer" : "Dow Jones",
			"title" : "Senior Performance Engineer",
			"location" : "South Brunswick, NJ",
			"dates" : "Feb'09 - Feb'11",
			"description" : "Responsible for end to end Performance Monitoring and Capacity Planning for all business-critical applications, networks and systems within Dow Jones"
		},	
		{
			"employer" : "Dow Jones",
			"title" : "Senior Network Analyst",
			"location" : "South Brunswick, NJ",
			"dates" : "Aug'07 - Feb'09",
			"description" : "Responsible for developing Network Designs based on Business Requirements; present the Design to Design Review team; Implement and Verify the approved Design"
		},
		{
			"employer" : "Reliance Infocomm",
			"title" : "Network Engineer",
			"location" : "Vadodara, India",
			"dates" : "Jul'04 - Dec'05",
			"description" : "Worked on Implementation and Deployment of Metro Ethernet Network for Broadband Solutions, which included configuration and commissioning of Cisco switches. Responsible for planning, installation and troubleshooting of UTSTARCom DLCs (Digital Loop Carrier) for wireline services"
		}
	]
}

var projects = {
	"hardwareprojects" : ["Wireless Communication Link using FM", "Microprocessor based E-Home"],
	"paperpresentations" : ["Electronic Banking Security", "Mobile Commerce Security", "Interplanetary Internet", "Intrusion Detection Systems", "Multi Protocol Label Switching"]
}

bio.display = function(){
	//$("#header").append(HTMLcontactGeneric);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts").append(formattedBlog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	$("#header").append(formattedPic);
	var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomemessage);
	$("#header").append(formattedMsg);
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(var i=0; i<bio.skills.length; i++){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);				
		}
	}
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#footerContacts").append(formattedEmail).append(formattedTwitter).append(formattedGithub)
	
}
bio.display();

function displayWork(){
	for(var j=0; j<work.jobs.length; j++){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		//console.log(formattedEmployerTitle);
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();
/*
var temp = "milin";
console.log(temp.toUpperCase());

$("#main").append(internationalizeButton);
var nameString = "";
function inName(nameString){
	var splitName = [];
	//nameString = nameString.prototype.toUpperCase();
	splitName = nameString.split(' ');
	splitName[1] = splitName[1].toUpperCase();
	//var formattedsplitName = splitName.replace(splitName[1], splitName[1].prototype.toUpperCase());
	var newNameString = splitName[0] + " " + splitName[1];
	return(newNameString);
}
console.log(inName("milin patel"));
*/



projects.display = function(){
	for(p1 in projects.hardwareprojects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.hardwareprojects[p1]);
		//console.log(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectTitle);	
	}
	for(p2 in projects.paperpresentations){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.paperpresentations[p2]);
		//console.log(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectTitle);	
	}
}
projects.display();



$("#mapDiv").append(googleMap);

