const heartFunc = (n: number) => { // nはハートの模様を変えるのに用いる引数
    const array = [];

    const e = Math.exp(1);

    for (let x = -e; x <= e; x += 0.0002) {

        const y = Math.sin(Math.PI ** n * x) * Math.sqrt((Math.exp(1) ** 2 - x ** 2) / 2) + Math.sqrt(Math.abs(x))

        console.log(x, y);

        array.push(
            <div class='dot' style={{
                left: `${50 + (16 * x)}dvmin`,
                top: `${64 + (-1 * (16 * y))}dvmin`,
            }}></div>
        );
    }

    return array;
}



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
                    {heartFunc(7)}
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
