<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
</head>
<body>
<article>
    <header>
        <h1>
            GloT (Global Terrorism Visualiser)
        </h1>
    </header>
    <h2>Cuprins</h2>
    <ul>
        <li>
            <a href="#authors">Autori</a>
        </li>
        <li>
            <a href="#introduction">1. Introducere</a>
            <ul>
                <li><a href="#introduction-purpose">1.1 Scop</a></li>
                <li><a href="#conventions">1.2 Convenție de scriere</a></li>
                <li><a href="#audience">1.3 Publicul țintă</a></li>
                <li><a href="#product-scope">1.4 Scopul produsului</a></li>
                <li><a href="#references">1.5 Bibliografie</a></li>
            </ul>
        </li>
        <li><a href="#overall">2. Descriere Generală</a>
            <ul>
                <li><a href="#product-perspective">2.1 Perspectiva produsului</a></li>
                <li><a href="#product-functions">2.2 Funcțiile produsului</a></li>
                <li><a href="#operating-environment">2.3 Mediul de operare</a></li>
            </ul>
        </li>
        <li><a href="#external">3. Interfețele aplicației </a>
            <ul>
                <li><a href="#user-interface">3.1 Interfața utilizatorului </a>
                    <ul>
                        <li><a href="#nav-bar">3.1.1 Bara de navigație </a></li>
                        <li><a href="#login-page">3.1.2 Pagina de autentificare </a></li>
                        <li><a href="#signup-page">3.1.3 Pagina de înregistrare </a></li>
                        <li><a href="#home-page">3.1.5 Pagina de acasă </a></li>
                        <li><a href="#statistici">3.1.6 Pagina de filtrare a statisticilor</a></li>
                    </ul>
                </li>
                <li><a href="#hardware-interface">3.2 Interfața Hardware </a></li>
                <li><a href="#software-interface">3.3 Interfața Software</a></li>
                <li><a href="#communication-interface">3.4 Interfața de comunicare</a></li>
            </ul>
        </li>
        <li><a href="#system-features">4. Caracteristici ale sistemului</a>
            <ul>
                <li><a href="#management">4.1 Gestionarea contului </a>
                    <ul>
                        <li><a href="#management-1">4.1.1 Descriere și generalități </a></li>
                        <li><a href="#management-2">4.1.2 Actualizarea informațiilor</a></li>
                        <li><a href="#management-3">4.1.3 Condiții de funcționare</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="#non-functional">5.Funcționalități pentru protecție și securitate</a>
            <ul>
                <li><a href="#safety">5.1 Protecția datelor</a></li>
                <li><a href="#security">5.2 Securizarea datelor</a></li>
                <li><a href="#software-attributes">5.3 Calitățile Software </a></li>
            </ul>
        </li>
    </ul>
    <div role="contentinfo">
        <section id="authors" typeof="sa:AuthorsList">
            <h2>Autori</h2>
            <ul>
                <li property="schema:author" typeof="sa:ContributorRole">
            <span typeof="schema:Person">
              <meta content="Cosmin" property="schema:givenName">
              <meta content="David" property="schema:additionalName">
              <span property="schema:name">Mototolea Cosmin David</span>
            </span>
                    <ul>
                        <li property="schema:roleContactPoint" typeof="schema:ContactPoint">
                            <a href="mailto:mototoleacosmindavid@gmail.com" property="schema:email">mototoleacosmindavid@gmail.com</a>
                        </li>
                    </ul>
                </li>
                <li property="schema:author" typeof="sa:ContributorRole">
            <span typeof="schema:Person">
              <meta content="Salcianu" property="schema:givenName">
              <meta content="Simona" property="schema:additionalName">
              <span property="schema:name">Sălcianu Corina Simona</span>
            </span>
                    <ul>
                         <li property="schema:roleContactPoint" typeof="schema:ContactPoint">
                            <a href="mailto:salcianusimona2000@gmail.com" property="schema:email">salcianusimona2000@gmail.com</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
    <section id="introduction">
        <h3>1. Introducere</h3>
        <section id="introduction-purpose">
            <h4>1.1 Scop</h4>
            <p>
                GloT (Global Terrorism Visualiser):</p>
                <p>În contextul creșterii preocupărilor legate de terorismul global și necesitatea de a înțelege mai bine modelele și tendințele acestuia, am dezvoltat GloT (Global Terrorism Visualiser). Acest instrument web inovator oferă o vizualizare flexibilă a datelor privind terorismul la nivel mondial, bazată pe un API REST/GraphQL propriu. GloT nu numai că compilează datele esențiale despre incidentele de terorism din întreaga lume, dar și le prezintă într-un mod accesibil și interactiv.</p>
                <p>Prin intermediul GloT, utilizatorii au acces la statistici și vizualizări avansate, oferind cel puțin trei modalități de analiză, precum și redări cartografice detaliind distribuția geografică a incidentelor în diferite regiuni. Utilizând servicii web specializate, GloT oferă o perspectivă clară și comprehensivă asupra fenomenului terorist, permițând utilizatorilor să identifice modele, hotspot-uri și tendințe.</p>

