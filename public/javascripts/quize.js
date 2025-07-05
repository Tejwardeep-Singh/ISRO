document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quize-form");
    
    if (!form) {
        console.error("Quiz form not found!");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let score = 0;
        const correctAnswers = {
            q1: "A",
            q2: "A",
            q3: "A",
            q4: "C",
            q5: "D",
            q6: "A",
            q7: "B",
            q8: "A",
            q9: "C",
            q10: "A"
        };

        for (let q in correctAnswers) {
            const selected = document.querySelector(`input[name="${q}"]:checked`);
            if (selected && selected.value === correctAnswers[q]) {
                score++;
            }
        }

        document.getElementById("result").innerText = `Your score: ${score}/10`;
        document.getElementById("result").style.display = "flex";
    });
});
