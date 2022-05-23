import styled from 'styled-components/macro';
import SimpleMasonryItem from './SimpleMasonryItem';

const componentName = 'SimpleMasonryList';

const Title = styled.div`
  font-weight: 500;
  color: #6e798d;
  font-size: 1rem;
  margin-bottom: 0.8571428571em;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-gap: 12px;
  margin-bottom: 24px;
  @media (max-width: 992px) {
    grid-template-columns: 32.3333% 32.3333% 32.3333%;
    grid-gap: 5px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 50% 50%;
    grid-gap: 5px;
  }
  @media (max-width: 490px) {
    grid-template-columns: 100%;
    grid-gap: 0;
    row-gap: 12px;
  }
`;

const SimpleMasonryList = ({title, imageId, itemList}) => {
  return (
    <>
      <Title>{title}</Title>
      <Grid>
        {itemList &&
          itemList.length > 0 &&
          itemList.map(({id, title, amount, description}) => (
            <SimpleMasonryItem
              key={id}
              title={title}
              imageId={imageId}
              amount={amount}
              description={description}
            />
          ))}
      </Grid>
    </>
  );
};

SimpleMasonryList.displayName = componentName;

export default SimpleMasonryList;
