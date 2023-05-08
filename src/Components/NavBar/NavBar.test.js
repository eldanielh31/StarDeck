import React from 'react';
import NavBar from './NavBar.jsx';
import { render } from '@testing-library/react';

describe('Barra de navegacion', () => {

  // Prueba de renderizado
  it('Renderiza correctamente', () => {
    const { container } = render(<NavBar />);
    expect(container.firstChild).toMatchSnapshot();
  });

  // Prueba de propiedades
  it('Muestra el texto adecuado', () => {
    const { getByText, getAllByText } = render(<NavBar/>);
    expect(getAllByText('Jugar')[0]).toBeInTheDocument();
    expect(getAllByText('Crear Carta')[0]).toBeInTheDocument();
    expect(getAllByText('Crear Planeta')[0]).toBeInTheDocument();
    expect(getAllByText('Crear Baraja')[0]).toBeInTheDocument();
    
  });

});