<p>Un aspect esențial al GloT este capacitatea sa de a permite exportul datelor și vizualizărilor în formatele CSV, PNG și SVG, facilitând astfel partajarea și utilizarea ulterioară a informațiilor. De asemenea, sistemul oferă suport pentru căutarea multi-criterială a incidentelor raportate, inclusiv detalii suplimentare despre armele folosite, integrând surse de date externe pentru a furniza informații precise și actualizate.</p>
                <p>GloT nu numai că îndeplinește nevoile analiștilor și cercetătorilor în domeniul terorismului, ci și adaugă o nouă dimensiune de înțelegere și conștientizare a acestui fenomen global. Prin  furnizarea de resurse suplimentare privind vizualizarea datelor și interpretarea acestora, GloT reprezintă un instrument esențial în lupta împotriva terorismului și în promovarea păcii și securității globale.
            </p>
        </section>
        <section id="conventions">
            <h4> 1.2 Convenția documentului</h4>
            <ul>
                <li>
                    Acest document urmează șablonul de documentație a cerințelor software conform IEEE Software
                    Requirements
                    Specification.
                </li>
                <li>
                    Textul <b>îngroșat</b> este folosit pentru a defini noțiuni personalizate sau pentru a accentua
                    concepte
                    importante.
                </li>
            </ul>
        </section>
        <section id="audience">
            <h4>1.3 Publicul țintă</h4>
            <p>
                Publicul țintă pentru GloT (Global Terrorism Visualiser) ar include, dar nu s-ar limita la:

<ul><li>Analizatori și Cercetători în domeniul Terorismului: Persoane și organizații care studiază fenomenul terorismului la nivel global pentru a înțelege modelele, tendințele și factorii care îl       influențează.</li>

<li>Profesioniști din domeniul Siguranței și Securității: Agenții de aplicare a legii, personal militar, analiști de securitate și alți profesioniști implicați în protejarea societății împotriva amenințărilor teroriste.</li>

<li>Decidenți Politici: Guvernele, organizațiile internaționale și alte entități care iau decizii politice și strategice în domeniul contraterorismului și securității naționale.</li>

<li>Jurnaliști și Medii de Comunicare: Profesioniști din domeniul mass-media care urmăresc și raportează evenimente legate de terorism și care ar putea utiliza GloT pentru a analiza și ilustra aspecte cheie ale acestor evenimente.</li>

<li>Organizații Non-Guvernamentale (ONG-uri): Grupuri de advocacy, organizații umanitare și alte ONG-uri interesate de impactul terorismului asupra comunităților și de dezvoltarea de strategii de prevenire și intervenție.</li>

