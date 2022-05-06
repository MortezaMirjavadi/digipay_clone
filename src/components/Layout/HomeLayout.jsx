import {createElement, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import routes from '@routes';

const Container = styled.div`
  display: flex;
`;
export default function HomeLayout() {
  return (
    <Container>
      <Routes>
        {routes.map(({key, path, element}) => (
          <Route
            key={key}
            path={path}
            element={
              <Suspense fallback={<>Loading...</>}>
                {createElement(element)}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Container>
  );
}
