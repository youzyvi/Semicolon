const curriculumSets = [
  [
    ["TOPIC 1: Programming Basics", "Printing text, collecting input, variables, data types, and simple calculations."],
    ["TOPIC 2: Control Flow", "If statements, loops, and tracing what the computer does line by line."],
    ["TOPIC 3: Functions", "Writing reusable code and breaking a problem into smaller steps."]
  ],
  [
    ["TOPIC 4: Arrays and Strings", "Storing lists of values, working with text, and avoiding off-by-one errors."],
    ["TOPIC 5: Debugging", "Reading error messages, checking output, and finding the line that caused the problem."],
    ["TOPIC 6: Mini Projects", "Build small programs like calculators, quiz games, and pattern printers."]
  ]
];

const topicsPanel = document.getElementById("curriculum-topics");
const curriculumArrow = document.querySelector(".curriculum-arrow");

if (topicsPanel && curriculumArrow) {
  let showingLaterTopics = false;

  function renderTopics() {
    topicsPanel.innerHTML = curriculumSets[Number(showingLaterTopics)]
      .map(([title, description]) => `<p class="topic-item"><span>${title}</span><br><span class="topic-detail">• ${description}</span></p>`)
      .join("");
    curriculumArrow.setAttribute("aria-expanded", String(showingLaterTopics));
    curriculumArrow.setAttribute("aria-label", showingLaterTopics ? "Show topics one to three" : "Show topics four to six");
    curriculumArrow.classList.toggle("is-open", showingLaterTopics);
  }

  curriculumArrow.addEventListener("click", () => {
    showingLaterTopics = !showingLaterTopics;
    renderTopics();
  });

  renderTopics();
}
