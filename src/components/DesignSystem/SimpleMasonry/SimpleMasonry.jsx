import styled from 'styled-components/macro';
import SimpleMasonryList from './SimpleMasonryList';

const componentName = 'SimpleMasonry';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const List = [
  {
    id: 0,
    title: 'یک روزه',
    imageId: 'MCI',
    name: 'MCI',
    items: [
      {id: 0, title: '۱ روزه', amount: '۱۰۰۰', description: 'تست توضیحات'},
      {id: 1, title: '۱ روزه', amount: '۱۰۰۰', description: 'تست توضیحات'},
      {id: 2, title: '۱ روزه', amount: '۱۰۰۰', description: 'تست توضیحات'},
    ],
  },
  {
    id: 2,
    title: 'یک روزه',
    imageId: 'MTN',
    name: 'MTN',
    items: [
      {id: 0, title: '۱ روزه', amount: '۱۰۰۰', description: 'تست توضیحات'},
      {id: 1, title: '۱ روزه', amount: '۱۰۰۰', description: 'تست توضیحات'},
      {id: 2, title: '۱ روزه', amount: '۱۰۰۰', description: 'تست توضیحات'},
    ],
  },
  {
    id: 3,
    title: 'یک روزه',
    imageId: 'RIGHTEL',
    name: 'RIGHTEL',
    items: [
      {id: 0, title: '۱ روزه', amount: '۱۰۰۰', description: 'تست توضیحات'},
      {id: 1, title: '۱ روزه', amount: '۱۰۰۰', description: 'تست توضیحات'},
      {id: 2, title: '۱ روزه', amount: '۱۰۰۰', description: 'تست توضیحات'},
    ],
  },
];

const SimpleMasonry = () => {
  return (
    <Container>
      {List.map(({id, title, imageId, items}) => (
        <SimpleMasonryList
          key={id}
          title={title}
          imageId={imageId}
          itemList={items}
        />
      ))}
    </Container>
  );
};

SimpleMasonry.displayName = componentName;

export default SimpleMasonry;
