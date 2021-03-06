import { render, screen } from '@testing-library/react';
import List from './list';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: () => {
    return {
      ids: ['1', '2'],
      entities: {
        '1': {
          description: 'Sandwich',
          price: 22
        },
        '2': {
          description: 'High heels',
          price: 10
        }
      }
    };
  }
}));

describe('the list', () => {
  it('displays a list of items', async () => {
    const { unmount } = render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    expect(screen.getByText('Sandwich')).toBeTruthy();
    expect(screen.getByText('High heels')).toBeTruthy();
    expect(screen.getByText(32)).toBeTruthy();
    unmount();
  });
});
