init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workplan = await API.getLastWorkout();
    if (workplan) {
      location.search = "?id=" + workplan._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

