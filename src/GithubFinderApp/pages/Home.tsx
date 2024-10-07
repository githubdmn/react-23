import { UserResults } from "../components";


function Home() {
    return (
        <div>
            <h1>Welcome to Github Finder</h1>
            <p>Search for GitHub users and view their profiles.</p>
            <UserResults />
        </div>
    );
}
export default Home;