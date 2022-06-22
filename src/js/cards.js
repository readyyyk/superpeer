let cc = [{
        img1: "c-msg-1.png",
        img2: "c-logo-1.png",
        title: "Masterclass on Fundraising Strategies",
        name: "Dawn Dickson",
        text: "Entry-level strategies from an expert in entrepreneurship, business development and fundraising. The first female founder to raise $1M> in an equity crowdfunding campaign will teach you the best in investment, crowdfunding and overall fundraising strategies to capitalize your business at every level.",
        date: "September 9, 2021"
    },
    {
        img1: "c-msg-2.png",
        img2: "c-logo-2.png",
        title: "Paid Marketing",
        name: "Thomas Hopkins",
        text: "Over the past 7 years I've unlocked company growth potential for brands like Lyft and Masterclass – after this series, you will too. Discover what makes a successful paid marketing campaign and how to scale a revenue-generating system.",
        date: "August 6, 2021"
    },
    {
        img1: "c-msg-3.png",
        img2: "c-logo-3.png",
        title: "Find Your True Love, your TwinFlame®",
        name: "Alice Johnson",
        text: "I'm an 8th-generation psychic, and together we'll discover how your aura operates and the magic you have within to facilitate self-love and romantic love. If you’re looking for your Twinflame®, your true love, or you’re ready to find yourself, this is the course for you.",
        date: "July 26, 2021"
    },
    {
        img1: "c-msg-4.png",
        img2: "c-logo-4.png",
        title: "Fiction Writing For Absolute Beginners: How To Publish Your First Story",
        name: "Mark Wahlbeck",
        text: "Writing can be hard! Publishing can be even harder! In this Series not only will you learn how to write good fiction, you’ll also learn how to publish your writing.",
        date: "August 2, 2021"
    },
    {
        img1: "c-msg-5.png",
        img2: "c-logo-5.png",
        title: "Self-Hypnosis and HypnoTherapy Adventures",
        name: "Jason Akel",
        text: "Stop being so critical of yourself and overanalyzing everything. Discover the power of hypnosis and hypnotherapy: you could be living a more confident, free-thinking life. For first-timers and experienced meditators – relax, learn and get motivated.",
        date: "July 24, 2021"
    },
    {
        img1: "c-msg-6.png",
        img2: "c-logo-6.png",
        title: "Movement Building",
        name: "Tristan Pollock",
        text: "Calling all startup founders, entrepreneurs, execs, and business leaders. Learn to build communities, make a pitch deck and create a movement around a company mission. Global impact-driven movements have all started somewhere, and today it's here",
        date: "July 28, 2021"
    },
    {
        img1: "c-msg-7.png",
        img2: "c-logo-7.png",
        title: "Pitch Deck Examples & How to Class",
        name: "Jose Caya",
        text: "We’ve looked at thousands of investor pitch decks, so we know what a good one looks like. Learn how to tell your company story in a way that excites investors. See what the pros in the game did – AirBnb and Uber – and get set up to pitch a homerun.",
        date: "August 6, 2021"
    },
    {
        img1: "c-msg-8.png",
        img2: "c-logo-8.png",
        title: "Starting your Business",
        name: "Devrim Yasar",
        text: "Got an idea for a start-up, want to raise money or start a business? These interactive lessons will let you take the stage and pitch your idea. Join me on Superpeer to learn about mentorship, investors, cofounders, fundraising and telling your story.",
        date: "August 29, 2021"
    },
    {
        img1: "c-msg-9.png",
        img2: "c-logo-9.png",
        title: "Public Speaking",
        name: "Armagan Amcalar",
        text: "You should be giving a talk this year: Discover the super-hero speaker in you from someone who has been doing it for 20 years. An interactive workshop where you'll create your own conference speech and master how to speak confidently to an audience.",
        date: "August 23, 2021"
    },
    {
        img1: "c-msg-10.png",
        img2: "c-logo-10.png",
        title: "You can’t Entrepreneur without PM",
        name: "Jasmine Lawrence",
        text: "Get insight into the life and career lessons learned from being a CEO and product manager. Learn about entrepreneurship: doing the big pitch, falling in love with the problem, and when to side hustle. Strategize and execute your big idea.",
        date: "August 25, 2021"
    }
]

function cardsF() {
    let cards = document.getElementById("cards"),
        cardsInner = ""
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            cardsInner += `
            <div class="card text-center border-0 ms-md-4 me-lg-5 bg-transparent" style="width: 24rem; ">
                <img src="src/img/${cc[i].img1}" class="card-img-top rounded ">
                <div class="card-body " style="position: relative; top: -60px; ">
                    <div class="card-text d-flex justify-content-center ">
                        <img src="src/img/${cc[i].img2}" class="rounded-circle " style="border: 10px solid #fff; ">
                    </div>
                    <h5 class="card-title ">${cc[i].title}</h5>
                    <p class="card-text ">${cc[i].name}</p>
                    <p class="card-text ">${cc[i].text}</p>
                    <div class="card-text d-flex justify-content-center align-items-center ">
                        <p class="d-inline-block m-0 " style="color: #98A3B6; ">Starts</p>
                        <p class="d-inline-block m-0 mx-3 ">${cc[i].date}</p>
                        <a href="# " class="btn btn-lo text-uppercase py-2 px-4 ">enroll</a>
                    </div>
                </div>
            </div>`
        } else {
            cardsInner += `
            <div class="card text-center border-0 ms-md-4 ms-lg-5 bg-transparent" style="width: 24rem; ">
                <img src="src/img/${cc[i].img1}" class="card-img-top rounded ">
                <div class="card-body " style="position: relative; top: -60px; ">
                    <div class="card-text d-flex justify-content-center ">
                        <img src="src/img/${cc[i].img2}" class="rounded-circle " style="border: 10px solid #fff; ">
                    </div>
                    <h5 class="card-title ">${cc[i].title}</h5>
                    <p class="card-text ">${cc[i].name}</p>
                    <p class="card-text ">${cc[i].text}</p>
                    <div class="card-text d-flex justify-content-center align-items-center ">
                        <p class="d-inline-block m-0 " style="color: #98A3B6; ">Starts</p>
                        <p class="d-inline-block m-0 mx-3 ">${cc[i].date}</p>
                        <a href="# " class="btn btn-lo text-uppercase py-2 px-4 ">enroll</a>
                    </div>
                </div>
            </div>`
        }
    }
    cards.innerHTML = cardsInner;
}
cardsF();