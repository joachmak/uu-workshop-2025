import MarketplacePosting from "@/app/components/marketplace-posting";
import {getAll} from "@/app/db/db-crud";
import FAQ from "@/app/components/faq";
import Video from "@/app/components/video";

export default function Home() {
    const postings = getAll()
    return (
        <>
            <div className="mb-10 text-center">
                <p className="text-3xl font-bold mb-2">Welcome to A11y Marketplace!</p>
                <p className="text-gray-600 max-w-2xl mx-auto">Buy, sell, and discover unique items from the a11y
                    community. Browse the latest listings or post your own items for sale!</p>
            </div>
            <div className={"flex flex-wrap gap-4 justify-around flex-row-reverse"}>
                {postings.map(posting =>
                    <MarketplacePosting
                        key={posting.title + posting.description}
                        imageUrl={posting.imageUrl}
                        title={posting.title}
                        description={posting.description}
                        price={posting.price}
                        date={posting.date}
                    />
                )}
            </div>
            <FAQ/>
            <Video/>
        </>
    );
}