<li>Cercetători Academici: Academicieni și studenți care efectuează cercetări și analize în domeniul terorismului și securității internaționale.
</li></ul>
            </p>
        </section>
        <section id="product-scope">
            <h4>1.4 Scopul Produsului</h4>
            <p>
                Scopului aplicației GloT (Global Terrorism Visualiser) este că aceasta își propune să ofere o platformă interactivă și eficientă pentru analizarea și vizualizarea datelor privind terorismul la    nivel global. Scopul său este de a ajuta utilizatorii să înțeleagă modelele, tendințele și riscurile asociate terorismului, să sprijine procesul decizional și elaborarea politicilor, să faciliteze partajarea și colaborarea între diferite entități implicate și să promoveze conștientizarea și educația în domeniul terorismului global.
            </p>
        </section>
        <section id="references">
            <h4>1.5 Bibliografie</h4>
            <ul>
                <li>H Rick. IEEE-Template - GitHub</li>
            </ul>
        </section>
    </section>
    <section id="overall">
        <h3>2. Descriere Generală</h3>
        <section id="product-perspective">
            <h4>2.1 Perspectiva produsului</h4>
            <p>GloT (Global Terrorism Visualiser) este o aplicație inovatoare și indispensabilă pentru analiza și vizualizarea datelor privind terorismul la nivel global.
        </section>
        <section id="product-functions">
            <h4>2.2 Funcționalitățile produsului</h4>
            Fiecare utilizator va avea acces la urmatoarele funcționălități:
            <ul>
                <li>să se înregistreze pe site.</li>
                <li>să se autentifice pe site.</li>
                <li>să consulte pagină "Acasă"</li>
                <li>să acceseze pagina "Statistici" in care poate vizualiza statisticile intr-un mod grafic, descarca si filtra datele privitoare la terorism global</li>
                <li>să acceseze sectiunea "Despre" pentru a accesa scurtă descriere a paginii web</li>
                <li>să acceseze sectiunea "Ajutor" pentru a beneficia de sfaturi în vederea utilizării aplicației</li>
            </ul>
        </section>
        <section id="operating-environment">
            <h4>2.3 Mediul de operare</h4>
            <p>
                Produsul dezvoltat poate fi utilizat pe orice dispozitiv cu un browser web care suportă HTML5, CSS și
                JavaScript.
            </p>
        </section>
    </section>
    <section id="external">
        <h3>3. Interfețele aplicației</h3>
        <section id="user-interface">
            <h4>3.1 Interfața utilizatorului</h4>
            Mai jos, puteți vedea o prezentare generală a fiecărei pagini a aplicației și funcționalităților pe care le
            oferă:
            <ul>
                <li id="nav-bar"><b>Bara de navigație</b></li>
                <li style="list-style: none">
                    <ul>
                        <li>Aceasta reprezintă meniul de navigare către fiecare pagina a aplicației, prezent pe fiecare
                            pagină totodată. Regăsim butoanele de <b>Despre</b> și <b>Ajutor</b>, care redirecționează la pagina principală ce cuprinde și o secțiune de final cu un form prin care utilizatorii pot afla solicita mai multe informații, butonul <a href="#statistici"><b>Statistici</b></a> care redirecționează la o pagină de filtrare și butonul către formul de <a href="#login-page"><b>Autentificare</b></a>.
                        </li>
                        <b>Varianta desktop</b>
                        <li class="pictures" style="list-style: none"><img alt="nav_bar" src="./GloT_Doc/nav_bar.jpg" width=800
                        ></li>
                            <b>Varianta mobila</b>
                        <li class="pictures" style="list-style: none"><img alt="nav_bar" src="./GloT_Doc/nav_bar-mobile.jpg"/></li>
                    </ul>
                </li>
                <li id="login-page"><b>Pagina de autentificare</b></li>
                <li style="list-style: none">
                    <ul>
                        <li>Pagina are rolul de a realiza autentificarea utilizatorilor.</li>
                        <li>Pentru a se autentifica, utilizatorul trebuie să completeze câmpurile de "nume de utilizator" și
                            "parolă" cu
                            credențiale <b>valide</b>, urmând să acționeze butonul <a href="#login-page"><b>Login</b></a>.
                        </li>
                        <li> În cazul în care utilizatorul nu are cont pe site, acesta își poate crea unul prin
                            accesarea pagini de
                            înregistrare, ce se face prin apăsarea link-ului <a href="#signup-page"><b>Inregistrare</b></a>.
                        </li>
                        <li class="pictures" style="list-style: none"><img alt="nav_bar" src="./GloT_Doc/log-in.png" width=800
                        ></li>
                    </ul>
                </li>
                <li id="signup-page"><b>Pagina de înregistrare</b></li>
                <li style="list-style: none">
                    <ul>
                        <li>Pagina oferă funcționalitatea de înregistrare a utilizatorilor, pentru a putea beneficia de
                            toate
                            funcționalitățile.
                        </li>
                        <li>Pentru a se înregistra, utilizatorul trebuie să completeze câmpurile
                            <b>Nume de utilizator</b>
                             și <b>Parola</b>.
                        </li>
                        <li>În cazul în care utilizatorul își amintește că are un cont existent, acesta poate apasă linkul
                            <a href="#login-page"><b>Autentificare</b></a> aflat în partea de jos a formularului.
                        <li class="pictures" style="list-style: none"><img alt="signup" height="400"
                                                                           src="./GloT_Doc/signup.png" width=800>
                    </ul>
                </li>
                <li id="home-page"><b> Pagina de acasă</b></li>
                <li style="list-style: none">
                    <ul>
                        <li>Pagina de acasă a platformei GloT furnizează o prezentare detaliată a terorismului global, evidențiind complexitatea și consecințele acestui fenomen. Prin intermediul unei introduceri elaborate, utilizatorii sunt informați despre natura amenințătoare a terorismului global și impactul său devastator asupra securității internaționale. Este subliniată importanța înțelegerii profunde a acestui fenomen și necesitatea unei abordări integrate și coordonate pentru a contracara eficient amenințarea teroristă. Astfel, pagina de pornire oferă nu doar o prezentare simplă a terorismului global, ci și o perspectivă cuprinzătoare asupra implicațiilor acestuia și a importanței abordării sale adecvate în contextul actual al securității globale.</li>
                        <b>Varianta Desktop</b>
                        <li class="pictures" style="list-style: none"><img alt="homepage" src="./GloT_Doc/homepage.png"
                                                                           width=800>
                        </li>
                        <b>Varianta Mobila</b>
                        <li class="pictures" style="list-style: none"><img alt="homepage" src="./GloT_Doc/homepage-mobile.png"/>
                        <li>Secțiunea de jos a paginii prezintă o introducere succintă în terorismul global, evidențiind amenințările și impactul acestuia, precum și necesitatea unei abordări coordonate pentru combaterea sa. Fiecare subsecțiune este formată dintr-un icon relevant, un titlu și un scurt text explicativ. Iconurile îmbunătățesc vizualizarea și recunoașterea rapidă a subiectelor abordate, iar titlurile oferă un sumar clar al conținutului. În plus, în partea de jos a paginii este inclusă o secțiune de asistență, care invită utilizatorii să contacteze echipa pentru orice nevoie de ajutor, oferind un formular de contact simplu.</li>
                    </ul>
                </li>
                    <li id="filter-page"><b> Pagina de Statistici</b></li>
                <li style="list-style: none">
                    <ul>
                        <li>Pagina de statistici a platformei GloT oferă utilizatorilor posibilitatea de a selecta criterii specifice pentru a filtra datele referitoare la incidentele teroriste. Interfața simplă și intuitivă permite filtrarea după an, tara, tipul atacului, tipul tintei, numarul de victime, numarul de raniti, daca a fost cu succes sau nu, daca a fost cu sinucidere sau nu si in ultimul rand numele gruparii. De asemenea exista si vizualizari a graficilor in 3 maniere: 1. intr-un mod grafic cu bare; 2. intr-un mod grafic linear; 3. intr-un mod grafic radar. Aceste vizualizari grafice pot fi descarcate cu ajutorul unui buton de tip dropdown <img alt="dropdwn" src="./GloT_Doc/dropdownbtn.png" /> care te lasa sa alegi formatul in care se pot descarca graficele in format PNG sau SVG pentru fiecare grafic in parte. In plus acestea se actualizeaza pe baza filtrari alese. Pe langa acestea s-a creat o redare cartografica a unei harti in care sunt puse pin-uri in regiunile in care au fost incidente.</li>
                        <b>Varianta desktop</b>
                        <li class="pictures" style="list-style: none"><img alt="filter_page" src="./GloT_Doc/filter_page.png"
                                                                           width=800>
                        </li>
                        <b>Varianta mobila</b>
                        <li class="pictures" style="list-style: none"><img alt="filter_page" src="./GloT_Doc/filter_page-mobile.png"/>
                        </li>
                        <li>Prin alegerea criteriilor de filtrare si prin apasarea butonului de "Filtreaza" se actualizeaza graficele cu datele cerute si in plus se afiseaza o sectiune cu carduri pentru informatii mai detaliate in legatura cu cautarea facuta. Aceste carduri pot fi parcurse prin butoane de paginare in josul cardurilor.</li>
                        <b>Varianta desktop</b>
                        <li class="pictures" style="list-style: none"><img alt="filter_page-cards-desktop" src="./GloT_Doc/filter_page-cards-desktop.png"
                                                                           width=800>
                        </li>
                        <b>Varianta mobil</b>
                        <li class="pictures" style="list-style: none"><img alt="filter_page-cards-desktop" src="./GloT_Doc/filter_page-cards-mobile.png"
                                                                           width=800>
                        </li> 
                    </ul>
                </li>
            <section id="hardware-interface">
                <h4>3.2 Interfața Hardware</h4>
                <p>
                    Acest produs nu necesită interfețe hardware, funcționând pe orice platformă (calculatoare,
                    laptopuri,
                    telefoane etc.), care are instalată un browser.
                </p>
            </section>
            <section id="software-interface">
                <h4>3.3 Interfața Software</h4>
                <p>
            <section id="communication-interface">
                <h4>3.4 Interfața de comunicare</h4>
                <p>
                    Aplicația necesită o conexiune la internet. Standardul de comunicare care va fi utilizat este HTTP.
                </p>
                <h4>3.4.1 Structura comunicării</h4>
                <p>Aplicația va utiliza API-uri RESTful pentru comunicarea între frontend și backend. Aceste API-uri vor fi implementate folosind Node.js</p>
                <p>HTTP Request Methods: Vom utiliza metodele standard HTTP:</p>
                <ul>
                   <li> GET: Pentru recuperarea datelor din baza de date.</li>
                   <li> POST: Pentru trimiterea și stocarea datelor în baza de date.</li>
                    <li>PUT/PATCH: Pentru actualizarea datelor existente.</li>
                    <li>DELETE: Pentru ștergerea datelor.</li></ul>
                    <p>Formate de date: Datele vor fi transferate în format JSON, asigurându-se astfel interoperabilitatea și ușurința prelucrării acestora.</p>
                    <p>Endpoint-uri API: Vor fi create mai multe endpoint-uri pentru diferite funcționalități:</p>
