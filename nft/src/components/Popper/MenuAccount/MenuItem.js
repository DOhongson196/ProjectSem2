import Button from '../../Button';

function MenuItem({ data }) {
  return (
    <Button leftIcon={data.icon} to={data.to} className={'w-full bg-white px-4 py-4 hover:bg-[#f5f5f5]'}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
