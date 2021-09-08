import { act, fireEvent, render, screen } from '@testing-library/react';
import Item from './item';
import { AppDispatch, store } from '../../../app/store';
import { Provider } from 'react-redux';

describe('the single item', () => {
  it('shows the value passed to it on the props', async () => {
    const { unmount } = render(
      <Provider store={store}>
        <Item
          item={{
            _id: 'abc',
            description: 'Gruyere cheese',
            bought: false,
            createdAt: 1000,
            updatedAt: 1000
          }}
        />
      </Provider>
    );
    expect(screen.findByText('Gruyere cheese')).toBeTruthy();
    unmount();
  });
  it('has no bought class if not bought', async () => {
    const { container, unmount } = render(
      <Provider store={store}>
        <Item
          item={{
            _id: 'abc',
            description: 'Gruyere cheese',
            bought: false,
            createdAt: 1000,
            updatedAt: 1000
          }}
        />
      </Provider>
    );
    expect(
      screen.getByText('Gruyere cheese').classList.contains('bought')
    ).toBeFalsy();
    unmount();
  });
  it('has bought class if bought', async () => {
    const { container, unmount } = render(
      <Provider store={store}>
        <Item
          item={{
            _id: 'abc',
            description: 'Gruyere cheese',
            bought: true,
            createdAt: 1000,
            updatedAt: 1000
          }}
        />
      </Provider>
    );
    expect(
      screen.getByText('Gruyere cheese').classList.contains('bought')
    ).toBeTruthy();
    unmount();
  });
  it('sets bought as false by clicking the bought toggle if it was bought', async () => {
    jest.spyOn(store, 'dispatch');
    const { unmount } = render(
      <Provider store={store}>
        <Item
          item={{
            _id: 'abc',
            description: 'Fondue set',
            bought: true,
            createdAt: 1000,
            updatedAt: 1000
          }}
        />
      </Provider>
    );
    act(() => {
      fireEvent.click(screen.getByTestId('toggle-bought-abc'));
    });
    // @ts-ignore
    expect(store.dispatch.mock.results[0].value.arg.bought).toBeFalsy();
    unmount();
  });
  it('deletes the item on clicking delete', async () => {
    jest.spyOn(store, 'dispatch');
    const { container, unmount } = render(
      <Provider store={store}>
        <Item
          item={{
            _id: 'abc',
            description: 'Fondue set',
            bought: true,
            createdAt: 1000,
            updatedAt: 1000
          }}
        />
      </Provider>
    );
    await act(async () => {
      fireEvent.click(await screen.findByTestId('delete-abc'));
    });
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
    unmount();
  });
});
