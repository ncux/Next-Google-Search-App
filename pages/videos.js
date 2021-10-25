import Results from "../components/results/results";
import Layout from "../components/layout/layout";

export default function VideosPage() {

    return (
        <Layout title="Google | Videos" >
            <div className="dark:bg-gray-900 dark:text-gray-200">
                <Results />
            </div>
        </Layout>
    );
}