<ul>
                   <li> /api/attacks: Endpoint pentru gestionarea atacurile teroriste.</li>
                    <li>/api/groupName=14+K+Triad: Endpoint pentru obținerea statisticilor filtrate dupa un nume de grupare specifica.</li>
                   <li> /api/attacks?maxVictims=900000&maxWounded=900000&format=csv: Endpoint pentru exportul datelor în formatul CSV a tuturor datelor</li></ul>
            </section>
            <section id="system-features">
                <h3>4. Caracteristici ale sistemului</h3>
                <section id="management">
                    <h4>4.1 Gestionarea contului</h4>
                    <h5 id="management-1">4.1.1 Descriere și generalități</h5>
                    Un utilizator se poate înregistra alegându-și un nume de utilizator și o parola.
                    Acesta se poate autentifica având nevoie doar de numele de utilizator și de parolă.
                    <h5 id="management-2">4.1.2 Actualizarea informațiilor</h5>
                    <ul>
                        <li>
                            În momentul în care un utilizator nou este creat, credențialele acestuia sunt introduse în
                            baza de date si de asemenea salvate in localStorage acesta are de asemenea un token in care se gestioneaza autentificarea si autorizarea acestuia in website. Prin autentificare utilizatorul are dreptul de a descarca fisiere CSV. In cazul in care nu este autentificat in website acesta va fi redirectionat catre o pagina goala care afiseaza eroare de  "You are not authorized to download this file".
                        </li>
                    </ul>
                    <h5 id="management-3">4.1.3 Condiții de funcționare</h5>
                    <ul>
                        <li>
                            Pentru a se autentifica, utilizatorul are nevoie de un cont care este înregistrat în baza de
                            date.
                        </li>
                        <li>Prin autentificare acesta poate descarca fisierele CSV.</li>
                        <li>Prin autentificare acesta va fi directionat pe pagina de "Acasa" si i se va vedea in dreapta imaginii pe desktop, iar pe mobil in jos-ul imaginii "Salut, numele de utilizator"</li>
                          <b>Varianta desktop</b>
                        <li class="pictures" style="list-style: none"><img alt="filter_page-cards-desktop" src="./GloT_Doc/user-logged-desktop.png"
                                                                           width=800>
                        </li>
                        <b>Varianta mobil</b>
                        <li class="pictures" style="list-style: none"><img alt="filter_page-cards-desktop" src="./GloT_Doc/user-logged-mobile.png"
                                                                           width=800>
                        </li> 
                    </ul>
                </section>
            <section id="non-functional">
                <h3>5. Funcționalități pentru protecție și securitate</h3>
                <section id="safety">
                    <h4>5.1 Protecția datelor</h4>
                    <p>
                        Aplicația va utiliza tehnici de criptare pentru a asigura confidențialitatea datelor, inclusiv a parolelor utilizatorilor. Acest lucru implică transformarea acestor informații într-un format ilegibil pentru persoanele neautorizate, garantând astfel protecția împotriva accesului neautorizat la informații sensibile.
                    </p>
                </section>
                <section id="security">
                    <h4>5.2 Securizarea datelor</h4>
                    <p>
                        Autorizarea utilizatorilor se face pe baza standardului JWT. Utilizatorii au acces doar la
                        informații legate
                        de progresul in cadrul site-ului, celelalte informații fiind ascunse. Token-ul folosit pentru
                        autorizare este
                        stocat intr-un cookie de tip HTTP-only, lucru care previne atacurile de tip XSS. Mai mult, toate
                        datele sunt introduse
                        in baza de date prin intermediul unor <b>prepared statements</b>, care asigura prevenirea SQL
                        Injection.
                    </p>
                </section>
                <section id="software-attributes">
                    <h4>5.3 Calitățile Software</h4>
                    <ul>
        <li>
            <h3>Eficiență</h3>
            <p>Capacitatea de a realiza sarcini sau de a obține rezultate într-un mod rapid și fără pierderi inutile de resurse.</p>
        </li>
        <li>
            <h3>Fiabilitate</h3>
            <p>Capacitatea de a funcționa corect și constant în diverse condiții și situații.</p>
        </li>
        <li>
            <h3>Scalabilitate</h3>
            <p>Capacitatea de a se adapta și de a crește în dimensiune sau capacitate în funcție de nevoile și cerințele crescânde ale utilizatorilor.</p>
        </li>
        <li>
            <h3>Securitate</h3>
            <p>Asigurarea protecției datelor și a confidențialității informațiilor, precum și prevenirea accesului neautorizat.</p>
        </li>
        <li>
            <h3>Performanță</h3>
            <p>Capacitatea de a oferi rezultate de înaltă calitate sau de a atinge obiectivele stabilite într-un mod eficient și consistent.</p>
        </li>
        <li>
            <h3>Suport și asistență</h3>
            <p>Furnizarea de ajutor și resurse pentru clienți sau utilizatori pentru a rezolva probleme sau pentru a oferi îndrumare în utilizarea produsului sau serviciului.</p>
        </li>
        <li>
            <h3>Inovație</h3>
            <p>Capacitatea de a aduce îmbunătățiri continue și de a integra tehnologii noi sau abordări inovatoare pentru a satisface nevoile și așteptările în continuă schimbare ale pieței sau ale utilizatorilor.</p>
        </li>
    </ul>
                </section>
            </section>
        </section>
    </section>
</article>
</body>
</html>
