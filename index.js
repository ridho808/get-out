const keywords = ["https://share.myfreecams.com/?cam=30603", "porn", "pornhub", "www.pornhub.com", "xnxx", "www.xnxx.com", "xhamster", "www.xhamster.com", "xvideo", "www.xvideo.com", "porn", "jav", "pornography", "adult content", "xxx", "sex", "hardcore", "explicit", "nudity", "naked", "erotic",
    "hentai", "fetish", "BDSM", "camgirl", "webcam", "adult movies", "sex videos", "amateur porn", "porn stars",
    "sex tapes", "xxx videos", "erotic videos", "porn tube", "live sex", "sex chat", "adult chat", "sex stories",
    "erotic stories", "sex forum", "adult forum", "sex blogs", "adult blog", "adult site", "sex site",
    "sex games", "porn games", "adult games", "hentai games", "hentai videos", "hentai manga", "adult manga",
    "sex comics", "adult comics", "erotic comics", "porn comics", "sex pics", "nude pics", "naked pics", "erotic pics",
    "porn pics", "xxx pics", "sex photos", "nude photos", "naked photos", "erotic photos", "porn photos", "xxx photos",
    "sex gifs", "porn gifs", "erotic gifs", "xxx gifs", "sex animations", "porn animations", "erotic animations",
    "xxx animations", "sex toys", "adult toys", "sex shop", "adult shop", "sex products", "adult products", "sex dolls",
    "sex aids", "masturbation", "jerk off", "wank", "blowjob", "handjob", "titjob", "footjob", "rimjob", "sex positions",
    "sex tips", "sex guides", "adult entertainment", "adult industry", "sex industry", "porn industry", "sex services",
    "sex work", "escort services", "escort ads", "escort sites", "prostitution", "brothel", "sex tourism", "sex parties",
    "swinger parties", "swinging", "threesome", "foursome", "orgy", "gangbang", "cuckold", "voyeur", "exhibitionism",
    "swinging lifestyle", "BDSM community", "kink community", "fetish community", "sex clubs", "adult clubs", "sex theaters",
    "adult theaters", "sex conventions", "porn conventions", "adult conventions", "erotic conventions", "sex shops online",
    "adult shops online", "sex toy reviews", "adult toy reviews", "porn reviews", "sex movie reviews", "adult movie reviews",
    "erotic movie reviews", "porn star bios", "sex worker bios", "adult performer bios", "sex chat rooms", "adult chat rooms",
    "sex video chat", "adult video chat", "live cam shows", "live sex shows", "adult webcam", "sex webcam", "cam shows",
    "cam sites", "cam girls", "cam boys", "sex cam shows", "adult cam shows", "porn live", "adult live", "sex streaming",
    "porn streaming", "adult streaming", "sex livestream", "porn livestream", "adult livestream", "erotic livestream",
    "sex hotline", "adult hotline", "sex hotline chat", "sex hotline services", "adult hotline chat", "sex hotline talk",
    "sex advice", "sex therapy", "adult advice", "sex coaching", "adult coaching", "sex health", "adult health",
    "sex guides online", "adult guides online", "sex forums online", "adult forums online", "sex blogs online",
    "adult blogs online", "sex sites online", "adult sites online", "sex games online", "adult games online",
    "hentai games online", "erotic games online", "sex comics online", "porn comics online", "erotic comics online",
    "adult comics online", "sex pics online", "porn pics online", "erotic pics online", "adult pics online", "sex photos online",
    "porn photos online", "erotic photos online", "adult photos online", "sex gifs online", "porn gifs online", "erotic gifs online",
    "adult gifs online", "sex animations online", "porn animations online", "erotic animations online", "adult animations online",
    "sex toys online", "adult toys online", "sex products online", "adult products online", "sex dolls online", "adult dolls online",
    "sex aids online", "adult aids online", "masturbation videos", "jerk off videos", "wank videos", "blowjob videos", "handjob videos",
    "titjob videos", "footjob videos", "rimjob videos", "sex positions online", "sex tips online", "sex guides online",
    "adult entertainment online", "adult industry online", "sex industry online", "porn industry online", "sex services online",
    "sex work online", "escort services online", "escort ads online", "escort sites online", "prostitution online", "brothel online",
    "sex tourism online", "sex parties online", "swinger parties online", "swinging online", "threesome online", "foursome online",
    "orgy online", "gangbang online", "cuckold online", "voyeur online", "exhibitionism online", "swinging lifestyle online",
    "BDSM community online", "kink community online", "fetish community online", "sex clubs online", "adult clubs online",
    "sex theaters online", "adult theaters online", "sex conventions online", "porn conventions online", "adult conventions online",
    "erotic conventions online", "sexy", "hot", "nude", "hentai", "pedo", "lolly", "loli", "ladyboy", "shemale", "gang bang", "gangbang", "judol", "gacor", "max win", "judi", "gambling"
];

chrome.webNavigation.onCommitted.addListener((details) => {
    if (details.frameId === 0) {
        chrome.tabs.get(details.tabId, (tab) => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
            } else {
                chrome.storage.local.set({ currentUrl: tab.url });

                let url = new URL(tab.url)
                let hostname = url.hostname;
                let searchQuery = url.searchParams.get("q")

                if (keywords.includes(hostname)) {

                    chrome.tabs.remove(details.tabId, () => {
                        if (chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError);
                        } else {
                            console.log(`Why are you looking for this site ${hostname} ? do you want to peek at couples having sex? leave here and practice mewing to become a SIGMA SKIBIDI 5 STAR`, "Tab closed successfully");
                        }
                    })
                    return;
                } else if (keywords.includes(searchQuery?.toLowerCase())) {
                    chrome.tabs.remove(details.tabId, () => {
                        if (chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError);
                        } else {
                            console.log(`Why are you looking for this site ${searchQuery}? do you want to peek at couples having sex? leave here and practice mewing to become a SIGMA SKIBIDI 5 STAR`, "Tab closed successfully");
                        }
                    })
                } else {
                    return;
                }
            }
        });
    }
});
