import { render } from '@testing-library/react';
import App from './App';


describe('App', () => {
    
  // Prueba de renderizado
  it('Renderiza correctamente', () => {
      const { container } = render(<App />);
      expect(container.firstChild).toMatchSnapshot();
  });

});
