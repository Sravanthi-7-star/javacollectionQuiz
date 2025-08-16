window.onload = () => {
  const quizContainer = document.getElementById("quiz-container");

  questions.forEach((q, index) => {
    const questionBlock = document.createElement("div");
    questionBlock.classList.add("question-block");

    const questionTitle = document.createElement("h3");
    questionTitle.innerText = `${index + 1}. ${q.question}`;
    questionBlock.appendChild(questionTitle);

    const optionsList = document.createElement("ul");
    optionsList.classList.add("options");

    q.options.forEach((option, idx) => {
      const optionItem = document.createElement("li");
      optionItem.innerText = option;
      optionItem.addEventListener("click", () => {
        if (optionItem.classList.contains("correct") || optionItem.classList.contains("incorrect")) {
          return; // prevent re-selection
        }
        if (idx === q.answer) {
          optionItem.classList.add("correct");
        } else {
          optionItem.classList.add("incorrect");
          optionsList.children[q.answer].classList.add("correct");
        }
      });
      optionsList.appendChild(optionItem);
    });

    questionBlock.appendChild(optionsList);
    quizContainer.appendChild(questionBlock);
  });
};
