/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop

    /* ************************************************************************* */

    // Generating Seed Data

    const valuesUser = [
      [
        "lulu",
        "lapraline",
        "luluentreprise@mail.com",
        "Praluxor",
        "avatarAbstrait.jpg",
        "toto",
      ],
      [
        "gary",
        "tortue",
        "tjrplusvite@studio.com",
        "lievre",
        "avatarAbstrait.jpg",
        "tata",
      ],
      [
        "aglae",
        "martin",
        "cupcake4life@mail.com",
        "die4cakes",
        "avatarAbstrait.jpg",
        "titi",
      ],
      [
        "ulrick",
        "dupont",
        "dout@dupont.com",
        "Alexandre",
        "avatarAbstrait.jpg",
        "tutu",
      ],
    ];

    await Promise.all(
      valuesUser.map(async (rowValues) => {
        await database.query(
          "INSERT INTO user (firstname, lastname, mail, pseudo, avatar, hashed_password) VALUES (?)",
          [rowValues]
        );
      })
    );

    const valuesVideo = [
      [
        "Modèles de boîte CSS",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FMode%CC%80le%20de%20boi%CC%82te%20CSS.mp4?alt=media&token=a23d07fa-38fb-4cb7-b153-b50ddc57722b",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FMode%CC%80les%20de%20boi%CC%82te%20CSS.webp?alt=media&token=ab558bf1-a628-4849-bb85-0d46d42295f0",
        "commencer le css et devenez un expert en 2mn",
        "10mo",
        120,
        1,
      ],
      [
        "CSS Flexbox in 100 Seconds",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FCSS%20Flexbox%20in%20100%20Seconds.mp4?alt=media&token=46da49c6-d292-4ca4-8350-f4a4a0bae06f",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fflex%20box%20en%20100%20seconde.webp?alt=media&token=f98e3cad-4f9c-4018-871c-58230ade4362",
        "vous avez rien compris mais vous voulez tout comprendre ?",
        "12mo",
        122,
        1,
      ],
      [
        "appliquer un dégradé en couleur de fond",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FFormation%20CSS%20_%20Comment%20appliquer%20un%20de%CC%81grade%CC%81%20en%20couleur%20de%20fond%20-%20Vide%CC%81o%20Tuto.mp4?alt=media&token=63842db5-6142-4a68-938c-d9bd38d7e576",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fappliquer%20un%20de%CC%81grade%CC%81%20en%20couleur%20de%20fond.webp?alt=media&token=b1ac16d0-8d7d-4693-a509-e25dc96a43d1",
        "javascript c est trop long a dire, mais java, cava ?",
        "13mo",
        123,
        2,
      ],
      [
        "List Style Image Property CSS _ CSS Tutorial Part 86",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FList%20Style%20Image%20Property%20CSS%20_%20CSS%20Tutorial%20Part%2086.mp4?alt=media&token=a54403d8-7009-489d-8714-8421fa620084",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fproprie%CC%81te%CC%81s%20d'image%20de%20style%20et%20listes.webp?alt=media&token=15263712-b801-41cc-b466-381bf2689b12",
        "Ceci est une vidéo très instructive sur les quenouilles",
        "1kB",
        91,
        1,
      ],
      [
        "Menu déroulant simple - HTML & CSS",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FMenu%20de%CC%81roulant%20simple%20-%20HTML%20%26%20CSS.mp4?alt=media&token=0428be71-f7e4-4344-91fa-9282689e85a1",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fmenu%20de%CC%81roulant%20html%20et%20css.webp?alt=media&token=c49e6c96-6699-4fd7-b40a-aad54b626b76",
        "Découvrez la création d'un menu déroulant simple en HTML & CSS grâce à cette vidéo didactique. Plongez dans les bases de la conception de menus interactifs pour améliorer l'expérience utilisateur sur vos sites web. Apprenez à structurer votre code HTML pour le menu et à appliquer des styles CSS pour obtenir un design épuré et moderne. Suivez étape par étape les instructions pratiques pour implémenter un menu déroulant fonctionnel, que vous soyez débutant ou développeur expérimenté. Transformez vos pages web en ajoutant une touche d'interactivité avec ce tutoriel détaillé sur la création de menus déroulants simples en HTML & CSS.",
        "14mo",
        120,
        1,
      ],
      [
        "Mettre une image de fond en CSS",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FMettre%20une%20image%20de%20fond%20en%20CSS.mp4?alt=media&token=f923dafe-325a-4523-87de-fee024154ab4",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fmettre%20une%20image%20de%20fond%20en%20CSS.webp?alt=media&token=22c86b23-6297-4441-9a27-1c3220b85ed4",
        "Découvrez comment ajouter une touche visuelle percutante à vos pages web en apprenant à mettre une image de fond en CSS grâce à cette vidéo instructive. Explorez les différentes méthodes pour intégrer des images attrayantes à l'arrière-plan de vos éléments HTML. Que vous souhaitiez personnaliser le fond de votre site web ou d'une section spécifique, ce tutoriel vous guidera à travers les meilleures pratiques CSS. Maîtrisez l'utilisation de la propriété 'background-image' et découvrez comment ajuster les paramètres pour obtenir l'effet visuel souhaité. Transformez vos designs avec cette leçon pratique sur l'intégration d'images de fond en CSS, adaptée à tous les niveaux de compétence.",
        "14mo",
        120,
        1,
      ],
      [
        "Simple Dropdown Menu Using HTML and CSS",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FSimple%20Dropdown%20Menu%20Using%20HTML%20and%20CSS.mp4?alt=media&token=6cd184e2-e6d8-48e7-8c68-e9f417c13584",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fsimple%20dropdown%20menu%20using%20html%20ans%20css.webp?alt=media&token=43b5f0da-fddc-4e83-ab48-3f9a46b33dce",
        "Explore the world of user-friendly navigation with this tutorial on creating a simple dropdown menu using HTML and CSS. Dive into the basics of web design as you learn how to structure your HTML for the menu and apply CSS styles for a sleek and responsive dropdown design. Follow step-by-step instructions to implement a straightforward dropdown menu that enhances user experience on your website. Whether you're a beginner or an experienced developer, this video provides practical insights to master the art of building intuitive dropdown menus using HTML and CSS. Elevate your web development skills with this hands-on guide to creating a simple and effective navigation solution.",
        "14mo",
        120,
        1,
      ],
      [
        "N'utilisez plus margin pour espacer vos éléments",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FN'utilisez%20plus%20margin%20pour%20espacer%20vos%20e%CC%81le%CC%81ments%20avec%20Flexbox%20_%C2%A0Astuce%20CSS.mp4?alt=media&token=fa49e189-8cef-4ebe-86ab-a41a5f73e0df",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FFait-tu%20encore%20c%CC%A7a%20%3F.webp?alt=media&token=2822e98f-e50c-4330-b6db-9a7b88587ba0",
        "Découvrez une approche moderne pour espacer vos éléments en abandonnant l'utilisation excessive de la propriété 'margin' grâce à ce tutoriel novateur. Explorez des alternatives efficaces en CSS qui favorisent une mise en page plus flexible et cohérente. Apprenez à utiliser des méthodes telles que 'flexbox' et 'grid' pour créer des espacements plus dynamiques et responsifs entre vos éléments HTML. Ce guide pratique vous montre comment adopter une approche plus souple dans la gestion de l'espace, offrant des solutions alternatives aux marges traditionnelles. Que vous soyez un débutant ou un développeur chevronné, cette vidéo vous aide à moderniser vos pratiques de mise en page en CSS et à créer des designs plus élégants et adaptatifs.",
        "14mo",
        120,
        1,
      ],
      [
        "Appliquer un dégradé sur du texte en css",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FAppliquer%20un%20de%CC%81grade%CC%81%20sur%20du%20texte%20en%20css.mp4?alt=media&token=ab1cb012-5a0f-4a21-a982-af5f6c50077f",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fde%CC%81grade%CC%81%20sur%20text%20CSS.webp?alt=media&token=8265736c-890a-44b3-84d9-5e7ee7554855",
        "Découvrez comment ajouter une touche de sophistication à votre texte en CSS en apprenant à appliquer un dégradé grâce à ce tutoriel captivant. Explorez les différentes méthodes pour intégrer des dégradés de couleur fluides à vos éléments textuels HTML. Plongez dans l'utilisation créative de la propriété 'background-clip' pour donner un effet dégradé unique au texte. Suivez pas à pas les instructions détaillées pour maîtriser l'art de l'application de dégradés, que vous soyez novice ou développeur chevronné. Transformez l'apparence de votre texte en lui donnant une esthétique moderne et attrayante avec cette leçon pratique sur l'application de dégradés sur du texte en CSS.",
        "14mo",
        120,
        1,
      ],
      [
        "JAvaScript en 5 min",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FJAvaScript%20en%205%20min.webp?alt=media&token=7390da21-1a74-47c0-b770-9c7d4a6daa53",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FJAvaScript%20en%205%20min.webp?alt=media&token=7390da21-1a74-47c0-b770-9c7d4a6daa53",
        "Découvrez les bases de JavaScript en un temps record avec cette vidéo concise de 5 minutes. Plongez dans l'univers du langage de programmation côté client le plus populaire et apprenez les fondamentaux essentiels. Du concept de variables à la manipulation du DOM, suivez un aperçu rapide mais complet pour comprendre comment JavaScript interagit avec vos pages web. Que vous soyez débutant en programmation ou que vous souhaitiez simplement rafraîchir vos connaissances, cette vidéo vous offre une introduction rapide et accessible à JavaScript, vous permettant de commencer à créer des fonctionnalités interactives pour vos sites web.",
        "14mo",
        120,
        1,
      ],
      [
        "Linear  Gradient  Background _ Pure  Css",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FLinear%20%20Gradient%20%20Background%20_%20Pure%20%20Css%20_%20HTML%20and%20Css%20Tutorial.mp4?alt=media&token=feb24035-dcb2-41ec-a127-a57bbe2df803",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Flinear%20gradient%20background.webp?alt=media&token=9cf01089-0cdb-4e82-b197-e1f9ccd79aee",
        "Découvrez comment ajouter une touche visuelle sophistiquée à vos arrière-plans en utilisant des dégradés linéaires en CSS, tout en restant purement CSS. Plongez dans ce tutoriel court mais complet pour apprendre à créer des arrière-plans élégants et dynamiques à l'aide de dégradés linéaires. Explorez la syntaxe simple de CSS pour définir des dégradés, ajuster les couleurs, et maîtriser les différentes propriétés telles que 'background' et 'linear-gradient'. Que vous soyez novice ou développeur aguerri, cette vidéo vous guidera à travers les étapes nécessaires pour intégrer des arrière-plans attrayants et modernes à vos éléments HTML en utilisant uniquement CSS.",
        "14mo",
        120,
        1,
      ],
      [
        "Apprendre JavaScript en juste 5 MINUTES",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FApprendre%20JavaScript%20en%20juste%205%20MINUTES%20(2024).mp4?alt=media&token=b541b2cc-d5cb-4825-be6a-2cb6a245fca6",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FJAvaScript%20en%205%20min.webp?alt=media&token=7390da21-1a74-47c0-b770-9c7d4a6daa53",
        "Explorez les bases fondamentales de JavaScript en un temps record avec cette vidéo express de 5 minutes. Plongez rapidement dans le monde du langage de programmation côté client le plus puissant et apprenez l'essentiel pour commencer à créer des fonctionnalités interactives sur vos pages web. Du concept de variables à la manipulation du DOM, ce tutoriel ultra-rapide vous offre une introduction accélérée mais complète à JavaScript. Que vous soyez débutant en programmation ou que vous souhaitiez acquérir des connaissances rapides, cette vidéo vous fournit un aperçu rapide et accessible pour démarrer avec JavaScript en un temps record.",
        "14mo",
        120,
        1,
      ],
      [
        "shift Array Method _ JavaScript Tutorial",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2Fshift%20Array%20Method%20_%20JavaScript%20Tutorial.mp4?alt=media&token=df416cdd-d3cf-4990-b424-9af46325cc10",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FArray%20methode.webp?alt=media&token=a3082f8b-8c8e-4ef0-97b5-cf1d7a046626",
        "Découvrez rapidement la méthode shift() en JavaScript grâce à ce tutoriel express. Plongez dans l'utilisation de cette fonction clé pour manipuler les tableaux en JavaScript en retirant l'élément en tête du tableau. Suivez une démonstration pratique et apprenez à intégrer la méthode shift() dans vos projets JavaScript. Que vous soyez débutant ou développeur chevronné, cette vidéo de courte durée vous fournit une explication rapide et accessible sur l'utilisation de la méthode shift() pour manipuler efficacement vos tableaux en JavaScript.",
        "14mo",
        120,
        1,
      ],
      [
        "Manipuler les tableaux en javascript (push, pop, shift, unshift, splice)",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/quenouille.mp4?alt=media&token=98ef1dac-1a49-4eee-9b24-40466622f095",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fmanipuler%20les%20tableaux.webp?alt=media&token=b7853866-6d73-4d24-bb18-48a3634b0132",
        "Découvrez les techniques essentielles pour manipuler les tableaux en JavaScript grâce à ce tutoriel express. En seulement quelques minutes, apprenez à utiliser les méthodes clés telles que push, pop, shift, unshift, et splice pour ajouter, supprimer et modifier des éléments dans vos tableaux. Suivez une démonstration pratique pour comprendre comment ces méthodes peuvent être intégrées dans vos projets JavaScript. Que vous soyez débutant ou développeur chevronné, cette vidéo vous offre une introduction rapide et efficace sur la manipulation avancée des tableaux, un aspect fondamental de la programmation en JavaScript.",
        "14mo",
        120,
        1,
      ],
      [
        "récupérer la date du jour python",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2Fre%CC%81cupe%CC%81rer%20la%20date%20du%20jour%20python.mp4?alt=media&token=45e787db-96d3-4f73-89c4-9cc9f0c55193",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FRe%CC%81cupe%CC%81rer%20la%20date%20du%20jour%20python.webp?alt=media&token=214da6a6-a701-4a65-98a2-9d1d867865a5",
        "Maîtrisez la Gestion du Temps : Comment Récupérer la Date du Jour en Python",
        "14mo",
        120,
        1,
      ],
      [
        "Python Auto Clicker",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FPython%20Auto%20Clicker%20_%20pynput.mouse%20_%20Tuto%20simple%20%F0%9F%96%B1%EF%B8%8F.mp4?alt=media&token=d03bbb37-b42e-46ab-82df-523cc88abfef",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FPython%20auto%20clicker.webp?alt=media&token=57810f67-3761-40aa-9ba5-b2cac4c24611",
        "Explorez l'univers de l'automatisation avec notre tutoriel sur la création d'un Auto Clicker en Python. Apprenez à développer un script simple mais puissant pour automatiser des clics répétitifs dans vos projets. Ce guide pratique vous guidera à travers les étapes de programmation nécessaires, que vous soyez débutant ou développeur chevronné. Maximisez votre efficacité et découvrez comment simplifier les tâches répétitives grâce à cet Auto Clicker personnalisé en Python. Transformez votre workflow avec cette solution pratique et adaptative.",
        "14mo",
        120,
        1,
      ],
      [
        "apprendre le python",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2Fapprendre%20le%20python.mp4?alt=media&token=562c4ae4-2a51-4b2d-be9f-4167b0d5b76e",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FApprendre%20le%20python.webp?alt=media&token=4f5655ca-4f20-4fb8-af7c-07e7aa4a666f",
        "Découvrez le monde passionnant de la programmation en apprenant Python avec notre guide complet. Que vous soyez débutant ou cherchiez à perfectionner vos compétences, ce tutoriel vous offre une introduction accessible au langage de programmation Python. Explorez les bases fondamentales, maîtrisez les structures de contrôle, et plongez dans la création de scripts pratiques. Suivez notre parcours pédagogique pour acquérir une compréhension solide de Python et débloquer de nouvelles opportunités dans le monde de la programmation. Démarrez votre voyage d'apprentissage dès aujourd'hui et développez vos compétences en Python de manière efficace et engageante.",
        "14mo",
        120,
        1,
      ],
      [
        "lulu mange des gateaux",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/quenouille.mp4?alt=media&token=98ef1dac-1a49-4eee-9b24-40466622f095",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/CSS1.png?alt=media&token=d816d933-b251-4aaf-aad0-402e368e0510",
        "Découvrez le monde passionnant de la programmation en apprenant Python avec notre guide complet. Que vous soyez débutant ou cherchiez à perfectionner vos compétences, ce tutoriel vous offre une introduction accessible au langage de programmation Python. Explorez les bases fondamentales, maîtrisez les structures de contrôle, et plongez dans la création de scripts pratiques. Suivez notre parcours pédagogique pour acquérir une compréhension solide de Python et débloquer de nouvelles opportunités dans le monde de la programmation. Démarrez votre voyage d'apprentissage dès aujourd'hui et développez vos compétences en Python de manière efficace et engageante.",
        "14mo",
        120,
        1,
      ],
      [
        "#tuto python",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2F%23tuto%20python.mp4?alt=media&token=ad39a5f3-84bd-4930-aca7-897db7552058",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2F%23tuto%20python.webp?alt=media&token=9ad59c5f-9237-4787-b9e9-412340a16c5f",
        "#TutoPython : Plongez dans l'apprentissage du Python avec notre guide interactif ! Explorez les concepts clés, maîtrisez les astuces et développez vos compétences en programmation. Que vous soyez débutant ou cherchiez à approfondir vos connaissances, ce tutoriel vous accompagne pas à pas pour vous aider à devenir un développeur Python compétent. Suivez le hashtag #TutoPython pour rester à jour avec notre série d'apprentissage et débloquer tout le potentiel de ce langage versatile et puissant.",
        "14mo",
        120,
        1,
      ],
      [
        "Python #2 - coder premier programme",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FPython%20%232%20-%20coder%20premier%20programme.mp4?alt=media&token=fc314b31-f3fe-4758-825e-f4c1c6263514",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FPremier%20programme%20python.webp?alt=media&token=e7687511-a827-499c-b008-85f650c6a341",
        "#Python2 : Passez à l'étape suivante avec notre tutoriel dédié au codage du premier programme en Python ! Que vous découvriez la programmation ou que vous souhaitiez renforcer vos bases, ce guide interactif vous conduit à travers les étapes essentielles pour écrire et exécuter votre tout premier script Python. Suivez le hashtag #Python2 pour explorer davantage les fondamentaux de la programmation et renforcez vos compétences dès maintenant !",
        "14mo",
        120,
        1,
      ],
      [
        "cours python • print() et input() • programmation • tutoriel",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2Fcours%20python%20%E2%80%A2%20print()%20et%20input()%20%E2%80%A2%20programmation%20%E2%80%A2%20tutoriel%20%20%E2%80%A2%20lyce%CC%81e%20SNT.mp4?alt=media&token=6b56eecd-6894-4806-8900-19120b893a10",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2F%20%20%20%200-03%20%3A%209-44%20%20%20cours%20python%20%E2%80%A2%20print()%20et%20input()%20%E2%80%A2%20programmation%20%E2%80%A2%20tutoriel%20%E2%80%A2%20lyce%CC%81e%20SNT.webp?alt=media&token=d7e041af-a25f-41b1-b689-171f5d66003c",
        "Cours Python : Maîtrisez les bases de la programmation avec notre tutoriel dédié à print() et input(). Explorez les fondements essentiels du langage Python, apprenez à afficher des informations à l'écran avec print() et à interagir avec l'utilisateur grâce à input(). Que vous soyez novice ou cherchiez à consolider vos compétences, ce cours interactif vous guidera à travers des exemples pratiques pour renforcer votre compréhension de ces concepts clés. Suivez notre série de cours Python pour un apprentissage progressif et captivant ! 🐍💻 #CoursPython #Programmation",
        "14mo",
        120,
        1,
      ],
      [
        "PROGRAMMER un petit JEU pour DÉBUTANT en Python",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FPROGRAMMER%20un%20petit%20JEU%20pour%20DE%CC%81BUTANT%20en%20Python.mp4?alt=media&token=7e1634a7-f275-4b51-8d52-9f4f41a19aee",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FPROGRAMMER%20un%20petit%20JEU%20pour%20DE%CC%81BUTANT%20en%20Python.mp4?alt=media&token=7e1634a7-f275-4b51-8d52-9f4f41a19aee",
        "Explorez le monde passionnant de la programmation de jeux avec notre tutoriel dédié à la création d'un petit jeu pour débutant en Python. Plongez dans les bases de la conception de jeux, apprenez à utiliser des concepts clés et développez vos compétences en programmation de manière ludique. Que vous soyez novice ou que vous cherchiez à élargir votre expérience, ce guide interactif vous accompagne étape par étape dans la création de votre propre jeu en Python. Transformez votre apprentissage en une expérience divertissante et captivante ! 🚀🎮 #ProgrammationDeJeux #PythonPourDébutants.",
        "14mo",
        120,
        1,
      ],
      [
        "Pourqupi apprendre JavaScript",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FMieux%20Comprendre%20_%20Partie%201%20-%20Pourquoi%20apprendre%20Javascript%20_.mp4?alt=media&token=c53e35f5-f614-4255-a28a-8c8636d244b6",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FDe%CC%81couvrir%20Javascript%20.jpeg?alt=media&token=c9d042a4-c37a-47ae-8af1-ec2512d7cda4",
        "Découvrez l'importance cruciale d'apprendre JavaScript avec notre guide motivant. Explorez les raisons fondamentales qui font de JavaScript un langage incontournable pour les développeurs web. Apprenez comment JavaScript permet d'ajouter des fonctionnalités interactives, de dynamiser les pages web et d'améliorer l'expérience utilisateur. Que vous soyez débutant ou cherchiez à élargir vos compétences, ce tutoriel captivant met en lumière les nombreuses opportunités qu'offre l'apprentissage de JavaScript. Donnez vie à vos projets web et transformez votre parcours de développement avec ce langage polyvalent et incontournable. 🌐💡 #ApprendreJavaScript #DéveloppementWeb",
        "14mo",
        120,
        1,
      ],
      [
        "Les variables JavaScript",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FApprendre%20le%20JavaScript%20_%20Les%20variables.mp4?alt=media&token=b18aca79-e66c-4053-b7eb-2796590ef346",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FLes%20variables%20JavaScript.webp?alt=media&token=e0c74cd5-c933-425a-a5ee-e96588a9dd58",
        "Découvrez l'essentiel sur les variables en JavaScript avec notre tutoriel instructif. Plongez dans le monde des variables, apprenez comment les déclarer, les affecter et les utiliser pour stocker des données dans vos programmes JavaScript. Que vous soyez débutant ou développeur chevronné, ce guide interactif offre un aperçu approfondi des différentes façons de travailler avec les variables. Maîtrisez cet aspect fondamental de JavaScript pour créer des scripts plus dynamiques et adaptables.",
        "14mo",
        120,
        1,
      ],
      [
        "Maîtriser JavaScript, 8 points et concepts qu'il faut connaître",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FMai%CC%82triser%20JavaScript%2C%208%20points%20et%20concepts%20qu'il%20faut%20connai%CC%82tre.mp4?alt=media&token=91020f30-2335-4386-9634-dab538c4e6ea",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FDevenir%20maitre%20en%20JavaScript.webp?alt=media&token=ff3b467f-95b4-4395-9b7b-c263298b6f96",
        "Acquérez une maîtrise complète de JavaScript en explorant les 8 points et concepts essentiels qu'il est indispensable de connaître. De la gestion des variables à la manipulation du DOM, ce guide approfondi offre une vision complète des fondements de JavaScript. Que vous soyez débutant ou développeur expérimenté, découvrez les concepts clés qui vous permettront de créer des applications web dynamiques et interactives. Plongez dans ce tutoriel instructif pour renforcer vos compétences et élever votre expertise en JavaScript. 🌐💡 #JavaScriptMastery #DéveloppementWeb",
        "14mo",
        120,
        1,
      ],
      [
        "Les base de JavaScript",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FTUTO%20JS%20-%20%230%20BASES%20DU%20JAVASCRIPT%20ET%20PRE%CC%81-REQUIS.mp4?alt=media&token=afdd3588-b965-4b76-8d3a-6d8ac7ef09c8",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FLes%20base%20de%20JavaScript.webp?alt=media&token=1d0aa4b5-8bf2-4d62-a32e-29b6477fbee5",
        "Explorez les bases incontournables de JavaScript avec notre guide didactique. Plongez dans les concepts fondamentaux, des variables à la structure de contrôle, pour acquérir une solide compréhension du langage. Que vous débutiez votre parcours en programmation ou que vous souhaitiez consolider vos bases, ce tutoriel interactif vous offre une introduction complète aux éléments essentiels de JavaScript. Développez vos compétences pas à pas et pavez la voie vers la maîtrise du développement web. 🚀💻 #JavaScriptBasics #ProgrammationWeb",
        "14mo",
        120,
        1,
      ],
      [
        "Les base de JavaScript",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FTUTO%20JS%20-%20%230%20BASES%20DU%20JAVASCRIPT%20ET%20PRE%CC%81-REQUIS.mp4?alt=media&token=afdd3588-b965-4b76-8d3a-6d8ac7ef09c8",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FLes%20base%20de%20JavaScript.webp?alt=media&token=1d0aa4b5-8bf2-4d62-a32e-29b6477fbee5",
        "Plongez dans les bases essentielles de JavaScript avec notre guide instructif. Explorez les concepts fondamentaux tels que les variables, les boucles, les conditions et bien plus encore. Que vous soyez novice en programmation ou que vous souhaitiez renforcer vos connaissances, ce tutoriel interactif vous offre une initiation complète aux fondements de JavaScript. Apprenez à manipuler des données, à créer des fonctions et à comprendre la logique de programmation qui forme l'épine dorsale de ce langage puissant. Élevez vos compétences en développement web avec ces bases solides. 🌐💡 #JavaScriptBasics #ProgrammationWeb",
        "14mo",
        120,
        1,
      ],
      [
        "Comment créer un système de notification  en JavaScript",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FComment%20cre%CC%81er%20un%20syste%CC%80me%20de%20notification%20%20en%20JavaScript.mp4?alt=media&token=5fde0e91-e824-4d9b-addf-8a19137dcea2",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fsyste%CC%80me%20de%20notification%20JavaScript.webp?alt=media&token=8d3a3068-ae44-41ba-acae-6f90b0604ad9",
        "Découvrez comment créer un système de notification en JavaScript avec notre guide pratique. Explorez les étapes clés pour intégrer des notifications interactives dans vos applications web. Apprenez à utiliser l'API de notification, à personnaliser les messages et à gérer les autorisations utilisateur. Que vous soyez développeur débutant ou chevronné, ce tutoriel interactif vous offre une solution pratique pour améliorer l'expérience utilisateur de vos projets web. Transformez vos applications en ajoutant un système de notification efficace avec JavaScript. 🌐💬 #JavaScript #NotificationsWeb",
        "14mo",
        120,
        1,
      ],
      [
        "JS language populaire",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FJS%20language%20populaire.webp?alt=media&token=787c8ab4-1c35-424d-b913-5da1974dfdbf",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FJS%20language%20populaire.webp?alt=media&token=8924461e-4703-40fe-a411-d876625c3330",
        "Découvrez pourquoi JavaScript est un langage de programmation si populaire avec notre analyse approfondie. Explorez les raisons qui font de JavaScript le choix privilégié des développeurs pour le développement web. De sa polyvalence à sa compatibilité avec tous les navigateurs, ce tutoriel vous offre un aperçu des caractéristiques qui ont propulsé JavaScript au sommet des langages de programmation. Que vous soyez novice ou développeur chevronné, plongez dans les raisons qui font de JavaScript un incontournable dans le monde de la programmation. 🚀💻 #JavaScript #LangageDeProgrammation",
        "14mo",
        120,
        1,
      ],
      [
        "Hello World Program in Java",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FHello%20World%20Program%20in%20Java%20-%20Write%20Your%20First%20Java%20Program.mp4?alt=media&token=ea76ad93-fa4d-4ef0-a866-61eca0c2295b",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fhello%20world.webp?alt=media&token=49654070-de40-4910-b2d7-a1b8bb34c7df",
        "Explore the fundamental first steps in Java programming with our tutorial on the classic 'Hello World' program. Learn how to set up your Java development environment, write the basic code, and execute your first program. Whether you're a beginner taking your initial steps into programming or looking to refresh your skills, this step-by-step guide provides a concise introduction to Java. Dive into the world of Java development and start your coding journey with the iconic 'Hello World' program. ☕🌐 #JavaProgramming #HelloWorldJava",
        "14mo",
        120,
        1,
      ],
      [
        "Top 10 Websites to Learn Java Programming For Free",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FTop%2010%20Websites%20to%20Learn%20Java%20Programming%20For%20Free.mp4?alt=media&token=4aa131f0-abd9-4093-b0a0-0cff3d757c5f",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FTop%20web%20site%20to%20learn%20java.webp?alt=media&token=9c7699a7-649a-4d0d-b45f-d140bc5012f9",
        "Embark on your Java programming journey with our curated list of the 'Top 10 Websites to Learn Java Programming For Free.' Explore these online platforms that offer comprehensive tutorials, interactive exercises, and resources for mastering Java at no cost. Whether you're a beginner or looking to enhance your Java skills, this guide provides a valuable resource for self-paced learning. Unlock the vast potential of Java programming with these free and accessible educational websites. 🌐💻 #JavaProgramming #FreeLearningResources",
        "14mo",
        120,
        1,
      ],
      [
        "10 Best Courses to learn Java in 2022 for Beginners",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2F10%20Best%20Courses%20to%20learn%20Java%20in%202022%20for%20Beginners%20_%20Udemy%2C%20Coursera%2C%20Pluralsight%2C%20Educative.mp4?alt=media&token=83cc7c88-ec20-41f0-a6f0-8fd199d0578b",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2F10%20best%20course%20to%20learn%20java.webp?alt=media&token=42075708-33c3-414f-8903-6e8a15b8b6be",
        "Kickstart your Java learning journey in 2022 with our compilation of the '10 Best Courses to Learn Java for Beginners.' Explore these top-rated courses that cater to learners at the entry level, offering comprehensive content, hands-on projects, and expert guidance. Whether you're a novice programmer or looking to expand your skills, this guide provides a curated selection of courses to accelerate your Java proficiency. Dive into these educational resources and embark on a successful learning path in Java programming. 🌐💡 #JavaProgramming #LearnJava2022",
        "14mo",
        120,
        1,
      ],
      [
        "COMMENT INSTALLER JAVA EN 2022 !!!",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FCOMMENT%20INSTALLER%20JAVA%20EN%202022%20!!!.mp4?alt=media&token=7a7c99c5-1782-4305-a73b-7dfc0016365e",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Finstaller%20Java%2064%20bit.webp?alt=media&token=dd35450c-06d7-4c0b-b634-4592e9378c10",
        "Suivez notre guide détaillé sur 'Comment Installer Java en 2022 !!!' pour découvrir les étapes simples et essentielles de l'installation de Java sur votre système. Explorez les différentes méthodes d'installation, assurez-vous d'avoir la dernière version à jour, et comprenez les paramètres nécessaires. Que vous soyez débutant ou souhaitiez simplement mettre à jour votre installation, ce tutoriel interactif vous guidera à travers le processus pour garantir une configuration Java optimale en 2022. 🌐🔧 #JavaInstallation #Programmation2022",
        "14mo",
        120,
        1,
      ],
      [
        "RÉSOUDRE LE PROBLÈME JAVA POUR DE BON",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FRE%CC%81SOUDRE%20LE%20PROBLE%CC%80ME%20JAVA%20POUR%20DE%20BON%20-%20Tutoriel.mp4?alt=media&token=a2eb264a-9590-4057-a7d4-076646991ad5",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FRe%CC%81soudre%20le%20proble%CC%80me%20de%20Java%20pour%20de%20bon.webp?alt=media&token=4c876404-7bd3-4af2-8273-429843fe5afe",
        "Découvrez comment résoudre définitivement les problèmes liés à Java avec notre guide complet. Explorez les solutions aux erreurs courantes, apprenez à diagnostiquer les problèmes d'installation, et assurez-vous d'avoir une configuration Java stable. Que vous soyez confronté à des erreurs de compatibilité ou des problèmes d'exécution, ce tutoriel interactif vous fournit des conseils pratiques pour résoudre les problèmes liés à Java de manière efficace. Suivez ces étapes pour garantir un environnement Java sans soucis. 🌐🛠️ #RésolutionProblèmesJava #Développement",
        "14mo",
        120,
        1,
      ],
      [
        "Les tutos Java _ Les variables numériques",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FLes%20tutos%20Java%20_%20Les%20variables%20nume%CC%81riques.mp4?alt=media&token=e5250e85-b2f5-41a2-b663-12cf013e23c2",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FLes%20tutos%20Java.webp?alt=media&token=36f0483e-061f-49fb-9e53-7b9009cc60cc",
        "Découvrez les fondamentaux de la programmation Java avec notre série de tutoriels dédiée aux variables numériques. Plongez dans le monde des données numériques en Java, explorez les différents types de variables, et apprenez à les manipuler dans vos programmes. Que vous soyez débutant en programmation ou que vous souhaitiez consolider vos connaissances, cette série de tutoriels interactifs vous guide pas à pas à travers les concepts essentiels des variables numériques en Java. Élevez vos compétences de développement avec ces leçons pratiques. 🚀💻 #TutosJava #VariablesNumériques",
        "14mo",
        120,
        1,
      ],
      [
        "ChatGPT API in JAVA ",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FChatGPT%20API%20in%20JAVA%20_%20(simple%20%26%20easy).mp4?alt=media&token=2bd57696-d1b7-4f62-a99f-45e513d65bc8",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2Fchat%20gpt%20api%20Java.webp?alt=media&token=c47dcb2a-06e2-4d38-ad8f-f5b1db6e5662",
        "Integrate ChatGPT into your Java applications with our tutorial on using the ChatGPT API. Learn how to make API requests, handle responses, and leverage ChatGPT's powerful capabilities within your Java projects. Whether you're building a chatbot, automating text generation, or exploring natural language processing, this step-by-step guide provides the essentials for incorporating ChatGPT into your Java applications. Unlock the potential of conversational AI with ChatGPT API in Java. 🌐🤖 #ChatGPTAPI #JavaIntegration",
        "14mo",
        120,
        1,
      ],
      [
        "TUTO - VLC bluray menu java not installed",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FTUTO%20-%20VLC%20bluray%20menu%20java%20not%20installed.mp4?alt=media&token=bfc89d5e-c652-432d-916a-28ec19e07e85",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FTuto%20VLC%20Java.webp?alt=media&token=31e2de2d-8c7a-433f-b0d8-b8b6d4e05f2e",
        "Découvrez comment résoudre le problème du menu Blu-ray de VLC avec notre tutoriel instructif. Apprenez à installer Java pour résoudre les problèmes liés au menu Blu-ray dans VLC. Suivez étape par étape les instructions pour garantir une installation correcte et profiter pleinement de vos contenus Blu-ray. Que vous soyez novice ou expérimenté, ce tutoriel interactif vous offre une solution efficace pour surmonter les obstacles liés à Java et profiter de l'expérience Blu-ray complète dans VLC. 🌐💿 #VLCCorrection #JavaInstallation",
        "14mo",
        120,
        1,
      ],
      [
        "How To Fix Java Not Opening Jar Files - Full Guide",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FHow%20To%20Fix%20Java%20Not%20Opening%20Jar%20Files%20-%20Full%20Guide.mp4?alt=media&token=ebeb7a6c-98cb-4379-be5d-0cd2abffe6df",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FHow%20to%20fix%20Java%20not%20open%20Jar%20files.webp?alt=media&token=5564ee6d-f41b-4e8b-af0d-8b7418a09ef7",
        "Resolve the challenge of Java not opening JAR files with our comprehensive guide. Learn step-by-step solutions to fix issues preventing Java from properly handling JAR files. Whether you're encountering errors or seeking troubleshooting tips, this interactive tutorial provides a detailed walkthrough to ensure Java seamlessly opens JAR files. Follow the guide, whether you're a beginner or an experienced user, to overcome obstacles and optimize your Java experience.",
        "14mo",
        120,
        1,
      ],
      [
        "★TUTO★ Comment mettre à jour JAVA et plugin JAVA ",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2F%E2%98%85TUTO%E2%98%85%20Comment%20mettre%20a%CC%80%20jour%20JAVA%20et%20plugin%20JAVA%20(tous%20navigateurs).mp4?alt=media&token=924b99b7-3f10-4ba2-8b54-f412a6473748",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FComment%20mettre%20a%20jour%20JAva.webp?alt=media&token=6e7c4431-4c1a-42e6-a2ad-3007ebb3b310",
        "Découvrez notre tutoriel complet sur la mise à jour de Java et des plugins Java ! Suivez ces étapes simples et essentielles pour garantir que votre environnement Java est toujours à jour et sécurisé. Apprenez à mettre à jour Java et ses plugins pour bénéficier des dernières fonctionnalités et des correctifs de sécurité. Que vous soyez novice ou expérimenté, ce guide interactif vous offre une solution complète pour maintenir votre installation Java à jour en toute simplicité. ",
        "14mo",
        120,
        1,
      ],
      [
        "Coding in Python using CodeSandbox",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FCoding%20in%20Python%20using%20CodeSandbox.mp4?alt=media&token=a2eb4cd2-06e6-4dc3-b019-7a03f116eb1d",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FCoding%20in%20Python%20using%20CodeSandbox.webp?alt=media&token=2aae60ef-a15c-448d-81b2-34ecb5c7a741",
        "Explore the world of Python coding with our tutorial on using CodeSandbox. Learn how to leverage the power of this online development environment to write, edit, and run Python code effortlessly. Whether you're a beginner looking for a convenient platform to practice coding or an experienced developer exploring new tools, this step-by-step guide provides insights into coding in Python using CodeSandbox. Enhance your coding experience and productivity with this user-friendly and collaborative platform. 🐍💻 #PythonCoding #CodeSandbox",
        "14mo",
        120,
        1,
      ],
      [
        "How Python Works in 1 Minute",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FHow%20Python%20Works%20in%201%20Minute.mp4?alt=media&token=9e8682df-66ef-4cdb-80ca-accfb2e349d5",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FHow%20python%20works%20%3F.webp?alt=media&token=ab65b63b-caab-4124-830e-79c0ea8d66c8",
        "Unveil the magic of Python in just 1 minute! Dive into a quick overview of how Python works, from its simple syntax to its versatility in application. Whether you're a curious beginner or seeking a rapid refresher, this speedy guide provides a snapshot of Python's key features and capabilities. Discover why Python is a preferred language for developers worldwide in just 60 seconds. 🐍⏱️ #PythonIn60Seconds #Programming",
        "14mo",
        120,
        1,
      ],
      [
        "Python round off function",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/videos%2FPython%20round%20off%20function.mp4?alt=media&token=4193c68e-4fe2-432f-a7bf-d486b863b466",
        "https://firebasestorage.googleapis.com/v0/b/short-digital.appspot.com/o/miniatures%2FPython%20round%20off%20function.webp?alt=media&token=a375e869-d486-4085-854d-bb5845bd783a",
        "Master the Python round() function with our quick guide! Learn how to use this versatile function to round off numeric values to the desired precision. Whether you're a beginner or looking to enhance your Python skills, this concise tutorial provides clear examples and insights into leveraging the round() function for precise numeric calculations. Dive into the world of Python rounding with confidence! 🐍🔄 #PythonRoundFunction #Programming",
        "14mo",
        120,
        1,
      ],
    ];

    for (let i = 0; i < valuesVideo.length; i++) {
      await database.query(
        "INSERT INTO video (title, link, image, description, weight, duration, user_id) VALUES (?)",
        [valuesVideo[i]]
      );
    }

    const valuesCategory = [
      ["JavaScript"],
      ["css"],
      ["Java"],
      ["Autre"],
      ["php"],
      ["Python"],
    ];

    for (let i = 0; i < valuesCategory.length; i++) {
      await database.query("INSERT INTO category (name) VALUES (?)", [
        valuesCategory[i],
      ]);
    }

    const valuesVideoCategory = [
      [2, 1],
      [2, 2],
      [2, 3],
      [2, 4],
      [2, 5],
      [2, 6],
      [6, 7],
      [6, 8],
      [6, 9],
      [1, 10],
      [1, 11],
      [1, 12],
      [1, 14],
      [1, 15],
      [1, 16],
      [1, 17],
      [2, 18],
      [2, 19],
      [2, 20],
      [2, 21],
      [6, 22],
      [6, 23],
      [6, 24],
      [6, 25],
      [6, 26],
      [6, 27],
      [6, 28],
      [4, 29],
      [4, 30],
      [6, 31],
      [4, 32],
      [4, 33],
      [4, 34],
      [4, 35],
      [4, 36],
      [4, 37],
      [4, 38],
      [4, 39],
      [1, 40],
      [1, 41],
      [1, 42],
    ];

    await Promise.all(
      valuesVideoCategory.map(async (rowValues) => {
        await database.query(
          "INSERT INTO video_category (category_id, video_id) VALUES (?)",
          [rowValues]
        );
      })
    );

    const valuesLikes = [
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 2],
      [3, 1],
      [3, 2],
      [4, 2],
      [4, 1],
      [2, 4],
      [1, 5],
    ];

    await Promise.all(
      valuesLikes.map(async (rowValues) => {
        await database.query(
          "INSERT INTO likes ( user_id, video_id) VALUES(?)",
          [rowValues]
        );
      })
    );

    /* ************************************************************************* */

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
