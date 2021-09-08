import { act, fireEvent, render, screen } from '@testing-library/react';
import Item from './item';
import { AppDispatch } from '../../../app/store';

xdescribe('the single item', () => {
  let mockDispatch: AppDispatch;
  beforeEach(() => {
    mockDispatch = jest.fn();
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: jest.fn().mockResolvedValue(mockDispatch)
    }));
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('shows the value passed to it on the props', async () => {
    const { container, unmount } = render(
      <Item
        item={{
          id: 'abc',
          description: 'Gruyere cheese',
          bought: false,
          createdAt: 1000,
          updatedAt: 1000
        }}
      />
    );
    // todo read the container for the value
    unmount();
  });
  it('sets bought as true by clicking the bought toggle if it was not bought', async () => {
    const { container, unmount } = render(
      <Item
        item={{
          id: 'abc',
          description: 'Gruyere cheese',
          bought: false,
          createdAt: 1000,
          updatedAt: 1000
        }}
      />
    );
    await act(async () => {
      fireEvent.click(await screen.findByTestId('toggle-bought-abc'));
    });
    // todo detect change in classes for when it's bought
    unmount();
  });
  it('sets bought as false by clicking the bought toggle if it was bought', async () => {
    const { container, unmount } = render(
      <Item
        item={{
          id: 'abc',
          description: 'Fondue set',
          bought: true,
          createdAt: 1000,
          updatedAt: 1000
        }}
      />
    );
    await act(async () => {
      fireEvent.click(await screen.findByTestId('toggle-bought-abc'));
    });
    // todo detect change in classes for when it's not bought
    unmount();
  });
  it('deletes the item on clicking delete', async () => {
    const { container, unmount } = render(
      <Item
        item={{
          id: 'abc',
          description: 'Fondue set',
          bought: true,
          createdAt: 1000,
          updatedAt: 1000
        }}
      />
    );
    await act(async () => {
      fireEvent.click(await screen.findByTestId('delete-abc'));
    });
    // todo maybe no need to mock the store
    // todo be more specific
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
    unmount();
  });
});
