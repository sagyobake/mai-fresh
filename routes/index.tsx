const heartFunc = () => {
    const array = [];
    for (let i = 0; i < 800; i++) {
        const x = 16 * Math.sin(i) ** 3;
        const y = 13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i);

        console.log(x, y);

        let a = 0.04;
        for (let i = 2; i > 0; i -= a) {
            a = a * 1.04;
            array.push(
                <div class='dot' style={{
                    left: `${50 + (i * x)}dvmin`,
                    top: `${40 + (-1 * (i * y))}dvmin`,
                }}></div>
            );
        }

    }
    return array;
}

console.log(heartFunc());


export default function () {
    return (
        <html lang='ja'>
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
                    {heartFunc()}
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
            </body>
        </html>
    );
}
