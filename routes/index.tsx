const heart = () => {
    const array_obj = [];

    for (let i = -1; i <= 1.6; i += 0.002) { //0.015
        for (let j = -1; j <= 1.6; j += 0.002) { //0.015
            const a = i ** 2 + (j - Math.cbrt(i ** 2)) ** 2;
            if (a > 0.995 && a < 1.005) {
                array_obj.push(
                    <div class='dot'
                        style={
                            {
                                left: `${50 + i * 30}dvmin`,
                                top: `${50 + (-1 * j) * 30}dvmin`,
                            }
                        }>
                    </div>
                )
            }
        }
    }

    return array_obj;
};




export default function () {
    return (
        <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Mai</title>
                <link rel="stylesheet" href="/styles.css" />
            </head>

            <body>
                <header>
                    <h1>Mai</h1>
                </header>

                <main>
                    {heart()}
                </main>

                <footer>
                    <div>
                        <a class="twitter" href="https://x.com/4831338_">X (Twitter)</a>
                    </div>

                    <div>
                        <a class='instagram'
                            href="https://www.instagram.com/42251935maimai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            Instagram <i>42251935maimai</i>
                        </a>
                    </div>

                    <div>
                        <a class='instagram'
                            href="https://www.instagram.com/boc_mai1024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            Instagram <i>boc_mai1024</i>
                        </a>
                    </div>
                </footer>

                <script>
                    console.log('ok'); {/* このようにコメントアウトする */}
                </script>
            </body>
        </html>
    );
}
