import { NextPageContext } from 'next';
import myGet from '../../Api/myGet';

const people = ({ people }: any) => {
  return <div>Hello people {JSON.stringify(people)}</div>;
};

people.getInitialProps = async (ctx: NextPageContext) => {
  const json = await myGet(`http://localhost:3000/api/people`, ctx);
  return {people: json};
};

export default people;
