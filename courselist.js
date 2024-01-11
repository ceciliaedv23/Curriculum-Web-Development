// Kursinformationen

const courses = [
  {
    key: "DT057G",
    name: "Webbutveckling I",
    code: "DT057G",
    description:
      "Kursen syftar till att ge grundläggande kunskaper i HTML och CSS, inklusive förståelse för och tillämpning av responsiv design, validering av kod enligt W3C, webbplatsers uppbyggnad och struktur samt användning av programmet Figma.",
    review:
      "Då jag hade tidigare erfarenhet av HTML och CSS gav denna kurs mig repetition av mina kunskaper samt en viss fördjupning. Det var värdefullt för mig att lära mig mer avancerade tekniker kring bl.a. positionering av element, allmän layout och responsiv design. Jag hade gärna sett att kursen var längre för att kunna förkovra mig ännu mer.",
    donestatus: 1,
    img: "./bilder/webbutvimg.jpg",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32498",
  },
  {
    key: "DT084G",
    name: "Introduktion till programmering i JavaScript",
    code: "DT084G",
    description:
      "Kursen introducerar syntax, struktur, beståndsdelar, programmeringsparadigmer och andra grundläggande koncept i JavaScript. De mer avancerade delarna i kursen gällde användning av objekt, JSON, AJAX och webbtjänster. Via praktiska uppgifter utförs problemlösning och felsökning.",
    donestatus: 1,
    img: "./bilder/jsimg.jpg",
    review:
      "Jag var inte nybörjare när det gäller JavaScript utan hade vid denna kurs en bra uppfattning om mycket som gicks igenom. Det var bra att repetera olika delar och få lärarnas tips om det ena och det andra. Dock var användning av AJAX och webbtjänster något nytt, det var intressant och roligt att få använda extern data till olika programmeringsuppgifter, mer verklighetstroget och användbart än mindre problemlösningar.",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=31961",
  },
  {
    key: "DT200G",
    name: "Grafisk teknik för webb",
    code: "DT200G",
    description:
      "Denna kurs behandlar skapande och bearbetning av bilder, grafik och video för användning på webbplatser. Detta inkluderar delar så som att välja rätt filformat, skapa eget material, optimera kvalitet på grafiska filer samt redigera och manipulera material på olika sätt. Bildbehandlingsprogrammet Photopea (liknande Photoshop) introduceras och används under kursen. ",
    donestatus: 1,
    img: "./bilder/grafik.jpg",
    review:
      "Det finns mycket att lära sig på detaljnivå om användning av grafiska filer, jag utökade mina kunskaper med denna kurs och har dessa i bakhuvudet när jag skapar nya webbplatser. Detta gäller t.ex. hur grafiska filer med genomskinlighet fungerar, hur grafik kan anpassas för att inte göra en webbplats långsam att ladda och hur man kan använda video på ett smidigt och attraktivt sätt.   ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32133",
  },
  {
    key: "DT068G",
    name: "Webbanvändbarhet",
    code: "DT068G",
    description:
      "Kursen syftar till att ge kunskap kring hur användbarhet och tillgänglighet enligt WCAG ska nås på en webbplats för att den ska vara lättförståelig och enkel att använda för alla i samhället. Detta inkluderar grupper av människor som t.ex. använder skärmläsare, har försvårande synproblem eller lätt blir distraherade från det väsentliga innehållet. ",
    donestatus: 1,
    img: "./bilder/glasses.jpg",
    review:
      "Denna kurs gav mig perspektiv på hur internetanvändning och webbplatser kan upplevas för olika grupper av människor i samhället samt kunskap om hur både enklare och mer komplicerade arbetssätt eller verktyg kan hjälpa till att underlätta. Digital tillgänglighet är ett område jag kan tänka mig att jobba med personligen och medverka till att detta blir praxis för material på webben. ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32586",
  },
  {
    key: "DT003G",
    name: "Databaser",
    code: "DT003G",
    description:
      "Denna kurs förmedlar grundläggande kunskaper om relationsdatabaser med fokus på MySQL, datamodellering och språket SQL. Delar som gås igenom är bl.a. uppbyggnad av och struktur för databaser, relationsmodellen, normalisering och användning av SQL i en databas för att ta fram information. Egna databaser tas fram och bearbetas enligt angivna metoder. ",
    donestatus: 1,
    img: "./bilder/mysql.jpg",
    review:
      "Området databaser var relativt okänt för mig innan denna kurs och detta gav en intressant introduktion i hur data sparas och organiseras. Jag vill gärna kunna hantera lagring, framplockning och bearbetning av data på de webbplatser jag skapar och underhåller så denna kurs var användbar för det syftet. ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32257",
  },
  {
    key: "DT093G",
    name: "Webbutveckling II",
    code: "DT093G",
    description:
      "Kursen syftar till att ge kunskaper i skapande av interaktiva webbplatser, databasanslutningar, dynamisk HTML och versionkontrollsystem som Git. Språken PHP och SQL används för att skapa webbplatser där data skapas, ändras och raderas genom formulär och dess formulärdata skickas via HTTP/GET/POST. Github introduceras och är från och med denna kurs en integrerad del i examinering av uppgifter och projekt.",
    donestatus: 1,
    img: "./bilder/php.jpg",
    review:
      "Jag uppskattade denna kurs för möjligheten att gå djupare i ämnet webbutveckling och få kunskap att kunna skapa webbplatser med mer avancerad funktionalitet. Det var nyttigt att få väva ihop front-end med back-end samtidigt som man tar hänsyn till delar som att hålla datan säker och versionshantera sina filer. Dessa kunskaper ger mig fler alternativ för vad jag skapar i mina egna kod-projekt.   ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32284",
  },
  {
    key: "DT197G",
    name: "Webbdesign för CMS",
    code: "DT197G",
    description:
      "Denna kurs behandlar kunskaper inom webbdesign för dynamiska webbplatser skapade med CMS som t.ex. WordPress. WordPress-teman baserade på befintliga designdokument skapas i syfte att anpassa webbplatser som en kund självständigt kan underhålla och lägga till material på utan att själv behöva kunna skriva kod. I detta ingår även arbete med aspekter som SEO för att optimera trafiken till webbplatsen ifråga. ",
    donestatus: 1,
    img: "./bilder/wordpress.jpg",
    review:
      "Det var intressant att lära sig WordPress med de möjligheter som plattformen har att erbjuda. Jag fick putsa på mina design-färdigheter och fundera på hur en kund på ett inituitivt och framgångsrikt sätt skulle kunna hantera sin webbplats och dra nytta av de möjligheter som jag skapar åt den. SEO är ett nytt kunskapsområde för mig, klurigt men spännande att försöka göra det bästa av.  ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=31942",
  },
  {
    key: "DT173G",
    name: "Webbutveckling III",
    code: "DT173G",
    description:
      "Kursen ger en vidare fördjupning i dynamiska webbplatser skapade med PHP och JavaScript samt med fokus på användarbaserat innehåll. Detta inbegriper användande av en automatiserad utvecklingsmiljö i form av Gulp, CSS-processorer som Sass, fördjupning i programmering med webbtjänster och användning av EcmaScript och TypeScript. ",
    donestatus: 1,
    img: "./bilder/web3.jpg",
    review:
      "I denna kurs fick jag stifta bekantskap med en rad nya tekniker och arbetssätt samt andra varianter av JavaScript, delar som jag vill inkorporera i framtida kurser och egna projekt. Det var klurigt men roligt att fördjupa användandet av webbtjänster, kombinera detta med objektorienterad programmering samt använda PHP och JavaScript tillsammans. Att använda mer EcmaScript och bli vanare vid TypeScript är något jag vill fila på för framtiden.  ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32441",
  },
  {
    key: "IK060G",
    name: "Projektledning",
    code: "IK060G",
    description:
      "Denna kurs syftade till att ge grundkunskaper i projektarbete och projektledning. Dessa tillämpades genom uppgifter som inbegrep research och egna reflektioner kring ämnet samt ett större grupparbete där ett webbutvecklingsinriktat projekt planerades, genomfördes praktiskt och redovisades. ",
    donestatus: 1,
    img: "./bilder/project.jpg",
    review:
      "Jag har viss praktisk erfarenhet av arbete i projekt sedan tidigare, och genom denna kurs fick jag mer kött på benen kring hur det bör gå till samt mer förståelse för en projektledares roll och utmaningar. I grupp-projektet fick vi omsätta teori till praktik och bl.a. träna på god kommunikation, att skriva projektplan och att själva projektleda någon del av arbetet. Kursen gjorde mig mer förberedd för framtida projektarbeten.",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=31886",
  },
  {
    key: "DT193G",
    name: "Fullstack-utveckling med ramverk",
    code: "DT193G",
    description:
      "Kursen handlar om användning av fullstack-ramverk och dess nytta vid utveckling av webbapplikationer och webbtjänster. Egna webbplatser skapas där det ingår Laravel i backend, VueJS i frontend och bl.a. Bootstrap och Bulma som CSS-ramverk. Koppling skapas för att knyta ihop dessa och webbplatserna förbereds för publicering.",
    donestatus: 1,
    img: "./bilder/fullstack.png",
    review:
      "I kursen var det intressant att lära känna nya, användbara ramverk och frångå det traditionella kodandet med endast HTML, CSS och JavaScript. Här finns många möjligheter och genvägar för att skapa fina och funktionella webbplatser. Jag vill jobba vidare med dem och fördjupa mig ytterligare, bl.a. träna mer på att använda React som ett till alternativ av frontend-ramverk.",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=33879",
  },
  {
    key: "DT071G",
    name: "Programmering i C#.NET",
    code: "DT071G",
    description:
      "Kursen går igenom språket C# och tar upp grundläggande delar som strukturer, villkor, iterationer och implementationer av algoritmer. Det ingår även objektorienterad programmering i C#, felsökning, arbete med textfiler och introduktion till Machine Learning. Med hjälp av .NET skapas flera egna program som löser uppgifter. ",
    donestatus: 0,
    img: "./bilder/csharp.jpg",
    review:
      "Det var kul att sätta sig in i ett nytt språk igen, även om C# naturligtvis har liknande struktur och användning som flera andra språk. Roliga uppgifter ingick där skapande av gästbok och att ta fram rätt veckodag för ens födelsedag krävde funderingar kring bästa sätt att hantera input och eventuella fel som kan uppstå. Jag ser fram emot att bygga något klurigt och större program i C#, antingen via konsol eller t.o.m en webbapplikation. ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32587",
  },
  {
    key: "DT162G",
    name: "Javascriptbaserad webbutveckling",
    code: "DT162G",
    description:
      "Syftet med kursen är att ge kunskaper om användning av JavaScriptbaserade ramverk och verktyg. Bland detta ingår JSON, NodeJS och Express, NoSQL-databaser där särskilt fokus läggs på MongoDB och moderna frontend-ramverk. Bland uppgifterna ingår att skapa koppling för JSON-data att hämtas från MongoDB-databas genom webbtjänst skapad med NodeJS, Express och Mongoose.",
    donestatus: 0,
    img: "./bilder/js.jpg",
    review:
      "Här kom jag i kontakt med en ny typ av databas och ytterligare ramverk som är populära inom webbutveckling, det får mig att fundera på vad jag föredrar och varför. NoSQL-databaser har sina tydliga fördelar över relationsdatabaser vilka tål en jämförelse. NodeJs upplever jag som klurigt men inte omöjligt, och med potential att vara väldigt användbart. ",
    syllable:
      "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/Sok-kursplan/kursplan/?kursplanid=32743",
  },
];

export default courses;
