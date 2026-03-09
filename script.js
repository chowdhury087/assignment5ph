const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

function login() {

  let user = document.getElementById("username").value
  let pass = document.getElementById("password").value

  if (user === "admin" && pass === "admin123") {
    location.href = "home.html"
  } else {
    alert("Invalid login")
  }

}

async function loadIssues(type = "all") {

  let spinner = document.getElementById("spinner")
  spinner.style.display = "block"

  let res = await fetch(API)
  let data = await res.json()

  let issues = data.data

  if (type === "open") {
    issues = issues.filter(i => i.status === "open")
  }

  if (type === "closed") {
    issues = issues.filter(i => i.status === "closed")
  }

  document.getElementById("issueCount").innerText = issues.length + " Issues"

  displayIssues(issues)

  spinner.style.display = "none"

}

function displayIssues(issues) {

  let container = document.getElementById("issuesContainer")

  container.innerHTML = ""

  issues.forEach(issue => {

    let card = document.createElement("div")

    card.className = "card"

    if (issue.status === "closed") {
      card.classList.add("closed")
    }

    const statusIcon = issue.status === "open" ? "Open-Status.png" : "Closed-Status.png"

    card.innerHTML = `

<img src="assets/${statusIcon}" class="status-icon" alt="${issue.status} status">

<h3>${issue.title}</h3>

<p>${issue.description}</p>

<div>
<span class="badge bug">BUG</span>
<span class="badge help">HELP WANTED</span>
</div>

<p>#${issue.id} by ${issue.author}</p>

<p>${new Date(issue.createdAt).toLocaleDateString()}</p>

<p class="badge priorityBadge ${issue.priority.toLowerCase()}">
${issue.priority.toUpperCase()}
</p>

`

    card.onclick = () => openModal(issue)

    container.appendChild(card)

  })

}

function changeTab(btn, type) {

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"))

  btn.classList.add("active")

  loadIssues(type)

}

function openModal(issue) {

  document.getElementById("modal").style.display = "block"

  document.getElementById("modalTitle").innerText = issue.title

  const statusBadge = document.getElementById("modalStatusBadge")
  statusBadge.innerText = issue.status.charAt(0).toUpperCase() + issue.status.slice(1)
  statusBadge.className = `status-badge ${issue.status}`

  const date = new Date(issue.createdAt).toLocaleDateString('en-GB').replace(/\//g, '/')
  document.getElementById("modalMetaInfo").innerText = `Opened by ${issue.author} . ${date}`

  document.getElementById("modalDesc").innerText = issue.description

  document.getElementById("modalAuthor").innerText = issue.author
  const priorityBadge = document.getElementById("modalPriority")
  priorityBadge.innerText = issue.priority.toUpperCase()
  priorityBadge.className = `priority-badge ${issue.priority.toLowerCase()}`

}

function closeModal() {
  document.getElementById("modal").style.display = "none"
}

async function searchIssue() {

  let text = document.getElementById("searchInput").value

  let res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)

  let data = await res.json()

  displayIssues(data.data)

}

loadIssues()