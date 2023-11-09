// FOR NAVBAR

const navEl = document.getElementById("nav");
const navBtn = document.getElementById("nav-btn");

navBtn.addEventListener("click", () => {
	navEl.classList.toggle("show");
});

const joinUsBtn = document.getElementById("joinUsButton");

// FOR BLOGS

const blogsCon = document.getElementById("blogsCon");

const blogListArray = [
	{
		blogImageLink: "images/SOUTH CHINA SEA DISPUTE (1).png",
		blogHeading: "South China Sea Dispute",
		blogBy: "Rudraksh Aneja",
		blogDescription:
			"This research paper examines the South China Sea dispute, a volatile territorial conflict involving multiple nations, with a particular focus on the role of the United Nations.",
		blogLink: "/blogs/china-dispute.html",
	},
	{
		blogImageLink: "images/Thumbnail for blog.png",
		blogHeading: "Israel-Palestine Conflict",
		blogBy: "Rudraksh Aneja",
		blogDescription:
			"This research paper delves into the complex Israel-Palestine conflict, exploring the question of international law as a means to address and potentially resolve the longstanding dispute.",
		blogLink: "/blogs/israel-palestine-conflict.html",
	},
	{
		blogImageLink: "images/Unveiling the Aadhar Data Breach.png",
		blogHeading: "Rohingya Crisis",
		blogBy: "Rudraksh Aneja",
		blogDescription:
			"India's approach to the Rohingya crisis involves a delicate balance between national security interests and humanitarian concerns.",
	},
];

function elementFromHtml(html) {
	const template = document.createElement("template");
	template.innerHTML = html.trim();
	return template.content.firstElementChild;
}

function createAndAppendBlog(item) {
	let myHtml = elementFromHtml(`
  <a href="${item.blogLink}" style="margin: 20px;">
    <div class="blog2">
        <div class="blog-img-con">
          <div class="blog-img" style="background-image: url('${item.blogImageLink}')"></div>
        </div>
        <div class="blog-description">
          <h1 class="blog-des-head">${item.blogHeading}</h1>
          <p class="blog-des-para">${item.blogDescription}</p>
        </div>
    </div>
  </a>  
  `);

	blogsCon.appendChild(myHtml);
}

for (let item of blogListArray) {
	createAndAppendBlog(item);
}
