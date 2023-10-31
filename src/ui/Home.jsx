import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="px-4 my-10 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-gray-300 md:text-3xl">
        Pizza time!
        <br />
        <span className="text-gray-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button to={"/menu"} type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
