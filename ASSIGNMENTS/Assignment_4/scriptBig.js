console.log("Executing");

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


function changeFall(){
	document.getElementById("courseName1").innerHTML = "COSC-2P03";
	document.getElementById("courseName2").innerHTML = "COSC-2P12";
	document.getElementById("courseName3").innerHTML = "COSC-2P89";
	document.getElementById("courseName4").innerHTML = "MATH-1P12";
	document.getElementById("courseName5").innerHTML = "IASC-1P02";

	document.getElementById("courseDes1").innerHTML = "Implementation and use of advanced data structures including trees, graphs, hash tables and advanced list structures, sorting and searching, recursion and traversals. Analysis of algorithms.";
	document.getElementById("courseDes2").innerHTML = "Evolution of digital computer. Computer organization including functional units, instruction cycle, control, buses and memory. Instruction types and memory access, instruction sequencing and call/return. Basic assembly language programming.";
	document.getElementById("courseDes3").innerHTML = "Concepts and techniques required for building and maintaining advanced interactive Web sites. Topics include XML and SGML, database connectivity and forms handling, basic animation, graphics optimization for the Web, scripting, advanced searching, Web design for accessibility.";
	document.getElementById("courseDes4").innerHTML = "Systems of linear equations with applications. Matrix algebra. Determinants. Vector geometry in R2 and R3 dot product, norm and projections, cross product, lines and planes. Complex numbers. Euclidean n-space. Linear transformations from Rn to Rm. Focus on applications of linear algebra to sciences and integrated use of a computer algebra system.";
	document.getElementById("courseDes5").innerHTML = "Principles of interactive website creation and design. Formatting, lists, images, links and tables with HTML. Web colour and graphics formats. Typography and layout with CSS. Buttons, rollovers and forms with JavaScript. Usability, accessibility and interactivity. Creation of public interactive web-based projects using modern development techniques.";

	document.getElementById("courseLink1").href = "https://brocku.ca/webcal/2020/undergrad/cosc.html#COSC_2P03";
	document.getElementById("courseLink2").href = "https://brocku.ca/webcal/2020/undergrad/cosc.html#COSC_2P12";
	document.getElementById("courseLink3").href = "https://brocku.ca/webcal/2020/undergrad/cosc.html#COSC_2P89";
	document.getElementById("courseLink4").href = "https://brocku.ca/webcal/2020/undergrad/math.html#MATH_1P12";
	document.getElementById("courseLink5").href = "https://brocku.ca/webcal/2020/undergrad/iasc.html#IASC_1F02";
}

function changeWinter(){
	document.getElementById("courseName1").innerHTML = "COSC-2P05";
	document.getElementById("courseName2").innerHTML = "COSC-2P13";
	document.getElementById("courseName3").innerHTML = "MATH-1P98";
	document.getElementById("courseName4").innerHTML = "ENTR-2P51";
	document.getElementById("courseName5").innerHTML = "FNCE-2P51";

	document.getElementById("courseDes1").innerHTML = "Fundamental concepts of programming languages including syntax, semantics, program translation, virtual machines, control, data types, multi-threading, exception handling and abstraction mechanisms. Introduction to programming paradigms including imperative, applicative, logic and object-oriented.";
	document.getElementById("courseDes2").innerHTML = "Operating systems and networking. Resource sharing including file, processor, I/O and memory management. Concurrency including: context switching, interprocess communication, and synchronization. Protection and security including encryption. Distributed systems and networking including: ISO model and packet routing.";
	document.getElementById("courseDes3").innerHTML = "Descriptive statistics; probability of events; counting rules; discrete and continuous probability distributions: binomial, Poisson and normal distributions; Central Limit Theorem; confidence intervals and hypothesis testing; analysis of variance; contingency tables; correlation and regression; emphasis on real-world applications throughout; use of statistical computer software.";
	document.getElementById("courseDes4").innerHTML = "Entrepreneurs and the new venture creation process: attributes of entrepreneurs and the processes involved in successfully launching new enterprises.";
	document.getElementById("courseDes5").innerHTML = "Criteria used in making investment decisions, risk concepts and the valuation of assets, a financial analysis, forecasting and leverage, the theory of interest, valuation and capital budgeting.";

	document.getElementById("courseLink1").href = "https://brocku.ca/webcal/2020/undergrad/cosc.html#COSC_2P05";
	document.getElementById("courseLink2").href = "https://brocku.ca/webcal/2020/undergrad/cosc.html#COSC_2P13";
	document.getElementById("courseLink3").href = "https://brocku.ca/webcal/2020/undergrad/cosc.html#COSC_2P89";
	document.getElementById("courseLink4").href = "https://brocku.ca/webcal/2020/undergrad/busi.html#ENTR_2P51";
	document.getElementById("courseLink5").href = "https://brocku.ca/webcal/2020/undergrad/busi.html#FNCE_2P51";
}

var i = 0;
var txt = 'Afternoon Everyone, Welcome to IASC 1P02. Im Jess Bradshaw and Ill be your instructor for the course and Ill be assisted by our TA Tynan this term. I look forward to learning together with you as we move through the course. IASC 1P02 will be fully online course this year. That means that all our course activities will be online. Some of the activities youll be able to complete at your own pace, and some of them will be scheduled throughout the week. Youll be expected to watch all assigned videos, review all assigned resources, and complete all labs each week.The Sakai site is now available for you all to access. Right now only the course overview, course outline, and Module One are available to access. As we move along in the course more content will become available each Monday at 9am. Please take the time to review the Course Overview (including required software and videos) and the Course Outline. Module One is available now for review and Lab One is available to be completed. New Modules will be posted each Monday at 9am, and Weekly Labs and Course Assignments are generally due the following Sunday.'

txt = txt + 'This is a short week, but there is a full module posted for you. Please take the time to review the content and complete the lab by Sunday (Sept 12th).'

txt = txt + 'The Labs for this course will occur live each week at a consistent time after giving you some time to review the weeks lecture content. The online video labs will require a microphone to ensure you and the lab leader to discuss the content and answer questions effectively. A headset style microphone is best to prevent feedback noise. The scheduled weekly labs are available in our Teams site at: Updated Teams Link'

txt = txt + 'Our first assignment will be due September 26th. This just a friendly reminder (the first of many) that this course goes a little quick. Please keep on top of the lecture and lab content each week to ensure youre able to complete your assessments effectively.' 

txt = txt + 'Finally, if you have any informal questions, or just want to talk about the course visit the MS Teams site. This is a place to chat about the course. Formal announcements will come through the Sakai Announcements tool. More formal question can be directed to myself or to Tynan.'

txt = txt + 'Sorry for the long email. I look forward to chatting with each of you throughout the course and learning together.' 

txt = txt + '-Jess';
var speed = 10;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}