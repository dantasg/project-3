import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container).toMatchSnapshot();
  });

  it('should match Inline snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div>
        <p
          class="c0"
        >
          Children
        </p>
      </div>
    `);
  });
});
