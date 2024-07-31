let header = document.createElement("header");
header.className = "topbar-wrapper";
header.innerHTML = `
    <div class="topbar-container">
      <div class="topbar-text">steelylulu</div>
      <nav>
        <ul class="topbar-links">
          <li><a href="./index.html">Home</a></li>
          <li><a href="./projects.html">Projects</a></li>
          <li><a href="./hobbies.html">Hobbies</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
`;

const firstChild = document.body.firstChild;
document.body.insertBefore(header, firstChild);
