import { UserResults, UsersSearch } from "../components";


function Home() {
    return (
        <div>
            <h1>Welcome to Github Finder</h1>
            <p>Search for GitHub users and view their profiles.</p>
            <UsersSearch />
            <UserResults />
        </div>
    );
}
export default Home;