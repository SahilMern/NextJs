import React from 'react';
interface Params {
  username: string;
}

const Page = ({ params }: { params: Params }) => {
  const { username } = params;
  console.log(username, 'username');

  return (
    <div>{username} page</div>
  );
};

export default Page;
