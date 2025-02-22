import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";


export default function Home() {
    const count = useSignal(11);
    return (
        <body>
            <header>
                <h1>Mai</h1>
            </header>

            <main>

                <Counter count={count} />
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

    );
}
