document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.sectionFundamentals');
    const sectionTitles = document.querySelectorAll('.sectionFundamentals p:nth-child(2)');

    const testi = [
        "Parlare di accesso alla tecnologia non significa semplicemente avere una connessione internet o possedere uno smartphone. Significa garantire a ogni individuo la possibilità concreta di partecipare alla vita digitale senza ostacoli, siano essi economici, culturali o fisici. Una persona può avere internet, ma non sapere come usarlo; può avere le competenze, ma non i mezzi; può avere entrambi, ma trovarsi davanti a strumenti progettati male o non accessibili. L'accesso, quindi, è una questione di equità. È ciò che permette a uno studente di informarsi, a un cittadino di partecipare alla società, a una persona di lavorare o esprimersi. Quando manca, si crea una frattura invisibile ma profonda tra chi può sfruttare le opportunità del digitale e chi ne resta escluso. E quella distanza, nel tempo, non fa che aumentare.",
        "La comunicazione online tende a rimuovere tutto ciò che rende umana un'interazione: il tono della voce, lo sguardo, il contesto. Questo spesso porta a dimenticare che dietro uno schermo non c'è un'entità astratta, ma una persona reale, con le proprie emozioni e sensibilità. La netiquette nasce proprio per colmare questo vuoto. Non è un insieme rigido di regole, ma una forma di consapevolezza: sapere quando intervenire, come esprimersi, quando fermarsi. Significa evitare l'aggressività gratuita, non alimentare conflitti inutili e riconoscere i limiti del mezzo che si sta utilizzando. In un ambiente dove tutto è immediato e spesso impulsivo, la qualità delle interazioni dipende dalla responsabilità individuale. E senza questa responsabilità, qualsiasi spazio digitale tende rapidamente a deteriorarsi.",
        "Internet viene spesso percepito come uno spazio libero, quasi senza confini. In realtà, è uno degli ambienti più regolati che esistano, anche se queste regole non sono sempre visibili. Ogni azione online ha implicazioni: condividere un contenuto, pubblicare un'immagine, esprimere un'opinione. Esistono diritti — come quello alla privacy o alla libertà di espressione — ma esistono anche limiti precisi che servono a tutelare gli altri. La libertà, nel digitale come nella vita reale, non è assoluta. Comprendere queste dinamiche significa muoversi in modo più consapevole. Non si tratta solo di evitare errori o sanzioni, ma di sviluppare un senso di responsabilità verso ciò che si produce e si diffonde. Perché ogni contenuto online, una volta pubblicato, entra in uno spazio condiviso.",
        "Comunicare online non è la semplice trasposizione della comunicazione faccia a faccia. Cambiano i tempi, i contesti, il pubblico. Un messaggio può essere letto fuori contesto, interpretato in modi diversi o raggiungere persone che non erano previste. Essere consapevoli di questo significa scegliere con attenzione parole, tono e formato. Non tutto ciò che si pensa deve essere detto, e non tutto ciò che si dice deve essere espresso nello stesso modo in ogni contesto. Un commento informale può funzionare in una chat privata, ma risultare inappropriato in uno spazio pubblico. La comunicazione digitale efficace è quella che riesce a essere chiara senza essere aggressiva, diretta senza essere superficiale, e soprattutto adatta al contesto in cui avviene.",
        "La rete offre una quantità di informazioni senza precedenti, ma non tutte hanno lo stesso valore. Anzi, molte sono incomplete, distorte o volutamente false. In questo contesto, il problema non è più accedere alle informazioni, ma saperle valutare. Il pensiero critico è la capacità di fermarsi prima di credere, condividere o reagire. Significa chiedersi da dove arriva una notizia, chi l'ha prodotta, con quale intento. Significa confrontare fonti, riconoscere bias e accettare che non sempre esiste una risposta semplice. Senza questo approccio, si diventa facilmente parte del problema: si diffondono informazioni errate, si rafforzano narrazioni distorte e si perde la capacità di distinguere tra ciò che è affidabile e ciò che non lo è.",
        "Sempre più attività quotidiane passano attraverso servizi digitali: acquisti, pagamenti, gestione di dati personali. Questa comodità, però, porta con sé una responsabilità spesso sottovalutata. Usare questi strumenti in modo consapevole significa comprendere cosa si sta facendo e quali rischi si stanno assumendo. Non si tratta solo di evitare truffe evidenti, ma anche di riconoscere segnali più sottili: condizioni poco chiare, richieste di dati eccessive, sistemi progettati per influenzare le scelte. Un utilizzo superficiale può avere conseguenze concrete, economiche e personali. Al contrario, un utente informato è in grado di muoversi con sicurezza, sfruttando i vantaggi del digitale senza esporsi inutilmente.",
        "La sicurezza digitale non riguarda solo esperti o situazioni estreme. È una pratica quotidiana che coinvolge chiunque utilizzi un dispositivo connesso. Proteggere i propri dati e strumenti significa adottare comportamenti semplici ma fondamentali: scegliere password adeguate, riconoscere tentativi di phishing, mantenere aggiornati i sistemi. Non si tratta di paranoia, ma di prevenzione. Ogni dispositivo compromesso, ogni account violato, non è solo un problema individuale. Può diventare un punto di accesso per attacchi più ampi. Per questo la sicurezza è anche una responsabilità collettiva.",
        "Ogni azione online lascia una traccia. Spesso invisibile, ma persistente. Dati personali, abitudini, preferenze: tutto contribuisce a costruire un profilo digitale che può essere utilizzato, analizzato e, in alcuni casi, sfruttato. Gestire la propria privacy non significa nascondersi, ma scegliere consapevolmente cosa condividere e con chi. Significa comprendere il valore delle proprie informazioni e il modo in cui vengono utilizzate. Rinunciare completamente alla privacy è facile. Recuperarla, una volta persa, è molto più difficile. Per questo la consapevolezza deve venire prima della condivisione, non dopo.",
        "La tecnologia è progettata per essere coinvolgente, spesso al punto da diventare invasiva. Notifiche continue, contenuti infiniti, interazioni rapide: tutto contribuisce a mantenere alta l'attenzione, ma non sempre a favore del benessere. Usare il digitale in modo equilibrato significa riconoscere i propri limiti. Sapere quando fermarsi, quando disconnettersi, quando dare priorità a ciò che avviene fuori dallo schermo. Il problema non è la tecnologia in sé, ma il rapporto che si sviluppa con essa. Un uso consapevole permette di sfruttarne i benefici senza subirne gli effetti negativi. E questo equilibrio, oggi, è una competenza fondamentale tanto quanto qualsiasi altra abilità digitale."
    ]

    sections.forEach(s => {
        s.onclick = () => openExplanation(s);
    });

    function openExplanation(section) {
        const index = Array.from(sections).indexOf(section);

        // overlay
        const overlay = document.createElement('div');
        overlay.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'backdrop-blur-sm');

        // container
        const box = document.createElement('div');
        box.classList.add('absolute', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2', 'bg-white', 'p-8', 'rounded-lg', 'shadow-lg', 'max-w-lg', 'w-full');
        
        // numero background
        const bgNum = document.createElement('p');
        bgNum.classList.add('z-10', 'text-[50vh]', 'font-bold', 'text-gray-200/75', 'absolute', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2', 'pointer-events-none');
        bgNum.innerText = index + 1;
        box.appendChild(bgNum);


        // titolo
        const title = document.createElement('h2');
        title.classList.add('relative', 'z-[12]', 'text-2xl', 'font-bold', 'mb-4');
        title.innerText = sectionTitles[index].innerText;
        box.appendChild(title);

        // testo
        const text = document.createElement('p');
        text.classList.add('relative', 'z-[12]', 'text-gray-700', 'text-lg');
        box.appendChild(text);
        text.innerText = testi[index];


        box.onclick = (e) => e.stopPropagation();

        overlay.onclick = () => document.body.removeChild(overlay);

        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }
});