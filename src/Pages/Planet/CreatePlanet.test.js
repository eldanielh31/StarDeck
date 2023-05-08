import React from 'react';
import { render } from '@testing-library/react';
import CreatePlanet from './CreatePlanet.jsx';


describe('Pantalla Planetas', () => {

    // Prueba de renderizado
    it('Renderiza correctamente', () => {
      const { container } = render(<CreatePlanet />);
      expect(container.firstChild).toMatchSnapshot();
    });
  
    // Prueba de propiedades
    it('Muestra el texto adecuado', () => {
      const { getByText, getAllByText } = render(<CreatePlanet/>);
      expect(getAllByText('Nombre:')[0]).toBeInTheDocument();
      expect(getAllByText('Imagen:')[0]).toBeInTheDocument();
      expect(getAllByText('Descripción:')[0]).toBeInTheDocument();
      expect(getAllByText('Habilidad:')[0]).toBeInTheDocument();
      expect(getAllByText('Tipo:')[0]).toBeInTheDocument();
      
    });
  
  });