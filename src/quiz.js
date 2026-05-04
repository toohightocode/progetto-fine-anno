// Quiz sulla Cittadinanza Digitale
// Autore: Edoardo Gozzi, Dave Bill Agbekornu

const quizData = [
    {
        id: 1,
        question: "Cosa significa 'Netiquette'?",
        options: [
            "Una tecnica di hacking etico",
            "Le regole di comportamento educato online",
            "Un software per la sicurezza informatica",
            "Un protocollo di rete avanzato"
        ],
        correct: 1
    },
    {
        id: 2,
        question: "Qual è la prima cosa da fare se subisci cyberbullismo?",
        options: [
            "Rispondere con insulti al bullo",
            "Ignorare la situazione e sperare che passi",
            "Non rispondere alle provocazioni e documentare le prove",
            "Creare un profilo falso per vendicarsi"
        ],
        correct: 2
    },
    {
        id: 3,
        question: "Nella regola dello STOP, la 'S' sta per:",
        options: [
            "Sicurezza",
            "Sorgente",
            "Sostegno",
            "Sensibilità"
        ],
        correct: 1
    },
    {
        id: 4,
        question: "Per verificare se una notizia è vera è importante:",
        options: [
            "Condividerla subito per avere pareri",
            "Controllare solo il titolo",
            "Confrontare la notizia su più fonti affidabili",
            "Credere alla prima fonte che la pubblica"
        ],
        correct: 2
    },
    {
        id: 5,
        question: "Quale di questi NON è un segnale di cyberbullismo?",
        options: [
            "Ansia quando si ricevono notifiche",
            "Aumento dell'attività sui social",
            "Isolamento sociale",
            "Paura di andare a scuola"
        ],
        correct: 1
    },
    {
        id: 6,
        question: "Il 'Digital Detox' consiste nel:",
        options: [
            "Pulire lo schermo del dispositivo",
            "Prendere pause regolari dai dispositivi digitali",
            "Installare antivirus avanzati",
            "Creare backup dei propri dati"
        ],
        correct: 1
    },
    {
        id: 7,
        question: "La privacy digitale riguarda:",
        options: [
            "Solo le password degli account",
            "La gestione consapevole delle informazioni personali online",
            "La velocità della connessione internet",
            "Il costo degli abbonamenti online"
        ],
        correct: 1
    },
    {
        id: 8,
        question: "Per proteggere i propri dati personali è consigliato:",
        options: [
            "Usare la stessa password per tutti gli account",
            "Condividere i dati su tutti i social network",
            "Usare password diverse e l'autenticazione a due fattori",
            "Salvare le password in un file di testo sul desktop"
        ],
        correct: 2
    }
];

let answeredQuestions = new Set();

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    answeredQuestions.clear();
    document.getElementById('quiz-result').classList.add('hidden');

    quizData.forEach((q, index) => {
        const questionEl = document.createElement('div');
        questionEl.id = `question-${q.id}`;
        questionEl.className = 'pb-6 border-b border-gray-100 last:border-0';

        let optionsHtml = '';
        q.options.forEach((opt, optIndex) => {
            optionsHtml += `
                <label class="option-label flex items-start gap-3 p-3 transition-colors border border-gray-200 rounded-lg cursor-pointer hover:bg-orange-50 hover:border-orange-300" data-qid="${q.id}" data-oid="${optIndex}">
                    <input type="radio" name="q${q.id}" value="${optIndex}" class="mt-1 text-orange-500 focus:ring-orange-500 pointer-events-none">
                    <span class="text-gray-700 pointer-events-none">${opt}</span>
                </label>
            `;
        });

        questionEl.innerHTML = `
            <p class="mb-4 text-lg font-semibold text-gray-800"><span class="text-orange-500">${index + 1}.</span> ${q.question}</p>
            <div class="options-container space-y-2" data-qid="${q.id}" data-correct="${q.correct}">
                ${optionsHtml}
            </div>
            <div class="feedback hidden mt-3 p-3 rounded-lg text-sm font-medium"></div>
        `;

        container.appendChild(questionEl);
    });

    // Aggiungi event listener per le opzioni
    document.querySelectorAll('.options-container').forEach(container => {
        container.addEventListener('click', handleOptionClick);
    });
}

function handleOptionClick(e) {
    const container = e.currentTarget;
    const qid = parseInt(container.dataset.qid);
    const correctIndex = parseInt(container.dataset.correct);

    // Se già risposto, ignora
    if (answeredQuestions.has(qid)) return;

    // Trova l'opzione cliccata
    const label = e.target.closest('.option-label');
    if (!label) return;

    const selectedIndex = parseInt(label.dataset.oid);
    answeredQuestions.add(qid);

    // Disabilita tutte le opzioni di questa domanda
    const allLabels = container.querySelectorAll('.option-label');
    allLabels.forEach(lbl => {
        lbl.classList.remove('hover:bg-orange-50', 'hover:border-orange-300', 'cursor-pointer');
        lbl.classList.add('cursor-default');
        lbl.style.pointerEvents = 'none';
    });

    // Colora le risposte
    allLabels.forEach(lbl => {
        const optIndex = parseInt(lbl.dataset.oid);
        if (optIndex === correctIndex) {
            lbl.classList.add('bg-green-100', 'border-green-500');
        } else if (optIndex === selectedIndex && selectedIndex !== correctIndex) {
            lbl.classList.add('bg-red-100', 'border-red-500');
        } else {
            lbl.classList.add('opacity-50');
        }
    });

    // Mostra feedback
    const questionEl = document.getElementById(`question-${qid}`);
    const feedbackEl = questionEl.querySelector('.feedback');
    feedbackEl.classList.remove('hidden');

    if (selectedIndex === correctIndex) {
        feedbackEl.classList.add('bg-green-50', 'text-green-700', 'border', 'border-green-200');
        feedbackEl.innerHTML = '<strong>Risposta corretta!</strong> Bravo!';
    } else {
        feedbackEl.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200');
        feedbackEl.innerHTML = `<strong>Risposta sbagliata.</strong> La risposta corretta era: <em>${quizData.find(q => q.id === qid).options[correctIndex]}</em>`;
    }

    // Scrolla leggermente per mostrare il feedback
    feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Controlla se tutte le domande sono state risposte
    if (answeredQuestions.size === quizData.length) {
        showFinalResult();
    }
}

function showFinalResult() {
    let score = 0;
    quizData.forEach(q => {
        // Trova quale opzione è stata selezionata per questa domanda
        const container = document.querySelector(`.options-container[data-qid="${q.id}"]`);
        const selectedLabel = container.querySelector('.bg-green-100, .bg-red-100');
        if (selectedLabel && parseInt(selectedLabel.dataset.oid) === q.correct) {
            score++;
        }
    });

    document.getElementById('score').textContent = score;
    document.getElementById('total').textContent = quizData.length;
    document.getElementById('quiz-result').classList.remove('hidden');
    document.getElementById('quiz-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function restartQuiz() {
    renderQuiz();
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    renderQuiz();

    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartQuiz);
    }
});