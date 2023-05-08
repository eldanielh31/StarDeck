import React from 'react';
import { render } from '@testing-library/react';
import CreateDeck from './CreateDeck.jsx';


describe('Pantalla Deck', () => {

    // Prueba de renderizado
    it('Renderiza correctamente', () => {
      const { container } = render(<CreateDeck />);
      expect(container.firstChild).toMatchSnapshot();
    });
  
    // Prueba de propiedades
    it('Muestra el texto adecuado', () => {
      const { getByText, getAllByText } = render(<CreateDeck/>);
      expect(getAllByText('Crear')[0]).toBeInTheDocument();
      
    });
  
  });