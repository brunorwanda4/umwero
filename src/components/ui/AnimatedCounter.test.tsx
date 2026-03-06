import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AnimatedCounter } from './AnimatedCounter';

describe('AnimatedCounter', () => {
  it('renders without crashing', () => {
    const { container } = render(<AnimatedCounter value={100} />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('displays suffix when provided', () => {
    const { container } = render(<AnimatedCounter value={30} suffix="%" />);
    expect(container.textContent).toContain('%');
  });

  it('applies custom className to wrapper span', () => {
    const { container } = render(
      <AnimatedCounter value={100} className="custom-class" />
    );
    
    const span = container.querySelector('span');
    expect(span).toHaveClass('custom-class');
  });

  it('accepts duration prop', () => {
    // Test that component renders with custom duration without errors
    const { container } = render(<AnimatedCounter value={100} duration={3} />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('handles large numbers', () => {
    const { container } = render(<AnimatedCounter value={1000000} />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('handles zero value', () => {
    const { container } = render(<AnimatedCounter value={0} />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('combines value with suffix correctly', () => {
    const { container } = render(<AnimatedCounter value={50} suffix="+" />);
    expect(container.textContent).toContain('+');
  });
});
