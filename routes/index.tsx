const heartFunc = () => {
    const array = [];

    const e = Math.exp(1); //ここにネイピア数が登場！　きもちぃーーーーｗｗｗ−

    for (let x = -e; x <= e; x += 0.004) {
        const y = Math.sin(Math.PI ** 3 * x) * Math.sqrt((Math.exp(1) ** 2 - x ** 2) / 2) + Math.sqrt(Math.abs(x))

        console.log(x, y);

        array.push(
            <div class='dot' style={{
                left: `${50 + (10 * x)}dvmin`,
                top: `${40 + (-1 * (10 * y))}dvmin`,
            }}></div>
        );
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
