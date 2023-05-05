import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';

import CalcPage from '../CalcPage';
import HomePage from '../HomePage';
import Buttons from '../Buttons';
import Calculator from '../Calculator';
import Navbar from '../Navbar';
import Output from '../Output';
import Pages from '../Pages';
import Api from '../Api';
import App from '../../App';

describe('Output', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><Output /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render something', () => {
    const obj = {
      total: 30,
      next: 2,
      operation: '-',
    };
    render(<Output total={obj.total} next={obj.next} />);
    screen.debug();
    const totalValue = screen.getByTestId('total');
    const nextValue = screen.getByTestId('next');
    expect(totalValue.textContent).toBe('30');
    expect(nextValue.textContent).toBe('2');
  });
});

describe('Button', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><Buttons /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render button', () => {
    const addTotext = jest.fn();
    render(<Buttons type="button" symbol="+/-" handleClick={addTotext} />);
    screen.debug();
    const buttons = screen.getByTestId('calc-buttons');

    // interact with element
    fireEvent.click(buttons);

    expect(addTotext).toHaveBeenCalledTimes(1);
  });
});

describe('Calculator', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><Calculator /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render calculator', () => {
    render(<Calculator />);
    screen.debug();
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(19);
    // interact with element
    expect(screen.getByText('5')).toBeInTheDocument();
    for (let i = 0; i < 10; i += 1) {
      expect(screen.getByText(`${i}`)).toBeInTheDocument();
    }

    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('x')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('÷')).toBeInTheDocument();
    expect(screen.getByText('%')).toBeInTheDocument();
    expect(screen.getByText('+/-')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
    expect(screen.getByText('AC')).toBeInTheDocument();
  });

  it('perform Multiplication', () => {
    render(<Calculator />);
    const output = screen.getByTestId('total');
    const next = screen.getByTestId('next');
    const numButton1 = screen.getByText('2');
    const numButton2 = screen.getByText('8');
    const multiplyOperation = screen.getByText('x');
    const equalOperation = screen.getByText('=');

    fireEvent.click(numButton1);
    expect(next.textContent).toBe('2');
    fireEvent.click(multiplyOperation);
    expect(next.textContent).toBe('');
    expect(output.textContent).toBe('2');
    fireEvent.click(numButton2);
    expect(next.textContent).toBe('8');
    fireEvent.click(equalOperation);
    expect(output.textContent).toBe('16');
  });

  it('perform Division', () => {
    render(<Calculator />);
    const output = screen.getByTestId('total');
    const next = screen.getByTestId('next');
    const numButton1 = screen.getByText('8');
    const numButton2 = screen.getByText('2');
    const divisionOperation = screen.getByText('÷');
    const equalOperation = screen.getByText('=');

    fireEvent.click(numButton1);
    expect(next.textContent).toBe('8');
    fireEvent.click(divisionOperation);
    expect(next.textContent).toBe('');
    expect(output.textContent).toBe('8');
    fireEvent.click(numButton2);
    expect(next.textContent).toBe('2');
    fireEvent.click(equalOperation);
    expect(output.textContent).toBe('4');
  });

  it('perform Addition', () => {
    render(<Calculator />);
    const output = screen.getByTestId('total');
    const next = screen.getByTestId('next');
    const numButton1 = screen.getByText('8');
    const numButton2 = screen.getByText('2');
    const additionOperation = screen.getByText('+');
    const equalOperation = screen.getByText('=');

    fireEvent.click(numButton1);
    expect(next.textContent).toBe('8');
    fireEvent.click(additionOperation);
    expect(next.textContent).toBe('');
    expect(output.textContent).toBe('8');
    fireEvent.click(numButton2);
    expect(next.textContent).toBe('2');
    fireEvent.click(equalOperation);
    expect(output.textContent).toBe('10');
  });
  it('perform Subtruction', () => {
    render(<Calculator />);
    const output = screen.getByTestId('total');
    const next = screen.getByTestId('next');
    const numButton1 = screen.getByText('8');
    const numButton2 = screen.getByText('2');
    const subtructOperation = screen.getByText('-');
    const equalOperation = screen.getByText('=');

    fireEvent.click(numButton1);
    expect(next.textContent).toBe('8');
    fireEvent.click(subtructOperation);
    expect(next.textContent).toBe('');
    expect(output.textContent).toBe('8');
    fireEvent.click(numButton2);
    expect(next.textContent).toBe('2');
    fireEvent.click(equalOperation);
    expect(output.textContent).toBe('6');
  });
});

describe('Navbar', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><Navbar /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render all the navbar features', () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
    screen.debug();
    const mainHeader = screen.getByText('Math Magicians');
    const homeLink = screen.getByText('Home');
    const calculatorLink = screen.getByText('Calculator');
    const quoteLink = screen.getByText('Quote');

    expect(mainHeader).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quoteLink).toBeInTheDocument();
  });

  it('All the links are working', async () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );
    const linkElement1 = screen.getByRole('link', { name: /Home/i });
    const linkElement2 = screen.getByRole('link', { name: /Calculator/i });
    const linkElement3 = screen.getByRole('link', { name: /Quote/i });

    userEvent.click(linkElement1);
    expect(history.location.pathname).toBe('/');
    screen.debug();
    userEvent.click(linkElement2);
    expect(history.location.pathname).toBe('/calculator');
    userEvent.click(linkElement3);
    expect(history.location.pathname).toBe('/quote');
    screen.debug();
  });
});

describe('Pages', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><Pages /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Api', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><Api /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a list of quotes', async () => {
    const data = [
      {
        quote: 'The will of man is his happiness.',
        author: 'Friedrich Schiller',
        category: 'happiness',
      },
      {
        quote: 'You shold find what you sout for.',
        author: 'Jhon',
        category: 'selfhelp',
      },
      {
        quote: 'The will of man is his happiness.',
        author: 'Schiller',
        category: 'fitness',
      },
    ];
    render(
      <div className="my-quotes">
        {data.map((item) => (
          <h3 title="qq" key={item.author}>
            -
            {' '}
            {item.quote}
          </h3>
        ))}
      </div>,
    );
    await screen.debug();
    const quotes = await screen.findAllByTitle('qq');

    expect(quotes).toHaveLength(3);
  });
});

describe('CalcPage', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><CalcPage /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('HomePage', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><HomePage /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('QuotePage', () => {
  it('should matche DOM Snapshot', async () => {
    const tree = renderer.create(<MemoryRouter><HomePage /></MemoryRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
