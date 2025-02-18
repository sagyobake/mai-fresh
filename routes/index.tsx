const heart = () => {
    const array_obj = [];

    for (let i = -1; i <= 1.6; i += 0.01) { //0.015
        for (let j = -1; j <= 1.6; j += 0.01) { //0.015
            const a = i ** 2 + (j - Math.cbrt(i ** 2)) ** 2;
            if (a > 0.99 && a < 1.01) {
                array_obj.push({ i, j });
            }
        }
    }

    return array_obj;
};

const heart_array = heart();
//console.log(heart_array);

const singleHeart = (m, n) => {
    const single_array = [];
    let width = m;
    let height = n;

    heart_array.forEach(element => {
        const x = element['i'];
        const y = element['j'];
        //console.log(x, y);
        single_array.push(
            <div class='dot'
                style={
                    {
                        left: `${50 + x * width}dvmin`,
                        top: `${50 + (-1 * y) * height}dvmin`,
                    }
                }>
            </div>
        );
    });
    //console.log(single_array);

    return single_array;
}




const heartLayer = () => {

    let layerArray = [];

    for (let i = 30; i > 0.5; i -= 1) {
        layerArray.push(singleHeart(i, i));
    }
    return layerArray;
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
                    {heartLayer()}
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
