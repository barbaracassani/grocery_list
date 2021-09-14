import { act, fireEvent, render, screen } from '@testing-library/react';
import Form from './form';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import * as api from '../../../app/api';

describe('the insert form', () => {
  let mockApi: jest.Mocked<typeof api>;
  beforeEach(() => {
    mockApi = api as jest.Mocked<typeof api>;
    mockApi.default.postItem = jest.fn().mockResolvedValue({
      status: 200
    });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('can be submitted by pressing add and blanks the input', async () => {
    const { unmount } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const input = screen.getByTestId('input-text-box') as HTMLInputElement;
    const priceInput = screen.getByTestId('price-box-id') as HTMLInputElement;
    act(() => {
      fireEvent.change(input, {
        target: { value: 'Roomba' }
      });
      fireEvent.change(priceInput, {
        target: { value: 45 }
      });
    });
    act(() => {
      fireEvent.click(screen.getByTestId('add-button'));
    });
    expect(input.value).toEqual('');
    expect(priceInput.value).toEqual('');
    unmount();
  });
  it('dispatches addItem on submit with the value of the field', async () => {
    jest.spyOn(store, 'dispatch');
    const { unmount } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const input = screen.getByTestId('input-text-box') as HTMLInputElement;
    const priceInput = screen.getByTestId('price-box-id') as HTMLInputElement;

    act(() => {
      fireEvent.change(input, {
        target: { value: 'Roomba' }
      });
      fireEvent.change(priceInput, {
        target: { value: 45 }
      });
    });
    act(() => {
      fireEvent.click(screen.getByTestId('add-button'));
    });
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
    // @ts-ignore
    expect(store.dispatch.mock.results[0].value.arg.description).toEqual(
      'Roomba'
    );
    // @ts-ignore
    expect(store.dispatch.mock.results[0].value.arg.price).toEqual(
      45
    );

    unmount();
  });
});
