const currencies = {
        "USD": {n: "US Dollar", c: "us"}, "EUR": {n: "Euro", c: "eu"}, "GBP": {n: "British Pound", c: "gb"},
        "JPY": {n: "Japanese Yen", c: "jp"}, "AUD": {n: "Australian Dollar", c: "au"}, "CAD": {n: "Canadian Dollar", c: "ca"},
        "CHF": {n: "Swiss Franc", c: "ch"}, "CNY": {n: "Chinese Yuan", c: "cn"}, "HKD": {n: "Hong Kong Dollar", c: "hk"},
        "NZD": {n: "NZ Dollar", c: "nz"}, "SEK": {n: "Swedish Krona", c: "se"}, "KRW": {n: "S. Korean Won", c: "kr"},
        "SGD": {n: "Singapore Dollar", c: "sg"}, "NOK": {n: "Norwegian Krone", c: "no"}, "MXN": {n: "Mexican Peso", c: "mx"},
        "INR": {n: "Indian Rupee", c: "in"}, "RUB": {n: "Russian Ruble", c: "ru"}, "ZAR": {n: "S. African Rand", c: "za"},
        "TRY": {n: "Turkish Lira", c: "tr"}, "BRL": {n: "Brazilian Real", c: "br"}, "TWD": {n: "Taiwan Dollar", c: "tw"},
        "DKK": {n: "Danish Krone", c: "dk"}, "PLN": {n: "Polish Zloty", c: "pl"}, "THB": {n: "Thai Baht", c: "th"},
        "IDR": {n: "Indonesian Rupiah", c: "id"}, "HUF": {n: "Hungarian Forint", c: "hu"}, "CZK": {n: "Czech Koruna", c: "cz"},
        "ILS": {n: "Israeli Shekel", c: "il"}, "CLP": {n: "Chilean Peso", c: "cl"}, "PHP": {n: "Philippine Peso", c: "ph"},
        "AED": {n: "UAE Dirham", c: "ae"}, "SAR": {n: "Saudi Riyal", c: "sa"}, "MYR": {n: "Malaysian Ringgit", c: "my"},
        "VND": {n: "Vietnamese Dong", c: "vn"}, "AFN": {n: "Afghan Afghani", c: "af"}, "ALL": {n: "Albanian Lek", c: "al"},
        "DZD": {n: "Algerian Dinar", c: "dz"}, "AOA": {n: "Angolan Kwanza", c: "ao"}, "ARS": {n: "Argentine Peso", c: "ar"},
        "AMD": {n: "Armenian Dram", c: "am"}, "AWG": {n: "Aruban Florin", c: "aw"}, "AZN": {n: "Azerbaijani Manat", c: "az"},
        "BSD": {n: "Bahamian Dollar", c: "bs"}, "BHD": {n: "Bahraini Dinar", c: "bh"}, "BDT": {n: "Bangladeshi Taka", c: "bd"},
        "BBD": {n: "Barbadian Dollar", c: "bb"}, "BYN": {n: "Belarusian Ruble", c: "by"}, "BZD": {n: "Belize Dollar", c: "bz"},
        "BMD": {n: "Bermudian Dollar", c: "bm"}, "BTN": {n: "Bhutanese Ngultrum", c: "bt"}, "BOB": {n: "Bolivian Boliviano", c: "bo"},
        "BAM": {n: "Bosnia-Herz. Mark", c: "ba"}, "BWP": {n: "Botswanan Pula", c: "bw"}, "BND": {n: "Brunei Dollar", c: "bn"},
        "BGN": {n: "Bulgarian Lev", c: "bg"}, "BIF": {n: "Burundian Franc", c: "bi"}, "KHR": {n: "Cambodian Riel", c: "kh"},
        "CVE": {n: "Cape Verdean Escudo", c: "cv"}, "KYD": {n: "Cayman Is. Dollar", c: "ky"}, "XAF": {n: "Central African CFA", c: "cf"},
        "XOF": {n: "West African CFA", c: "sn"}, "XPF": {n: "CFP Franc", c: "pf"}, "COP": {n: "Colombian Peso", c: "co"},
        "KMF": {n: "Comorian Franc", c: "km"}, "CRC": {n: "Costa Rican Colón", c: "cr"}, "HRK": {n: "Croatian Kuna", c: "hr"},
        "CUP": {n: "Cuban Peso", c: "cu"}, "DOP": {n: "Dominican Peso", c: "do"}, "EGP": {n: "Egyptian Pound", c: "eg"},
        "ETB": {n: "Ethiopian Birr", c: "et"}, "FJD": {n: "Fijian Dollar", c: "fj"}, "GMD": {n: "Gambian Dalasi", c: "gm"},
        "GEL": {n: "Georgian Lari", c: "ge"}, "GHS": {n: "Ghanaian Cedi", c: "gh"}, "GTQ": {n: "Guatemalan Quetzal", c: "gt"},
        "GNF": {n: "Guinean Franc", c: "gn"}, "GYD": {n: "Guyanese Dollar", c: "gy"}, "HTG": {n: "Haitian Gourde", c: "ht"},
        "HNL": {n: "Honduran Lempira", c: "hn"}, "ISK": {n: "Icelandic Króna", c: "is"}, "IQD": {n: "Iraqi Dinar", c: "iq"},
        "JMD": {n: "Jamaican Dollar", c: "jm"}, "JOD": {n: "Jordanian Dinar", c: "jo"}, "KZT": {n: "Kazakhstani Tenge", c: "kz"},
        "KES": {n: "Kenyan Shilling", c: "ke"}, "KWD": {n: "Kuwaiti Dinar", c: "kw"}, "LBP": {n: "Lebanese Pound", c: "lb"},
        "LSL": {n: "Lesotho Loti", c: "ls"}, "LRD": {n: "Liberian Dollar", c: "lr"}, "LYD": {n: "Libyan Dinar", c: "ly"},
        "MOP": {n: "Macanese Pataca", c: "mo"}, "MKD": {n: "Macedonian Denar", c: "mk"}, "MGA": {n: "Malagasy Ariary", c: "mg"},
        "MWK": {n: "Malawian Kwacha", c: "mw"}, "MVR": {n: "Maldivian Rufiyaa", c: "mv"}, "MUR": {n: "Mauritian Rupee", c: "mu"},
        "MDL": {n: "Moldovan Leu", c: "md"}, "MNT": {n: "Mongolian Tugrik", c: "mn"}, "MAD": {n: "Moroccan Dirham", c: "ma"},
        "MZN": {n: "Mozambican Metical", c: "mz"}, "MMK": {n: "Myanmar Kyat", c: "mm"}, "NAD": {n: "Namibian Dollar", c: "na"},
        "NPR": {n: "Nepalese Rupee", c: "np"}, "NIO": {n: "Nicaraguan Córdoba", c: "ni"}, "NGN": {n: "Nigerian Naira", c: "ng"},
        "OMR": {n: "Omani Rial", c: "om"}, "PKR": {n: "Pakistani Rupee", c: "pk"}, "PAB": {n: "Panamanian Balboa", c: "pa"},
        "PGK": {n: "Papua New Guinean Kina", c: "pg"}, "PYG": {n: "Paraguayan Guarani", c: "py"}, "PEN": {n: "Peruvian Sol", c: "pe"},
        "QAR": {n: "Qatari Riyal", c: "qa"}, "RON": {n: "Romanian Leu", c: "ro"}, "RWF": {n: "Rwandan Franc", c: "rw"},
        "WST": {n: "Samoan Tala", c: "ws"}, "SCR": {n: "Seychellois Rupee", c: "sc"}, "SLL": {n: "Sierra Leonean Leone", c: "sl"},
        "SOS": {n: "Somali Shilling", c: "so"}, "LKR": {n: "Sri Lankan Rupee", c: "lk"}, "SDG": {n: "Sudanese Pound", c: "sd"},
        "SRD": {n: "Surinamese Dollar", c: "sr"}, "SZL": {n: "Swazi Lilangeni", c: "sz"}, "SYP": {n: "Syrian Pound", c: "sy"},
        "TJS": {n: "Tajikistani Somoni", c: "tj"}, "TZS": {n: "Tanzanian Shilling", c: "tz"}, "TOP": {n: "Tongan Paʻanga", c: "to"},
        "TTD": {n: "Trinidad Dollar", c: "tt"}, "TND": {n: "Tunisian Dinar", c: "tn"}, "UGX": {n: "Ugandan Shilling", c: "ug"},
        "UAH": {n: "Ukrainian Hryvnia", c: "ua"}, "UYU": {n: "Uruguayan Peso", c: "uy"}, "UZS": {n: "Uzbekistani Som", c: "uz"},
        "VUV": {n: "Vanuatu Vatu", c: "vu"}, "YER": {n: "Yemeni Rial", c: "ye"}, "ZMW": {n: "Zambian Kwacha", c: "zm"}
    };

    /* -------------------------------------------------------------------------- */
    /* DOM ELEMENTS                                  */
    /* -------------------------------------------------------------------------- */
    const fromCurr = document.querySelector("#from-curr");
    const toCurr = document.querySelector("#to-curr");
    const amountInput = document.querySelector("#amount");
    const feeSlider = document.querySelector("#fee-slider");
    const feeVal = document.querySelector("#fee-val");
    const newsFeed = document.querySelector("#news-feed");
    const marketTrends = document.querySelector("#market-trends");
    
    let allNewsItems = [];
    let displayedNewsCount = 4;
    let refreshTimer;

    /* -------------------------------------------------------------------------- */
    /* INITIALIZATION LOGIC                               */
    /* -------------------------------------------------------------------------- */
    
    function populateCurrencies() {
        // SORT BY CURRENCY NAME (ALPHABETICAL)
        const sorted = Object.entries(currencies).sort(([,a], [,b]) => a.n.localeCompare(b.n));
        
        // Populate hidden selects logic
        sorted.forEach(([code, data]) => {
            const opt = `<option value="${code}">${data.n} (${code})</option>`;
            fromCurr.innerHTML += opt;
            toCurr.innerHTML += opt;
        });
        
        fromCurr.value = "USD"; 
        toCurr.value = "EUR";

        // Build Custom UI
        initCustomSelect("from-curr", "from-wrapper");
        initCustomSelect("to-curr", "to-wrapper");
    }

    function initCustomSelect(selectId, wrapperId) {
        const select = document.getElementById(selectId);
        const wrapper = document.getElementById(wrapperId);
        
        const trigger = document.createElement("div");
        trigger.className = "custom-select-trigger";
        
        const optionsDiv = document.createElement("div");
        optionsDiv.className = "custom-options";
        
        // Initial state
        updateTriggerContent(trigger, select.value);
        
        // Build list items
        Array.from(select.options).forEach(opt => {
            const code = opt.value;
            const data = currencies[code];
            
            const optionDiv = document.createElement("div");
            optionDiv.className = "custom-option";
            optionDiv.innerHTML = `
                <img src="https://flagcdn.com/w40/${data.c}.png" class="custom-flag">
                <span>${data.n} <small style="color:var(--text-muted)">(${code})</small></span>
            `;
            
            optionDiv.addEventListener("click", () => {
                select.value = code;
                updateTriggerContent(trigger, code);
                wrapper.classList.remove("open");
                select.dispatchEvent(new Event('change')); 
                updateRates();
            });
            
            optionsDiv.appendChild(optionDiv);
        });

        trigger.addEventListener("click", (e) => {
            document.querySelectorAll('.custom-select-wrapper').forEach(w => {
                if(w !== wrapper) w.classList.remove('open');
            });
            wrapper.classList.toggle("open");
            e.stopPropagation();
        });

        wrapper.appendChild(trigger);
        wrapper.appendChild(optionsDiv);
    }

    function updateTriggerContent(triggerElement, code) {
        const data = currencies[code];
        triggerElement.innerHTML = `
            <div style="display:flex; align-items:center">
                <img src="https://flagcdn.com/w40/${data.c}.png" class="custom-flag">
                <span style="font-size:0.85rem">${data.n}</span>
            </div>
            <i class="fas fa-chevron-down arrow"></i>
        `;
    }

    // Close dropdowns when clicking outside
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.custom-select-wrapper')) {
            document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('open'));
        }
    });

    /* -------------------------------------------------------------------------- */
    /* CALCULATION ENGINE                               */
    /* -------------------------------------------------------------------------- */

    async function updateRates() {
        try {
            const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurr.value}`);
            const data = await res.json();
            const rate = data.rates[toCurr.value];
            const amount = amountInput.value || 0;
            const percentage = parseFloat(feeSlider.value);
            const fee = percentage / 100;
            const final = (amount * rate) * (1 - fee);
            
            // Slider Color Logic
            let colorVar;
            if(percentage < 5) colorVar = "var(--cost-low)";
            else if(percentage < 15) colorVar = "var(--cost-med)";
            else colorVar = "var(--cost-high)";

            feeVal.style.color = colorVar;
            feeSlider.style.background = `linear-gradient(to right, ${colorVar} ${percentage * 2}%, var(--border) ${percentage * 2}%)`;

            document.querySelector("#final-res").innerText = final.toLocaleString(undefined, {minimumFractionDigits: 2});
            renderTrends(data.rates, fromCurr.value);
        } catch (e) { console.error("Terminal offline"); }
    }

    function renderTrends(rates, base) {
        const majors = ["USD", "EUR", "GBP", "JPY", "CHF", "AUD", "CAD", "CNY", "INR", "SGD"];
        marketTrends.innerHTML = "";
        majors.forEach(curr => {
            if(curr === base || !rates[curr]) return;
            const isUp = Math.random() > 0.4;
            marketTrends.innerHTML += `
                <div class="trend-card">
                    <div style="display:flex; align-items:center; margin-bottom:8px">
                        <img src="https://flagcdn.com/w40/${currencies[curr].c}.png" class="flag-icon">
                        <span style="font-size:0.7rem; font-weight:700">${base}/${curr}</span>
                    </div>
                    <strong style="color: var(${isUp ? '--accent-up' : '--accent-down'}); font-size:1rem">
                        ${rates[curr].toFixed(4)} ${isUp ? '▲' : '▼'}
                    </strong>
                </div>`;
        });
    }

    /* -------------------------------------------------------------------------- */
    /* NEWS AGGREGATOR & AUTO-REFRESH                        */
    /* -------------------------------------------------------------------------- */

    async function fetchNews() {
        const btn = document.querySelector("#news-refresh");
        btn.classList.add("spinning");
        
        try {
            // 1. Fetch MIXED sources (General Top News + Forex Specific)
            const [generalRes, forexRes] = await Promise.all([
                fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://finance.yahoo.com/news/rssindex`),
                fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://finance.yahoo.com/rss/currencies`)
            ]);

            const generalData = await generalRes.json();
            const forexData = await forexRes.json();

            // 2. Combine & Remove Duplicates (based on GUID or Title)
            const combined = [...generalData.items, ...forexData.items];
            const uniqueItems = Array.from(new Map(combined.map(item => [item.title, item])).values());

            // 3. Sort by Date (Newest First)
            uniqueItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
            
            allNewsItems = uniqueItems;
            displayNews();
            
        } catch (e) { 
            console.error("Feed error:", e);
            // Don't wipe the feed on error, just log it so old news stays visible
        }
        
        setTimeout(() => btn.classList.remove("spinning"), 600);
    }

    function displayNews() {
        const slice = allNewsItems.slice(0, displayedNewsCount);
        newsFeed.innerHTML = slice.map(item => {
            // Logic for Image
            let img = item.thumbnail || item.enclosure.link;
            if (!img) {
                const keywords = item.title.split(' ').slice(0, 4).join('%20');
                img = `https://image.pollinations.ai/prompt/photorealistic%20financial%20news%20${keywords}?width=320&height=200&nologo=true`;
            }

            // Logic for Time (IST)
            const dateObj = new Date(item.pubDate);
            const timeIST = dateObj.toLocaleTimeString('en-IN', { 
                timeZone: 'Asia/Kolkata', 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
            });

            // Logic for Source (Attempt to find Reuters/Bloomberg in title or author)
            // Yahoo RSS often puts the source in the 'author' field or 'description'. 
            // We default to "Yahoo Finance" if clean data isn't found.
            let source = "Yahoo Finance";
            if (item.author) source = item.author;
            // Sometimes title has it like "Stock jumps (Reuters)"
            if (item.title.includes("Reuters")) source = "Reuters";
            if (item.title.includes("Bloomberg")) source = "Bloomberg";

            return `
            <a href="${item.link}" target="_blank" class="news-article">
                <img src="${img}" alt="News" onerror="this.src='https://placehold.co/160x100/1e293b/FFF?text=News'">
                <div class="news-content">
                    <h4 style="font-size:0.95rem; line-height:1.4; margin-bottom:8px">${item.title}</h4>
                    <div style="font-size:0.7rem; color:var(--text-muted)">
                        <i class="far fa-clock"></i> ${timeIST} IST | <span style="color:var(--primary); font-weight:600">${source}</span>
                    </div>
                </div>
            </a>`;
        }).join("");
        document.querySelector("#load-more-news").style.display = displayedNewsCount >= allNewsItems.length ? "none" : "block";
    }

    /* -------------------------------------------------------------------------- */
    /* WATCHLIST LOGIC                                  */
    /* -------------------------------------------------------------------------- */

    function renderFavs() {
        const list = document.querySelector("#fav-list");
        let favs = JSON.parse(localStorage.getItem("pro_watchlist_v2") || "[]");
        list.innerHTML = favs.length ? "" : "<p style='font-size:0.75rem; color:var(--text-muted); text-align:center; padding:20px'>No assets pinned</p>";
        favs.forEach((pair, i) => {
            const [f, t] = pair.split("/");
            list.innerHTML += `
                <div class="watchlist-item">
                    <div style="display:flex; align-items:center; gap:10px">
                        <img src="https://flagcdn.com/w40/${currencies[f].c}.png" class="watchlist-flag">
                        <span style="font-weight:700; color:var(--primary); font-size:0.9rem; cursor:pointer" onclick="loadPair('${pair}')">
                            ${pair}
                        </span>
                        <img src="https://flagcdn.com/w40/${currencies[t].c}.png" class="watchlist-flag">
                    </div>
                    <i class="fas fa-trash-can" style="color:var(--accent-down); cursor:pointer; font-size: 0.85rem" onclick="removeFav(${i})"></i>
                </div>`;
        });
    }

    window.removeFav = (i) => {
        let favs = JSON.parse(localStorage.getItem("pro_watchlist_v2") || "[]");
        favs.splice(i, 1);
        localStorage.setItem("pro_watchlist_v2", JSON.stringify(favs));
        renderFavs();
    };

    window.loadPair = (pair) => {
        const [f, t] = pair.split("/");
        fromCurr.value = f; toCurr.value = t;
        
        // Update Custom Selects Visuals
        const fromWrapper = document.getElementById("from-wrapper");
        const toWrapper = document.getElementById("to-wrapper");
        
        updateTriggerContent(fromWrapper.querySelector(".custom-select-trigger"), f);
        updateTriggerContent(toWrapper.querySelector(".custom-select-trigger"), t);

        updateRates();
    };

    /* -------------------------------------------------------------------------- */
    /* EVENT LISTENERS                                    */
    /* -------------------------------------------------------------------------- */

    document.querySelector("#save-fav").onclick = () => {
        let favs = JSON.parse(localStorage.getItem("pro_watchlist_v2") || "[]");
        let pair = `${fromCurr.value}/${toCurr.value}`;
        if(!favs.includes(pair)) {
            favs.push(pair);
            localStorage.setItem("pro_watchlist_v2", JSON.stringify(favs));
            renderFavs();
        }
    };

    document.querySelector("#calc-btn").onclick = updateRates;
    feeSlider.oninput = (e) => { 
        feeVal.innerText = e.target.value + "%"; 
        updateRates(); 
    };
    document.querySelector("#theme-toggle").onclick = (e) => {
        document.body.classList.toggle("dark-mode");
        e.target.classList.toggle("fa-sun"); e.target.classList.toggle("fa-moon");
    };
    document.querySelector("#swap-btn").onclick = () => {
        const t = fromCurr.value; fromCurr.value = toCurr.value; toCurr.value = t;
        
        // Update Custom Selects Visuals
        const fromWrapper = document.getElementById("from-wrapper");
        const toWrapper = document.getElementById("to-wrapper");
        
        updateTriggerContent(fromWrapper.querySelector(".custom-select-trigger"), fromCurr.value);
        updateTriggerContent(toWrapper.querySelector(".custom-select-trigger"), toCurr.value);

        updateRates();
    };
    document.querySelector("#load-more-news").onclick = () => { displayedNewsCount += 4; displayNews(); };
    document.querySelector("#news-refresh").onclick = fetchNews;

    /* -------------------------------------------------------------------------- */
    /* APP LAUNCHER                                      */
    /* -------------------------------------------------------------------------- */
    window.onload = () => { 
        populateCurrencies(); 
        updateRates(); 
        fetchNews(); // Initial fetch
        renderFavs(); 
        
        // Start Auto-Refresh Interval
        refreshTimer = setInterval(fetchNews, CONFIG.refreshInterval);
    };