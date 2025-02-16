document.getElementById("searchIcon").addEventListener("click", function () {
    let searchBox = document.getElementById("searchBox");
    searchBox.style.display = searchBox.style.display === "block" ? "none" : "block";
  });
  
  function closeSearchBox() {
    document.getElementById("searchBox").style.display = "none";
  }
  