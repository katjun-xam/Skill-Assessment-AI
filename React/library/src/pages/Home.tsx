import Layout from "../components/Layout";
import Button from "./../components/Button";

type IHomeProps = {};

const Home = (props: IHomeProps) => {
  return (
    <Layout>
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        molestias delectus facere quaerat repudiandae totam perspiciatis rem,
        nesciunt suscipit nobis provident accusantium animi officiis cum commodi
        tempore perferendis quam ut?
      </p>
      <Button
        variant="contained"
        color="primary"
        label="View selection"
        onClick={() => alert("it works!")}
      />
    </Layout>
  );
};

export default Home;
